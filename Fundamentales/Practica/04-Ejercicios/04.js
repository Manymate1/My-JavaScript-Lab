// * Teoría ligera: un array es una colección ordenada de valores (const arr = [1,2,3]). Se recorre con for, while o for...of. Cada elemento se accede por índice (arr[0]) o directamente en la iteración con for...of.

// Ejercicio: Dado el array const numeros = [4, 15, 8, 23, 42, 7, 16], escribe una función sumarPares(arr) que reciba un array de números y devuelva la suma de únicamente los números pares. Usa un bucle (el que prefieras) y el operador módulo (%) para determinar si un número es par.

const numeros = [
    
    4,
    15, 
    8, 
    23, 
    42, 
    7, 
    16

]



function sumarPares(arr) {

    let resultado = 0

    for (let i = 0; i < arr.length; i++) {

        if ( arr[i] % 2 === 0 ) {

            resultado = arr[i] + resultado

        }

    }

    return resultado

}

console.log (sumarPares (numeros))