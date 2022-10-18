/*Array de objeto carro */
var carro = ["Uno", 1998, "0km", false, 2];
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro);

// join()
console.clear()
var y = carro.join(" * ")
console.log(carro)
console.log(x)
console(y)

//Tamanho do Array // lenght retorna o tamanho do array
console.log(carro.length)

//Inserir e remover o ultimo elemento "pop"
/*console.clear()
var t = carro.pop()

/*Inserir um elemento no final do array "push" */
var u = carro.push('lego')
console.log(carro);
console.log(u);

/*Remove um elemento no inicio do array "shift"*/
console.clear()
var p = carro.shift()
console.log(carro)
console.log(p)

/*Adiciona a informação no inicio da array */
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

/*Apagar um elemento do array em uma posição pré selecionada*/
delete carro[1]
console.log(carro)


/* Criando array unidimensional */
var array1 = ["Marcelo", 15, "Colin", 47, true]
console.log(array1);
console.log(array[3]);
console.clear()
array1[3] = 80;
console.log(array1)

/*Array Bidimensional*/
var array2 = [
   ["pipoca", 10, false],
   ["String", 20, true],
   ["Margarina", 12, false]
]

console.log(array2);
console.log(array[2][0]);
console.clear()
array2[1][0] = "Salsicha";
console.log(array2);