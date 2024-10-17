import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context
import { formatCurrency } from '../components/formatCurrency'; // Import the currency formatter

const Savings = () => {
  const { currency, savings, setSavings } = useContext(CurrencyContext);

  const [newSaving, setNewSaving] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const addSaving = (e) => {
    e.preventDefault();
    if (newSaving.description && newSaving.amount && newSaving.date) {
      setSavings([...savings, newSaving]);
      setNewSaving({ description: '', amount: '', date: '' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Savings</h1>

      {/* Input form for new savings */}
      <form onSubmit={addSaving} className="mb-6">
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            value={newSaving.description}
            onChange={(e) =>
              setNewSaving({ ...newSaving, description: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            value={newSaving.amount}
            onChange={(e) =>
              setNewSaving({ ...newSaving, amount: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            value={newSaving.date}
            onChange={(e) =>
              setNewSaving({ ...newSaving, date: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          Add Saving
        </button>
      </form>

      {/* Display savings */}
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {savings.map((saving, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl text-slate-800">{saving.description}</p>
            <p className="text-2xl text-blue-600 font-bold">
              {formatCurrency(saving.amount, currency)}
            </p>
            <p className="text-sm text-slate-600">{saving.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savings;
