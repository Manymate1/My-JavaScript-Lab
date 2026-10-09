let fondoActual = 'ninguno'

const titulo = document.querySelector("#titulo")
const fondo = document.querySelector("#fondo")
const botonOscuro = document.querySelector("#botonOscuro")
const botonClaro = document.querySelector("#botonClaro")
const botonPersona = document.querySelector("#botonPersona")
const botonFondoActual = document.querySelector("#botonFondoActual")

function fondoOscuro(){

fondo.style.backgroundColor = "black"
fondo.style.backgroundImage = "none"
titulo.textContent = "fondo Oscuro"
titulo.style.color = "white"

fondoActual = 'fondoOscuro'
}


function fondoClaro(){

fondo.style.backgroundColor = "white"
fondo.style.backgroundImage = "none"
titulo.textContent = "Fondo Claro"
titulo.style.color = "black"

fondoActual = 'fondoClaro'
}

function fondoPersona5(){

fondo.style.backgroundImage = "url('JokerYKasumi.png')"
fondo.style.backgroundPosition = "center"
fondo.style.backgroundSize = "cover"
fondo.style.backgroundRepeat = "no-repeat"
fondo.style.backgroundColor = "transparent"
titulo.textContent = "fondo de Persona"
titulo.style.color = "red"

fondoActual = 'fondoPersona5'

}

function mostrarFondo(){

    switch ( fondoActual ) {

    case 'fondoOscuro':
        console.log ('Fondo Oscuro')

    break 

    case 'fondoClaro':
        console.log ('Fondo Claro')

    break

    case 'fondoPersona5':
        console.log ('Fondo De Persona 5')
    break

    case 'ninguno':
        console.log ('Ningún Fondo Seleccionado')
    break

    default:
        console.log ('Fondo No Encontrado')
    }

}

botonOscuro.addEventListener ("click", fondoOscuro)
botonClaro.addEventListener ("click", fondoClaro)
botonPersona.addEventListener ("click", fondoPersona5)
botonFondoActual.addEventListener ("click", mostrarFondo)
