let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta')


boton.addEventListener('click', sacarPeso);

function sacarPeso(){
    let gravedad_tierra = 9.81;
    let gravedad_marte = 3.711;
    let pesodePersona = parseInt(document.getElementById('pesodePersona').value);
    let peso = (gravedad_marte * pesodePersona) / gravedad_tierra;
    respuesta.innerHTML=`tu peso en marte es ${peso}`;
}