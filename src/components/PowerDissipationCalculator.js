import React, { useEffect, useState } from 'react';

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
    setCalculationDone(true);
  };

  const clearAll = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setResult('');
    setCalculationDone(false);
  }

  const [calculationDone, setCalculationDone] = useState(false);

  useEffect(() => {
    setCalculationDone(false);
  }, [voltage, current, resistance]);

  return (
    <div>
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
        <h2>Calculadora de Potência Dissipada</h2>
        <div>
          <label>Tensão (V): </label>
          <input
            type="number"
            value={voltage}
            onChange={(e) => {
              if (calculationDone) {
                clearAll();
              }
              setVoltage(e.target.value);
            }}
            disabled={current && resistance && !calculationDone}
          />
        </div>
        <div>
          <label>Corrente (I): </label>
          <input
            type="number"
            value={current}
            onChange={(e) => {
              if (calculationDone) {
                clearAll();
              }
              setCurrent(e.target.value);
            }}
            disabled={voltage && resistance && !calculationDone}
          />
        </div>
        <div>
          <label>Resistência (R): </label>
          <input
            type="number"
            value={resistance}
            onChange={(e) => {
              if (calculationDone) {
                clearAll();
              }
              setResistance(e.target.value);
            }}
            disabled={voltage && current && !calculationDone}
          />
        </div>
        <div style={{
          display: 'flex',
          gap: '10px',
          width: '100px',
          justifyContent: 'space-between',
        }}>
          <button
          style={{
            cursor: 'pointer',
          }}
          onClick={calculatePower}>Calcular</button>
          <button
          style={{
            cursor: 'pointer',
          }}
          onClick={clearAll}>Limpar</button>
        </div>
      </div>
      <div>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
      <div>
        <h3>Possíveis fórmulas:</h3>
        <strong style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '100%',
          }}>
            <div>P</div>
            <div>=</div>
            <div
              style={{
                color: `${voltage ? '#007bff' : 'gray'}`,
              }}
            >V</div>
            <div>×</div>
            <div
              style={{
                color: `${current ? '#007bff' : 'gray'}`,
              }}
            >I</div>
          </div>
        </strong>
        <strong style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '100%',
          }}>
            <div>P</div>
            <div>=</div>
            <div
              style={{
                color: `${current ? '#007bff' : 'gray'}`,
              }}
            >I</div>
            <div>²</div>
            <div>×</div>
            <div
              style={{
                color: `${resistance ? '#007bff' : 'gray'}`,
              }}
            >R</div>
          </div>
        </strong>
        <strong style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '100%',
          }}>
            <div>P</div>
            <div>=</div>
            <div
              style={{
                color: `${voltage ? '#007bff' : 'gray'}`,
              }}
            >V</div>
            <div
              style={{
                color: `${voltage ? '#007bff' : 'gray'}`,
              }}
            >²</div>
            <div>÷</div>
            <div
              style={{
                color: `${resistance ? '#007bff' : 'gray'}`,
              }}
            >R</div>
          </div>
        </strong>
      </div>
    </div>
  );
}

export default PowerDissipationCalculator;
