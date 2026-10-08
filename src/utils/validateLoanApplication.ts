export type LoanApplicationRequest = {
  productId: string;
  amount: number;
  purpose?: string;
};

export const validateLoanApplication = (payload: LoanApplicationRequest) => {
  if (!payload.productId) return 'Please select a loan product.';
  if (!payload.amount || Number(payload.amount) <= 0) return 'Requested amount must be greater than zero.';
  return null;
};
