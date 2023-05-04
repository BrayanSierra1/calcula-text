let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');


boton.addEventListener('click', cMayus);

function cMayus(){
    let verbo = document.getElementById('verbo').value;
    const palabra = verbo
    respuesta.innerHTML= palabra.toUpperCase()
}