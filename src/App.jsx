import Scale from './components/Scale.jsx';
import './App.css';
import ExportButton from './components/ExportButton.jsx';
import { useRef } from 'react';
import { toPng } from 'html-to-image';

// Force update: 2025-01-09 - Fix roof triangle top cutoff and default values



function App() {

  const exportRef = useRef();
  return (

    <div ref={exportRef} className="w-full flex flex-col items-center p-4">
      
      <div className="w-full h-[100px]">
        <svg width="100%" viewBox="0 0 1160 80" className="max-w-[1160px] mx-auto block">
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
        <div className="flex flex-col lg:flex-row gap-6">
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
