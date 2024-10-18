import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');

  const loadData = (key, defaultValue) => {
    try {
      const savedData = localStorage.getItem(key);
      return savedData ? JSON.parse(savedData) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key}:`, error);
      return defaultValue;
    }
  };

  const [incomes, setIncomes] = useState(() =>
    loadData('incomes', [
      { description: 'Salary', amount: 5000, date: '2024-10-01' },
      { description: 'Freelance', amount: 1500, date: '2024-10-10' },
    ])
  );

  const [expenses, setExpenses] = useState(() =>
    loadData('expenses', [
      { description: 'Rent', amount: 1200, date: '2024-10-05' },
      { description: 'Groceries', amount: 300, date: '2024-10-07' },
    ])
  );

  const [savings, setSavings] = useState(() =>
    loadData('savings', [
      { description: 'Emergency Fund', amount: 2000, date: '2024-10-12' },
      { description: 'Investments', amount: 1000, date: '2024-10-15' },
    ])
  );

  useEffect(() => {
    if (incomes.length > 0) {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    } else {
      localStorage.removeItem('incomes');
    }
  }, [incomes]);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    } else {
      localStorage.removeItem('expenses');
    }
  }, [expenses]);

  useEffect(() => {
    if (savings.length > 0) {
      localStorage.setItem('savings', JSON.stringify(savings));
    } else {
      localStorage.removeItem('savings');
    }
  }, [savings]);

  const clearData = () => {
    setIncomes([]);
    setExpenses([]);
    setSavings([]);
    localStorage.removeItem('incomes');
    localStorage.removeItem('expenses');
    localStorage.removeItem('savings');
  };

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
