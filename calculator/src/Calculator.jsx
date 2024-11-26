import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression); 
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
      <h1> React Calculator</h1>
        <input
          type="text"
          value={expression}
          readOnly
          className="calculator-display"
        />
        <div className="calculator-result">{result}</div>
        <div className="calculator-buttons">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                className="calculator-button"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
