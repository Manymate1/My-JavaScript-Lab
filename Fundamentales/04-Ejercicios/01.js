/* 

- construir una funcion que reciba dos parametros.

- De esos dos parametros debemos saber cual de los dos es mayor 

- El valor que debe ser asignado a la variable debe ser el numero mayor entre los dos parametros.

*/

function numeroMayor ( a, b ) {

    if (a > b){
        return a;
    }

    else{
        return b;
    }

}

let mayor = numeroMayor (10, 5)

console.log (mayor)