/*

break y continue son instrucciones de control de flujo en JavaScript que sirven para modificar cómo se ejecutan los bucles (for, while) o las sentencias switch

===---===

break sirve para romper o finalizar un bucle de forma prematura cuando se cumple una condición

===---===

sirve para saltar la iteración actual de un bucle y pasar directamente a la siguiente

*/

let i = 0

while ( i < 6 ) {

    i++

    if ( i === 2 ){

        continue    // Si la condición es correcta, ignora lo que esta ejecutando, y sigue con la siguiente evaluacion

    }

    if ( i === 4 ){

        break  // Si la condición es correcta, acaba el bucle

    }

    console.log ( i )

}