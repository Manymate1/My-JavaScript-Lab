// * Teoría ligera: es común combinar arrays con objetos — una lista de registros, cada uno con sus propiedades. Se recorre igual que un array normal, pero cada elemento es un objeto al que accedes con .propiedad.

// Ejercicio: dado este array: Escribe una función empleadosConBono(arr) que devuelva un array nuevo con los nombres (solo el string del nombre) de los empleados cuyo salario sea mayor a 2000000. No modifiques el array original.

const empleados = [
    { nombre: "Carlos", salario: 2500000 }, 
    { nombre: "Marta", salario: 1800000 }, 
    { nombre: "Luis", salario: 3200000 }, 
    { nombre: "Ana", salario: 1500000 }  
]

function empleadosConBono(arr) {

    const resultado = []

    for (let i = 0; i < arr.length; i++){ 

        if (arr[i].salario >= 2000000) { 

            resultado.push (arr[i].nombre)

        }

    }

    return resultado

}

console.log(empleadosConBono(empleados))