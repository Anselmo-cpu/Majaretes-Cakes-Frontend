// ===== Buscador de productos en catálogo =====
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    const secciones = document.querySelectorAll(".catalogo .productos-grid");

    // Crear un mensaje de "no resultados" para cada sección
    secciones.forEach(grid => {
        let mensajeNoResultados = document.createElement("p");
        mensajeNoResultados.textContent = "No se encontraron productos.";
        mensajeNoResultados.style.display = "none";
        mensajeNoResultados.classList.add("no-result");
        grid.parentNode.insertBefore(mensajeNoResultados, grid.nextElementSibling);
    });

    const filtrarProductos = () => {
        const filtro = searchInput.value.toLowerCase();

        secciones.forEach(grid => {
            const productos = grid.querySelectorAll(".producto");
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

            // Mostrar mensaje si no hay resultados en esta sección
            const mensajeNoResultados = grid.parentNode.querySelector(".no-result");
            mensajeNoResultados.style.display = countVisible === 0 ? "block" : "none";
        });
    };

    searchInput.addEventListener("keyup", filtrarProductos);
}

// ===== Menú hamburguesa =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
    });
}



