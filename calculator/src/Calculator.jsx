import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');
  
    const appendValue = (value) => {
      if (value === '=') {
        evaluateExpression();
      } else {
        setExpression((prev) => prev + value);
      }
    };
  
    const clearExpression = () => {
      setExpression('');
      setResult('0');
    };
  
    const evaluateExpression = () => {
      if (!expression) {
        setResult('Error');
        return;
      }
  
      try {
        const evalResult = eval(expression);
        setResult(isNaN(evalResult) ? 'NaN' : evalResult);
      } catch (error) {
        setResult('Error');
      }
    };
  
    return (
      <div className="calculator-container">
        <h1 className="calculator-title">React Calculator</h1>
        <div className="calculator">
          <input
            type="text"
            className="input-field"
            value={expression}
            readOnly
          />
          <div className="result" id="result">{result}</div>
          <div className="button-container">
            <button className="button" onClick={() => appendValue('7')}>7</button>
            <button className="button" onClick={() => appendValue('8')}>8</button>
            <button className="button" onClick={() => appendValue('9')}>9</button>
            <button className="button" onClick={() => appendValue('+')}>+</button>
            <button className="button" onClick={() => appendValue('4')}>4</button>
            <button className="button" onClick={() => appendValue('5')}>5</button>
            <button className="button" onClick={() => appendValue('6')}>6</button>
            <button className="button" onClick={() => appendValue('-')}>-</button>
            <button className="button" onClick={() => appendValue('1')}>1</button>
            <button className="button" onClick={() => appendValue('2')}>2</button>
            <button className="button" onClick={() => appendValue('3')}>3</button>
            <button className="button" onClick={() => appendValue('*')}>*</button>
            <button className="button clear" onClick={clearExpression}>C</button>
            <button className="button" onClick={() => appendValue('0')}>0</button>
            <button className="button" onClick={() => appendValue('=')}>=</button>
            <button className="button" onClick={() => appendValue('/')}>/</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calculator;
  