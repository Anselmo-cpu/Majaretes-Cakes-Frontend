// ===== Buscador de productos en catálogo =====
const searchInput = document.getElementById("searchInput");

if (searchInput) { // Verifica que exista el input en esta página
    const productos = document.querySelectorAll(".productos-grid .producto");

    // Crear elemento de mensaje cuando no hay resultados
    const contenedorCatalogo = document.querySelector(".catalogo .container");
    let mensajeNoResultados = document.createElement("p");
    mensajeNoResultados.textContent = "No se encontraron productos.";
    mensajeNoResultados.style.display = "none"; // oculto por defecto
    mensajeNoResultados.classList.add("no-result");
    contenedorCatalogo.insertBefore(mensajeNoResultados, contenedorCatalogo.querySelector(".btn-pedido-container"));

    // Función de filtrado
    const filtrarProductos = () => {
        const filtro = searchInput.value.toLowerCase();
        let countVisible = 0;

        productos.forEach(producto => {
            const nombre = producto.getAttribute("data-nombre").toLowerCase();
            if (nombre.includes(filtro)) {
                producto.style.display = "block";
                countVisible++;
            } else {
                producto.style.display = "none";
            }
        });

        // Mostrar mensaje si no hay resultados
        mensajeNoResultados.style.display = countVisible === 0 ? "block" : "none";
    };

    // Ejecutar filtrado en cada tecla
    searchInput.addEventListener("keyup", filtrarProductos);
}

// ===== Menú hamburguesa =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open'); // <-- ahora coincide con el CSS
    });
}
