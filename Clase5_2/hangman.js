const refranes = [
    "A CABALLO REGALADO NO SE LE MIRA EL DIENTE",
    "CAMARON QUE SE DUERME SE LO LLEVA LA CORRIENTE",
    "QUIEN A HIERRO MATA A HIERRO MUERE"
]

const elegirRefran = () => {
    const pos = Math.round(Math.random() * 2);
    return refranes[pos]
}

const ocultarRefran = (refran) => {
    let refranOculto = ""
    for(let caracter of refran) {
        if (caracter != " ") {
            //debe de ocultarRefran
            refranOculto += "_"
        }
        else{
            refranOculto += caracter
        }
    }
    return refranOculto
}

const cargarRefran = (refran) => {
    //const divrefran = document.getElementById("refran") // son iguales
    const  divrefran = document.querySelector("#refran") // son iguales
    divrefran.innerHTML = "<p>" + refran + "</p>"
    //divrefran.innerText = refran;
}

const buscarLetterRefran = (letra, refran, refranOculto) => {
    let nuevoRefranOculto = "";
    for (let i=0; i< refran.length; i++) {
        if (letra == refran[i]){
            //si es la letra
            //CARRO  _ _ _ _ _
            // A -> _ A _ _ _ 
            nuevoRefranOculto += refran[i]
        }
        else {
            nuevoRefranOculto += refranOculto[i]
            //No es la letra
        }
    }
    return nuevoRefranOculto;
}
var Refran = elegirRefran();
var RefranOculto = ocultarRefran(Refran)
const letraInputOnKeyPress = (evt) => {
    const letraIngresada = evt.key.toUpperCase()
    const nuevoRefranOculto = buscarLetterRefran(letraIngresada, Refran, RefranOculto)
    if(nuevoRefranOculto == RefranOculto){
        console.log("Nueva Imagen")
    }
    else {
        RefranOculto = nuevoRefranOculto
        cargarRefran(RefranOculto);
    }
}

const main = () => {
    cargarRefran(RefranOculto);
    //console.log(refran)
    let inputLetras = document.querySelector("#letras")
    //console.log(inputLetras)
    inputLetras.addEventListener("keypress", letraInputOnKeyPress)
}

window.addEventListener("load",main)