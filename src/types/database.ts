export type UserRole = 'member' | 'staff' | 'branch_manager' | 'admin' | 'super_admin';

export type MemberProfile = {
  id: string;
  auth_user_id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  avatar_url?: string | null;
  status: 'active' | 'pending' | 'inactive';
};

export type Member = {
  id: string;
  profile_id: string;
  member_number: string;
  membership_status: 'active' | 'pending' | 'inactive';
  member_since: string;
  branch_id?: string | null;
};

export type Account = {
  id: string;
  member_id: string;
  account_number: string;
  account_type: 'savings' | 'checking' | 'loan';
  currency: 'LSL';
  status: 'active' | 'frozen' | 'closed';
  available_balance: number;
  ledger_balance: number;
};

export type NotificationItem = {
  id: string;
  member_id: string;
  type: 'transaction' | 'loan' | 'savings' | 'security' | 'system';
  title: string;
  message: string;
  read: boolean;
  created_at: string;
  metadata?: Record<string, unknown>;
};
