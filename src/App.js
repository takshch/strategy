import './App.css';
import Indicator from './components/Indicator';

function App() {
  return (
    <div className="App py-2">
      <Indicator name="EMA Crossover" indicators={[1, 0, 1, 0]}/>
    </div>
  );
}

export default App;
