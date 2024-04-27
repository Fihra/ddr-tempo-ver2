import DDR_arrows from './assets/DDR_Arrows.png';
import './App.css'
import MainTempo from './components/MainTempo';

const App = () => {
  return (
    <>
      <div>
        <img className="ddr-logo" src={DDR_arrows} alt="DDR Arrows"/>
      </div>
      <h1>DDR Tempo</h1>
      <div className="card">
        <MainTempo/>
      </div>
    </>
  )
}

export default App
