import DDR_arrows from './assets/DDR_Arrows.png';
import './App.css'
import { TempoProvider } from './context/TempoContext';
import Tempo from './components/Tempo';
import TempoMods from './components/TempoMods';
import ScrollPreview from './components/ScrollPreview';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
        <img className="ddr-logo" src={DDR_arrows} alt="DDR Arrows"/>
      </div>
      <h1>DDR Tempo</h1>
      <TempoProvider>
          <Tempo/>
          <TempoMods/>
          <ScrollPreview/>
          <Footer />
      </TempoProvider>
    </>
  )
}

export default App
