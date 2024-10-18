import React, { useContext, useState, useEffect } from 'react';
import { CurrencyContext } from '../components/CurrencyContext';
import { formatCurrency } from '../components/formatCurrency';

const Incomes = () => {
  const { incomes, setIncomes, currency } = useContext(CurrencyContext);

  const [newIncome, setNewIncome] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedIncomes = localStorage.getItem('incomes');
    if (storedIncomes) {
      setIncomes(JSON.parse(storedIncomes));
    }
  }, [setIncomes]);

  useEffect(() => {
    if (incomes.length > 0) {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    }
  }, [incomes]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newIncome.description && newIncome.amount && newIncome.date) {
      if (editingIndex !== null) {
        const updatedIncomes = incomes.map((income, index) =>
          index === editingIndex ? newIncome : income
        );
        setIncomes(updatedIncomes);
        setEditingIndex(null);
      } else {
        setIncomes([...incomes, newIncome]);
      }

      setNewIncome({ description: '', amount: '', date: '' });
    }
  };

  const handleEdit = (index) => {
    setNewIncome(incomes[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedIncomes = incomes.filter((_, i) => i !== index);
    setIncomes(updatedIncomes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Incomes</h1>

      <form onSubmit={handleFormSubmit} className="mb-6">
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
          {editingIndex !== null ? 'Update Income' : 'Add Income'}
        </button>
      </form>

      <div className="bg-slate-100 p-4 rounded-md shadow-md">
        {incomes.map((income, index) => (
          <div key={index} className="mb-4">
            <p className="text-xl text-slate-800">{income.description}</p>
            <p className="text-2xl text-green-600 font-bold">
              {formatCurrency(income.amount, currency)} {currency}
            </p>
            <p className="text-sm text-slate-600">{income.date}</p>

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

export default Incomes;
