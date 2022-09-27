class Usuario{
    constructor(Usuario,Pass){
        this.usuario = Usuario;
        this.pass = Pass;
    }
    estado = false;

    login = function(){
        this.estado = true;
    }
    logout = function(){
        this.estado = false;
    }
}

let listaTipoProductos = ["productoTipoRemera","productoTipoShorts"]

function login(){
    let usuarioLogueado = new Usuario(undefined,undefined);
    do {
        usuarioLogueado.usuario = prompt("ingrese el usuario");
        usuarioLogueado.pass = prompt("ingrese la contraseña");
        if(usuarioLogueado.usuario === "nicolas" && usuarioLogueado.pass === "1234"){
            alert("Bienvenido " + usuarioLogueado.usuario);
            usuarioLogueado.login();
        }
        else{

            alert("usuario incorrecto");
        }

    } while (!usuarioLogueado.estado);
   
    let stringHTML = "";
    stringHTML = stringHTML.concat("<h1>Bienvenido " + usuarioLogueado.usuario +"</h1>");
    document.getElementById("usuario").innerHTML = stringHTML;
}

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