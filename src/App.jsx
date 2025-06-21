import Scale from './components/Scale.jsx';
import './App.css';

function App() {
  return (
<div className="min-h-screen  text-white px-0 py-10 w-full">
      <h1 className="text-3xl font-bold text-center mb-8">Életem 5 pillére</h1>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-6 min-w-[1200px] px-2">
          <Scale scaleName="Fizikai, egészségi állapot" />
          <Scale scaleName="Kapcsolatok" />
          <Scale scaleName="Munkával való elégedettség" />
          <Scale scaleName="Anyagi biztonság" />
          <Scale scaleName="Értékrend" />
        </div>
      </div>
    </div>
  );
}

export default App;
