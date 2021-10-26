const URL_BACKEND = "https://60b83e68b54b0a0017c03380.mockapi.io/banners"

// const promiseOk = (response) => {
//     response.json().then(
//         (data) => {
//             const img = document.querySelector("#banner")
//             img.setAttribute("src",data[0].url)
//         }
//     ).catch((error) => {console.error(error)})
// }

const peticionConPromesas = () => {
    fetch(URL_BACKEND).then((response) => {
        response.json().then(
            (data) => {
                const img = document.querySelector("#banner")
                img.setAttribute("src",data[0].url)
            }
        ).catch((error) => {console.error(error)})
    }).catch((err) => {console.error(err)})
}

let numImagen = 0
let imagenes = []

const cambiarImagenes = () => {
    const img = document.querySelector("#banner")

    if (imagenes.length == numImagen) {
        numImagen = 0;
    }
    img.setAttribute("src", imagenes[numImagen++].url)
}

const peticionConAsyncAwait = async () => {
    const response = await fetch(URL_BACKEND)
    // const data = await response.json()
    // const img = document.querySelector("#banner")
    // if (data.length == numImagen){
    //     numImagen = 0
    // }
    // img.setAttribute("src", data[numImagen++].url)
    imagenes = await response.json()
    if(imagenes == null){
        peticionConAsyncAwait()
    }
    window.sessionStorage.setItem("imagenes", JSON.stringify(imagenes))
    
}

const main = () => {
    //Abrir un canal de comunicacion con el servidor

    // API de storagen
    // 1. Session Storage
    // 2. Local Storage
    imagenes = JSON.parse(window.sessionStorage.getItem("imagenes"))
    if (imagenes == null) {
        peticionConAsyncAwait()
    }
    window.setInterval(cambiarImagenes,10000)

    const butBorrar = document.querySelector("#boton")
    butBorrar.addEventListener("click",() => {
        console.log("borrar")
        window.sessionStorage.clear()});
}

window.addEventListener("load", main)