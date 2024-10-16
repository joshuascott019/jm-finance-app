// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Finance Tracker</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-slate-300 hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/incomes"
              className={({ isActive }) =>
                `text-slate-300 hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              Incomes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                `text-slate-300 hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/savings"
              className={({ isActive }) =>
                `text-slate-300 hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              Savings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `text-slate-300 hover:text-white ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
