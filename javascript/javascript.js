// ARREGLOS.

let persona = ["Malena", "Analuz", "Gonzalez"];

// Método length: nos ayuda a saber cuantos elementos tiene nuestro array.
// console.log(persona.length);

// Método Join: nos permite unir todos los elemetos junto a una cadena de texto.
// let cadenaTexto = persona.join("-");
// console.log(cadenaTexto);

// Método de pop:(permite eliminar un ultimo elemento del array) y push: (permite colocar un último elemento).
// persona.pop();
// persona.push("Gonzalez");

// Método shift:(eliminar el elemento que este primero en el array) y unshift:(permite agregar un elemento antes de todos los demás).
// persona.shift();
// persona.unshift("Malena");

// Método concat: (permite unir arrays)
// let persona2 = ["Lara", "Rita", "Mariel", "Gonzalez"];
// let juntarPersonas = persona.concat(persona2);

// Métodos Sort: (ordena los elementos del array alfabeticamente y solo funcionan con cadenas de texto, no con números) y Reverse: (ordena los elementos del array de atrás hacia delante).
// persona.sort();
// persona.reverse();

// -------------------------------------------------------------
// -------------------------------------------------------------
// FUNCIONES.
// Las variables que necesitan las funciones se llaman argumentos, es lo que va entre párentesis después del nombre de la función. Y antes de usarlos se debe indicar cuantos necesita y el nombre de cada uno.

// function suma(numero1, numero2) {
//   let resultado = numero1 + numero2;
//   return resultado;
// }

// Para ver el resultado se debe llamar a la función con el nombre que se coloco y entre parentesis los argumentos de esta. En este caso los números que queremos que sume.

// document.write(suma(20, 18));

// Se puede llamar nuevamente a la función para hacer otra suma con argumentos distintos pero se debe de colocar la misma cantidad que se declararon o dara un error.

// Los párentesis son obligatorios siempre al momento en que se llama a la función.

// *Funciones autoinvocadas: son funciones que se llaman a sí mismas después de ser declaradas, es decir, que se ejecután de manera inmediata despúes de ser creadas.
// (function () {
//   alert("Hola mundo");
//  Todo lo que este acá adentro se va a ejecutar cuando se ejecute la página.
// })();
