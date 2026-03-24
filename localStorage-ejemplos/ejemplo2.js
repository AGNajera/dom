function ejemplo2() {
  if (localStorage.getItem("nombre")) {
    const nombre = localStorage.getItem("nombre");
    console.log("Nombre:", nombre);
    const persona = JSON.parse(localStorage.getItem("datosUsuario"));
    console.log("Objeto de la persona:", persona);
  } else {
    console.log("localStorage vacio");
  }
}
