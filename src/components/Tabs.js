import React, { useState } from 'react';
import OhmCalculator from './OhmCalculator';
import ResistanceCalculator from './ResistanceCalculator';
import KirchhoffCalculator from './KirchhoffCalculator';
import PowerDissipationCalculator from './PowerDissipationCalculator';

function Tabs() {
  const [activeTab, setActiveTab] = useState('ohm');

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('ohm')}>Lei de Ohm</button>
        <button onClick={() => setActiveTab('resistance')}>Resistência</button>
        <button onClick={() => setActiveTab('kirchhoff')}>Kirchhoff</button>
        <button onClick={() => setActiveTab('power')}>Potência Dissipada</button>
      </div>
      <div className="tab-content">
        {activeTab === 'ohm' && <OhmCalculator />}
        {activeTab === 'resistance' && <ResistanceCalculator />}
        {activeTab === 'kirchhoff' && <KirchhoffCalculator />}
        {activeTab === 'power' && <PowerDissipationCalculator />}
      </div>
    </div>
  );
}

export default Tabs;
