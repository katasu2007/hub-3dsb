document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gridModulos");
    const buscador = document.getElementById("buscador");
    const contador = document.getElementById("contadorModulos");
    const modal = document.getElementById("modalFicha");
    const cerrarModal = document.getElementById("cerrarModal");
    const contenidoModal = document.getElementById("contenidoModal");

    function renderModulos(lista) {
        grid.innerHTML = "";
        if (lista.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--mut);">No se encontraron módulos con ese criterio.</p>`;
            contador.textContent = "Mostrando 0 de " + modulosData.length + " módulos";
            return;
        }

        lista.forEach(mod => {
            const card = document.createElement("article");
            card.className = "card-modulo";
            card.innerHTML = `
                <div>
                    <span class="badge-codigo">${mod.codigo}</span>
                    <h3>${mod.nombre}</h3>
                    <p class="docente-lbl"><b>Docente:</b> ${mod.docente}</p>
                    <p>${mod.descripcion}</p>
                </div>
                <button class="btn-detalles" data-codigo="${mod.codigo}">Ver Ficha Completa</button>
            `;
            grid.appendChild(card);
        });

        contador.textContent = `Mostrando ${lista.length} de ${modulosData.length} módulos`;
    }

    // Inicializar render
    renderModulos(modulosData);

    // Buscador en tiempo real con normalización de acentos
    buscador.addEventListener("input", (e) => {
        const texto = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtrados = modulosData.filter(m => {
            const combined = `${m.codigo} ${m.nombre} ${m.descripcion} ${m.docente} ${m.herramientas.join(' ')}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return combined.includes(texto);
        });
        renderModulos(filtrados);
    });

    // Abrir modal de detalles
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-detalles")) {
            const codigo = e.target.getAttribute("data-codigo");
            const mod = modulosData.find(m => m.codigo === codigo);
            if (mod) {
                contenidoModal.innerHTML = `
                    <span class="badge-codigo">${mod.codigo}</span>
                    <h2 style="font-family: var(--fd); margin-bottom: 0.5rem; color: var(--cy);">${mod.nombre}</h2>
                    <p class="docente-lbl" style="margin-bottom: 1rem;"><b>Docente:</b> ${mod.docente}</p>
                    <p style="color: var(--mut); margin-bottom: 1.5rem;">${mod.descripcion}</p>
                    
                    <div class="modal-cats">
                        <div class="cat-box">
                            <b>Instrumentos</b>
                            <ul>${mod.instrumentos.map(i => `<li>${i}</li>`).join('')}</ul>
                        </div>
                        <div class="cat-box">
                            <b>Programas</b>
                            <ul>${mod.programas.map(p => `<li>${p}</li>`).join('')}</ul>
                        </div>
                        <div class="cat-box">
                            <b>Herramientas</b>
                            <ul>${mod.herramientas.map(h => `<li>${h}</li>`).join('')}</ul>
                        </div>
                        <div class="cat-box">
                            <b>Recursos Verificados</b>
                            <ul>${mod.recursos.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener" style="color: var(--cy);">${r.nombre}</a></li>`).join('')}</ul>
                        </div>
                    </div>

                    <div style="background: var(--panel2); padding: 1rem; border-radius: 8px; border: 1px solid var(--line); margin-top: 1rem;">
                        <b style="color: var(--gr);">Evidencia principal:</b>
                        <p style="color: var(--mut); font-size: 0.95rem; margin-top: 0.25rem;">${mod.evidencia}</p>
                    </div>
                `;
                modal.classList.add("active");
            }
        }
    });

    // Cerrar modal
    cerrarModal.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
});