import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [language, setLanguage] = useState('en'); // Default language
  const [incomes, setIncomes] = useState([
    { description: 'Salary', amount: 5000, date: '2024-10-01' },
    { description: 'Freelance', amount: 1500, date: '2024-10-10' },
  ]); // Shared incomes state
  const [expenses, setExpenses] = useState([
    { description: 'Rent', amount: 1200, date: '2024-10-05' },
    { description: 'Groceries', amount: 300, date: '2024-10-07' },
  ]);
  const [savings, setSavings] = useState([
    { description: 'Emergency Fund', amount: 2000, date: '2024-10-12' },
    { description: 'Investments', amount: 1000, date: '2024-10-15' },
  ]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        incomes,
        setIncomes,
        expenses,
        setExpenses,
        savings,
        setSavings,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
