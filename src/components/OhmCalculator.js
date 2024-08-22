import React, { useState, useEffect } from 'react';
import './../App.css';

function App() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState('');

  // Função para calcular o resultado
  const calculateValues = () => {
    let resultText = '';
    if (voltage && current) {
      const calculatedResistance = voltage / current;
      setResistance(calculatedResistance);
      resultText = `Resistência: ${calculatedResistance} ohms`;
    } else if (voltage && resistance) {
      const calculatedCurrent = voltage / resistance;
      setCurrent(calculatedCurrent);
      resultText = `Corrente: ${calculatedCurrent} amperes`;
    } else if (current && resistance) {
      const calculatedVoltage = current * resistance;
      setVoltage(calculatedVoltage);
      resultText = `Tensão: ${calculatedVoltage} volts`;
    } else {
      resultText = 'Por favor, insira dois valores para calcular.';
    }
    setResult(resultText);
  };

  // Hook para calcular valores sempre que um dos inputs mudar
  useEffect(() => {
    calculateValues();
  }, [voltage, current, resistance]);

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
      <button onClick={calculateValues}>Calcular</button>
      <div>
        <h2>Resultado:</h2>
        <p>{result}</p>
      </div>
      <div>
        <h2>Fórmula:</h2>
        <p>
          A Lei de Ohm é expressa por: <br />
          <strong style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
            V = I × R
          </strong>
        </p>
        <p>
          Onde: <br />
          <strong>V</strong> é a tensão (voltagem) em volts <br />
          <strong>I</strong> é a corrente em amperes <br />
          <strong>R</strong> é a resistência em ohms
        </p>
        <p>
          Atual fórmula com valores: <br />
          <strong>
            {voltage && current ? `V = ${voltage} V` : ''}
            {voltage && resistance ? `V = ${voltage} V` : ''}
            {current && resistance ? `V = I × R = ${current} A × ${resistance} Ω = ${current * resistance} V` : ''}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default App;
