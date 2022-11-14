
let dolarOficial= new cotizacion();
let dolarBlue = new cotizacion();

/// getCotizacion trae desde una api las cotizaciones del dolar
/// solo se guardan los datos de compra y venta del dolar oficial y el blue
////

 function  getCotizacion (){
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(resp => { return resp.json()})
    .then(json=> {
        dolarOficial.compra = json[0].casa.compra
        dolarOficial.venta = json[0].casa.venta
        dolarBlue.compra = json[1].casa.compra;
        dolarBlue.venta = json[1].casa.venta;
    })
}

function actualizarCotizacion(){
   
    let cotizaciones = document.getElementById('cotizaciones');
    cotizaciones.innerHTML = "";
    cotizaciones.innerHTML += ` <div class="Cotizaciones">                               
                                        <p><strong>Dolar Oficial:</strong></p>
                                        <p>Compra: ${dolarOficial.compra}</p>
                                        <p>Venta: ${dolarOficial.compra}</p>
                                        <p><strong>Dolar Blue: </strong></p>
                                        <p>Compra: ${dolarBlue.compra}</p>
                                        <p>Venta: ${dolarBlue.venta}</p>
                                </div>
    `;
}

getCotizacion();

setTimeout(()=>{
   actualizarCotizacion()
},5000)





