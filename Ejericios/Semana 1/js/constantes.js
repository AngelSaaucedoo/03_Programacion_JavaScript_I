console.log("***Uso de const en JavaScript***");

// 1. Crear una variable web con un valor iniciar
let web = "http://www.google.com";

// 2. Crear una constante ip con un valor fijo
const ip = "192.168.1.100";

// 3. Mostrar resultados iniciales
console.log("Valor de la variable web: " + web);
console.log("Valor de la constante ip: " + ip);

console.log("***Fin uso de const en JavaScript***");


/* ACtualizar varables web Facebook y ip */
//4. Actualizar la variable web
web = "http://www.facebook.com";
console.log("Nuevo valor de la variable web: " + web);

//5. Intentar cambiar el valor de la constante ip (esto generará un error)
try {
    ip = "10.10.1.100"; // Esto generará un error
} catch (error) {
    console.error("Error al intentar cambiar el valor de la constante ip: " + error.message);
}

//5. Mostrar mensaje en pantalla
document.write("<h1>Valor de la variable web: " + web + "</h1>");
document.write("<h1>Valor de la constante ip: " + ip + "</h1>");


