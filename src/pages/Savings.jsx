import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context
import { formatCurrency } from '../components/formatCurrency';

const Savings = () => {
  const { currency, savings, setSavings } = useContext(CurrencyContext);

  const [newSavings, setNewSavings] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null); // Track the index being edited

  // Handle form submission (for both adding and editing)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newSavings.description && newSavings.amount > 0 && newSavings.date) {
      if (editingIndex !== null) {
        // If we are editing, update the specific savings entry
        const updatedSavings = savings.map((savings, index) =>
          index === editingIndex ? newSavings : savings
        );
        setSavings(updatedSavings);
        setEditingIndex(null); // Reset editing index
      } else {
        // Otherwise, add a new savings entry
        setSavings([...savings, newSavings]);
      }

      // Reset form fields
      setNewSavings({ description: '', amount: '', date: '' });
    }
  };

  // Handle editing
  const handleEdit = (index) => {
    setNewSavings(savings[index]); // Populate the form with the selected savings
    setEditingIndex(index); // Track the index being edited
  };

  // Handle deleting an savings entry
  const handleDelete = (index) => {
    const updatedSavings = savings.filter((_, i) => i !== index);
    setSavings(updatedSavings); // Update savings by removing the selected entry
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

      {/* Display savings */}
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {savings.map((savings, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl text-slate-800">{savings.description}</p>
            <p className="text-2xl text-blue-600 font-bold">
              {formatCurrency(savings.amount, currency)} {currency}
            </p>
            <p className="text-sm text-slate-600">{savings.date}</p>

            {/* Edit and Delete buttons */}
            <div className="mt-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-300 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savings;
