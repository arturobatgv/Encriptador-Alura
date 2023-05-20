// Variable para extraer el texto que ingreso el Usuario a encriptar
const textUsuario = document.querySelector(".cajaTexto");
// Variable para regresar el texto encriptado
const textResultado = document.querySelector(".cajaMensaje");


/* Funcion que sirve para validar que La letra "e" es convertida para "enter", La letra "i" es convertida 
para "imes", La letra "a" es convertida para "ai", La letra "o" es convertida para "ober",La letra "u" es 
convertida para "ufat" */
function encriptar(cadenaUsuario){
    // Declaramos una variable tipo arreglo de dos dimensiones, con sus respectivas letras y cambios
    let letraEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Permite convertir las letras del texto en minúsculas
    cadenaUsuario = cadenaUsuario.toLowerCase();
    //Colocamos una iteración para revisar la cadena de caracteres y contrastar contra nuestro arreglo
    for(let i = 0; i < letraEncriptar.length; i ++){
        //Se declara una condución, si el for encuentra que el texto  incluye alguna letra ingresara al if
        if(cadenaUsuario.includes(letraEncriptar[i][0])){
            //Remplazaremos la letra por la conversión solicitada
            cadenaUsuario = cadenaUsuario.replaceAll(letraEncriptar[i][0], letraEncriptar[i][1])
        }
    }
    //Returnamos la cadena encriptada
    return cadenaUsuario;
}

function desEncriptar(cadenaUsuario){
    // Declaramos una variable tipo arreglo de dos dimensiones, con sus respectivas letras y cambios
    let letraEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Permite convertir las letras del texto en minúsculas
    cadenaUsuario = cadenaUsuario.toLowerCase();
    //Colocamos una iteración para revisar la cadena de caracteres y contrastar contra nuestro arreglo
    for(let i = 0; i < letraEncriptar.length; i ++){
        //Se declara una condición, si el for encuentra que el texto  incluye alguna letra del Arreglo ingresara al if
        if(cadenaUsuario.includes(letraEncriptar[i][1])){
            //Remplazamos la letra por la conversión solicitada
            cadenaUsuario = cadenaUsuario.replaceAll(letraEncriptar[i][1], letraEncriptar[i][0])
        }
    }
    //Retornamos la cadena encriptada
    return cadenaUsuario;
}

function transformarTexto(texto){
    //Pasa el texto del usuario ya encriptado al text área dónde se va a imprimir
    textResultado.value = texto;
    //Se limpia el texto ingresado por el usuario
    textUsuario.value = "";
    //Se limpia el fondo de pantalla dónde se va a imprimir el texto
    textResultado.style.backgroundImage = "none";
    
}

function aparecerImagen(){
    //Imprime una imagen de fondo de pantalla
    textUsuario.style.backgroundImage = "url('imagenesMain/hecho.gif')";
    //Se coloca en posición centrada y abajo
    textUsuario.style.backgroundPosition = "50% 90%";
    //le da el tamaño de la imagen
    textUsuario.style.backgroundSize = "30%";
    //No repite la imagen de fondo de pantalla
    textUsuario.style.backgroundRepeat = "no-repeat";
    //Desupues de 4 segundos que pase el gif, se activa una funcion que elimina el fondo de pantalla
    setTimeout(function() {
        textUsuario.style.backgroundImage = "none";
    }, 4000);
}

    function imprimirTextoEncriptar(){
        //Se manda a llamar la función encriptar para transformar el texto y almacenarlo en una variable
        const texto = encriptar(textUsuario.value)
        // Si la caja de texto se encuentra vacía mandara una alerta informando de esto
        if(textUsuario.value.length == 0) {
            alert("Para que el Encriptador funcione, es necesario ingresar texto para encriptar o desencriptar");
        }   
            //De lo contrario imprime el texto encriptado y aparece la imagen de realizado
            else{
                transformarTexto(texto);
                aparecerImagen();
            }
    }

    function imprimirTextoDesEncriptar(){
        //Se manda a llamar la función desencriptar para transformar el texto y almacenarlo en una variable
        const texto = desEncriptar(textUsuario.value)
        // Si la caja de texto se encuentra vacía mandara una alerta informando de esto
        if(textUsuario.value.length == 0) {
            alert("Para que el Encriptador funcione, es necesario ingresar texto para encriptar o desencriptar");
        }   
            //De lo contrario imprime el texto encriptado y aparece la imagen de realizado
            else{
                transformarTexto(texto);
                aparecerImagen();
            }
    }
    

    function copiar(){
        //almacena en una variable, el texto de la caja dónde esta lo encriptado
        var copyText = textResultado
        //selecciona el texto
        copyText.select();
        //lo copia en el portapapeles
        document.execCommand("copy");
        //manda una alerta con el texto que se copio
        alert("Texto copiado: " + copyText.value);
        //Se elimina la imagen de realizado
        textUsuario.style.backgroundImage = "none"
    }

    
    function compartir() {
        var texto = textResultado.value;
        alert(texto)
        var url = "whatsapp://send?text=" + encodeURIComponent(texto);
        window.location.href = url;
    }
    