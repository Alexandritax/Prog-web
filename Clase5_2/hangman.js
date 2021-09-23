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

const main = () => {
    const refran = elegirRefran();
    const refranOculto = ocultarRefran(refran)
    cargarRefran(refranOculto);
    console.log(refran)
}

window.addEventListener("load",main)