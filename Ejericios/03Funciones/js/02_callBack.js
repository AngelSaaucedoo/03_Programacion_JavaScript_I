console.log("****Ejercicios de Funciones - Callbacks****");

// Función que recibe otra función como callback
const pelicula = function (nombre) {
  return `El nombre de la película es: ${nombre}`;
};
console.log(pelicula("Avengers"));

function sumame(a, b) {
  const suma = a + b;
  console.log("La suma es:", suma);
}
sumame(2, 4);

function sumameCallback(a, b, sumaYMuestra, sumaPorDos) {
  const suma = a + b;
  sumaYMuestra(suma);
  sumaPorDos(suma*2);
}

sumameCallback(3, 5,
    function (resultado) {
      console.log("sumameCallback - La suma es:", resultado);
    },
    function (dato) {
      console.log("sumameCallback -La suma por dos con callback es:", dato);
    }
);


console.log("****FIN Ejercicios de Funciones - Callbacks****");
