const usuario = {
  nombre: "Angel",
  rol: "Alumno",
  saludar: function () {
    console.log("Hola soy " + this.nombre + " y soy " + this.rol);
  },
};
usuario.saludar();
usuario.edad = 20;
console.log(usuario);

const coche = {
  marca: "Toyota",
  modelo: "Yoquese",
  encendido: false,
  arrancar: function () {
    this.encendido = true;
    mensaje = this.encendido ? "El coche arrancó" : "Ya está arrancado";
    console.log(mensaje);
  },
};
coche.arrancar();
