// Short-Circuit

// Falso 

/*

false

0

''

null

undefined

NaN

A todos estes valores se les conoce como Falsy

*/

let nombre = ''
let userName = nombre || 'anonimo'

console.log ( userName ) // Devuelve anonimo porque OR evalua cual de los dos es verdadero y lo imprime, ya que "nombre" es falso al estar indefinido.

// Si lo definimos:

let Nombre = 'Manysito :3c'
let UserName = Nombre || 'anonimo'

console.log ( UserName )  // Pasa a imprimir Nombre, ya que al estar definido, es verdadero.

// Vamos a plasmarlo de mejor manera.

function fn1(){

    console.log( ' soy la funcion 1 ')
    return true;
    
}

function fn2(){

    console.log( ' soy la funcion 2 ')
    return true;
    
}

let x = fn1() && fn2()

// como las dos funciones estan devolviendo true, esta imprimiendo las dos funciones

function FN1(){

    console.log( ' Soy La funcion Falsa ')
    return false;

}

function FN2(){

    console.log( ' Soy La Funcion Verdadera ')
    return true

}

let y = FN1() && FN2()

// El operador && evalúa las expresiones de izquierda a derecha y devuelve el primer valor "falso" (falsy) que encuentra. Si todos los valores son "verdaderos" (truthy), devuelve el último valor.

// Para que una condición AND (&&) sea totalmente verdadera, todas sus partes tienen que ser verdaderas. Si el primer elemento es falso, el operador ya sabe que toda la expresión será falsa. Por lo tanto, "recorta" el camino, se detiene ahí mismo y devuelve ese valor falso sin mirar el resto.