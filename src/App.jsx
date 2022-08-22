import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  const [validateCep, setValidateCep] = useState(true);

  async function handleSearch(){
    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
      setValidateCep(true);
    } catch{
      setValidateCep(false);
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Busque o CEP</h1>
      <div className="container-input">
        <input 
          type="text" 
          placeholder="Digite seu CEP..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='search-btn' onClick={handleSearch}><BsSearch size={25}/></button>
      </div>
      {!validateCep && <p>Erro: CEP inválido. Exemplo: 21210210</p>}

      {Object.keys(cep).length > 0 && (

        <div className='result-container'>
          <main className='main'>
            <h2 className='main-title'>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </main>
          <iframe 
              title='Mapa'
              src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBpUupMGNXDirVekwjLkuQfQHaIstLwbjE
              &q=${cep.cep}`}
              width="700" 
              height="230" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen
            />

        </div>
      )}             
      
    </div>
  );
}

export default App;