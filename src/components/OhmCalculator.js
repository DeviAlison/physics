import React, { useState, useEffect } from 'react';
import './../App.css';

function App() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState('');

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

  const clearAll = () => {
    setVoltage('');
    setCurrent('');
    setResistance('');
    setResult('');
  }

  const [hints, setHints] = useState([]);

  const generateHints = () => {
    const hints = [];
    if (!voltage) {
      hints.push('Se você não sabe a tensão, multiplique a corrente pela resistência.');
    }
    if (!current) {
      hints.push('Se você não sabe a corrente, divida a tensão pela resistência.');
    }
    if (!resistance) {
      hints.push('Se você não sabe a resistência, divida a tensão pela corrente.');
    }
    setHints(hints);
  }

  useEffect(() => {
    generateHints();
  }, [voltage, current, resistance]);

  const hasAllValues = voltage && current && resistance;

  return (
    <div className="App">
      <h1>Calculadora de Lei de Ohm</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '350px',
        }}>
          <label>Tensão (V): </label>
          <input
            type="number"
            value={voltage}
            onChange={(e) => {
              if (hasAllValues) {
                clearAll();
              }
              setVoltage(e.target.value);
            }}
            disabled={current && resistance && !hasAllValues}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '350px',
        }}>
          <label>Corrente (I): </label>
          <input
            type="number"
            value={current}
            onChange={(e) => {
              if (hasAllValues) {
                clearAll();
              }
              setCurrent(e.target.value);
            }}
            disabled={voltage && resistance && !hasAllValues}
          />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '350px',
        }}>
          <label>Resistência (R): </label>
          <input
            type="number"
            value={resistance}
            onChange={(e) => {
              if (hasAllValues) {
                clearAll();
              }
              setResistance(e.target.value);
            }}
            disabled={voltage && current && !hasAllValues}
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
          onClick={calculateValues}>Calcular</button>
          <button
            style={{
              cursor: 'pointer',
            }}
          onClick={clearAll}>Limpar</button>
        </div>
      </div>

      <div>
        <h2>Resultado:</h2>
        <p>{result}</p>
      </div>
      <div>
        <h2>Fórmula:</h2>
        <p>
          A Lei de Ohm é expressa por: <br />
          <strong style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '100%',
            }}>
              <div
                style={{
                  color: `${voltage ? '#007bff' : 'gray'}`,
                }}
              >V</div>
              <div>=</div>
              <div
                style={{
                  color: `${current ? '#007bff' : 'gray'}`,
                }}
              >I</div>
              <div>×</div>
              <div
                style={{
                  color: `${resistance ? '#007bff' : 'gray'}`,
                }}
              >R</div>
            </div>
          </strong>
        </p>
      </div>
      <div>
        {hints.length > 0 && <h2>Dicas:</h2>}
        {
          hints.map((hint, index) => (
            <p key={index}>{hint}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
