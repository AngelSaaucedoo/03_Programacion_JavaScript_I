class CarritoCompras {constructor() {
        this.productos = [];
    }

    //14
    agregarProducto(cantidad, precio) { //moderno
        this.productos.push(...Array(cantidad).fill(precio))
    }

    agregarProductofor(cantidad, precio) {
    for (let i = 0; i < cantidad; i++) {
        this.productos.push(precio);
    }
}

    //15 mostrar productos
    mostrarProductos(){
        console.log(this.productos)
    }

    //calcular total con funcion flecha
    calcTotal () { //moderno
        return this.productos.reduce((ac, precio) => ac + precio, 0)
    }

    calcTotalfor() { //principiante :(
    let ac = 0;
    for (let precio = 0; precio < this.productos.length; precio++) {
        ac = ac + this.productos[precio];
    }
    return ac;
    }

    //imprimir ticket
    imprimirTicket(){
        console.log(`Total a pagar $${this.calcTotal()}`)
    }
}


// Pruebas
const comprar = new CarritoCompras();
comprar.agregarProducto(2, 150);
comprar.mostrarProductos();
console.log(comprar.calcTotal()); 
comprar.agregarProducto(1, 50);
console.log(comprar.calcTotalfor());
comprar.agregarProductofor(1,150)
console.log(comprar.calcTotalfor())
comprar.imprimirTicket()
