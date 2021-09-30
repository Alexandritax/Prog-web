const crearBoton = (i,j) => {
    var but = document.createElement("button")
    but.setAttribute("class", "btn btn-primary")
    but.setAttribute("type", "button")
    but.setAttribute("id","but_"+i+j+" white")
    but.innerText=i + "," + j
    return but;
}

const crearCasilleros = (numCasilla) => {
    var tbody = document.createElement("tbody")
    for (let i = 1; i<= numCasilla;i++){
        var tr = document.createElement("tr")
        for (let j = 1; j <= numCasilla;j++){
            var th = document.createElement("th")
            var button = crearBoton(i,j)
            th.appendChild(button)
            th.setAttribute("class","text-center")
            tr.appendChild(th)
        }
        tbody.appendChild(tr)
    }
    return tbody
}
/*
La funcion de cambio es cambiar la id de white a black y que el css cambie el color respectivamente del color
El css por algun motivo no cambia el color mas los id's si cambiar respectivamente con cada click.
*/
const cambio = (evt) => {
    const but = evt.target;
    //console.log(but.id)
    //but_11_ 6
    var id = but.id
    var idbut = id.substring(4,6)
    let sup = idbut-10
    let inf = idbut+10
    if(id.substring(7,12)=="white"){
        but.setAttribute("id","but_"+idbut+" black")
    }
    else{
        but.setAttribute("id","but_"+idbut+" white")
    }
    if(sup > 10){
        if(document.getElementById("but_"+sup+" black")!=null){
            let butsup = document.getElementById("but_"+sup+" black")
            butsup.setAttribute("id","but_"+sup+" white")
        }
        else{
            let butsup = document.getElementById("but_"+sup+" white")
            butsup.setAttribute("id","but_"+sup+" black")
        }   
    }
    if(inf<10){
        if(document.getElementById("but_"+inf+" black")!=null){
            let butinf = document.getElementById("but_"+inf+" black")
            butinf.setAttribute("id","but_"+inf+" white")
        }
        else{
            let butinf = document.getElementById("but_"+inf+" white")
            butinf.setAttribute("id","but_"+inf+" black")
        }  
    }
     
}
const main = () => {
    var Tabla=document.body.firstElementChild.nextElementSibling.firstElementChild;
    var nuevaTB = crearCasilleros(10);
    Tabla.appendChild(nuevaTB)
    for (let i = 1; i<= 10;i++){
        for (let j = 1; j <= 10;j++){
            const button_w = document.getElementById("but_"+i+j+" white")
            button_w.addEventListener("click",cambio)
        }
    }
}

window.addEventListener("load",main)