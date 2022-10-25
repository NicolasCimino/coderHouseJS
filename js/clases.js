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
}

let miCarrito = new Carrito();
if(JSON.parse(localStorage.getItem('carrito')))
{
    miCarrito = JSON.parse(localStorage.getItem('carrito'));
}


const listaTipoProductos = ["productoTipoRemera","productoTipoShorts","productoTipoMedias"];
const listaProductos = [new Producto("productoTipoRemera","Remera Azul","./imagenes/remeraAzul.jpg",1200,"5"),
                        new Producto("productoTipoRemera","Remera Negra","./imagenes/remeraNegra.jpg",1100,"1"),
                        new Producto("productoTipoRemera","Remera Roja","./imagenes/remeraRoja.jpg",1300,"3"),
                        new Producto("productoTipoShorts","Short Negro","./imagenes/shortNegro.jpg",1500,"4"),
                        new Producto("productoTipoShorts","Short Verde","./imagenes/shortVerde.jpg",1500,"2"),
                        new Producto("productoTipoMedias","Medias Cortas","./imagenes/mediasCortas.jpg",1000,"6"),
                        new Producto("productoTipoMedias","Medias Largas","./imagenes/mediasLargas.jpg",1100,"7")
                        ];
