import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Cadastro } from './servicos/cadastro';
import { Listar } from './servicos/listar';
import { useState } from 'react';
import { Deletar } from './servicos/deletar';
import { Atualizar } from './servicos/atualizar';

function App() {
    const [selecionador, setSelecionador] = useState(null);
    const Selecionador = (selecionar:any)=>{
        setSelecionador(selecionar);
    }
    return(
        <div>
            <h1>CRUD</h1>
            <button onClick={()=>Selecionador('cadastrar')}>Cadastrar</button>
            <button onClick={() => Selecionador('listar')}>Listar</button>
            <button onClick={()=>Selecionador('deletar')}>Deletar</button>
            <button onClick={()=>Selecionador('atualizar')}>Atualizar</button>
            <div>
                {selecionador === "cadastrar" && <Cadastro />}
                {selecionador === "listar" && <Listar />}
                {selecionador === "deletar" && <Deletar />}
                {selecionador === "atualizar" && <Atualizar />}
            </div>
        </div>
    )
  
}
export default App;
