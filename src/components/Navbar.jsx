import React, { useContext } from 'react';
import translations from './translations';
import { NavLink } from 'react-router-dom';
import { CurrencyContext } from '../components/CurrencyContext';
const Navbar = () => {
  const { language } = useContext(CurrencyContext);
  const t = translations[language];

  return (
    <nav className="bg-slate-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">{t.financeTracker}</h1>
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
              {t.home}
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
              {t.incomes}
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
              {t.expenses}
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
              {t.savings}
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
              {t.settings}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
