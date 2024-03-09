import { useState, useEffect } from "react"
import Produto from "../modelos/Produto"
import axios from "axios"

export const Listar = () =>{
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
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}