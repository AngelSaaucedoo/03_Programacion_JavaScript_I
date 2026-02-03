var numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
var numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);

while (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor introduce solo numeros validos.");
  numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
  numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);
}

//Determinar el ordern (por si numero1 > numero2)
var inicio = Math.min(numero1, numero2);
var fin = Math.max(numero1, numero2);

for (var i = inicio; i <= fin; i++) {
  if (i % 2 === 0) {
    document.write(i + " es par<br>");
  }
}

