/// Funcion para agregar un item al carrito
/// recupero un producto atraves del codProducto y genero un item 
/// cargo el item en mi carrito y actualizo el localStorage
function cargarItem(codProducto,talle,cantidad){
    let unItem = new Item(listaProductos.find(producto => producto.codProd == codProducto),talle, cantidad);
    miCarrito.push(unItem);
    localStorage.setItem("carrito",(JSON.stringify(miCarrito)));
    document.getElementById("btnComprar").style.visibility = "visible" ;
    toastifyItemAdd();
}


/// Funcion para vaciar el carrito
/// Se limpia la variable miCarrito y se actualiza en localStorage

function limpiarCarrito(id){
    miCarrito = [];
    mostrarCarrito(id.toString());
    localStorage.removeItem("carrito")
    document.getElementById("btnComprar").style.visibility = "hidden" ;
    toastifyCarritoClear();
}

/// Funcion para elimir un item del carrito

function quitarItemCarrito(cod,talle,cantidad){
    miCarrito = miCarrito.filter((item)=>
        (item.producto.codProd != cod || item.talle != talle || item.cantidad != cantidad)
    )
    if(miCarrito.length == 0){
        localStorage.removeItem("carrito")
        document.getElementById("btnComprar").style.visibility = "hidden" ;
    }
    else{
        localStorage.setItem("carrito",(JSON.stringify(miCarrito)));
        
    }
    mostrarCarrito('tablaCarrito');
    toastifyItemRemove();
}


///Funcion mostrar el carrito
/// si el carrito esta vacio, genero en el "ID" una tabla vacia
/// Si el carrito contiene item, se hace el llamado a la funcion generarTablaCarrito()

function mostrarCarrito(id)
{
    new Promise((resolve,reject)=>{
        if(miCarrito.length > 0)
        {
            resolve(id)
        }
        else
        {
            reject(id)
        }

    })
    .then((resultado)=>{
        generarTablaCarrito(resultado);
    })
    .catch((resultado)=>{
        let tablaCarrito = document.getElementById(resultado);
        tablaCarrito.innerHTML = "";
        tablaCarrito.innerHTML += `     
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>`

    })
}

/// Funcion que muestra el contenido del carrito en una tabla
function generarTablaCarrito(id){
    let tablaCarrito = document.getElementById(id.toString());
    tablaCarrito.innerHTML = "";
    let Total = 0;
    miCarrito.forEach(element => {
    tablaCarrito.innerHTML += `     
                    <tr>
                        <th scope="row"><img class="imgIcon" src="${element.producto.rutaImg}" alt=""></th>
                        <td>${element.producto.nombre}</td>
                        <td>${element.cantidad}</td>
                        <td>${element.talle}</td>
                        <td>${element.producto.precio}</td>
                        <td>${element.producto.precio * element.cantidad}</td>
                        <td><button type="button" class="btn btn-danger" onclick="quitarItemCarrito(${element.producto.codProd},'${element.talle}',${element.cantidad})">x</button></td>
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
                        <td></td>
                    </tr>`
 }


function toastifyItemAdd(){
    Toastify({
        text: "Item cargado",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(262deg, rgba(140,172,130,1) 12%, rgba(35,143,54,1) 76%)",
          }
        }).showToast();
}

function toastifyItemRemove(){
    Toastify({
        text: "Item eliminado",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(142deg, rgba(255,60,60,1) 56%, rgba(212,96,96,1) 88%)",
          } 
        }).showToast();
}

function toastifyCarritoClear(){
    Toastify({
        text: "Se vacio el carrito",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "linear-gradient(142deg, rgba(255,60,60,1) 56%, rgba(212,96,96,1) 88%)",
          } 
        }).showToast();
}


/***** Calculo de talle ******/
function calcularTalle(){
let altura;
let peso;
    swal({
        title: "TABLA DE TALLES",
        content: {
            element: "input",
            attributes: {
              placeholder: "Altura en m",
              type: "string"
            },           
          },
      })
      .then((alt)=>{
        if( isNaN(alt) || alt < 1 || alt > 2.5) 
        {
            throw "Altura incorrecta"
        }
        altura = alt;
        swal({
            title: "TABLA DE TALLES",
            content: {
                element: "input",
                attributes: {
                  placeholder: "Peso en KG",
                  type: "string"
                },
              },
        })
        .then((p)=>{
            if( isNaN(p) ||p < 20 || p > 180 ) 
            {
                throw "Peso incorrecto"
            }
            peso = p;
            swal("Talle sugerido: " + tablaTalle(peso,altura));
            })
        .catch((msgError)=>{
            swal(msgError,{
                icon: "error",   
            });
            })
        })
    .catch((msgError)=>{
        swal(msgError,{
            icon: "error",   
        });
      })
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


// armo un array con elementos hmtl de una clase, para recorrerlo y ocultar cada elemento
function ocultarTipoProducto(tipo){
    let elemento = document.getElementsByClassName(tipo);
    for(var i = 0; i < elemento.length; i++)
    {
        elemento[i].style.display = "none";
    }
}
// armo un array con elementos hmtl de una clase, para recorrerlo y dejarlos visibles con display flex
function verTipoProducto(tipo){
    let elemento = document.getElementsByClassName(tipo);
    for(var i = 0; i < elemento.length; i++)
    {
        elemento[i].style.display = "flex";
    }
}

// Funcion para realizar el filtrado de productos por tipo de producto
// recorro la lista de tipo de productos y verifico si ese tipo debe ser mostrado u ocultado
function filtroTipoProducto(tipo){
    for(tipoProducto of listaTipoProductos){
        if(tipoProducto === tipo || tipo === "mostrarTodos"){
            verTipoProducto(tipoProducto);
        }else
        {
                ocultarTipoProducto(tipoProducto);
        }
    }
}

