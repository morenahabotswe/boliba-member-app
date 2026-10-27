export const loanService = {
  async getLoanProducts() {
    return [
      { id: 'loan-001', name: 'Personal Loan', description: 'Short- or long-term financing for personal needs and planned expenses.' },
      { id: 'loan-002', name: 'Bridging Finance', description: 'Short-term financing linked to employment, orders, or contracts.' },
      { id: 'loan-003', name: 'Business Loan', description: 'Funding for business growth, working capital, and operational needs.' },
      { id: 'loan-004', name: 'School Feeding Loan', description: 'Support for contractors supplying meals under education programmes.' },
      { id: 'loan-005', name: 'Molula Qhooa', description: 'Goal-based investment and savings plan for life milestones.' },
      { id: 'loan-006', name: 'Fixed Deposit / Sebota', description: 'Term-based investment with competitive fixed returns.' },
      { id: 'loan-007', name: 'Sesiu Voluntary Investment', description: 'Flexible voluntary savings product with attractive returns.' },
      { id: 'loan-008', name: 'Funeral Scheme', description: 'Protection and support cover for members and their families.' }
    ];
  },

  async getActiveLoans() {
    return [
      { id: 'loan-application-001', product: 'Molula Qhooa', amount: 12000, status: 'approved' },
      { id: 'loan-application-002', product: 'Personal Loan', amount: 8500, status: 'in review' },
      { id: 'loan-application-003', product: 'Business Loan', amount: 25000, status: 'approved' }
    ];
  }
};
