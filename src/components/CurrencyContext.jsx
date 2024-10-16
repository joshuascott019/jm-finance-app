import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [language, setLanguage] = useState('en'); // Default language

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, language, setLanguage }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
