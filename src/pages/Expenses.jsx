// Expenses.jsx
import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount && newExpense.date) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: '', date: '' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Expenses</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 p-4 rounded-md shadow-md mb-6"
      >
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            name="description"
            value={newExpense.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
            placeholder="Expense description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            name="amount"
            value={newExpense.amount}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
            placeholder="Amount (e.g., 500)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          Add Expense
        </button>
      </form>

      <h2 className="text-xl font-bold text-slate-800 mb-2">Expense List</h2>
      {expenses.length > 0 ? (
        <ul className="bg-slate-100 p-4 rounded-md shadow-md">
          {expenses.map((expense, index) => (
            <li key={index} className="mb-2 p-2 border-b border-slate-300">
              <div className="flex justify-between">
                <span>{expense.description}</span>
                <span className="font-bold">${expense.amount}</span>
              </div>
              <div className="text-sm text-slate-500">Date: {expense.date}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600">No expenses added yet.</p>
      )}
    </div>
  );
};

export default Expenses;
