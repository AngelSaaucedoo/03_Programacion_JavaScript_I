var numero1 = parseFloat(prompt("Introduce el primer numero:"), 0);
var numero2 = parseFloat(prompt("Introduce el segundo numero:"), 0);

while (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor introduce solo numeros validos.");
  numero1 = parseFloat(prompt("Introduce el primer snumero:"), 0);
  numero2 = parseFloat(prompt("Introduce el segundo numero:"), 0);
}

//Calcular suma, resta, multiplicacion y division
var resultadoCMDsuma =  "La Suma es: " + (numero1 + numero2) + "<br>" +
 "La resta es: " + (numero1 - numero2) + "<br>" +
 "La multiplicación es: " + (numero1 * numero2) + "<br>" +
 "La división es: " + (numero1 / numero2) + "<br>";

document.write("<h2>Resultados de la calculadora:</h2>");
document.write(resultadoCMDsuma);0