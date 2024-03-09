import Produto from "../modelos/Produto"
import axios from "axios"
import { useEffect, useState } from "react"

export const Deletar = () =>{
    const [produtos, setProdutos] = useState<Array<Produto>>([])
    useEffect(() =>{
        axios.get('http://localhost:8080/listar')
        .then((response) =>{
            setProdutos(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

    const AtualizarProdutos = () =>{
        axios.get('http://localhost:8080/listar')
        .then((response) =>{
            setProdutos(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const Deletar = (id: number) =>{
        axios.delete(`http://localhost:8080/deletar/${id}`)
                .then((response) =>{
                    AtualizarProdutos();
                })
                .catch((error) =>{
                    console.error(error)
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
                                <td>
                                    <button onClick={() => Deletar(produto.id)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}