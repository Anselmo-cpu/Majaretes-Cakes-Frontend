// Buscador de productos en catálogo
const searchInput = document.getElementById("searchInput");
if (searchInput) { // Verifica que exista el input en esta página
    const productos = document.querySelectorAll(".productos-grid .producto");

    searchInput.addEventListener("keyup", () => {
        const filtro = searchInput.value.toLowerCase();

        productos.forEach(producto => {
            const nombre = producto.getAttribute("data-nombre").toLowerCase();
            if (nombre.includes(filtro)) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }
        });
    });
}
