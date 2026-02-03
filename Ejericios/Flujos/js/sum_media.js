/// Inicializamos variables
var suma = 0;
var contador = 0;
var numero = 0; //Para guadar cada valor ingresado

//Pedir numeros hasta que se introduzca un numero negativo
while (true) {
  numero = parseInt(prompt("Introduce un numero (negativo para terminar):"), 0);

  //Validar si no es numerico
  if (isNaN(numero)) {
    numero = 0; //Si no es numerico, lo consideramos 0
  } else if (numero >= 0) {
    suma += numero;
    contador++; //El signo  ++ incrementa en 1 la variable contador. Contador = contador + 1
  } else {
    break; //Salir del bucle si el numero es negativo
  }

  //Mostrar avance por consola
  console.log("Numnero introducido:", numero);
  console.log("Suma actual:", suma, "Contador actual:", contador);
}

//Cuando termine el bucle, calcular resultados
var media = suma / contador;

//Mostrar resultados
alert(
  "La suma total de todos los numeros es: " + suma +
    "\nLa media de los numeros introducidos es: " + media);
