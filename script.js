const msg = document.querySelector(".msg");
const respuesta = document.querySelector(".msg-encriptado");
//Arreglo de arreglos
let reglas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botones(event){
    let msgDevolver = null;
    if(validar(msg.value)){
        if(event.target.value == 1){
            msgDevolver = encriptar(msg.value);
        }
        else{
            msgDevolver = desencriptar(msg.value);
        }
        respuesta.value = msgDevolver;
        msg.value = "";
        respuesta.style.backgroundImage = "none";
    }
}

function validar(mensajeValidar){
    const regex =  /^[a-z\s]+$/;
    const errores = document.querySelector(".informacion");
    if (!regex.test(mensajeValidar)){
        errores.style.color = "red";
        errores.style.fontSize = "20px";
    }
    else{
        errores.style.color = "#495057";
        errores.style.fontSize = "18px";
        return true;
    }
}

function encriptar(mensajeEncriptar){
    mensajeEncriptar = mensajeEncriptar.toLowerCase();

    for(i = 0; i < reglas.length; i++){
        if (mensajeEncriptar.includes(reglas[i][0])) {
            mensajeEncriptar = mensajeEncriptar.replaceAll(reglas[i][0], reglas[i][1]);
        }
    }
    return mensajeEncriptar;
}

function desencriptar(mensajeDesencriptar){
    mensajeDesencriptar = mensajeDesencriptar.toLowerCase();

    for(i = 0; i < reglas.length; i++){
        if (mensajeDesencriptar.includes(reglas[i][1])) {
            mensajeDesencriptar = mensajeDesencriptar.replaceAll(reglas[i][1], reglas[i][0]);
        }
    }
    return mensajeDesencriptar;
}

function copiar(){
    respuesta.select();
    respuesta.setSelectionRange(0, respuesta.value.length);
    document.execCommand("copy");
}