import { useState, useEffect } from "react"
import Produto from "../modelos/Produto"
import axios from "axios"

export const Atualizar = () =>{
    const [produtos, setProdutos] = useState<Array<Produto>>([])
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [editando, setEditando] = useState(false)   
    const [id, setId] = useState('')
    useEffect(() =>{
        axios.get('http://localhost:8080/listar')
        .then((response) =>{
            setProdutos(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

    const Atualizar = () =>{
        if(nome && valor){
            axios.put(`http://localhost:8080/atualizar/${id}`, {nome, valor})
              .then(()=>{
                  setEditando(false)
                  setNome('')
                  setValor('')
                  AtualizarProdutos()
              })
              .catch((error) =>{
                console.error(error)
              })
          }
    }

    const Editar = (id:any, nome: string, valor:any) =>{
        setId(id)
        setNome(nome)
        setValor(valor)
        setEditando(true)
    }

    const AtualizarProdutos = () =>{
        axios.get('http://localhost:8080/listar')
        .then((response) =>{
            setProdutos(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return(
        <div>
            <h2>Lista de produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto)=>(
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.valor}</td>
                                {!editando &&(<td><button onClick={() => Editar(produto.id, produto.nome, produto.valor)}>Editar</button></td>)}
                            </tr>
                        ))}
                </tbody>
            </table>
            {editando?(
                <>
                    <div>
                        <div>
                            <label>Nome:</label>
                            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                            <label>Valor:</label>
                            <input type="text" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
                            <button onClick={Atualizar}>Atualizar</button>
                        </div>
                    </div>
                </>
            ):
            (
                <>

                </>
            )}
        </div>
    )
}