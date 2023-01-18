//ArgentinaPrograma
//TAREA 1:  completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


document.querySelector('#calcular-salario-mensual').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    let resultadoSalarioMensual = calcularSalarioMensual (salarioAnual);
  
    document.querySelector('#salario-mensual').value = resultadoSalarioMensual;
  
    return false;
  };
  
  function calcularSalarioMensual (salarioAnual){
    const MESES_EN_EL_ANIO =12;
    return salarioAnual / MESES_EN_EL_ANIO;
  };

