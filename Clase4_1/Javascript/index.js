/*function numeroOnClick(numero){
    const inputNumero = document.getElementById("txt_numeros")
    inputNumero.value = numero
}
//ANTIGUEDAD
*/
var memoria, operacion;
const numeroOnClick = (numero) => {
    const inputNumero = document.getElementById("txt_numeros");
    if(inputNumero.value=="0") {
        inputNumero.value = numero
    }
    else inputNumero.value += numero
}

const signoOnClick = (signo) => {
    const inputNumero = document.getElementById("txt_numeros");
    operacion = signo;
    memoria = parseInt(inputNumero.value);
    inputNumero.value = "0"
}