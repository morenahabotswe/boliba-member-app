export type TransferRequest = {
  recipient: string;
  amount: number;
  reference?: string;
  note?: string;
};

export const validateTransfer = (payload: TransferRequest) => {
  if (!payload.recipient) return 'Recipient is required.';
  if (!payload.amount || Number(payload.amount) <= 0) return 'Amount must be greater than zero.';
  return null;
};
