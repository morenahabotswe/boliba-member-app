export const transactionService = {
  async getRecentTransactions() {
    return [
      { id: 'txn-001', description: 'Salary deposit', amount: 3500, direction: 'in', status: 'completed', created_at: '2026-10-01T08:30:00Z' },
      { id: 'txn-002', description: 'Transfer to EcoCash', amount: -650, direction: 'out', status: 'completed', created_at: '2026-10-04T11:15:00Z' },
      { id: 'txn-003', description: 'Loan repayment', amount: -1300, direction: 'out', status: 'processing', created_at: '2026-10-05T15:07:00Z' }
    ];
  }
};
