export const sendNotification = async ({ memberId, title, message, type = 'system' }: { memberId: string; title: string; message: string; type?: 'transaction' | 'loan' | 'savings' | 'security' | 'system'; }) => {
  return { ok: true, memberId, title, message, type };
};
