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
  async getMember() { return { id: 'member-demo', status: 'demo' }; },
  async getAccounts() { return [{ id: 'acct-demo', account_number: 'BLB-00012345', balance: 24580.42, currency: 'LSL' }]; },
  async getBalance() { return 24580.42; },
  async getTransactions() { return [{ id: 'txn-demo-1', description: 'Demo balance', amount: 24580.42, direction: 'in', status: 'completed' }]; },
  async getLoans() { return [{ id: 'loan-demo-1', product: 'Molula-Qhooa', amount: 12000, status: 'approved' }]; },
  async getSavings() { return [{ id: 'savings-demo-1', name: 'Savings Account', balance: 24580.42 }]; },
  async createTransfer(payload) { return { ok: true, payload, mode: 'demo' }; },
  async getTransferStatus() { return 'demo-pending'; },
  async submitLoanApplication(payload) { return { ok: true, payload, mode: 'demo' }; }
});

export const supabaseServerClient = () => null;
