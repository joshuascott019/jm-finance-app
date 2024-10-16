// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">J&M Finances</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-slate-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/incomes" className="text-slate-300 hover:text-white">
              Incomes
            </a>
          </li>
          <li>
            <a href="/expenses" className="text-slate-300 hover:text-white">
              Expenses
            </a>
          </li>
          <li>
            <a href="/savings" className="text-slate-300 hover:text-white">
              Savings
            </a>
          </li>
          <li>
            <a href="/settings" className="text-slate-300 hover:text-white">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
