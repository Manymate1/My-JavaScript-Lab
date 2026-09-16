/* 

El switch en JavaScript es una estructura de control que evalúa una expresión y compara su valor con varias opciones o casos para ejecutar un bloque de código específico.

Sirve como una alternativa más limpia y legible a múltiples condiciones if...else if...else cuando necesitas comparar una sola variable contra muchos valores fijos. 

*/

// let accion = 'listar'
// let accion = 'guardar'

switch ( accion ) {

    case 'listar':
        console.log (' accion de listar ')

    break // siempre debemos poner break, de lo contrario, todo se va a ejecutar de manera pareja

    case 'guardar':
        console.log (' accion de guardar ')

    break

    default:
        console.log (' accion no reconocida ')

}

// La estructura básica utiliza la palabra reservada switch seguida de la expresión a evaluar. Luego, dentro de llaves, defines cada valor posible con case, añades la instrucción break para detener el flujo y puedes usar default para manejar cualquier valor que no coincida con los anteriores. 

// Sirve como una alternativa más limpia y legible a múltiples condiciones if...else if...else cuando necesitas comparar una sola variable contra muchos valores fijos. 