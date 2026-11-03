document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lista-modulos");

    if (contenedor && typeof modulosData !== "undefined") {
        modulosData.forEach(mod => {
            const card = document.createElement("article");
            card.className = "card-modulo";
            card.innerHTML = `
                <h3>${mod.nombre}</h3>
                <p><strong>Docente:</strong> ${mod.docente}</p>
                <p>${mod.descripcion}</p>
            `;
            contenedor.appendChild(card);
        });
    }
});