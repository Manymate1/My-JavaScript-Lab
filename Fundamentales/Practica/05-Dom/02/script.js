// * Teoría ligera: un evento es una acción del usuario (clic, tecleo, envío de formulario). elemento.addEventListener("click", funcion) ejecuta funcion cada vez que ocurre ese evento sobre elemento. La función que pasas no se llama con () ahí — se pasa la referencia, JS la invoca solo cuando el evento ocurre.

// Ejercicio: Agrega <button id="revisarStock">Revisar Stock</button> a tu HTML. En script.js, mueve la lógica del ternario que ya armaste (la que decide el texto del párrafo según hayStock) a una función mostrarStock(). Conecta el botón con addEventListener para que, al hacer clic, se ejecute mostrarStock() y actualice el párrafo. El párrafo debe empezar vacío en el HTML (sin texto por defecto) hasta que se haga clic.

const producto = {

    nombre: 'Persona 5',
    precio: 147250,
    stock: 243,

}

function hayStock(producto) {

    return producto.stock > 0 ? true:false

}

const titulo = document.querySelector("#titulo");
titulo.textContent = 'detalle del producto'
titulo.style.color = "gold"

const boton = document.querySelector("#revisarStock")

function mostrarStock(){

    // REFACTOR document.querySelector(".descripcion") lo estás ejecutando dentro de mostrarStock, lo que significa que el DOM se vuelve a consultar cada vez que haces clic en el botón. El elemento no cambia entre clics, así que es más eficiente seleccionarlo una sola vez, fuera de la función (igual que hiciste con titulo y boton), y que mostrarStock solo lo use.

    const descripcion = document.querySelector(".descripcion")
    descripcion.textContent = hayStock(producto) ? ` Hay ${producto.stock} Existencias De: ${producto.nombre}` : 'sin stock'

}

boton.addEventListener("click", mostrarStock)