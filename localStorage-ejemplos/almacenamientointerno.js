function guardarLocalStorage() {
  let nombre = "Pepe";
  localStorage.setItem("usuario", nombre);
  const persona = { nombre: "Jose", edad: 30, nacionalidad: "mexicana" };
  localStorage.setItem("usuario1", persona);
}
