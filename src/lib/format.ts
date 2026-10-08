export const formatCurrency = (value: number | string, currency = 'LSL') => {
  const numeric = Number(value ?? 0);
  const formatted = new Intl.NumberFormat('en-LS', {
    style: 'currency',
    currency: 'LSL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numeric);

  return `${currency === 'LSL' ? 'M' : currency} ${formatted.replace('LSL', '').trim()}`;
};

export const formatDate = (value: string | Date) =>
  new Intl.DateTimeFormat('en-LS', {
    dateStyle: 'medium'
  }).format(new Date(value));
