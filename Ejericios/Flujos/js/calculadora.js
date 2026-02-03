var numero1 = parseFloat(prompt("Introduce el primer numero:"), 0);
var numero2 = parseFloat(prompt("Introduce el segundo numero:"), 0);

while (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor introduce solo numeros validos.");
  numero1 = parseFloat(prompt("Introduce el primer snumero:"), 0);
  numero2 = parseFloat(prompt("Introduce el segundo numero:"), 0);
}

//Calcular suma, resta, multiplicacion y division
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

document.write("<h2>Resultados de la calculadora:</h2>");
document.write("Suma: " + suma + "<br>");
document.write("Resta: " + resta + "<br>");
document.write("Multiplicación: " + multiplicacion + "<br>");
document.write("División: " + division + "<br>");