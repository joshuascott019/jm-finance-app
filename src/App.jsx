import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Incomes from './pages/Incomes';
import Expenses from './pages/Expenses';
import Savings from './pages/Savings';
import Settings from './pages/Settings';
import { CurrencyProvider } from './components/CurrencyContext'; // Import the CurrencyProvider

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/incomes" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/settings" element={<Settings />} />{' '}
          {/* Add the settings route */}
        </Routes>
      </Router>
    </CurrencyProvider>
  );
}

export default App;
