let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarHipotenusa);

function sacarHipotenusa(){
    let CA=parseInt(Math.pow(parseFloat(document.getElementById('CA').value),2));
    let CB=parseInt(Math.pow(parseFloat(document.getElementById('CB').value),2));
    let hipotenusa = Math.sqrt(CA + CB)
    respuesta.innerHTML=`la hipotenusa es ${hipotenusa}`;
}