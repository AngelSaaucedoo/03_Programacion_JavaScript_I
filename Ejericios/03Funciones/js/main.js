function countCaracters(str) {
  if (!str || typeof str !== "string") {// Valida si es una cadena string y no está vacía
    console.warn("La entrada no es una cadena válida.");
  } else {
    console.log("La cadena tiene " + str.length + " caracteres.");
  }
}

var length = countCaracters("");
var length = countCaracters("Hola Mundo"); // Prueba con cadena normal
var length = countCaracters("JavaScript I"); // Prueba con otra cadena

//Convetir funcion a funcion flecha ternaria
const countCaractersFlecha = (str) => !str || typeof str !== "string"
    ? console.warn("La entrada no es una cadena válida.")
    : console.log("La cadena tiene " + str.length + " caracteres.");