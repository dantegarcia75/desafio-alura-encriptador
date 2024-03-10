// alert("js en accion")
const textoIngresado = document.querySelector("#texto-p-cifrar-desifrar");
const textoRespuesta = document.querySelector("#respuesta");

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// let matrizCodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

// ¿Qué es includes en JavaScript?
// El método includes() determina si una matriz incluye un determinado elemento,
// devuelve true o false según corresponda.

function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    textoRespuesta.value = textoEncriptado;
    
    if (textoIngresado.value==""){
        document.getElementById("output-img-box").style.display = "block";
        document.getElementById("output-message-box").style.display = "block";
        document.getElementById("output-answer-box").style.display = "none";
        document.getElementById("output-btn-box").style.display = "none";
    } else{
            document.getElementById("respuesta").innerHTML = textoRespuesta.value;
            document.getElementById("output-img-box").style.display = "none";
            document.getElementById("output-message-box").style.display = "none";
            document.getElementById("output-answer-box").style.display = "block";
            document.getElementById("output-btn-box").style.display = "block";

    }

        
}

    


function encriptar(stringEncriptado){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoIngresado.value);
    textoRespuesta.value = textoEncriptado;
    
    if (textoIngresado.value==""){
        document.getElementById("output-img-box").style.display = "block";
        document.getElementById("output-message-box").style.display = "block";
        document.getElementById("output-answer-box").style.display = "none";
        document.getElementById("output-btn-box").style.display = "none";
    } else{
            document.getElementById("respuesta").innerHTML = textoRespuesta.value;
            document.getElementById("output-img-box").style.display = "none";
            document.getElementById("output-message-box").style.display = "none";
            document.getElementById("output-answer-box").style.display = "block";
            document.getElementById("output-btn-box").style.display = "block";

    }

        
}


function desencriptar(stringDesencriptado){
    let matrizCodigo =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    // document.getElementById("respuesta").style.color = "blue";
    textoCopiado = textoRespuesta.value;
    console.log("fue copiado con existo el siguiente mensaje:", textoCopiado);
    navigator.clipboard.writeText(textoCopiado); 
}


// 

