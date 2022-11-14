let miCarrito = JSON.parse(localStorage.getItem('carrito'));

function resumenCompra(){
    let tablaCarrito = document.getElementById('resumenCompra');
    tablaCarrito.innerHTML = "";
    let Total = 0;
    miCarrito.forEach(element => {
    tablaCarrito.innerHTML += `     
                    <tr>
                        <td>${element.producto.nombre}</td>
                        <td>${element.cantidad}</td>
                        <td>${element.talle}</td>
                        <td>${element.producto.precio}</td>
                        <td>${element.producto.precio * element.cantidad}</td>
                      </tr>`
    Total+= element.producto.precio * element.cantidad;
    });
    tablaCarrito.innerHTML+= `     
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>TOTAL</strong></td>
                        <td><strong>${Total}</strong></td>
                        <td></td>
                    </tr>`

}

resumenCompra();