import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../components/CurrencyContext';
import { formatCurrency } from '../components/formatCurrency';
import Incomes from '../components/Incomes';
import Expenses from '../components/Expenses';
import Savings from '../components/Savings';

const Home = () => {
  const { incomes, currency, expenses, savings } = useContext(CurrencyContext);
  const totalIncomes = incomes.reduce(
    (total, income) => total + parseFloat(income.amount),
    0
  );
  const totalExpenses = expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );
  const totalSavings = savings.reduce(
    (total, saving) => total + parseFloat(saving.amount),
    0
  );
  const balance = totalIncomes - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Finance Dashboard
      </h1>
      <div className="bg-slate-100 p-4 rounded-md shadow-md flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Total Income</h2>
          <p className="text-2xl text-green-600 font-bold">
            {formatCurrency(totalIncomes, currency)}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Total Expenses</h2>
          <p className="text-2xl text-red-600 font-bold">
            {formatCurrency(totalExpenses, currency)}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Total Savings</h2>
          <p className="text-2xl text-blue-600 font-bold">
            {formatCurrency(totalSavings, currency)}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Remaining Bal.</h2>
          <p
            className={`text-2xl font-bold ${
              balance >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {formatCurrency(balance, currency)}
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6">
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Income</h2>
          <p className="text-2xl text-green-600 font-bold">
            {formatCurrency(totalIncomes, currency)}
          </p>
        </div>
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Expenses</h2>
          <p className="text-2xl text-red-600 font-bold">
            {formatCurrency(totalExpenses, currency)}
          </p>
        </div>
        <div className="bg-slate-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-slate-800">Total Savings</h2>
          <p className="text-2xl text-blue-600 font-bold">
            {formatCurrency(totalSavings, currency)}
          </p>
        </div>
      </div> */}
      <div className="flex justify-between">
        <Incomes />
        <Expenses />
        <Savings />
      </div>
    </div>
  );
};

export default Home;
