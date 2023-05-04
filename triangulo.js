let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarArea);

function sacarArea(){
    let base = parseInt(document.getElementById('base').value);
    let altura = parseInt(document.getElementById('altura').value);
    let area = (base * altura) / 2;

    respuesta.innerHTML = `el area del triangulo es ${area}`;
}