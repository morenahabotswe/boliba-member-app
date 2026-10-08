import { createClient } from '@supabase/supabase-js';

export type CoreBankingAdapter = {
  getMember: (memberId: string) => Promise<Record<string, unknown> | null>;
  getAccounts: (memberId: string) => Promise<Record<string, unknown>[]>;
  getBalance: (accountId: string) => Promise<number>;
  getTransactions: (accountId: string) => Promise<Record<string, unknown>[]>;
  getLoans: (memberId: string) => Promise<Record<string, unknown>[]>;
  getSavings: (memberId: string) => Promise<Record<string, unknown>[]>;
  createTransfer: (payload: Record<string, unknown>) => Promise<Record<string, unknown>>;
  getTransferStatus: (reference: string) => Promise<string>;
  submitLoanApplication: (payload: Record<string, unknown>) => Promise<Record<string, unknown>>;
};

export const createCoreBankingAdapter = (): CoreBankingAdapter => ({
  async getMember() { return { id: 'member-demo' }; },
  async getAccounts() { return []; },
  async getBalance() { return 0; },
  async getTransactions() { return []; },
  async getLoans() { return []; },
  async getSavings() { return []; },
  async createTransfer(payload) { return { ok: true, payload }; },
  async getTransferStatus() { return 'pending'; },
  async submitLoanApplication(payload) { return { ok: true, payload }; }
});

export const supabaseServerClient = () => {
  const url = process.env.VITE_SUPABASE_URL ?? '';
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY ?? '';
  return url && anonKey ? createClient(url, anonKey) : null;
};
