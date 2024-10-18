import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');

  const [incomes, setIncomes] = useState(() => {
    const savedIncomes = localStorage.getItem('incomes');
    return savedIncomes
      ? JSON.parse(savedIncomes)
      : [
          { description: 'Salary', amount: 5000, date: '2024-10-01' },
          { description: 'Freelance', amount: 1500, date: '2024-10-10' },
        ];
  });

  const [expenses, setExpenses] = useState([
    { description: 'Rent', amount: 1200, date: '2024-10-05' },
    { description: 'Groceries', amount: 300, date: '2024-10-07' },
  ]);
  const [savings, setSavings] = useState([
    { description: 'Emergency Fund', amount: 2000, date: '2024-10-12' },
    { description: 'Investments', amount: 1000, date: '2024-10-15' },
  ]);

  useEffect(() => {
    if (incomes.length > 0) {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    }
  }, [incomes]);

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
