//Obtenemos el valor del input desde el DOM
const entradaDeNumeros = document.querySelector('input');

//llegamos a la etiqueta p con id "numerosDesordenados"
const numerosIngresados = document.getElementById('numerosDesordenados')

//llegamos a la etiqueta button por medio del DOM para manejar eventos
const clickBoton = document.querySelector('button');

// llegamos a la etiqueta p con id NumerosOrdenadosMenorAMayor
const numerosMenorAMayor = document.getElementById('NumerosOrdenadosMenorAMayor');

// llegamos a la etiqueta p con id NumerosOrdenadosMayorAMenor
const numerosMayorAMenor = document.getElementById('NumerosOrdenadosMayorAMenor');

//función con metodo burbuja para ordenar la lista de numeros
function ordenarNumeros(arregloDenumeros) {
    for (let i = 0; i < arregloDenumeros.length - 1; i++) {
        for (let j = 0; j < arregloDenumeros.length - 1; j++) {
            if (arregloDenumeros[j] > arregloDenumeros[j + 1]) {
                let aux = arregloDenumeros[j];
                arregloDenumeros[j] = arregloDenumeros[j + 1];
                arregloDenumeros[j + 1] = aux;
            }
        }
    }
    return arregloDenumeros;
}

function numeroRepetido(arreglo) {
    let confirmacionNumeroRepetido = false;
    let numeroRepetido;
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++)
            //console.log(arreglo[i] + "--" + arreglo[j]);
            if(arreglo[i] == arreglo[j] && i!=j){
                confirmacionNumeroRepetido = true;
                numeroRepetido = arreglo[i];
            }
    }

    if(confirmacionNumeroRepetido == true){
        alert(`El numero ${numeroRepetido} se repite dentro de los numeros ingresados`);
    }
}

//Función para mostrar el valor escrito en input
function mostrarNumero() {
    let numeros = entradaDeNumeros.value;
    numerosIngresados.innerText = numeros;
    entradaDeNumeros.value = ""; // reseteamos el input
    let arrayNumeros = numeros.split(",")//convertimos la cadena del input en un arreglo
    ordenarNumeros(arrayNumeros);
    const cadenaNumerosMenorAMayor = arrayNumeros.join(",");
    numerosMenorAMayor.innerText = cadenaNumerosMenorAMayor; //Mostramos los numeros ordenamos por medio del DOM
    const arrayNumerosInvert = arrayNumeros.reverse();
    const cadenaNumerosMayorAMenor = arrayNumerosInvert.join(",");
    numerosMayorAMenor.innerText = cadenaNumerosMayorAMenor;
    numeroRepetido(arrayNumeros);
}



clickBoton.addEventListener('click', mostrarNumero);