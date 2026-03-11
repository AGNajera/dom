const registro = document.getElementById("registro");
registro.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre");
  const inputNombre = nombre.value.trim();

  if (inputNombre === "") {
    alert("Nombre es obligatorio");
  } else {
    console.log("Formuario valido", inputNombre);
  }
});
