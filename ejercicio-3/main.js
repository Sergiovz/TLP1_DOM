const boton = document.getElementById("calculo");
const seleccion = document.getElementById("seleccion");

let resultado = document.getElementById("resultado");

boton.addEventListener('click', operaciones);

function operaciones(){
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);

    switch (seleccion.value) {
        case 'Suma' : resultado.innerText= x + y 
            break;
        case 'Resta' : resultado.innerText= x - y
            break;
        case 'Division' :
            if (y!=0){
                resultado.innerText= ( x / y).toFixed(2);
            } else{
                resultado.innerText= 'No se puede dividir por cero.';
            }
            break
        case 'Multiplicacion' : resultado.innerText= x*y
            break;
        default: resultado.innerText= 'error';
    }
}