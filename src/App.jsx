import DDR_arrows from './assets/DDR_Arrows.png';
import './App.css'
import Tempo from './components/tempo/Tempo';
import { TempoProvider } from './context/TempoContext';

const App = () => {
  return (
    <>
      <div>
        <img className="ddr-logo" src={DDR_arrows} alt="DDR Arrows"/>
      </div>
      <h1>DDR Tempo</h1>
      <TempoProvider>
        <div>
          <Tempo/>
        </div>
      </TempoProvider>
    </>
  )
}

export default App
