let btnCargar1 = document.getElementById("btnCargar1");
let btnCargar2 = document.getElementById("btnCargar2");
let btnCargar3 = document.getElementById("btnCargar3");
let btnCargar4 = document.getElementById("btnCargar4");
let btnCargar5 = document.getElementById("btnCargar5");
let btnCargar6 = document.getElementById("btnCargar6");
let btnCargar7 = document.getElementById("btnCargar7");

btnCargar1.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad1").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("1",document.getElementById("talle1").value,cantidad);
            document.getElementById("cantidad1").value = 0;
        }       
    }
})

btnCargar2.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad2").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("2",document.getElementById("talle2").value,cantidad);
            document.getElementById("cantidad2").value = 0;
        }       
    } 
})

btnCargar3.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad3").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("3",document.getElementById("talle3").value,cantidad);
            document.getElementById("cantidad3").value = 0;
        }       
    } 
})

btnCargar4.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad4").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("4",document.getElementById("talle4").value,cantidad);
            document.getElementById("cantidad4").value = 0;
        }       
    }
})

btnCargar5.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad5").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("5",document.getElementById("talle5").value,cantidad);
            document.getElementById("cantidad5").value = 0;
        }       
    } 
})

btnCargar6.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad6").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("6",document.getElementById("talle6").value,cantidad);
            document.getElementById("cantidad6").value = 0;
        }       
    } 
})

btnCargar6.addEventListener("click", (evento)=>
{
    evento.preventDefault();
    let cantidad = document.getElementById("cantidad7").value
    if(cantidad <1){
    alert("Cantidad no puede ser 0");
    }
    else{
        if(cantidad > 12){
            alert("Cantidad no puede ser mayor que 12");
        }
        else{
            cargarItem("7",document.getElementById("talle7").value,cantidad);
            document.getElementById("cantidad7").value = 0;
        }       
    } 
})




