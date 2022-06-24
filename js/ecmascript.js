/////////////////// variables y constantes////////////////////////
function declararVar() {
    var materia="WEB";

    if (true) {
        var materia = "BD"
        console.log(materia)//BD
    }

    console.log(materia)//BD

}

function declararLet() {
    var materia="WEB";

    if (true) {
        let materia="BD";//LET ASIGNA EL VALOR SOLO A ESTE BLOQUE(EL BLOQUE IF SE GUARDA EL CAMBIO Y MUERE FUERA DE SU BLOQUE)
        console.log(materia)//BD
    }

    console.log(materia)//WEB
    
}

function declararCons() {
    var materia="WEB";

    if (true) {
        const materia="BD";
        console.log(materia)//BD
    }

    console.log(materia)//WEB
    
}

function declararObj() {
    const persona = {
        nombre: "Johann",
        apellido: "Escobar",
        edad: 19,
        colorF: "Azul"
    }
    console.log(persona);
    console.log(persona.apellido);

    persona.nombre= 'Arturo'
    console.log(persona)

    persona.nombre= 'Mario'
    console.log(persona)

    // CONGELA LA VARIABLE PERSONA.NOMBRE PARA QUE NO MODIFIQUE SU VALOR,  CONFIGURABLE: FALSE(NO)   EDITABLE: FALSE(NO)
    Object.defineProperty(persona, "nombre", {configurable:false, writable: false})
    persona.nombre= 'Pablo'
    console.log(persona)
}



/////////////////FUNCIONES LAMDA  REVISAR EN CONSOLE DEL NAVEGADOR////////////////


function sumaNormal(a,b) {      
    return (a+b);
}
console.log(sumaNormal(4,19));

//Funcion flecha return implicito

let sumaFlechaIm = (a,b)=>(a+b);
console.log(sumaFlechaIm(10,10))

//Funcion flecha return explicito
let sumaFlechaEx = (a,b)=>{
    return a+b

}

console.log(sumaFlechaEx(5,5))

//Funcion Flecha con cgl interno
let multiplicacion = (a,b)=>console.log(a*b);
multiplicacion(4,5);



//FUNCION VALORES POR DEFECTO
let usuario = (nombre="Johann", apellido="Escobar")=>{
    console.log("Hola mi nombre es: " +nombre+ " " +apellido);
}

usuario();
usuario("Dominguez");
usuario("Juan", "Perez")




//////TEMPLATE LITERALSS///////////////////////////

let dia = "Martes :(";
let conactenado = `hoy es: ${dia}`
console.log(conactenado);
console.log(`Hoy es: ${dia}`)


let musica = (nombre,artista)=>{
    return `Hola, estoy escuchando ${nombre} de ${artista}`
}
console.log(musica("Amor tumbado","Starset Die for you"))


//SIRVE PARA UN SALTO DE PAGINA(COMO UN LA ETIQUETA <BR> DE HTML)
console.log("Primera linea \n Segunda Linea")

console.log(`PRIMERA LINEA
SEGUNDA LINEA`)



//////////SPREAD  OPERATOR////////////////
let miArreglo=[1,2,3];
let sumarArreglo = (a,b,c) => console.log(a+b+c)
//LOS PUNTOS RECORREN TODO EL ARREGLO COMO UN FOR IN REACH
console.log(miArreglo)
console.log(...miArreglo)

sumarArreglo(...miArreglo)

let otroArray=[10,11,12]
//SE AGREGA OTROARRAY Y PONE LOS NUMERO ARRIBA
let miArreglo2 = [...miArreglo,4,5,6, ...otroArray]
console.log(...miArreglo2)



//////////DESCTRUCTURACION///////////////////


const celular = {
    modelo:"Galaxy  Note 10+",
    marca: "Samsumg ",
    Precio: 10000,
    color: "Blanco",

    memoria:{
        ram:12,
        rom:256
    },
    direccion:{
        calle:"calle",
        colonia:"colonia",
        numero:{
            interior:"100",
            exterior:"2"
        }
    }
}

// let modelo = celular.modelo;
// console.log(`El celular ${modelo} cuesta $${celular.Precio} y tiene ${celular.memoria.ram} de ram`)


// const{marca,color,memoria:{rom}}= celular;
// console.log(`El celular ${marca} es de color ${color} y tiene ${rom}`)

console.log(celular)
console.log(celular.color)
console.log(celular.memoria.ram)
console.log(celular.direccion.numero.interior)



const {color, memoria:{ram}, direccion :{numero}} = celular;
const {interior}=celular;
console.log(color)
// console.log(memoria.ram)
console.log(ram)

/////////////////////// EVENT LISTENERS /////////////////////


// // let elemento = document.getElementById("id-evento")
// let elemento = document.querySelector("#id-evento")
// console.log(elemento)

// elemento.addEventListener("click",()=>alert("Hola desde event listeners"))



///////////////// ASYNC AWAIT //////////////////////////////////////////


const canciones = [
    {
        id:1,
        nombre:"Vete ya",
        artista:"Gallo de oro",
        duracion:120
    },
    {
        id:2,
        nombre: "Neffex",
        artista:"Soldier",
        duracion:160
        
    },
    {
        id:3,
        nombre: "Die for you",
        artista:"Starset",
        duracion:150
        
    }
]


const consultarCanciones = ()=>{
    return canciones;
}


// const consultarCanciones = ()=>{
//     setTimeout(()=>{
//         return canciones;
//     },2000)
// }

// console.log(consultarCanciones())



// const consultarCanciones = ()=>{
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             resolve(canciones)
//         }, 5000);///delay para que se active son 5 segundos 1000=1segundo

//     })
// }

// consultarCanciones().then((canciones)=>{
//     console.log(canciones)
// })



async function misRolitas() { //////await es para que acabe de terminar la promesa para que lo lance
    const listaCanciones = await consultarCanciones();
    console.log(listaCanciones);
}

misRolitas();

