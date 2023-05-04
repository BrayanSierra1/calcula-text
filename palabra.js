let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarverbo);

function sacarverbo(){
    let verbo = document.getElementById('verbo').value;
    const palabra = verbo.substring(0, 1);
    respuesta.innerHTML=`la palabra es ${verbo} y la primera letra es la ${palabra}`;
}