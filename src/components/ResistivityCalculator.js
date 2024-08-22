import React, { useState } from 'react';

function ResistivityVisualizer() {
  const [resistivity, setResistivity] = useState(1);
  const [length, setLength] = useState(10);
  const [area, setArea] = useState(7.5);
  const [resistance, setResistance] = useState(1.23);

  const calculateResistance = () => {
    if (resistivity && length && area) {
      const resistanceValue = (resistivity * length) / area;
      setResistance(resistanceValue.toFixed(2));
    }
  };

  React.useEffect(() => {
    calculateResistance();
  }, [resistivity, length, area]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Visualizador de Resistência</h2>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: `${resistance * 5}px`, color: 'red', marginRight: '20px' }}>
          R
        </div>

        <span style={{ fontSize: '48px' }}>=</span>

        <div style={{ display: 'inline-block', textAlign: 'center', marginLeft: '20px' }}>
          <div style={{ fontSize: '48px', color: 'blue' }}>
            <span style={{ fontSize: `${resistivity * 20}px` }}>ρ</span> * <span style={{ fontSize: `${length * 4}px` }}>L</span>
          </div>
          <hr style={{ width: '150px', margin: '0 auto', borderColor: 'black', borderWidth: '2px' }} />
          <div style={{ fontSize: `${area * 5}px`, color: 'blue' }}>A</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <label>Resistividade (ρ): {resistivity.toFixed(2)} Ω·cm</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={resistivity}
            onChange={(e) => setResistivity(parseFloat(e.target.value))}
          />
        </div>

        <div style={{ marginRight: '20px' }}>
          <label>Comprimento (L): {length.toFixed(2)} cm</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label>Área (A): {area.toFixed(2)} cm²</label>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={area}
            onChange={(e) => setArea(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <h3 style={{ color: 'red' }}>Resistência Calculada: {resistance} Ω</h3>

      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <p>Ajuste os valores utilizando os controles deslizantes para ver a fórmula e o resultado.</p>
      </div>
    </div>
  );
}

export default ResistivityVisualizer;
