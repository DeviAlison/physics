import React, { useState } from 'react';

function ResistanceCalculator() {
  const [resistances, setResistances] = useState('');
  const [type, setType] = useState('serie');
  const [result, setResult] = useState('');

  const calculateResistance = () => {
    const values = resistances.split(',').map(Number);
    let totalResistance = 0;

    if (type === 'serie') {
      totalResistance = values.reduce((acc, val) => acc + val, 0);
    } else if (type === 'paralelo') {
      const reciprocalSum = values.reduce((acc, val) => acc + 1 / val, 0);
      totalResistance = reciprocalSum ? 1 / reciprocalSum : 0;
    }

    setResult(`Resistência ${type === 'serie' ? 'equivalente' : 'total'}: ${totalResistance} ohms`);
  };

  return (
    <div>
      <h2>Calculadora de Resistência</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <label>Resistores (separados por vírgula): </label>
          <input
            type="text"
            value={resistances}
            onChange={(e) => setResistances(e.target.value)}
          />
        </div>
        <div>
          <label>Tipo: </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="serie">Série</option>
            <option value="paralelo">Paralelo</option>
          </select>
        </div>
        <button
          style={{
            cursor: 'pointer',
            width: '100px',
          }}
        onClick={calculateResistance}>Calcular</button>
      </div>
      <div>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default ResistanceCalculator;
