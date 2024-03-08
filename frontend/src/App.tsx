
import Produto from './modelos/Produto';
import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  /* const [contas, setContas] = useState<Array<Produto>>([]); */
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");

  const registrar = () => {
      setNome("");
      setValor("");
      if(nome !== "" && valor !== ""){
          axios.post("http://localhost:8080/cadastrar", {nome, valor})
          .then(()=>{
              setNome("");
              setValor("");
          })
      }
  }
  return (
    <div>
    <div>
        <label>Nome:</label><br/>
        <input className="nomeInput" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
    </div>
    <div>
        <label>Valor:</label><br/>
        <input className="valorInput" type="text" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} />
    </div>
    <button className="registrar" type="button" onClick={registrar}>Registrar</button>
    </div>
  );
}
export default App;
