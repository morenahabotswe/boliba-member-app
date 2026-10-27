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
  async getMember() { return { id: 'member-demo', status: 'demo', membership_status: 'active' }; },
  async getAccounts() {
    return [
      { id: 'acct-demo-1', account_name: 'General Savings / Current Account', account_number: 'BLB-00012345', balance: 24580.42, currency: 'LSL', type: 'savings' },
      { id: 'acct-demo-2', account_name: 'Thala Boliba', account_number: 'BLB-00067890', balance: 18450.0, currency: 'LSL', type: 'transactional' },
      { id: 'acct-demo-3', account_name: 'Minor Account', account_number: 'BLB-00078123', balance: 3200.5, currency: 'LSL', type: 'minor' }
    ];
  },
  async getBalance() { return 24580.42; },
  async getTransactions() { return [{ id: 'txn-demo-1', description: 'Member savings deposit', amount: 24580.42, direction: 'in', status: 'completed' }]; },
  async getLoans() {
    return [
      { id: 'loan-demo-1', product: 'Molula Qhooa', amount: 12000, status: 'approved' },
      { id: 'loan-demo-2', product: 'Personal Loan', amount: 8500, status: 'in review' }
    ];
  },
  async getSavings() {
    return [
      { id: 'savings-demo-1', name: 'General Savings / Current Account', balance: 24580.42 },
      { id: 'savings-demo-2', name: 'Fixed Deposit / Sebota', balance: 18500.0 },
      { id: 'savings-demo-3', name: 'Sesiu Voluntary Investment', balance: 6200.25 }
    ];
  },
  async createTransfer(payload) { return { ok: true, payload, mode: 'demo' }; },
  async getTransferStatus() { return 'demo-pending'; },
  async submitLoanApplication(payload) { return { ok: true, payload, mode: 'demo' }; }
});

export const supabaseServerClient = () => null;
