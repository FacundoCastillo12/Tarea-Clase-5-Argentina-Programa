//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."




const $arrayDeNumeros = document.querySelectorAll('li')

let arrayDeNumeros = [];

for (let i = 0; i < $arrayDeNumeros.length; i++) {
     arrayDeNumeros.push(Number($arrayDeNumeros[i].innerText));
}

function promedioDeNumerosArray(array){
    let sumaTotal = 0;
    for(let i=0; i<array.length; i++){
        sumaTotal = sumaTotal + array[i];
    }
    return sumaTotal / array.length;
}

function numeroMasPequeño(array){
    let numeroMenor = Math.min(...array);
    return numeroMenor;
}

function numeroMasGrande(array){
    let numeroMayor = Math.max(...array);
    return numeroMayor;
}

function numeroMasRepetido(array){
    let mayorRepeticion=0;
    let frecuencia=0;
    let resultados;
    for (let i=0; i<array.length; i++){
        if (array[i] === array [i+1]){
            frecuencia++;
        }else{
            frecuencia=0;
        }
        if (frecuencia>mayorRepeticion){
            resultados = array[i];
            mayorRepeticion = frecuencia;
        }
    }
    return resultados;
}


let promedio = document.querySelector('#numero-promedio');
let numeroMenor = document.querySelector('#numero-mas-pequeño');
let numeroMayor = document.querySelector('#numero-mas-grande');
let numeroMasFrecuente = document.querySelector('#numero-mas-frecuente');


promedio.textContent += promedioDeNumerosArray(arrayDeNumeros);
numeroMenor.textContent += numeroMasPequeño(arrayDeNumeros);
numeroMayor.textContent += numeroMasGrande(arrayDeNumeros);
numeroMasFrecuente.textContent += numeroMasRepetido(arrayDeNumeros);
