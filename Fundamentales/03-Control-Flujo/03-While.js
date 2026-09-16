// Van a haber ocasiones en la que queremos que nuestro codigo se ejecute más de una vez.

let i = 0 

while ( i < 10 ) {

    if ( i % 2 == 0 )

    console.log ( i )
    i++

} // MIENTRAS i sea menor a 10, imprime i y luego de imprimirlo sumale 1, aparte, muestra solo los numeros pares.

console.log (' Fuera del While ')

/* ! NOTA: while repite en forma de bucle, cuando ejecutemos algo y no queremos que sea un bucle infinito debemos indicar algo que haga que se termine de cumplir la condicion dada para terminar con el bucle. 

En este caso, el bucle no parara hasta que " i " Sea mayor a 10, para eso, cada vez que el bucle ejecute la accion dada, al final le sumaremos 1 a la variable, eventualmente sera mayor a 10 y el bucle parara, ya que:

i = 11

i < 10 ?

False.

* Para el bucle * 

*/ 

// !! Este Ejercicio No Es Compatible con la pseudoConsola, Usa la consola del navegador