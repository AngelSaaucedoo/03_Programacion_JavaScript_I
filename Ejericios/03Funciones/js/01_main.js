console.log("****Ejercicios de Funciones****");
console.log("----Funcion Declarada----");
function countCaracters(str) {
  if (!str || typeof str !== "string") {// Valida si es una cadena string y no está vacía
    console.warn("La entrada no es una cadena válida.");
  } else {
    console.log(`La cadena ${str} tiene ${str.length} caracteres.`);
  }
}

var length = countCaracters("");
var length = countCaracters("Hola Mundo"); // Prueba con cadena normal
var length = countCaracters("JavaScript I"); // Prueba con otra cadena


//Convetir funcion a funcion flecha ternaria
console.log("----Funcion Flecha Ternaria----");
const countCaractersFlecha = (str) => !str || typeof str !== "string" //Valida si es una cadena string y no está vacía
    ? console.warn("La entrada no es una cadena válida.") // Si el dato no es válido
    : console.log(`La cadena ${str} tiene ${str.length} caracteres.`); // Si el dato es válido

countCaractersFlecha("");
countCaractersFlecha("Hola Mundo"); // Prueba con cadena normal   
countCaractersFlecha("JavaScript I"); // Prueba con otra cadena

console.log("****FIN Ejercicios de Funciones****");