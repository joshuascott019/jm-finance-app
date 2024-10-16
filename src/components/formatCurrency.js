export const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat(currency === 'USD' ? 'en-US' : 'pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};
