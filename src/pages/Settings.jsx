import React, { useContext } from 'react';
import { CurrencyContext } from '../components/CurrencyContext'; // Import the Currency context

const Settings = () => {
  const { currency, changeCurrency } = useContext(CurrencyContext); // Access currency state and updater

  const handleCurrencyChange = (e) => {
    changeCurrency(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Settings</h1>

      <div className="bg-slate-100 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Preferences</h2>

        {/* Currency Setting */}
        <div className="mb-4">
          <label className="block text-slate-700">Preferred Currency</label>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="BRL">BRL - Brazilian Real</option>
          </select>
        </div>
      </div>

      <button className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
