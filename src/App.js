import React, { useState } from 'react';
import './App.css';

function App() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = () => {
    if (voltage && current) {
      setResistance(voltage / current);
      setResult(`Resistência: ${voltage / current} ohms`);
    } else if (voltage && resistance) {
      setCurrent(voltage / resistance);
      setResult(`Corrente: ${voltage / resistance} amperes`);
    } else if (current && resistance) {
      setVoltage(current * resistance);
      setResult(`Tensão: ${current * resistance} volts`);
    } else {
      setResult('Por favor, insira dois valores para calcular.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Lei de Ohm</h1>
      <div>
        <label>Tensão (V): </label>
        <input
          type="number"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
        />
      </div>
      <div>
        <label>Corrente (I): </label>
        <input
          type="number"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
      </div>
      <div>
        <label>Resistência (R): </label>
        <input
          type="number"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
        />
      </div>
      <button onClick={handleCalculation}>Calcular</button>
      <div>
        <h2>Resultado:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;