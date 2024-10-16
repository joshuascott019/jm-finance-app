import React, { createContext, useState } from 'react';

// Create the Currency context
export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD'); // Default to USD

  const changeCurrency = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
