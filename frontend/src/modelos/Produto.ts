export default class Produto{
    public id!: number
    public nome: string;
    public valor: number;
    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}