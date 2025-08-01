import Scale from './components/Scale.jsx';
import './App.css';
import ExportButton from './components/ExportButton.jsx';
import { useRef } from 'react';
import { toPng } from 'html-to-image';



function App() {

  const exportRef = useRef();
  return (

    <div ref={exportRef} className="w-full min-h-screen bg-gradient-to-tr from-gray-750 to-gray-700 text-white px-0 py-10 overflow-x-hidden justify-center items-center flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-8">Életem 5 pillére</h1>

      <svg width="1160" height="60" className="mb-4 mx-auto block justify-center">
        <defs>
          <pattern
            id="roofStripes"
            width="6"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="60" fill="#2d2d2d" />
            <rect x="2" width="4" height="60" fill="#1a1a1a" />
          </pattern>
        </defs>

        <polygon
          points="0,60 580,0 1160,60"
          fill="url(#roofStripes)"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="w-full overflow-x-auto items-center flex justify-center">
        <div className="flex gap-6 min-w-[1200px] px-2">
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
