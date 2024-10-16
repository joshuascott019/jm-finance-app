import React, { useContext } from 'react';
import translations from '../components/translations';
import { CurrencyContext } from '../components/CurrencyContext';
const Settings = () => {
  const { currency, setCurrency, language, setLanguage } =
    useContext(CurrencyContext);
  const t = translations[language];

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">{t.settings}</h1>

      <div className="bg-slate-100 p-4 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {t.preferences}
        </h2>

        {/* Currency Setting */}
        <div className="mb-4">
          <label className="block text-slate-700">{t.preferredCurrency}</label>
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="BRL">BRL - Brazilian Real</option>
          </select>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">
            {t.language}
          </h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-md"
          >
            <option value="en">English</option>
            <option value="pt">Português (Brasil)</option>
          </select>
        </div>
      </div>

      {/* <button className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700">
        {t.submit}
      </button> */}
    </div>
  );
};

export default Settings;
