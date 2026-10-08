export const loanService = {
  async getLoanProducts() {
    return [
      { id: 'loan-001', name: 'Molula-Qhooa', description: 'Short-term personal finance' },
      { id: 'loan-002', name: 'Thala Boliba', description: 'Working capital support' },
      { id: 'loan-003', name: 'FutureFund', description: 'Long-term future planning' }
    ];
  },

  async getActiveLoans() {
    return [
      { id: 'loan-application-001', product: 'Molula-Qhooa', amount: 12000, status: 'approved' }
    ];
  }
};
