// * Teoría ligera: una función puede recibir argumentos y usarlos en su lógica interna. Los condicionales (if / else if / else) permiten ejecutar distinto código según una condición booleana. Los operadores de comparación (>, <, ===) son los que arman esas condiciones.

/* 

Ejercicio: Crea una función clasificarEdad(edad) que reciba un número y devuelva un string:

"niño" si es menor de 13
"adolescente" si es de 13 a 17
"adulto" si es de 18 en adelante

La función no debe imprimir nada por dentro — solo return. Prueba con al menos tres llamadas distintas usando console.log.

*/

function clasificarEdad(edad){

    if (edad < 13){

        return "niño"

    }

    else if (edad < 18){

        return "adolescente"

    }

    else{

        return "adulto"

    }

}

console.log(clasificarEdad(12))

console.log(clasificarEdad(15))

console.log(clasificarEdad(19))