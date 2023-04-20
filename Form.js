function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var detalles = document.getElementById("detalles").value;
  var temperamento = document.getElementById("temperamento").value;
  var nombreContacto = document.getElementById("nombreContacto").value;
  var emailContacto = document.getElementById("emailContacto").value;

  if (nombre.length < 3) {
    alert("Por favor ingrese un nombre válido (al menos 3 letras).");
    return false;
  }

  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(emailContacto)) {
    alert("Por favor ingrese un email válido.");
    return false;
  }

  return true;
}

function enviarFormulario(event) {
  event.preventDefault();

  var nombreRaza = document.getElementById("nombre").value;
  var temperamento = document.getElementById("temperamento").value;
  var nombreContacto = document.getElementById("nombreContacto").value;
  var emailContacto = document.getElementById("emailContacto").value;
  var detalles = document.getElementById("detalles").value;

  alert("Gracias por ayudar a la comunidad a sumar nuevas razas de perro");

  window.location.href = "index.html";

  // Retornar false para evitar que el formulario se envíe y la página se recargue
  return false;
}
