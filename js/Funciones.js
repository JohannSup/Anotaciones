ARCHIVO 
function HolaMundo(){
    alert("Hola desde funciones.js")

}


function variablesSimples(){
   var numero1 = 5;
   var numero2 = prompt("numero a multiplicar");

    var resultado = numero1 * numero2;

    alert("Resultado de la multiplicacion es: "+resultado)
}


function variablesString() {
    // str significa STRING
    var str = new String();   
    str = "Arturo";

    // lenght ve el tamaño de letras que hay
    alert("El tamaño de la palabra "+str.length);
    // charAt selecciona la primera letra iniciando por 0 zero de la palabra
    alert("El primer caracter "+str.charAt(0))
    // pasa a mayusculas bruh
    alert("Cambio a mayusculas: "+str.toUpperCase());
}


function variablesDate(){
    var fecha= new Date();
    var hora= fecha.getHours();
    var minutos=fecha.getMinutes();
    var seg=fecha.getSeconds();
    alert(hora+":"+minutos+":"+seg);

    if (hora<12 && hora>0) {
        alert("Buenos dias")
        
    } else {
        alert("Buenas tardes ya.....")
        
    }
    
}

// ARCHIVO LLAMADAS

function llamarId(){
    var id = document.getElementById('idicito')
    alert(id.innerHTML);

}






