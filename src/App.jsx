import Scale from './components/Scale.jsx';
import './App.css';
import ExportButton from './components/ExportButton.jsx';
import { useRef } from 'react';
import { toPng } from 'html-to-image';



function App() {

  const exportRef = useRef();
  return (

    <div ref={exportRef} className="w-full flex flex-col justify-center items-center p-4 pt-12">
      
      <svg width="100%" viewBox="0 0 1160 60" className="max-w-[1160px] mb-4 mx-auto block justify-center">
        <defs>
          <pattern
            id="roofStripes"
            width="6"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect width="2" height="60" fill="#017a76" />
            <rect x="2" width="4" height="60" fill="#01918C" />
          </pattern>
        </defs>

        <polygon
          points="0,60 580,0 1160,60"
          fill="url(#roofStripes)"
          stroke="#212529"
          strokeWidth="2"
        />
      </svg>
      
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
