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
    for (var i = 0; i < 10; i++){
        const but = document.getElementById("but_"+ i)
        but.onclick = numeroOnClickNoObstrusivo;
    }
    const arrOperaciones = ['+','-','*','/','c','=']
    for(var op of arrOperaciones){
        const but = document.getElementById("but_"+op)
        but.onclick = operacionOnClickNoObstrusivo
    }
}
windows.addEventListener("load", main);