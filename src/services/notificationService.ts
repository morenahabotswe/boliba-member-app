export const notificationService = {
  async getNotifications() {
    return [
      { id: 'note-001', title: 'Transfer completed', message: 'Your transfer to EcoCash was processed successfully.', read: false, type: 'transaction', created_at: '2026-10-05T12:00:00Z' },
      { id: 'note-002', title: 'Loan update', message: 'Your loan application is under review.', read: true, type: 'loan', created_at: '2026-10-03T09:00:00Z' }
    ];
  }
};
