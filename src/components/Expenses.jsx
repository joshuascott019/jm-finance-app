import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext';
import { formatCurrency } from '../components/formatCurrency';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Expenses = () => {
  const { currency, expenses, setExpenses } = useContext(CurrencyContext);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount > 0 && newExpense.date) {
      if (editingIndex !== null) {
        const updatedExpenses = expenses.map((expense, index) =>
          index === editingIndex ? newExpense : expense
        );
        setExpenses(updatedExpenses);
        setEditingIndex(null);
      } else {
        setExpenses([...expenses, newExpense]);
      }

      setNewExpense({ description: '', amount: '', date: '' });
    }
  };

  const handleEdit = (index) => {
    setNewExpense(expenses[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
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
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {expenses.map((expense, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl text-slate-800">{expense.description}</p>
              <p className="text-sm text-slate-600">{expense.date}</p>
            </div>
            <p className="text-2xl text-slate-600 font-bold">
              {formatCurrency(expense.amount, currency)} {currency}
            </p>

            <div className="mt-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-slate-800 text-4xl px-4 py-2 rounded-md mr-2"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-slate-800 text-4xl px-4 py-2 rounded-md "
              >
                <MdDeleteForever />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
