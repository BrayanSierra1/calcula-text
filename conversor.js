/* let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', cMoneda);

function cMoneda(){
    let precioDolar = (4.800);
    let dolares =parseInt(docuement.getElementById('dolares').value);
    let pesoCol = (dolares * precioDolar) / 1;
    respuesta.innerHTML=`la conversion es ${pesoCol}`
} */

let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', cop);

function cop(){
    let dolares = parseFloat(document.getElementById('dolares').value);
    let precioDolar = 4700;
    let pesoCol = (precioDolar * dolares) / 1;

    respuesta.innerHTML=`la conversion es ${pesoCol}`
}