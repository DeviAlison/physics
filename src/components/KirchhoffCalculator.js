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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '450px',
        }}>
          <label>Tensões (separadas por vírgula): </label>
          <input
            type="text"
            value={voltages}
            onChange={(e) => setVoltages(e.target.value)}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '450px',
        }}>
          <label>Correntes (separadas por vírgula): </label>
          <input
            type="text"
            value={currents}
            onChange={(e) => setCurrents(e.target.value)}
          />
        </div>
        <button
        style={{
          cursor: 'pointer',
          width: '100px',
        }}
        onClick={calculateKirchhoff}>Calcular</button>
      </div>
      <div>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default KirchhoffCalculator;
