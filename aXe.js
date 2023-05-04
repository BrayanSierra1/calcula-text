let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');


boton.addEventListener('click', cambiarLetras);

function cambiarLetras(){
    let verbo = document.getElementById('verbo').value;
    const palabra = verbo.replaceAll('a', 'e');
    respuesta.innerHTML=`palabra con e ${palabra}`
}