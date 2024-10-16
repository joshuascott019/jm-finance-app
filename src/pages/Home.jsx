// Home.jsx
import React, { useState } from 'react';

const Home = () => {
  // Example data for incomes, expenses, and savings
  const [incomes, setIncomes] = useState([
    { description: 'Salary', amount: 5000, date: '2024-10-01' },
    { description: 'Freelance', amount: 1500, date: '2024-10-10' },
  ]);
  const [expenses, setExpenses] = useState([
    { description: 'Rent', amount: 1200, date: '2024-10-05' },
    { description: 'Groceries', amount: 300, date: '2024-10-07' },
  ]);
  const [savings, setSavings] = useState([
    { description: 'Emergency Fund', amount: 2000, date: '2024-10-12' },
  ]);

  const totalIncomes = incomes.reduce(
    (total, income) => total + parseFloat(income.amount),
    0
  );
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );
  const totalSavings = savings.reduce(
    (total, saving) => total + parseFloat(saving.amount),
    0
  );
  const balance = totalIncomes - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Finance Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Incomes</h2>
          <p className="text-2xl text-green-600 font-bold">${totalIncomes}</p>
        </div>
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Expenses</h2>
          <p className="text-2xl text-red-600 font-bold">${totalExpenses}</p>
        </div>
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Savings</h2>
          <p className="text-2xl text-blue-600 font-bold">${totalSavings}</p>
        </div>
      </div>

      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-bold text-slate-800">Current Balance</h2>
        <p
          className={`text-2xl font-bold ${
            balance >= 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          ${balance}
        </p>
      </div>
    </div>
  );
};

export default Home;
