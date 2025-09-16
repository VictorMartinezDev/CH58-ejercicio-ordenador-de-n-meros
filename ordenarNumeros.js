//Obtenemos el valor del input desde el DOM
const entradaDeNumeros = document.querySelector('input');

//llegamos a la etiqueta p con id "numerosDesordenados"
const numerosIngresados = document.getElementById('numerosDesordenados')
//Función para mostrar el valor escrito en input

function mostrarNumero(){
    let numeros = entradaDeNumeros.value;
    numerosIngresados.innerText = numeros;
    entradaDeNumeros.value = "";

}

const clickBoton = document.querySelector('button');

clickBoton.addEventListener('click', mostrarNumero);