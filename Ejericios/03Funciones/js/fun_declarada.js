function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

//Llamada a la función
var nombreUsuario = prompt("Introduce tu nombre:");
var mensajeSaludo = saludar(nombreUsuario); 
document.write("<h2>" + mensajeSaludo + "</h2>");