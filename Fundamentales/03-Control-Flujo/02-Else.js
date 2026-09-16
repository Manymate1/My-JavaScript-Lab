// Si por alguna razón la condicion de tu if no es cumplida, Else ejecutara la acción que se le fue dada en Lugar de la de If, si queremos mas de una instruccion, se usa Else If

let edad = 15 // <-- Juega con esta variable a tu antojo

if ( edad > 17 ){

    console.log (' Este Usuario Es Mayor De Edad ')

}

else if ( edad > 13 ){

    console.log ( 'Usuario necesita supervisión de un adulto')

}

else{

    console.log (' Este Usuario Es Menor De Edad ')

}


// si " edad " es mayor a 17, imprime " Este usuario es Mayor de edad ", sino, imprime " Este Usuario Es Menor De Edad "

// El codigo siempre evalua de arriba hacia abajo ( primero evalua si edad cumple si es mayor a 17, luego si es mayor a 13, y luego el ultimo else, y ejecutara el que primero cumpla la condición. )


// !! Este Ejercicio No Es Compatible con la pseudoConsola, Usa la consola del navegador