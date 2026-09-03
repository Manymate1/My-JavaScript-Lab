// A diferencia del While que empieza evaluando de arriba para abajo, Do While lo hace de abajo para arriba.

let i = 2

/*

while ( i < 2 ) {

    if ( i % 2 == 0 )

    console.log ( i )
    i++

} // No Muesta nada, por lo que evalua primero la condicion i menor que dos y lanza false

*/

do {

    if ( i % 2 == 0 )

    console.log ( 'Número par', i )
    i++

} while ( i < 2 ) // Muestra el número par dos, por lo que hace la orden del do primero, y luego realiza la condición

// !! Este Ejercicio No Es Compatible con la pseudoConsola, Usa la consola del navegador




