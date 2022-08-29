import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteB';

function App() {
  const contactoPrueba = {
    nombre: 'Sebastian',
    apellido: 'Hernandez',
    email: 'arielhernandeznazarenossebass@gmail.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
