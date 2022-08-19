import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch(){
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch{
      alert('CEP inválido');
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busque o CEP</h1>
      <div className="container-input">
        <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className='search-btn' onClick={handleSearch}><BsSearch size={25}/></button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2 className='main-title'>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
      
    </div>
  );
}

export default App;
