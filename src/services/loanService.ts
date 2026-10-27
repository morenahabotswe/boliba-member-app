export const loanService = {
  async getLoanProducts() {
    return [
      { id: 'loan-001', name: 'Personal Loan', description: 'Flexible financing for personal needs and planned expenses' },
      { id: 'loan-002', name: 'Bridging Finance', description: 'Short-term facility tied to employment, orders, or contracts' },
      { id: 'loan-003', name: 'Business Loan', description: 'Funding for expansion, working capital, and business growth' },
      { id: 'loan-004', name: 'School Feeding Loan', description: 'Support for contractors supplying meals under education programmes' },
      { id: 'loan-005', name: 'Molula Qhooa', description: 'Goal-based savings and investment plan for key life milestones' },
      { id: 'loan-006', name: 'Fixed Deposit / Sebota', description: 'Term-based investment with competitive fixed returns' },
      { id: 'loan-007', name: 'Sesiu Voluntary Investment', description: 'Flexible voluntary contribution product with attractive returns' },
      { id: 'loan-008', name: 'Funeral Scheme', description: 'Protection cover for members and their families' }
    ];
  },

  async getActiveLoans() {
    return [
      { id: 'loan-application-001', product: 'Molula Qhooa', amount: 12000, status: 'approved' },
      { id: 'loan-application-002', product: 'Personal Loan', amount: 8500, status: 'in review' }
    ];
  }
};
