/*function numeroOnClick(numero){
    const inputNumero = document.getElementById("txt_numeros")
    inputNumero.value = numero
}
//ANTIGUEDAD
*/
const sumar = (sum1,sum2) => {
    return sum1 + sum2;
}

const restar = (res1,res2) => {
    return res1 - res2;
}

const multiplicar = (mul1,mul2) => {
    return mul1 * mul2;
}

const dividir = (divi1,divi2) => {
    return divi1 / divi2;
}

var numeroIngresado
var estado = false;
var simbolo;

/*const numeroOnClick = (numero) => {
    const inputNumero = document.getElementById("txt_numeros");
    const numeroStr = inputNumero.value;
    if(numeroStr == "0" || estado) {
        inputNumero.value = numero;
        estado = false;
    }
    else inputNumero.value = numeroStr + numero;
}*/

const numeroOnClickNoObstrusivo = (evt) => {
    const inputNumero = document.getElementById("txt_numeros");
    const but=evt.target;
    const numero = but.innerHTML;
    const numeroStr = inputNumero.value;
    if(numeroStr == "0" || estado) {
        inputNumero.value = numero;
        estado = false;
    }
    else inputNumero.value = numeroStr + numero;
}

/*const operacionOnClick = (op) => {
    const inputNumero = document.getElementById("txt_numeros");
    if (op == "C") {
        inputNumero.value="0";
    }
    else if (op == "+") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = sumar;
    }
    else if (op == "-") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = restar;
    }
    else if (op == "*") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = multiplicar;
    }
    else if (op == "/") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = dividir;
    }
    else if (op == "=") {
        if (simbolo !=undefined){
        const numero = inputNumero.value
        const res = simbolo(numeroIngresado, parseInt(numero))
        inputNumero.value = res
        }
    }
}*/

const operacionOnClickNoObstrusivo = (evt) => {
    const inputNumero = document.getElementById("txt_numeros");
    const but = evt.target
    const op = but.innerHTML
    if (op == "C") {
        inputNumero.value="0";
    }
    else if (op == "+") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = sumar;
    }
    else if (op == "-") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = restar;
    }
    else if (op == "*") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = multiplicar;
    }
    else if (op == "/") {
        const numero = inputNumero.value;
        numeroIngresado = parseInt(numero);
        estado = true;
        simbolo = dividir;
    }
    else if (op == "=") {
        if (simbolo !=undefined){
        const numero = inputNumero.value
        const res = simbolo(numeroIngresado, parseInt(numero))
        inputNumero.value = res
        }
    }
}
const main = () => {
    const but_1=document.getElementById("but_1")
    const but_2=document.getElementById("but_2")
    const but_3=document.getElementById("but_3")
    const but_4=document.getElementById("but_4")
    const but_5=document.getElementById("but_5")
    const but_6=document.getElementById("but_6")
    const but_7=document.getElementById("but_7")
    const but_8=document.getElementById("but_8")
    const but_9=document.getElementById("but_9")
    const but_0=document.getElementById("but_0")
    const but_mas=document.getElementById("but_+")
    const but_menos=document.getElementById("but_-")
    const but_mult=document.getElementById("but_*")
    const but_div=document.getElementById("but_/")
    const but_igual=document.getElementById("but_=")
    const but_clear=document.getElementById("but_c")
    but_1.onclick = numeroOnClickNoObstrusivo;
    but_2.onclick = numeroOnClickNoObstrusivo;
    but_3.onclick = numeroOnClickNoObstrusivo;
    but_4.onclick = numeroOnClickNoObstrusivo;
    but_5.onclick = numeroOnClickNoObstrusivo;
    but_6.onclick = numeroOnClickNoObstrusivo;
    but_7.onclick = numeroOnClickNoObstrusivo;
    but_8.onclick = numeroOnClickNoObstrusivo;
    but_9.onclick = numeroOnClickNoObstrusivo;
    but_0.onclick = numeroOnClickNoObstrusivo;
    but_mas.onclick = operacionOnClickNoObstrusivo;
    but_menos.onclick = operacionOnClickNoObstrusivo;
    but_mult.onclick = operacionOnClickNoObstrusivo;
    but_div.onclick = operacionOnClickNoObstrusivo;
    but_igual.onclick = operacionOnClickNoObstrusivo;
    but_clear.onclick = operacionOnClickNoObstrusivo;
}
main();