import React, { useState } from 'react';

function KirchhoffCalculator() {
  const [voltages, setVoltages] = useState('');
  const [currents, setCurrents] = useState('');
  const [result, setResult] = useState('');

  const calculateKirchhoff = () => {
    const voltagesArray = voltages.split(',').map(Number);
    const currentsArray = currents.split(',').map(Number);

    const totalVoltage = voltagesArray.reduce((acc, val) => acc + val, 0);
    const totalCurrent = currentsArray.reduce((acc, val) => acc + val, 0);

    setResult(`Total de Tensão: ${totalVoltage} V, Total de Corrente: ${totalCurrent} A`);
  };

  return (
    <div>
      <h2>Calculadora de Kirchhoff</h2>
      <div>
        <label>Tensões (separadas por vírgula): </label>
        <input
          type="text"
          value={voltages}
          onChange={(e) => setVoltages(e.target.value)}
        />
      </div>
      <div>
        <label>Correntes (separadas por vírgula): </label>
        <input
          type="text"
          value={currents}
          onChange={(e) => setCurrents(e.target.value)}
        />
      </div>
      <button onClick={calculateKirchhoff}>Calcular</button>
      <div>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default KirchhoffCalculator;
