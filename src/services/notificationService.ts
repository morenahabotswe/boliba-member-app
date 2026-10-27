export const notificationService = {
  async getNotifications() {
    return [
      {
        id: 'notif-001',
        title: 'Welcome to Boliba',
        message: 'Your account has been activated successfully.',
        type: 'system',
        read: false,
        created_at: '2026-10-11T09:00:00Z'
      },
      {
        id: 'notif-002',
        title: 'Loan update',
        message: 'Your recent loan application has been reviewed.',
        type: 'loan',
        read: true,
        created_at: '2026-10-10T08:05:00Z'
      },
      {
        id: 'notif-003',
        title: 'Savings goal reached',
        message: 'Your Molula Qhooa target is now ready for the next milestone.',
        type: 'savings',
        read: false,
        created_at: '2026-10-13T10:20:00Z'
      }
    ];
  },

  async markNotificationRead(id: string) {
    return { ok: true, id, read: true };
  },

  async sendNotification({
    memberId,
    title,
    message,
    type = 'system'
  }: {
    memberId: string;
    title: string;
    message: string;
    type?: 'transaction' | 'loan' | 'savings' | 'security' | 'system';
  }) {
    return { ok: true, memberId, title, message, type };
  }
};

export const sendNotification = notificationService.sendNotification;
