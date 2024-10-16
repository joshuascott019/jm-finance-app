// Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');
  const [notification, setNotification] = useState(true);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleNotificationToggle = () => setNotification(!notification);

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
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            {/* Add more currencies as needed */}
          </select>
        </div>

        {/* Language Setting */}
        <div className="mb-4">
          <label className="block text-slate-700">Language</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 mt-1 border border-slate-300 rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Notifications Setting */}
        <div className="mb-4">
          <label className="block text-slate-700">Notifications</label>
          <button
            onClick={handleNotificationToggle}
            className={`w-full p-2 mt-1 border ${
              notification ? 'bg-green-500' : 'bg-red-500'
            } text-white rounded-md`}
          >
            {notification ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </div>

      <button className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
