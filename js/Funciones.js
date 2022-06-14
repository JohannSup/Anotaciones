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
    var fecha= new Date(); //esto recibira la fecha actual de la PC
    var hora= fecha.getHours();// HORA EXACTA DE TU PC
    var minutos=fecha.getMinutes();//MINUTO EXCACTO DE TU PC
    var seg=fecha.getSeconds();//SEGUNDOS 
    alert(hora+":"+minutos+":"+seg);

    if (hora<12 && hora>0) {
        alert("Buenos dias")
        
    } else {
        alert("Buenas tardes ya.....")
        
    }
    
}

// ARCHIVO LLAMADAS

function LLamarId(){
    var elemento = document.getElementById('idicito')
    console.log(elemento)
    alert(elemento.innerHTML);
    elemento.style.color="red";
    elemento.style.backgroundColor="black"

}



function llamarNombre() {
    var elemento = document.getElementsByName('nombrecito');
    console.log(elemento);
    // para hacer que se modifique el segundo h2 hay que seleccionarlo como un arreglo variable[0],variable[1],variable[2]
    // empezando por cero
    alert(elemento[1].innerHTML) //esto seleccionara el SEGUNDO h2 Y  MOSTRARA LA ALERTA
    alert(elemento[2].innerHTML) //esto seleccionara el SEGUNDO h2 y MOSTRARA LA ALERTA

    // ESTO SE ACTIVARA DESPUES DEL ALERT
    elemento[0].style.color="orange"; //esto seleccionara el PRIMER h2 y le cambiara la propiedad
    elemento[1].style.color="blue"; //
    elemento[2].style.backgroundColor="red";
    
}



function llamarClase() {
    var elemento = document.getElementsByClassName('verdecito');
    console.log(elemento);

    //en esta funcion hay 3 botones y un h2 y para que modifique a todos por igual hacer un for
    //Los cambios se realizaran despues de accionar el boton
    for(var i = 0;i<elemento.length;i++){
            elemento[i].style.backgroundColor="#0EF0B9"; //pones el color o la hexadecimal de color
            elemento[i].style.color="white";

    }
    
}


function llamarEtiqueta() {
    var elemento = document.getElementsByTagName('button') //la etiqueta seleccionara a todos los botones de la pagina
    console.log(elemento)

    for(var i = 0;i<elemento.length;i++){
        elemento[i].style.border="solid";//tipo de borde de botones
        elemento[i].style.borderColor="red";// color del borde
        elemento[i].style.borderRadius="10px"//modificar las esquinas de los botones
}
    
}


///HTML MODIFICACION


function crearElementos() {
    var elemento = document.getElementById('id-div');
    ///se puede crear un boton dentro de otro boton
    elemento.innerHTML ='<br> <button  onclick="modificarElemento()"  >Modificacion</button> </br>';

}

//onclick="modificarElemento()" este se guarda y se puede llamar en otra funcion como la de abajo
function modificarElemento() {
    var elemento = document.getElementById('btn1');
    elemento.innerHTML = "Boton cambiado"
    
}