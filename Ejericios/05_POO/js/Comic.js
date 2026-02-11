//Herencia. Libro es la clase padre o superclase, y Comic es la clase hija o subclase que hereda las propiedades y métodos de Libro. La clase Comic puede tener sus propias propiedades y métodos adicionales, además de los heredados de Libro.
class Comic extends Libro { // Define la clase Comic que hereda de la clase Libro
    constructor(precio, titulo, autor, ilustrador) { // Constructor para inicializar las propiedades del cómic
        super(precio, titulo, autor); // Llama al constructor de la clase padre (Libro) para inicializar las propiedades heredadas. super() es necesario para acceder a las propiedades y métodos de la clase padre.
        this._ilustrador = ilustrador; // Inicializa la propiedad específica del cómic (ilustrador)
    }

    //arreglo como parametro
    agregarIlustrador(nuevosIlustradores) { // Método para agregar o actualizar el ilustrador del cómic
        this._ilustradores.push(...nuevosIlustradores); // Agerga los nuevos ilustradores al arreglo de ilustradores utilizando el operador spread (...) para expandir el arreglo de nuevos ilustradores y agregarlos al arreglo existente de ilustradores.
    }

    obtenerTodosLosDatosC() { // Método para obtener todos los datos del cómic, incluyendo los datos heredados del libro y el ilustrador específico del cómic
        super.obtenerTodosLosDatos();
        console.log(`Ilustrador: ${this._ilustrador}`);
    }
}

//Imprimir en consola getters y setters
console.log("**Herencia de Comic - Hijo**");
const comic1 = new Comic(9.99, "Spider Man", "Stan Lee", "Steve Ditko"); // Crea una instancia de la clase Comic
comic1.obtenerTodosLosDatosC(); // Imprime los datos del cómic en consola
console.log("**FIN Herencia de Comic - Hijo**");
