//let dias = ['domingo', 'lunes', 'martes'];

//let ultimoDia = dias[dias.length - 1];

// for (let i = 0; i < dias.length; i++) {
//     const element = dias[i];    
// }

// for (const dia of dias) {

// }

// // agregar elementos al final del array
// dias.push('miercoles');
// // sacar del final
// let ultimoDia = dias.pop();
// // agregar al principio del array
// dias.unshift('sabado');
// // sacar del principio
// let primerDia = dias.shift();

// let posicion = dias.indexOf('miercoles');

// // Eliminar el elemento en la pocision 2
// dias.splice(2,1);

/*let dias2 = dias.slice();

dias2[1] = 'xxxxxx';
console.log("copia:" + dias2[1]);

console.log("original:" + dias[1]);

dias.sort();
console.log(dias);

const numeros = [1,10,5,2,8,4];
numeros.sort();
console.log(numeros);

let stringNombres = 'Juan;Pedro;María;Julian';
let nombres = stringNombres.split(';');
nombres.push('Pablo');
console.log(nombres);

// Volver a unir
stringNombres = nombres.join(';');
console.log(stringNombres);
*/

// Ejercicio
// Dado un array de numeros enteros, multiplicar por 2 si es par y por 3 si es impar
// 
function multiplicar(numeros) {
    numeros.sort()
    numeros.forEach(n => {
        if (n % 2 === 0) {
            console.log(n * 2)
        }
        else {
            console.log(n * 3)
        }
    });
}
multiplicar([1, 3, 4, 7, 8, 12, 15])

// Ejercicio
// Dado un array de numeros enteros positivos, determinar el segundo mayor
// [3,4,6,6,5,5]

function segundoMayor(numeros) {
    numeros.sort()
    console.log(numeros)
    let max = -1
    let maxIndex = -1
    let result = -1
    numeros.forEach(n => {
        if (n > max && n != max) {
            max = n
            maxIndex = numeros.indexOf(n)
        }
    })
    numeros.splice(maxIndex)
    if (numeros.length == 0){
        return result = null
    }
    numeros.forEach(n => {
        if (n > result) {
            result = n
        }
    })
    return result
}

//TEST TDD
console.log(segundoMayor([3, 4, 6, 6, 5, 5]) === 5);
console.log(segundoMayor([1, 1, 1, 1]) === null);
console.log(segundoMayor([3, 3, 3, 3]) === null);
console.log(segundoMayor([10, 825, 323, 123, 9, 987]) === 825);
