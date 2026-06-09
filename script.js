document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todas las letras y el botón de reinicio
  const letras = document.querySelectorAll(".letra-item");
  const btnReset = document.getElementById("reset-board-btn");

  // Le agregamos la interactividad a cada letra
  letras.forEach((letra) => {
    letra.addEventListener("click", () => {
      // 'toggle' agrega la clase 'activa' si no la tiene, y se la quita si ya la tiene
      letra.classList.toggle("activa");
    });
  });

  // Lógica para el botón "Limpiar Tablero"
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      // Recorremos todas las letras y les quitamos el estado activo
      letras.forEach((letra) => {
        letra.classList.remove("activa");
      });
    });
  }
});
