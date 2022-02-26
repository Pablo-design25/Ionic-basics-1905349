console.log("hola, mundo xd");


//Declarar variables
var total = 0; // monto + lo que sumas

var boton = document.getElementById("calcularBtn");
var montoInput = document.getElementById("montoInput");
var monto = montoInput.value;//empieza en ""

var parrafoTotal = document.getElementById("parrafoTotal");

//Lista de elementos del Ticket
var lista = document.getElementById("lista");
var descripcionInput = document.getElementById("descripcionInput"); 
var descripcion = descripcionInput.value; 


//Declarar Funciones
function imprimirMonto() {
    
    monto = parseInt(montoInput.value);
    console.log(monto);
}



function calcularMonto() {
    
     //Imprimir valores en la lista
    /*
        Poner su codigo aqui:

        -Crear un elemento li 
        -Asignarle la propiedad innerText con el valor Descripcion: Monto
    
        -Asignar elemento li al elemento ol
    */
        descripcion = descripcionInput.value; 
    lista = document.createElement("li"); 
    listaElementos.innerText = "descripcion: " + monto; 

    console.log(descripcion);
    //Calcular Total
    monto = parseInt(montoInput.value);
    total = total + monto;
    console.log(total);
   

 //para imprimir con inner sería descripcion + total
    //Imprimir total
    parrafoTotal.innerText = "Total: "  + total;
}

function mensajeClick() {
    //alert("Hiciste click en el boton");
    console.log("Hiciste Click en el boton");
}

