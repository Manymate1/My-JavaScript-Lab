/* 

La X dentro de los "()" Se llaman argumentos, y lo que esta dentro de la funcion, parametros.

en este caso "x" = argumento

" return x * 6 " = parametro

*/

function producto(x){

    return x * 6; 

}

// En este caso "x" Funciona como una variable

console.log(producto(7))

// Otro Ejemplo:

function diferencia( x, y ){

    return x - y;

}

console.log(diferencia( 19, 5 ))

// ==- Tipo -==

console.log( typeof producto)

// Si quiero referirme a todos los valores dentro de una funcion se usa "arguments" ( No recomendada )

function suma( x, y){

    console.log(arguments)
    return x + y

}

console.log (suma( 1, 5 ,7 ,8))