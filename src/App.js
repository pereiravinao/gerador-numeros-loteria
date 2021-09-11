import logo from './logo512.png';
import './App.css';
import './components/StyleLotoFacil.css'
import LotoFacil from './components/LotoFacil'
import imagemLoto from './img/10_Lotofacil.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={imagemLoto} className="imageLoto" alt="imagemLoto" />
      </header>
      <LotoFacil />
    </div>
  );
}

export default App;
