const tareas = ["Estudiar JS", "Hacer ejercicio"];
tareas.push("Comprar comida");
console.log("Lista actual: " + tareas);
const ultimo = tareas.pop();
console.log("Eliminado " + ultimo);
console.log("Primer elemento " + tareas[0]);
const numeros = [5, 6, 7, 72, 9, 12, 13, 77, 69, 420];
function sumar(numeros) {
  let suma = 0;
  for (elemento of numeros) {
    suma += elemento;
  }
  return suma;
}
// for (i = 0; i < numeros.length; i++) {
//   suma += numeros[i];
// }
// numeros.forEach((numero) => {
//   suma += numero;
// });
// numeros.map((numero) => {
//   suma += numero;
// });
console.log(`Lista de numeros ${numeros}`);
console.log(sumar(numeros));
