import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // Use eval for simplicity; be cautious in a real application!
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg m-4">
      <h2 className="text-lg font-bold text-center mb-4">Calculator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full border p-2 rounded mb-2"
          placeholder="Enter expression"
        />
        <div className="text-xl font-semibold">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {button}
          </button>
        ))}
        {['4', '5', '6', '*'].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {button}
          </button>
        ))}
        {['1', '2', '3', '-'].map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {button}
          </button>
        ))}
        {['0', 'C', '=', '+'].map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === 'C') {
                handleClear();
              } else if (button === '=') {
                handleCalculate();
              } else {
                handleButtonClick(button);
              }
            }}
            className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${
              button === 'C' ? 'col-span-2' : ''
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
