CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.branches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  location TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_user_id UUID NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  email TEXT,
  avatar_url TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','pending','inactive')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  member_number TEXT NOT NULL UNIQUE,
  membership_status TEXT NOT NULL DEFAULT 'pending' CHECK (membership_status IN ('pending','active','inactive','suspended')),
  member_since TIMESTAMPTZ,
  branch_id UUID REFERENCES public.branches(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.membership_contributions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  contribution_type TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
  currency TEXT NOT NULL DEFAULT 'LSL',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  account_number TEXT NOT NULL UNIQUE,
  account_type TEXT NOT NULL DEFAULT 'savings' CHECK (account_type IN ('savings','checking','loan')),
  currency TEXT NOT NULL DEFAULT 'LSL',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','frozen','closed')),
  available_balance NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK (available_balance >= 0),
  ledger_balance NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK (ledger_balance >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.savings_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.member_savings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  account_id UUID NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.savings_products(id),
  balance NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK (balance >= 0),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','dormant','closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.loan_products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.loan_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.loan_products(id),
  requested_amount NUMERIC(14,2) NOT NULL CHECK (requested_amount > 0),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','submitted','under_review','additional_information_required','approved','rejected','cancelled','disbursed')),
  purpose TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.loans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  application_id UUID REFERENCES public.loan_applications(id),
  account_id UUID REFERENCES public.accounts(id),
  product_id UUID REFERENCES public.loan_products(id),
  principal_amount NUMERIC(14,2) NOT NULL CHECK (principal_amount > 0),
  outstanding_balance NUMERIC(14,2) NOT NULL DEFAULT 0 CHECK (outstanding_balance >= 0),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active','closed','defaulted')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.loan_repayments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_id UUID NOT NULL REFERENCES public.loans(id) ON DELETE CASCADE,
  amount NUMERIC(14,2) NOT NULL CHECK (amount > 0),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','completed','failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID REFERENCES public.accounts(id),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('deposit','withdrawal','internal_transfer','ecocash_transfer','loan_disbursement','loan_repayment','fee','adjustment')),
  amount NUMERIC(14,2) NOT NULL CHECK (amount > 0),
  currency TEXT NOT NULL DEFAULT 'LSL',
  direction TEXT NOT NULL CHECK (direction IN ('in','out')),
  reference TEXT,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','completed','failed','reversed','cancelled')),
  external_reference TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.transfers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  from_account_id UUID NOT NULL REFERENCES public.accounts(id),
  to_account_id UUID REFERENCES public.accounts(id),
  amount NUMERIC(14,2) NOT NULL CHECK (amount > 0),
  reference TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','completed','failed','reversed','cancelled')),
  idempotency_key TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('transaction','loan','savings','security','system')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  metadata JSONB DEFAULT '{}'::jsonb
);

CREATE TABLE IF NOT EXISTS public.statements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
  account_id UUID NOT NULL REFERENCES public.accounts(id),
  statement_period TEXT NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  file_url TEXT,
  status TEXT NOT NULL DEFAULT 'generated' CHECK (status IN ('generated','processing','failed'))
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES public.members(id),
  actor_user_id UUID,
  action TEXT NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_profiles_auth_user_id ON public.profiles(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_members_profile_id ON public.members(profile_id);
CREATE INDEX IF NOT EXISTS idx_members_branch_id ON public.members(branch_id);
CREATE INDEX IF NOT EXISTS idx_accounts_member_id ON public.accounts(member_id);
CREATE INDEX IF NOT EXISTS idx_member_savings_member_id ON public.member_savings(member_id);
CREATE INDEX IF NOT EXISTS idx_loan_applications_member_id ON public.loan_applications(member_id);
CREATE INDEX IF NOT EXISTS idx_loans_member_id ON public.loans(member_id);
CREATE INDEX IF NOT EXISTS idx_transactions_member_id ON public.transactions(member_id);
CREATE INDEX IF NOT EXISTS idx_transfers_member_id ON public.transfers(member_id);
CREATE INDEX IF NOT EXISTS idx_notifications_member_id ON public.notifications(member_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_member_id ON public.audit_logs(member_id);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membership_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.savings_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_savings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.loan_repayments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transfers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.statements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.branches ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by owner" ON public.profiles
FOR SELECT USING (auth.uid() = auth_user_id);

CREATE POLICY "Profiles are editable by owner" ON public.profiles
FOR UPDATE USING (auth.uid() = auth_user_id);

CREATE POLICY "Members are viewable by owner" ON public.members
FOR SELECT USING (
  profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid())
);

CREATE POLICY "Accounts are viewable by owner" ON public.accounts
FOR SELECT USING (
  member_id IN (SELECT id FROM public.members WHERE profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid()))
);

CREATE POLICY "Transactions are viewable by owner" ON public.transactions
FOR SELECT USING (
  member_id IN (SELECT id FROM public.members WHERE profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid()))
);

CREATE POLICY "Notifications are viewable by owner" ON public.notifications
FOR SELECT USING (
  member_id IN (SELECT id FROM public.members WHERE profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid()))
);

CREATE POLICY "Loan applications are viewable by owner" ON public.loan_applications
FOR SELECT USING (
  member_id IN (SELECT id FROM public.members WHERE profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid()))
);

CREATE POLICY "Loans are viewable by owner" ON public.loans
FOR SELECT USING (
  member_id IN (SELECT id FROM public.members WHERE profile_id IN (SELECT id FROM public.profiles WHERE auth_user_id = auth.uid()))
);

CREATE POLICY "Branches are readable by authenticated staff/admin" ON public.branches
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Audit logs are restricted" ON public.audit_logs
FOR SELECT USING (false);
