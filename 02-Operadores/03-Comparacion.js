// === - Operadores De Comparación - ==

let a = 5


// == Operadores Relacionales ==

console.log ( a > 5 ) // "a" ¿es mayor a 5?

console.log ( a >= 5 ) // "a" ¿es mayor o igual a 5?

// --- = ---

console.log ( a < 5 ) // "a" ¿es menor que 5?

console.log ( a <= 5 ) // "a es menor o igual a 5"


// == Operadores de Igualdad == 

console.log ( a == 5 ) // "a" ¿es Exactamente igual a 5?

console.log ( a != 5 ) // "a" ¿es Distinto a 5?

    // - Veamos más de cerca este caso -

    console.log ( a == '5' ) // Es "a" ¿Exactamente Igual a String 5? ( Valor de texto )

    /* Si miramos en la consola, a pesar de que el valor con el que estamos buscando comparar sea de texto ( String ) nos devuelve que es verdadero
    
    Esto es porque el "==" Pregunta si el valor es igual, no el tipo.
    
    Si queremos que "==" Pregunte no solo si el valor es igual, sino tambien el tipo se usa "===" 
    
    -------- */

console.log ( a === '5' ) // "a" ¿Es Estrictamente igual a 5?

console.log ( a !== '5' ) // ¿El tipo de dato de "a" es distinto a '5'?

// Cada vez que se haga una comparación, nos va a devolver un valor booleano ( True / False )



