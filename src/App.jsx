import Scale from './components/Scale.jsx';
import './App.css';
import ExportButton from './components/ExportButton.jsx';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

// Force update: 2025-01-09 - Fix PDF export layout: responsive SVG and flexbox
// Force update: 2025-01-09 - Compact layout for 14" monitors with improved PDF margins



function App() {

  const exportRef = useRef();
  return (

    <div ref={exportRef} className="w-full flex flex-col items-center p-4 bg-white min-h-screen">
      
      {/* Háromszög teteje - pillérek szélességéhez igazított */}
      <div className="w-full h-[60px] flex justify-center items-center mb-4">
        <svg width="900" height="60" viewBox="0 0 1160 80" className="block" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern
              id="roofStripes"
              width="6"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="2" height="80" fill="#bbbbbb" />
              <rect x="2" width="4" height="80" fill="#cccccc" />
            </pattern>
          </defs>

          <polygon
            points="0,80 580,10 1160,80"
            fill="url(#roofStripes)"
            stroke="#212529"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
          <Scale scaleName="Fizikai, egészségi állapot"/>
          <Scale scaleName="Kapcsolatok" />
          <Scale scaleName="Munkával való elégedettség" />
          <Scale scaleName="Anyagi biztonság" />
          <Scale scaleName="Értékrend" />
        </div>
      </div>

      <ExportButton exportRef={exportRef}/>
      
    </div>
  );
}

export default App;
