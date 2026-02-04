/* Parte 1: Operadores Aritméticos en JavaScript */
console.log("***Operadores Aritméticos en JavaScript***");

let numero1 = 7;
let numero2 = 15;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;


console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);


/* Parte 2: Tipos de Datos en JavaScript */

let numero_entero = 24;
let cadena_texto = "Hola 'que' tal";
let verdadero_o_falso = true;
let numero_falso = "33";

let suma_incorrecta = numero_entero + numero_falso; // Concatenación debido a tipo cadena 24 + "33"
console.log("Suma incorrecta (concatenación): " + suma_incorrecta); // Resultado: "2433" el tipo de dato es cadena (string)

/* Conversión de tipos */
let numero_falso_entero = parseInt(numero_falso);
let suma_correcta = numero_entero + numero_falso_entero; // Suma correcta como números
console.log("Suma correcta (números): " + suma_correcta); // Resultado: 57 el tipo de dato es número (number)


/* Conversión a cadena */

let numero_entero_string = numero_entero.toString();
let suma_string = numero_entero_string + numero_falso; // Concatenación de cadenas
console.log("Suma como cadenas: " + suma_string); // Resultado: "2433" el tipo de dato es cadena (string)

/* Impresion en consola de tipos de datos */
console.log("Tipo de dato de numero_entero: " + typeof(numero_entero)); // number
console.log("Tipo de dato de cadena_texto: " + typeof(cadena_texto)); // string
console.log("Tipo de dato de verdadero_o_falso: " + typeof(verdadero_o_falso)); // boolean
console.log("Tipo de dato de numero_falso: " + typeof(numero_falso)); // string
console.log("Tipo de dato de numero_falso_entero: " + typeof(numero_falso_entero)); // number


console.log("*** Fin Operadores Aritméticos en JavaScript***");
