let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');


boton.addEventListener('click', contarLetras);

function contarLetras(){
    let verbo = document.getElementById('verbo').value;
    const palabra = verbo.length
    respuesta.innerHTML=`el numero de caracteres es ${palabra}`
}




