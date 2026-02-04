//Pedir numero al usuario
var numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
var numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);

//Validacion: Volver a oerdir si no son validos
while ( (isNaN(numero1) && numero1 <= 0 ) || (isNaN(numero2) || numero2 <= 0)) 
{
  alert("Por favor introduce solo numeros validos mayores que 0.");
  numero1 = parseInt(prompt("Introduce el primer numero:"), 0);
  numero2 = parseInt(prompt("Introduce el segundo numero:"), 0);
}

//Mostrar numero por consola
console.log("Numero 1: " + numero1);
console.log("Numero 2: " + numero2);

//Comparaciones
if (numero1 === numero2) {
  alert("Los numeros son iguales.");
} else if (numero1 > numero2) {
  alert("El numero mayor es: " + numero1);
  alert("El numero menor es: " + numero2);
} else if (numero2 > numero1) {
  alert("El numero mayor es: " + numero2);
  alert("El numero menor es: " + numero1);
} else {
  alert("Introduce solo numeros validos.");
}
