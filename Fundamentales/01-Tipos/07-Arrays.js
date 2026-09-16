let lenguajes = [ 'python', 'ruby', 'JavaScript' ]

console.log (lenguajes)

// Nota: Los Arrays empiezan contando desde 0, entonces 'python es 0, ruby es 1 y JavaScript es 2, sin embargo, la longitud del array es de 3, ya que tiene 3 valores.

//Si quiero que me imprima un valor especifico:

// Python 

console.log ( lenguajes [0])

// Ruby

console.log ( lenguajes [1])

// JavaScript

console.log ( lenguajes [2])

// Si quiero añadir un valor mas al array, no tengo que buscarlo manualmente, puedo simplemente:

lenguajes[3] = 'C'

console.log(lenguajes)

// Si apreciamos, Los Arrays se comportan como objetos:

console.log(typeof lenguajes)

// Por ello podemos usarlos como tal

console.log(lenguajes.length)