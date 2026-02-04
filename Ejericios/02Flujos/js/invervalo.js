// Solicitar dos números al usuario
var numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
var numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);

//Validar que sean numeros
while (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor introduce solo numeros validos.");
  numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
  numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);
}

// Mostrar encabezado en el documento
document.write("<h2>Números en el intervalo entre " + numero1 + " y " + numero2 + ":</h2>");

//Determinar el ordern (por si numero1 > numero2)
var inicio = Math.min(numero1, numero2);
var fin = Math.max(numero1, numero2);

//Recorer el intervalo e imprimir los numeros 10 a 20
//for (var i = inicio; i <= fin; i++) {
//    document.write(i + "<br>");
//}

//Recorer el intervalo e imprimir los numeros 11 a 19
for (var i = inicio+1; i <= fin-1; i++) {
    document.write(i + "<br>");
}