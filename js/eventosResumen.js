let btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
let form = document.getElementById("formFinalizarCompra");
let nombre = document.getElementById("nombreCompra");
let documento = document.getElementById("documentoCompra");
let direccion = document.getElementById("direccionCompra");
let mail = document.getElementById("mailCompra");
let cp = document.getElementById("cpCompra");

btnFinalizarCompra.addEventListener("click",(evento)=>{
    evento.preventDefault();
    validarForm();

})


function validarForm(){
  try {
    if(nombre.value.length < 5){
        throw "Nombre incorrecto!"
    }
    if(documento.value < 1000000){
        throw "Documento incorrecto!"
    }
    if(direccion.value.length < 8){
        throw "Dirección incorrecta!"
    }
    if(mail.value.length < 10){
        throw "Mail incorrecto!"
    }
    if(cp.value.length < 3){
        throw "Mail incorrecto!"
    }
    mensajeExitoso("Compra registrada con exito! Comprobante: " + ((Math.random() + 1).toString(36).substring(2)).toLocaleUpperCase());
    } catch (error) {
        mensajeError(error);
    }
}

function mensajeExitoso(msg){
    swal(msg,{
        title: "Compra Exitosa!",
        icon: "success",
      })
     .then(()=>{
        localStorage.removeItem('carrito')
        history.go(-1)

     })

}

function mensajeError(msg){
    swal(msg,{
        title: "Error!",
        icon: "error"
      })
}