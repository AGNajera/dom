const caja = document.getElementById("caja");
caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "orange";
});
caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "gray";
});

const btn = document.getElementById("miBoton");
btn.addEventListener(
  "click",
  () => {
    console.log("Accion ejecutada una sola vez");
  },
  { once: true },
);
