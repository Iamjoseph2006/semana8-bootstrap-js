function mostrarAlerta() {
  alert("¡Bienvenido a Sweet Spot! \nDonde lo dulce se vuelve irresistible 😋");
}

document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let esValido = true;

  [nombre, correo, mensaje].forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      esValido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  if (esValido) {
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    this.reset();
  }
});
