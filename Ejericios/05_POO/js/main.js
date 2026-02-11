const _privado = new WeakMap(); // Crea un WeakMap para almacenar las propiedades privadas de los objetos

class Libro {
    constructor(precio, titulo, autor) { // Constructor para inicializar las propiedades del libro
        const propiedades = { // Crea un objeto con las propiedades del libro
            _precio: precio,
            _titulo: titulo,
            _autor: autor
        };
        _privado.set(this, propiedades); // Almacena las propiedades en el WeakMap
    }

    //Getters y Setters
    get titulo() { // Getter para obtener el título del libro _ para acceder a la propiedad privada del título almacenada en el WeakMap
        return _privado.get(this)._titulo; // Devuelve el título almacenado en el WeakMap
    }

    set titulo(nuevoTitulo) { // Setter para establecer un nuevo título para el libro
        _privado.get(this)._titulo = nuevoTitulo; // Actualiza el título en el WeakMap
    }

    get autor() { // Getter para obtener el autor del libro
        return _privado.get(this)._autor; // Devuelve el autor almacenado en el WeakMap
    }

    set autor(nuevoAutor) { // Setter para establecer un nuevo autor para el libro
        _privado.get(this)._autor = nuevoAutor; // Actualiza el autor en el WeakMap
    }

    get precio() { // Getter para obtener el precio del libro
        return _privado.get(this)._precio; // Devuelve el precio almacenado en el WeakMap
    }

    set precio(nuevoPrecio) { // Setter para establecer un nuevo precio para el libro
        _privado.get(this)._precio = nuevoPrecio; // Actualiza el precio en el WeakMap
    }   

    obtenerTodosLosDatos() { // Método para obtener todos los datos del libro, imprimiéndolos en consola
        const propiedades = _privado.get(this); // Obtiene las propiedades del libro desde el WeakMap
        return console.log(`Título: ${propiedades._titulo}, Autor: ${propiedades._autor}, Precio: $${propiedades._precio}`); // Devuelve una cadena con todos los datos del libro
    }
}

//Imprimir en consola getters y setters. hacer que cuando la clase hija no imprima los datos de la clase padre
console.log("**Herencia de Libro - Padre**");
const libro1 = new Libro(19.99, "JavaScript I", "Unknown"); // Crea una instancia de la clase Libro
libro1.obtenerTodosLosDatos(); // Imprime los datos del libro en consola
console.log("**FIN Herencia de Libro - Padre**");