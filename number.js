let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click', sacarNumero);

function sacarNumero(){
    let numero=parseInt(document.getElementById('numero').value)
    if(numero%2 == 0 ){
        respuesta.innerHTML=`el numero ${numero} es par`
    }else{
        respuesta.innerHTML=`el numero ${numero} es impar`
    }
}