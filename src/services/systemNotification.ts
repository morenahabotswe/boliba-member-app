import { sendNotification } from '@/services/notificationService';

export const sendSystemNotification = async (memberId: string, title: string, message: string) => {
  await sendNotification({ memberId, title, message, type: 'system' });
};
