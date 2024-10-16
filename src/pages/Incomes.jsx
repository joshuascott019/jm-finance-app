import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context
import { formatCurrency } from '../components/formatCurrency'; // Import the currency formatter

const Incomes = () => {
  const { currency } = useContext(CurrencyContext); // Access the currency context
  const [incomes, setIncomes] = useState([
    { description: 'Salary', amount: 5000, date: '2024-10-01' },
    { description: 'Freelance', amount: 1500, date: '2024-10-10' },
  ]);

  const [newIncome, setNewIncome] = useState({
    description: '',
    amount: '',
    date: '',
  });

  // Handle form submission
  const addIncome = (e) => {
    e.preventDefault();
    if (newIncome.description && newIncome.amount && newIncome.date) {
      setIncomes([...incomes, newIncome]);
      setNewIncome({ description: '', amount: '', date: '' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Incomes</h1>

      {/* Input form for new incomes */}
      <form onSubmit={addIncome} className="mb-6">
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            value={newIncome.description}
            onChange={(e) =>
              setNewIncome({ ...newIncome, description: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            value={newIncome.amount}
            onChange={(e) =>
              setNewIncome({ ...newIncome, amount: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            value={newIncome.date}
            onChange={(e) =>
              setNewIncome({ ...newIncome, date: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          Add Income
        </button>
      </form>

      {/* Display incomes */}
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {incomes.map((income, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl text-slate-800">{income.description}</p>
            <p className="text-2xl text-green-600 font-bold">
              {formatCurrency(income.amount, currency)}
            </p>
            <p className="text-sm text-slate-600">{income.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incomes;
