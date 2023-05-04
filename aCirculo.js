let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarArea);

function sacarArea(){
    let RA=Math.pow(parseFloat(document.getElementById('RA').value),2)
    let area = (RA * Math.PI)
    respuesta.innerHTML=`la area del circulo es ${area}`;
}

/* let RA=Math.pow(parseFloat(document.getElementById('RA').value),2)
function sacarArea(valor1, valor2){
    return (valor1 * valor2)
    }
    const area = area(Math.PI, RA)
    respuesta.innerHTML=`la area del circulo es ${area}`;
 */