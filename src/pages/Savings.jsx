// Savings.jsx
import React, { useState } from 'react';

const Savings = () => {
  const [savings, setSavings] = useState([]);
  const [newSaving, setNewSaving] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    setNewSaving({
      ...newSaving,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSaving.description && newSaving.amount && newSaving.date) {
      setSavings([...savings, newSaving]);
      setNewSaving({ description: '', amount: '', date: '' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Savings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 p-4 rounded-md shadow-md mb-6"
      >
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            name="description"
            value={newSaving.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
            placeholder="Savings source or description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            name="amount"
            value={newSaving.amount}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
            placeholder="Amount (e.g., 2000)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            name="date"
            value={newSaving.date}
            onChange={handleChange}
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

      <h2 className="text-xl font-bold text-slate-800 mb-2">Savings List</h2>
      {savings.length > 0 ? (
        <ul className="bg-slate-100 p-4 rounded-md shadow-md">
          {savings.map((saving, index) => (
            <li key={index} className="mb-2 p-2 border-b border-slate-300">
              <div className="flex justify-between">
                <span>{saving.description}</span>
                <span className="font-bold">${saving.amount}</span>
              </div>
              <div className="text-sm text-slate-500">Date: {saving.date}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600">No savings added yet.</p>
      )}
    </div>
  );
};

export default Savings;
