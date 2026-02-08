const juego = {
  0: "piedra",
  1: "papel",
  2: "tijera",
  nombreJugadores: {
    jugador1: "jugador1",
    jugador2: "computadora",
  },

  score: {
    puntosJ1: 0,
    puntosJ2: 0,
  },
};
//Reto 1: Que devuelve juego.opciones[1]
console.log(juego[1]);

//Reto 2 cambiar el nombre del jugador 1 a "Alex"
//juego.nombreJugadores.jugador1 = "Alex";

//Reto 3: Solicita el nmbre del jugador mediante una ventana emergente, funcion flecha
const solicitarNombre = () => prompt("Cual es tu nombre?:"); // Solicita el nombre del jugador mediante una ventana emergente

const cambiarNombre = (nuevoNombre) => {
  console.log(`Tu nombre es: ${nuevoNombre}`); // Imprime el nombre del jugador en la consola
  const regexValide = /[A-Za-z]/; // Expresión regular para validar que el nombre contenga solo letras

  if (regexValide.test(nuevoNombre)) { // Valida que el nombre contenga solo letras con el método test() del objeto RegExp
    juego.nombreJugadores.jugador1 = nuevoNombre;
    console.log(`Bienvenido jugador: ${juego.nombreJugadores.jugador1}`); // Imprime el nuevo nombre del jugador 1 en la consola
  } else {
    juego.nombreJugadores.jugador1 = "DefaultPlayer";
    console.warn("El nombre no es válido. Se asignará el nombre por defecto: DefaultPlayer"); // Imprime un mensaje de advertencia si el nombre no es válido
  }
};

const nombreJugador = solicitarNombre(); // Solicita el nombre del jugador
cambiarNombre(nombreJugador); // Cambia el nombre del jugador con el nombre ingresado

//Funcion que genere un numero alatorio entre 0 y 2 //match.random redondeado entero // pasrsetoString
const generarAleatorio = function() { return String(Math.floor(Math.random() * 3)); };  // Math.floor() redondea hacia abajo en decimal y Math.random() multiplica por 3 para obtener un número entre 0 y 2
//example Math.random() = 0.555 -> \(0.555\times 3=1.665\) -> Math.floor(1.665) = 1
console.log(`Número aleatorio generado: ${generarAleatorio()}`); // Imprime el número aleatorio generado en la consola

const imprimirManoAleatoria = function() {  
    const numero = generarAleatorio(); // Genera un número aleatorio entre 0 y 2
    return juego[numero] // Imprime la mano aleatoria de la computadora utilizando el número generado como índice para acceder al objeto juego
}; 
console.log(`La computadora eligió: ${imprimirManoAleatoria()}`); // Imprime la mano aleatoria de la computadora en la consola

//Jugador1 elige piedra, papel o tijera mediante una ventana emergente
const elegirMano = () => prompt("Elige 0 piedra, 1 papel o 2 tijera:"); // Solicista al jugador que elija piedra, papel o tijera mediante una ventana emergente
//console.log(`Jugador 1 eligió: ${juego[elegirMano()]}`); // Imprime la mano elegida por el jugador 1 en la consola

//Reto 4: Crear una función que determine el ganador del juego, utilizando condicionales if-else, usar score
const imprimirResultado = function(puntosJ1, puntosJ2) {
  if (puntosJ2 > puntosJ1) {
    console.log("Fin del juego gana" + juego.nombreJugadores.jugador2 + " -- Game Over");
  } else if (puntosJ1 > puntosJ2) {
    console.log("Fin del juego gana " + juego.nombreJugadores.jugador1 + "puntos" + juego.score.puntosJ1 + " -- Felicidades");
    } else {
    console.log("Empate -- Vuelve a jugar");
  } 
};

//Prueba de la función imprimirResultado con diferentes puntajes
//console.log("******Prueba de la función imprimirResultado con diferentes puntajes:******");
//cambiarNombre(solicitarNombre()); // Cambia el nombre del jugador con el nombre ingresado
//console.log(imprimirManoAleatoria()); // Imprime la mano elegida por el jugador 1 en la consola
//imprimirManoAleatoria(); // Imprime la mano aleatoria de la computadora en la consola
//imprimirResultado(6, 6); // Cambiar valores para probar diferentes escenarios
//imprimirResultado(juego.score.puntosJ1, juego.score.puntosJ2); // Imprime el resultado del juego en la consola
//console.log("******Fin de la prueba de la función imprimirResultado:******");

//Reto 8
const evalua = function(eleccionJugador, eleccionComputadora) {
    let gana = 0;

    if (eleccionJugador === eleccionComputadora) {
        gana = 0; // Empate
        console.log(eleccionJugador + " vs " + eleccionComputadora + " -- Empate");
    } else if ((eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
               (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
               (eleccionJugador === "tijera" && eleccionComputadora === "papel")) 
    {
        juego.score.puntosJ1+=1; // Jugador gana
        console.log(eleccionJugador + " vs " + eleccionComputadora + " -- Gana el jugador");
    } else {
        juego.score.puntosJ2+=1 ; // Computadora gana
        console.log(eleccionJugador + " vs " + eleccionComputadora + " -- Gana la computadora");
    }  
    return gana; // Devuelve el resultado del juego: 0 para empate, 1 para jugador gana, 2 para computadora gana
};
//Prueba de la función evalua con diferentes combinaciones de elecciones
console.log("******Prueba de la función evalua con diferentes combinaciones de elecciones:******");
console.log(evalua("piedra", "tijera")); // Jugador gana
console.log(evalua("piedra", "papel")); // Computadora gana
console.log(evalua("papel", "tijera"));
console.log('******Fin de la prueba de la función evalua:******');

//Muestra el marcado despues de cada ronda
const resultado = function(gana) {
    const j1 = juego.nombreJugadores.jugador1;
    const j2 = juego.nombreJugadores.jugador2;
    const p1 = juego.score.puntosJ1;
    const p2 = juego.score.puntosJ2;
    console.log(`Marcador: ${j1} ${p1} - ${j2} ${p2}`)
    if (gana === 0) {
        console.log(`${j1} : ${p1} y ${j2} : ${p2} `);
    } else if (gana === 1) {
        console.log(`${j1} : ${p1} y ${j2} : ${p2}`);
    } else {
        console.log(`${j1} : ${p1} y ${j2} : ${p2}`);
    }
};

//Funcion Principal Juego
const main = function() {
    while (juego.score.puntosJ1 < 3 && juego.score.puntosJ2 < 3) {

        const jugadorHand = imprimirManoAleatoria();
        const computadoraHand = imprimirManoAleatoria();

        console.log(`${juego.nombreJugadores.jugador1} elige: ${jugadorHand}`);
        console.log(`${juego.nombreJugadores.jugador2} elige: ${computadoraHand}`);

        evalua(jugadorHand, computadoraHand);
        imprimirResultado(juego.score.puntosJ1, juego.score.puntosJ2);
       
        if (juego.score.puntosJ1 === 3 || juego.score.puntosJ2 === 3) {
            ///imprimirResultado(juego.score.puntosJ1, juego.score.puntosJ2);
            break; //Sale del bucle si alguno de los jugadores alcanza 3 puntos
        }
    } 
};


//Iniciar jeugo
cambiarNombre(solicitarNombre()); // Cambia el nombre del jugador con el nombre ingresado
console.log(`******** Que comience el juego`); // Imprime un mensaje de bienvenida al jugador con su nombre
main(); // Ejecuta la función principal del juego