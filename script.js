const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function validarTexto(textArea){
    let regex = /^[a-z\s]+$/;

    if(!regex.test(textArea.value)){
        textArea.value = textArea.value.replace(/[^a-z\s]+/g, '');
    }
}

function botonEncriptar(){
    const mensajeEncriptado = encriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(textoEncriptado){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}

function botonDesencriptar(){
    const mensajeEncriptado = desencriptar(textArea.value);
    mensaje.value = mensajeEncriptado;
    textArea.value = "";
}

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter" ], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function copiarAlPortapapeles(){
    let textoCopiado = document.getElementById('copiar');

    navigator.clipboard.writeText(mensaje.value);
}
