const numeros = [17, 43, 8, 4, 97, 56, 29,30]

numeros.forEach(numerosPar)

function numerosPar(num){
    if (num % 2 == 0 && !isNaN(num)) console.log('Número par!' + num);
}



/* Atividade corrigida */

const number = [17, 43, 8, 4, 97, 56, 29,30]
number.forEach(imparpar)

 function imparpar(valor){
    if (valor%2 == 0){
        console.log(`${valor}Esse numero é par`)
    }else{
        console.log(`${valor}Esse numero é impar`)
    }

 }

 