import { BsSearch } from 'react-icons/bs';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Busque o CEP</h1>
      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP..."/>
        <button className='search-btn'><BsSearch size={25}/></button>
      </div>
      <main className='main'>
        <h2>CEP: </h2>
        <span>Rua Teste</span>
        <span>Complemento</span>
        <span>Vila Rosa</span>
        <span>Quissama - RJ</span>
      </main>
    </div>
  );
}

export default App;
