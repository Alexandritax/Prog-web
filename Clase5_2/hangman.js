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
    var refranOculto = ""
    for(var caracter of refran) {
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

const main = () => {
    const refran = elegirRefran();
    const refranOculto = ocultarRefran(refran)
    console.log(refran)
    console.log(refranOculto)
}

window.addEventListener("load",main)