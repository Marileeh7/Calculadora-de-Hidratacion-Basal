document.addEventListener('DOMContentLoaded', function() {
  const contenedor = document.querySelector('#container');
  const numeroDePelotitas = 75; // Número de pelotitas
  let datosDePelotitas = [];

  // Función para crear una pelotita y añadirla al DOM
  function crearPelotita() {
    const pelotita = document.createElement('div');
    pelotita.className = 'ball';
    contenedor.appendChild(pelotita);
    return pelotita;
  }

  // Inicializar las pelotitas
  for (let i = 0; i < numeroDePelotitas; i++) {
    const elementoPelotita = crearPelotita();
    const velocidad = { x: (Math.random() * 4) - 2, y: (Math.random() * 4) - 2 }; // Velocidades aleatorias
    const posicion = { x: Math.random() * (contenedor.clientWidth - 20), y: Math.random() * (contenedor.clientHeight - 20) }; // Posiciones iniciales aleatorias
    datosDePelotitas.push({ elemento: elementoPelotita, velocidad: velocidad, posicion: posicion });
  }

  function actualizar() {
    datosDePelotitas.forEach(dato => {
      // Actualizar la posición de cada pelotita
      dato.posicion.x += dato.velocidad.x;
      dato.posicion.y += dato.velocidad.y;

      // Revisar colisión con los bordes del contenedor
      if (dato.posicion.x <= 0 || dato.posicion.x + dato.elemento.offsetWidth >= contenedor.clientWidth) {
        dato.velocidad.x *= -1;
        ajustarVelocidad(dato.velocidad);
      }
      if (dato.posicion.y <= 0 || dato.posicion.y + dato.elemento.offsetHeight >= contenedor.clientHeight) {
        dato.velocidad.y *= -1;
        ajustarVelocidad(dato.velocidad);
      }

      // Mover la pelotita
      dato.elemento.style.left = dato.posicion.x + 'px';
      dato.elemento.style.top = dato.posicion.y + 'px';
    });

    requestAnimationFrame(actualizar);
  }

  // Ajustar la velocidad para hacer el movimiento menos predecible
  function ajustarVelocidad(velocidad) {
    velocidad.x += (Math.random() - 0.5) * 0.5;
    velocidad.y += (Math.random() - 0.5) * 0.5;
  }

  actualizar();
});
