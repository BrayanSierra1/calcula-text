let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarGrados);

function sacarGrados(){
    let gradosCelsius=parseInt(document.getElementById('gradosCelsius').value)
    let xGrados  = 32;
    let gradosFa = (gradosCelsius) * 1.8 + xGrados

    respuesta.innerHTML=`los grados celsius a fahrenheit son ${gradosFa}`
}