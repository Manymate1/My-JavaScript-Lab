// * Teoría ligera: let para variables mutables, const para inmutables. El tipado es dinámico (no declaras el tipo, lo infiere el valor). Los operadores aritméticos (+ - * / %) y de comparación (=== !==) son la base de cualquier lógica.

// Declara tres variables: precio, cantidad y descuentoPorcentaje con valores numéricos que tú definas. Calcula el total (precio * cantidad) aplicando el descuento, y muestra por consola el resultado final con dos decimales. Usa const o let correctamente según corresponda.

const precio = 37250

const cantidad = 4

const porcentajeAPagar = 0.70 

function compra(){

    return ( precio * cantidad ) * porcentajeAPagar

}

console.log ( compra().toFixed(2) )

// ! Nota: El Ejercicio funciona... Pero hay una mejor manera de hacerlo.

/* 

function compra(precio, cantidad, porcentajeAPagar) {

    return (precio * cantidad) * porcentajeAPagar

}

compra(precioProducto, cantidadProducto, porcentaje)

*/

// ? ¿Por qué es mejor esta manera de resolver el ejercicio si devuelven el mismo codigo?

// * la función no le importa de dónde vienen los datos ni cómo se llaman las variables afuera. Puedes reutilizarla con cualquier precio, cantidad o porcentaje sin tocar su código interno. En la primera versión, si cambias el nombre de precio en el scope global, la función se rompe. Regla práctica: si una función usa un valor que viene de afuera y ese valor puede cambiar o variar entre llamadas, debe ser un parámetro. Solo accede a variables externas cuando son constantes globales verdaderas (configuración fija, no datos de negocio).


