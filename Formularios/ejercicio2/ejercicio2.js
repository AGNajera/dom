const formulario = document.getElementById("form2");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "") {
    alert("El nombre es obligatorio");
    return;
  }
  const password = document.getElementById("password").value;
  if (password.length >= 8) {
    formulario.style.backgroundColor = "green";
    console.log("Contraseña válida");
  } else {
    formulario.style.backgroundColor = "red";
    console.log("Contraseña debe tener al menos 8 caracteres");
  }
});
