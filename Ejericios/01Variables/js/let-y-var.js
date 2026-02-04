/* Parte Guida 2: Uso de let y var */
console.log("***Uso de let y var en JavaScript***");
var numero = 30;
console.log(numero); // 30

if (true) {
    let numero = 40;   // nueva variable con scope de bloque
    console.log(numero); // 40 (esta es la variable interna)
}

console.log(numero); // 30 (la var externa no fue cambiada)

/*
Declaraste var numero = 30 en el scope exterior. 
Dentro del if se crea un scope de bloque y let numero = 40 
crea una nueva variable que solo existe dentro de ese bloque (oculta o "shadowing" a la externa).
Al salir del bloque la let deja de existir y console.log vuelve a ver la var exterior con valor 30
*/



//Prueba con let
var texto = "Curso de JS"
console.log(texto); // valor esperado "Curso de JS"
if (true) {
    let texto = "Curso de PHP"
    console.log(texto); // valor esperado "Curso de PHP"
}

console.log(texto); // ¿Cual es el valor de la variable texto? R= "Curso de JS"
console.log("***Fin Uso de let y var en JavaScript***");