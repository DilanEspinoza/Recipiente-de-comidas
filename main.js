const contenedor = document.querySelector(".contenedor__ingredientes");
const btnMenu = document.getElementById("icono-menu");

btnMenu.addEventListener("click", () => {
  contenedor.classList.toggle("contenedor__ingredientes-activo");
});
