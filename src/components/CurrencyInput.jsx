import React, { useContext, useState, useEffect } from 'react';
import { CurrencyContext } from '../components/CurrencyContext';
import { formatCurrency } from '../components/formatCurrency';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const CurrencyInput = ({ type }) => {
  const {
    currency,
    incomes,
    setIncomes,
    expenses,
    setExpenses,
    savings,
    setSavings,
  } = useContext(CurrencyContext);

  // Type-specific data handlers
  const typeData = {
    incomes: {
      title: 'Income',
      state: incomes,
      setState: setIncomes,
      categories: ['Salary', 'Pay Day', 'Freelance', 'Gift', 'Donation'],
    },
    expenses: {
      title: 'Expense',
      state: expenses,
      setState: setExpenses,
      categories: [
        'Food',
        'Rent',
        'Utilities',
        'Groceries',
        'Shopping',
        'Travel',
      ],
    },
    savings: {
      title: 'Savings',
      state: savings,
      setState: setSavings,
      categories: ['Emergency Fund', 'Vacation', 'Investments', 'Retirement'],
    },
  };

  const { title, state, setState, categories } = typeData[type];

  const [newEntry, setNewEntry] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  // Persist to localStorage based on type
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(type));
    if (storedData) {
      setState(storedData);
    }
  }, [type, setState]);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(type, JSON.stringify(state));
    }
  }, [state, type]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newEntry.description && newEntry.amount > 0 && newEntry.date) {
      if (editingIndex !== null) {
        const updatedEntries = state.map((entry, index) =>
          index === editingIndex ? newEntry : entry
        );
        setState(updatedEntries);
        setEditingIndex(null);
      } else {
        setState([...state, newEntry]);
      }

      setNewEntry({ description: '', amount: '', date: '' });
    }
  };

  const handleEdit = (index) => {
    setNewEntry(state[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (
      window.confirm(
        `Are you sure you want to delete this ${title.toLowerCase()} entry?`
      )
    ) {
      const updatedEntries = state.filter((_, i) => i !== index);
      setState(updatedEntries);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">{title}</h1>

      {/* Input form for new/editing entry */}
      <form onSubmit={handleFormSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-slate-700">Description</label>
          <select
            value={newEntry.description}
            onChange={(e) =>
              setNewEntry({ ...newEntry, description: e.target.value })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          >
            <option value="" disabled>
              [Select {title} Category]
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Amount</label>
          <input
            type="number"
            value={newEntry.amount}
            onChange={(e) =>
              setNewEntry({
                ...newEntry,
                amount: parseFloat(e.target.value) || '',
              })
            }
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-slate-700">Date</label>
          <input
            type="date"
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700"
        >
          {editingIndex !== null ? `Update ${title}` : `Add ${title}`}
        </button>
      </form>
      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {state.map((entry, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xl text-slate-800">{entry.description}</p>
              <p className="text-sm text-slate-600">{entry.date}</p>
            </div>
            <p className="text-2xl text-slate-600 font-bold">
              {formatCurrency(entry.amount, currency)} {currency}
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

export default CurrencyInput;
