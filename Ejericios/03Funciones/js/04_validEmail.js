console.log("----Ejercicio 4: Validar email---");
const validarEmail = function (email="") {
    //Validacion 1: undefined
    if (!email) { //Valida si el email es undefined, null, vacio, 0, false
        console.warn("No ingresaste un email.");
        return;
    }
    else if (typeof email !== "string") { //Valida si el email no es un string - typeof valida el tipo de dato
        console.error("El valor ingresado no es un string.");
        return;
    }
    else if (!email.includes("@")) { //Valida si el email no contiene el caracter "@" - includes valida si un string contiene un caracter o una cadena de caracteres
        console.warn("El email ingresado no es válido, debe contener '@'.");
        return;
    }
    else if (email.startsWith("@") || email.endsWith("@")) { //Valida si el email comienza o termina con "@" - startsWith valida si un string comienza con un caracter o una cadena de caracteres, endsWith valida si un string termina con un caracter o una cadena de caracteres
        console.warn("El email ingresado no es válido, no puede comenzar o terminar con '@'.");
        return;
    }
    //expresion regular para validar el formato del email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { //Valida si el email no tiene un formato válido - la expresión regular valida que el email tenga un formato correcto, es decir, que tenga un nombre de usuario, un dominio y una extensión separados por un punto.
        console.warn(`El email ingresado ${email} no es válido, formato incorrecto.`);
        return;
    }
    else {
        console.log(`Email ingresado: ${email} es válido.`);
    }

}

validarEmail(); //Error: no ingresaste un email.
validarEmail(undefined); //Error: no ingresaste un email.S 
validarEmail(null); //Error: no ingresaste un email.
validarEmail(123); //Error: el valor ingresado no es un string.
validarEmail("correo"); //Error: el email ingresado no es válido, debe contener '@'.    
validarEmail("@correo.com"); //Error: el email ingresado no es válido, no puede comenzar o terminar con '@'.
validarEmail("correo.com@"); //Error: el email ingresado no es válido, no puede comenzar o terminar con '@'.
validarEmail("correo@com"); //Error: el email ingresado no es válido, formato incorrecto.
validarEmail("angel@gmail.com"); //Email ingresado:
validarEmail("angel_saucedo@gmail.com"); //Email ingresado:

console.log("----Fin Ejercicio 4: Validar email---");