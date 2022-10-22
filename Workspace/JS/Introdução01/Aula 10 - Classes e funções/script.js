/* Criação da classe carro*/

class carro{
    constructor(nome, ano, porta, janelas){
        this.nome = nome;
        this.ano = ano;
        this.porta = porta;
        this.janelas = janelas;

    }
    /*Metodo que retorna a idade do meu carro*/
    idadecarro(anoAtual){
        return anoAtual - this.ano;
    }
}

/*Criação de onjetos que herda a 
caracterisitcas da classe carro*/

let carro1 = new carro("celta", 2002, 2, 4)
let carri2 = new carro("veloster", 2016, 3, 4)

/*Apresentar os objetos no console.log*/
console.log(carro1)
console.log(carro1.nome)

/*Pegar o ano atual */
let datahoje = new Date();
let ano = datahoje.getFullYear();

/*Retornar a idade do objeto carro*/
console.log(carro1.idadecarro(ano))