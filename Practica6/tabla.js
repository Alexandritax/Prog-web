const crearBoton = (i,j) => {
    var but = document.createElement("button")
    but.setAttribute("class", "btn btn-primary white")
    but.setAttribute("type", "button")
    but.setAttribute("id","but_"+(i-1)+(j-1))
    //but.setAttribute("style","background-color: white; color:black")
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
    const Bclass = but.className;
    const idbut = id.substring(4,6)
    let sup = idbut-10
    let inf = parseInt(idbut)+10
    //console.log(Bclass.substring(15,21) + "; "+ sup + " " + inf)
    if(Bclass.substring(15,21)=="white"){
        but.setAttribute("class","btn btn-primary black")
        //but.setAttribute("style","background-color: black; color:white")
    }
    else{
        but.setAttribute("class","btn btn-primary white")
        //but.setAttribute("style","background-color: white; color:black")
    }
    if(sup > 0){
        let butsup = document.getElementById("but_"+sup)
        if(butsup.className!="btn btn-primary black"){
            
            butsup.setAttribute("class","btn btn-primary white")
            //butsup.setAttribute("style","background-color: white; color:black")
        }
        else{
            butsup.setAttribute("class","btn btn-primary black")
            //butsup.setAttribute("style","background-color:black; color:white")
        }   
    }
    if(inf<100){
        let butinf = document.getElementById("but_"+inf)
        if(butinf.className!="btn btn-primary black"){
            butinf.setAttribute("class","btn btn-primary white")
            //butinf.setAttribute("style","background-color: white; color:black")
        }
        else{
            butinf.setAttribute("class","btn btn-primary black")
            //butinf.setAttribute("style","background-color:black; color:white")
        }  
    }
     
}
const main = () => {
    var Tabla=document.body.firstElementChild.nextElementSibling.firstElementChild;
    var nuevaTB = crearCasilleros(10);
    Tabla.appendChild(nuevaTB)
    for (let i = 0; i< 10;i++){
        for (let j = 0; j < 10;j++){
            const button_w = document.getElementById("but_"+i+j)
            button_w.addEventListener("click",cambio)
        }
    }


}


window.addEventListener("load",main)