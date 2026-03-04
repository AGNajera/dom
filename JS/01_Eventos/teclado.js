let teclas1 = document.getElementById("campoTexto");
teclas1.addEventListener("keydown", (e) => {
  console.log(`Tecla: ${e.key} - Codigo ${e.code}`);
});
