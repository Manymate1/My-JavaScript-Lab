/*

-- Teoria --

un objeto es una estructura de datos que permite almacenar colecciones de información relacionadas en forma de pares de clave-valor (propiedades y métodos).

A diferencia de los tipos de datos primitivos (como números o cadenas que solo guardan un valor), los objetos se utilizan para modelar entidades del mundo real o conceptos complejos.

== Mi Explicación ==

Un objeto es una lista de cosas que tiene sentido tenerlas juntas, ya que estan relacionadas.

*/

// == Esto tiene más sentido tenerlo junto, ya que estan relacionados ==

let nombre = 'many'
let edad = 15
let nacionalidad = 'Colombiano'

// == Para declarar un objeto literal, se utiliza {}

personaje = {

    nombre: 'many', 
    nacionalidad: 'Colombiano',
    edad: 15,

}

console.log(personaje)


// Si quiero redefinir el valor de un objeto 

personaje.edad = 16

personaje['edad'] = 16

// Ambas son correctas

// Si ya no necesito una propiedad de la lista de objetos se usa

delete personaje.nacionalidad

/* 

Si solo quiero saber una propiedad especifica se usa

console.log(personaje.nombre) 

o

console.log['nombre'] 

*/

/* == El objeto se distribuye por ==

nombre : se le llama llave
Many : Se le llama valor

Juntos "nombre : 'Many" se le llama *Llave-Valor*

pero cuando solo nos referimos a 'nombre' ( Llave ), se le llama propiedad.
*/



