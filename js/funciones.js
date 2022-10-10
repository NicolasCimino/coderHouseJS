
function cargarItem(codProducto,talle,cantidad){
   
    let unItem = new Item(listaProductos.find(producto => producto.codProd == codProducto),talle, cantidad);
    miCarrito.agregarItem(unItem);
}

function limpiarCarrito(id){
    miCarrito.limpiarCarrito();
    mostrarCarrito(id.toString());
}


function mostrarCarrito(id){
    let tablaCarrito = document.getElementById(id.toString());
    tablaCarrito.innerHTML = "";
    let Total = 0;
    miCarrito.items.forEach(element => {
    tablaCarrito.innerHTML += `     
                    <tr>
                        <th scope="row"><img class="imgIcon" src="${element.producto.rutaImg}" alt=""></th>
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
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>TOTAL</strong></td>
                        <td><strong>${Total}</strong></td>
                    </tr>`
 }


/***** Calculo de talle ******/
function calcularTalle(){
    let peso = parseInt(prompt("ingrese su peso en Kg"));
    let altura= parseFloat(prompt("ingrese su altura en m"));
    if(isNaN(peso) || isNaN(altura) || peso < '20' || peso > 180 || altura < 1 || altura > 2.5){
        alert("error");
    }
    else{
        let talle = tablaTalle(peso,altura);
        alert("Su talle es "+talle);
    }

}

function tablaTalle(peso,altura){
    let imc = peso/(altura*altura);
    let talle;
    if(imc<20){
        talle = "S"
    }
    if(imc>=20 && imc< 25){
        talle = "M"
    }
    if(imc>=25 && imc< 30){
        talle = "L"
    }
    if(imc >= 30){
        talle = "XL"
    }
    return talle;
}


/**** Filtro **************/
function ocultarTipoProducto(tipo){
    let elemento = document.getElementsByClassName(tipo);
    for(var i = 0; i < elemento.length; i++)
    {
        elemento[i].style.display = "none";
    }
}

function verTipoProducto(tipo){
    let elemento = document.getElementsByClassName(tipo);
    for(var i = 0; i < elemento.length; i++)
    {
        elemento[i].style.display = "flex";
    }
}

function filtroTipoProducto(tipo){
    for(tipoProducto of listaTipoProductos){
        if(tipoProducto === tipo){
            verTipoProducto(tipo);
        }else
        {
            if(tipo === "mostrarTodos"){
                verTipoProducto(tipoProducto);
            }else{
                ocultarTipoProducto(tipoProducto);
            }
            
        }
    }
   
}
