import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext';
const Savings = () => {
  const { currency, savings, setSavings } = useContext(CurrencyContext);

  const [newSavings, setNewSavings] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newSavings.description && newSavings.amount > 0 && newSavings.date) {
      if (editingIndex !== null) {
        const updatedSavings = savings.map((savings, index) =>
          index === editingIndex ? newSavings : savings
        );
        setSavings(updatedSavings);
        setEditingIndex(null);
      } else {
        setSavings([...savings, newSavings]);
      }

      setNewSavings({ description: '', amount: '', date: '' });
    }
  };

  const handleEdit = (index) => {
    setNewSavings(savings[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSavings = savings.filter((_, i) => i !== index);
    setSavings(updatedSavings);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Savings</h1>

      {/* Input form for new savings */}
      <form onSubmit={handleFormSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <input
            type="text"
            value={newSavings.description}
            onChange={(e) =>
              setNewSavings({ ...newSavings, description: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            value={newSavings.amount}
            onChange={(e) =>
              setNewSavings({ ...newSavings, amount: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            value={newSavings.date}
            onChange={(e) =>
              setNewSavings({ ...newSavings, date: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          {editingIndex !== null ? 'Update Savings' : 'Add Savings'}
        </button>
      </form>
    </div>
  );
};

export default Savings;
