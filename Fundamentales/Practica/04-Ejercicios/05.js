// * Teoría ligera: un objeto agrupa datos relacionados en pares clave-valor (const obj = { nombre: "Ana", edad: 30 }). Se accede a sus propiedades con notación de punto (obj.nombre) o corchete (obj["nombre"]). Un objeto puede tener métodos (funciones como valores de una propiedad).

// Ejercicio: Crea un objeto producto con las propiedades nombre (string), precio (number) y stock (number). Luego escribe una función hayStock(producto) que reciba ese objeto y devuelva true si stock es mayor a 0, o false si no. Prueba la función con console.log.

const producto = {

    nombre: 'Persona 5',
    precio: 147250,
    stock: 243,

}

function hayStock(producto) {

    return producto.stock > 0 ? true:false

}

console.log(hayStock(producto))

