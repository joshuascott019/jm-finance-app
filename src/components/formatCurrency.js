export const formatCurrency = (amount, currency, language) => {
  const options = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  if (language === 'pt') {
    options.currencyDisplay = 'symbol'; // Optional: Customize further if needed
  }

  return new Intl.NumberFormat(
    language === 'pt' ? 'pt-BR' : 'en-US',
    options
  ).format(amount);
};
