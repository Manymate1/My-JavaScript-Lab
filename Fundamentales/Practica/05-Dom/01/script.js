// * Teoría ligera: document.querySelector("#id") o document.querySelector(".clase") devuelve el elemento HTML. elemento.textContent lee o reemplaza su texto. elemento.style.color = "red" modifica su estilo en línea. El <script> va al final del <body> para que los elementos ya existan cuando el código corra.

/* Ejercicio: En tu index.html pon esto dentro del <body>, antes del <script>:

<h1 id="titulo">Título original</h1>
<p class="descripcion">Texto original</p>

En script.js: 

Usa (o recrea) tu objeto producto con nombre, precio y stock.
Cambia el texto del h1 a "Detalle del producto" y su color a uno que elijas.
Reemplaza el texto del p con el nombre y el stock del producto (por ejemplo: "Persona 5 - Stock: 243"), construido con concatenación o template string.
Usa tu función hayStock(producto) del ejercicio anterior: si devuelve false, el texto del p debe decir "Sin stock" en vez del detalle.

*/


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

const descripcion = document.querySelector(".descripcion");
descripcion.textContent = hayStock(producto) ? ` Hay ${producto.stock} Existencias De: ${producto.nombre}` : 'sin stock'