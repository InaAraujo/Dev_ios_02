/* Metodo ForEach() */
var frutas = ["Banana", "Maça", "Kiwi", "Melancia"]

/*Metodo ForEach() é utilizado para percorrer
um array e aplicar alguma mudança ou configuração */
frutas.forEach(minhaFuncao)

function minhaFuncao(valor, indice){
    console.log(`O valor é ${valor}`)
    console.log(`O indice é ${indice}`)
}

/* Metodo ForEach() com Array dde Objetos 
utilizando Arrow Function*/
const alunos =[
    {
        id:1,
        nome:"Marcelo",
        passou: true,
    },
    {
        id:1,
        nome:"Agatha",
        passou: false,
    },
    {
        id:1,
        nome:"Vitor",
        passou: false,
    },
    
]

alunos.forEach((aprovados) => console.log(aprovados.passou))

/*Metodo Map */
const numeros = [2, 7, 8, 50, 34];
const novosNumeros = numeros.map(Math.sqrt)
console.log(novosNumeros)

console.clear()
const cachorro = [
    {
        id: 1,
        nome: "Bololinho",
        idade: 11,
    },
    {
        id: 2,
        nome: "Toby",
        idade: 7,
    },
    {
        id: 3,
        nome: "Pingo",
        idade: 6,
    }
]

 const mapCachorro = cachorro.map((nomeDog) => {
    return nomeDog.nome;
 })

 console.log(mapCachorro)
 

 console.clear()

 /*Metodo filter() percorre o array e retorna as informações que passam no filtro*/
 const idade = [5, 9, 10, 15, 25, 35, 45, 89]
 /*Percorrer o array e retornar apenas  as idades abaixo de 30*/
 let filtraIdade = idade.filter((idade) => {
    return idade < 30
 })

 console.log(filtraIdade)

 console.clear()
 /*Metodo Find()*/
 console.log(
    cachorro.find((procuraNome) => {
        return procuraNome.nome === 'Pingo';
    })
 )
