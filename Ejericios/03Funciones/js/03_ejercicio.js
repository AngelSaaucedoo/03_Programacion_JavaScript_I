console.log("------------------ Ejercicio: Función para calcular el factorial de un número ------------------");
const factorial = function (numero) {
    //Validacion 1: undefined
    if (numero === undefined) { //Valida que el numero no sea undefined
        console.warn("No has introducido un número.");
        return;
    }   

    //Validacion 2: no es un numero
    if (typeof numero !== "number") { //Valida que el dato sea un numero
        console.error(`El valor "${numero}" introducido NO es un número.`);
        return;
    }

    //Validacion 3: el numero no puede ser 0
    if (numero === 0) { //Valida que el numero no sea 0
        console.error("El número no puede ser 0.");
        return;
    }

    //Validacion 4: el numero no puede ser negativo
    if (Math.sign(numero) < 0) { //Valida que el numero no sea negativo
        console.error("El número no puede ser negativo.");
        return;
    }

    //Declarar variable factorial
    let resultado = 1;
    //Ciclo para calcular factorial
    for (let i = numero; i > 1; i--){
        resultado *= i; //resultado = resultado * i
    }
    //Mostrar resultado en consola
    console.log(`El factorial de ${numero} es ${resultado}.`);

}

factorial(0); //Error: no puede ser 0
factorial("5"); //Error: no es un numero
factorial(1,2,3); //Solo toma el primer parametro (1)
factorial(undefined); //Error: no es un numero
factorial(-5); //Error: no puede ser negativo
factorial(5); //Correcto: 120
factorial(8); //Correcto: 40320

console.log("------------------ Fin Ejercicio: Función para calcular el factorial de un número ------------------");