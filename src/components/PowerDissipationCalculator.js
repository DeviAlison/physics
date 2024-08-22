import React, { useState } from 'react';

function PowerDissipationCalculator() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState('');

  const calculatePower = () => {
    if (voltage && current) {
      const power = voltage * current;
      setResult(`Potência dissipada: ${power} watts`);
    } else if (current && resistance) {
      const power = current ** 2 * resistance;
      setResult(`Potência dissipada: ${power} watts`);
    } else if (voltage && resistance) {
      const power = voltage ** 2 / resistance;
      setResult(`Potência dissipada: ${power} watts`);
    } else {
      setResult('Por favor, insira dois valores para calcular a potência.');
    }
  };

  return (
    <div>
      <h2>Calculadora de Potência Dissipada</h2>
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
      <button onClick={calculatePower}>Calcular</button>
      <div>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default PowerDissipationCalculator;
