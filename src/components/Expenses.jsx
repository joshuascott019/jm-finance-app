import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context

const Expenses = () => {
  const { currency, expenses, setExpenses } = useContext(CurrencyContext);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null); // Track the index being edited

  // Handle form submission (for both adding and editing)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount > 0 && newExpense.date) {
      if (editingIndex !== null) {
        // If we are editing, update the specific expense entry
        const updatedExpenses = expenses.map((expense, index) =>
          index === editingIndex ? newExpense : expense
        );
        setExpenses(updatedExpenses);
        setEditingIndex(null); // Reset editing index
      } else {
        // Otherwise, add a new expense entry
        setExpenses([...expenses, newExpense]);
      }

      // Reset form fields
      setNewExpense({ description: '', amount: '', date: '' });
    }
  };

  // Handle editing
  const handleEdit = (index) => {
    setNewExpense(expenses[index]); // Populate the form with the selected expense
    setEditingIndex(index); // Track the index being edited
  };

  // Handle deleting an expense entry
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses); // Update expenses by removing the selected entry
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Expenses</h1>

      {/* Input form for new/editing incomes */}
      <form onSubmit={handleFormSubmit} className="mb-6">
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
          {editingIndex !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

export default Expenses;
