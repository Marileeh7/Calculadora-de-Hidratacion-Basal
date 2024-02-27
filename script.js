document.getElementById('calcular').addEventListener('click', calculoMatematico);
// Estructura de control de como se procede
function calculoMatematico() {
  const pesoCapturado = document.getElementById('peso').value;
  let volumen, mantenimiento, mantenimientoYMedio;
  // si el peso es 0 se muestra el error
  if (pesoCapturado == 0) {
   mensajes(true);
  } else if (pesoCapturado <= 30) {
    volumen = calcularVolumenHolliday(pesoCapturado);
    mantenimiento = volumen / 24;
    mantenimientoYMedio = mantenimiento * 1.5;
    mostrarResultados(mantenimiento, mantenimientoYMedio, 'Mantenimiento', 'Mantenimiento + m/2');
  } else {
    const { volumen1500, volumen2000 } = calcularVolumenSuperficieCorporal(pesoCapturado);
    mostrarResultados(volumen1500, volumen2000, 'Volumen 1500', 'Volumen 2000');
  }
}
// funcion de holliday
function calcularVolumenHolliday(peso) {
  if (peso <= 10) {
    return peso * 100;
  } else if (peso > 10 && peso <= 20) {
    return (10 * 100) + ((peso - 10) * 50);
  } else {
    return (10 * 100) + (10 * 50) + ((peso - 20) * 20);
  }
}
// funcion de superficie
function calcularVolumenSuperficieCorporal(peso) {
  const superficie = ((peso * 4) + 7) / (peso + 90);
  return {
    volumen1500: superficie * 1500,
    volumen2000: superficie * 2000
  };
}
//mostrar los resultados 
function mostrarResultados(res_arriba, res_abajo, etiqueta1, etiqueta2) {
  document.getElementById('man').innerHTML = `${etiqueta1}: ${Math.round(res_arriba)} cc/h`;
  document.getElementById('manymedio').innerHTML = `${etiqueta2}: ${Math.round(res_abajo)} cc/h`;
  mensajes(false);
}
//error
function mensajes(mostrarError) {
  document.getElementById('error').style.display = mostrarError ? 'block' : 'none';
  document.getElementById('man').style.display = mostrarError ? 'none' : 'block';
  document.getElementById('manymedio').style.display = mostrarError ? 'none' : 'block';
}