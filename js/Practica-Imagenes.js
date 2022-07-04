

    window.onload = function () {
        
        const IMAGENES = [
                '/images/Practica-Imagenes/imagen1.jpg',
                '/images/Practica-Imagenes/imagen2.jpg',
                '/images/Practica-Imagenes/imagen3.jpg',
                '/images/Practica-Imagenes/imagen4.jpg',
                '/images/Practica-Imagenes/imagen5.jpg'
            ];


        let posicionActual = 0;
        let $botonAtras = document.querySelector('#atras');
        let $botonAdelante = document.querySelector('#adelante');
        let $imagen = document.querySelector('#imagen');

        
        function adelantar() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            mostrarImagen();
        }

        
        function atras() {
            if(posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            mostrarImagen();
        }

        
        function mostrarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }

       
        

        $botonAtras.addEventListener('click', adelantar);
        $botonAdelante.addEventListener('click', atras);

        mostrarImagen();
    } 






















// function cambiar(index){
//     var img = document.getElementById("imagenes");
//     // img.src= imagenes[1]
//     // console.log(index)

//     for(var i = 0; i < imgArray.length;i++){
        
//             if(i === imgArray.length){
//                 document.getElementById("imagenes").src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById("imagenes").src = imgArray[i+1].src;
//             break;
        
//     }
// }

// function cambiar(){
//     var img = document.getElementById("imagenes");
//     for(var i = imgArray.length-1; i >=0 ;i--){
        
//             if(i === imgArray.length){
//                 document.getElementById("imagenes").src = imgArray[4].src;
//                 break;
//             }
//             document.getElementById("imagenes").src = imgArray[i-1].src;
//             break;
        
//     }
// }







// function adelante(){
//     var img = document.getElementById("imagenes");
//     for(var i = 0; i < imgArray.length;i++){
//         if(imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById("imagenes").src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById("imagenes").src = imgArray[i+1].src;
//             break;
//         }
//     }
// }


// function atras(){
//     var img = document.getElementById("imagenes");
//     for(var i = imgArray.length-1; i >=0 ;i--){
//         if(imgArray[i].src == img.src){
//             if(i === imgArray.length){
//                 document.getElementById("imagenes").src = imgArray[4].src;
//                 break;
//             }
//             document.getElementById("imagenes").src = imgArray[i-1].src;
//             break;
//         }
//     }
// }