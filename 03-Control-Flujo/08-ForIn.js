// for...in en JavaScript es un bucle diseñado para recorrer las claves o propiedades enumerables de un objeto. 

let user = {

    id:  1,
    name: ('Many'),
    age: 15

}

/* for (let propiedad in user) {

    console.log ( propiedad )

} */ // Esto muestra el nombre de las propiedades, pero no sus valores.

for ( let propiedad in user ) {

    console.log ( propiedad, user [ propiedad ] ) // Esto muestra el nombre de las propiedades y sus valores.

}