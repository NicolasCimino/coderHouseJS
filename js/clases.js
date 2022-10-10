class Producto{
    tipo;
    nombre;
    rutaImg;
    precio;
    codProd;

    constructor(Tipo,Nombre,RutaImg,Precio,CodProd){
        this.tipo = Tipo;
        this.nombre = Nombre;
        this.rutaImg = RutaImg;
        this.precio = Precio;
        this.codProd = CodProd;
    }
}

class Item{
    producto;
    cantidad;
    talle;
    constructor(Producto,Talle,Cantidad){
        this.producto = Producto;
        this.talle=Talle;
        this.cantidad = Cantidad;
    }
}

class Carrito{
    items = [];

    agregarItem(item){
        this.items.push(item)
    }
    limpiarCarrito(){
        this.items = [];
    }
}

const miCarrito = new Carrito();
const listaTipoProductos = ["productoTipoRemera","productoTipoShorts"];
const listaProductos = [new Producto("productoTipoRemera","Remera Azul","./imagenes/remeraAzul.jpg",1200,"5"),
                        new Producto("productoTipoRemera","Remera Negra","./imagenes/remeraNegra.jpg",1100,"1"),
                        new Producto("productoTipoRemera","Remera Roja","./imagenes/remeraRoja.jpg",1300,"3"),
                        new Producto("productoTipoShorts","Short Negro","./imagenes/shortNegro.jpg",1500,"4"),
                        new Producto("productoTipoShorts","Short Verde","./imagenes/shortVerde.jpg",1500,"2")
                        ];
