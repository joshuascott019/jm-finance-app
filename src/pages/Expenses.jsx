import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context
import { formatCurrency } from '../components/formatCurrency'; // Import the currency formatter

const Expenses = () => {
  const { currency, expenses, setExpenses } = useContext(CurrencyContext);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const addExpense = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount && newExpense.date) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: '', date: '' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Expenses</h1>

      {/* Input form for new expenses */}
      <form onSubmit={addExpense} className="mb-6">
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
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

      {/* Display expenses */}
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {expenses.map((expense, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl text-slate-800">{expense.description}</p>
            <p className="text-2xl text-red-600 font-bold">
              {formatCurrency(expense.amount, currency)}
            </p>
            <p className="text-sm text-slate-600">{expense.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
