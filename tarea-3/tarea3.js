//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


/*
document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    let resultadoSalarioMensual = calcularSalarioMensual (salarioAnual);
  
    document.querySelector('#salario-mensual').value = resultadoSalarioMensual;
  
    return false;
  }
  */

function arrayCalcular(nodeList){
    let sumaTotal = 0;
    for (let i=0; i<nodeList.length; i++){
        sumaTotal += Number(nodeList[i].value);
    }
    return sumaTotal;
}

function tiempoRealDeVideos(horas,minutos,segundos){
    minutos = minutos + parseInt(segundos / 60);
    segundos = segundos % 60;
    horas = horas + parseInt(minutos / 60);
    minutos = minutos % 60;
    let totalDeTiempo = document.querySelector('#tiempo-total-videos')
    return totalDeTiempo.textContent = `Los videos duran un total de ${horas} horas ${minutos} minutos y ${segundos} segundos`
}


const BOTON_CALCULAR_TIEMPO = document.querySelector('#calcular-tiempo');
BOTON_CALCULAR_TIEMPO.onclick = function(){

    let $arrayDeHoras = document.querySelectorAll('.horas-videos');
    let $arrayDeMinutos = document.querySelectorAll('.minutos-videos');
    let $arrayDeSegundos = document.querySelectorAll('.segundos-videos');

    let horasDeVideos = arrayCalcular($arrayDeHoras);
    let minutosDeVideos = arrayCalcular($arrayDeMinutos);
    let segundosDeVideos = arrayCalcular($arrayDeSegundos);

    tiempoRealDeVideos (horasDeVideos,minutosDeVideos,segundosDeVideos);
    return false
}

