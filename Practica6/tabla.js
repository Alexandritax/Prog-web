const crearCasilleros = (numCasilla) => {
    var tbody = document.createElement("tbody")
    for (let i = 1; i<=numCasilla;i++){
        var tr = document.createElement("tr")
        for (let j = 1; j <= numCasilla;j++){
            var th = document.createElement("th")
            th.innerText=i + "," + j
            th.setAttribute("class","white")
            tr.appendChild(th)
        }
        tbody.appendChild(tr)
    }
    return tbody
}

const main = () => {
    var Tabla=document.body.firstElementChild.nextElementSibling.firstElementChild;
    var nuevaTB = crearCasilleros(10);
    console.log(nuevaTB)
    Tabla.appendChild(nuevaTB)
}

window.addEventListener("load",main)