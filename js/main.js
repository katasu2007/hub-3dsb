document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gridModulos");
    const buscador = document.getElementById("buscador");
    const contador = document.getElementById("contadorModulos");
    const filterBtns = document.querySelectorAll(".btn-filter");
    const modal = document.getElementById("modalFicha");
    const cerrarModal = document.getElementById("cerrarModal");
    const contenidoModal = document.getElementById("contenidoModal");

    let filtroDocente = "todos";

    function renderModulos(lista) {
        grid.innerHTML = "";
        if (lista.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron fichas de repaso que coincidan con tu búsqueda.</p>`;
            contador.textContent = "Mostrando 0 fichas";
            return;
        }

        lista.forEach(mod => {
            const esArcides = mod.docente.includes("Arcides");
            const badgeClass = esArcides ? "badge-arcides" : "badge-javier";
            
            const card = document.createElement("article");
            card.className = "card-modulo";
            card.innerHTML = `
                <div class="card-top">
                    <div>
                        <span class="badge-docente ${badgeClass}">${mod.docente}</span>
                        <span class="badge-codigo">${mod.codigo}</span>
                    </div>
                    <h3>${mod.nombre}</h3>
                    <p>${mod.descripcion}</p>
                </div>
                <button class="btn-estudiar" data-codigo="${mod.codigo}">Repasar Ficha</button>
            `;
            grid.appendChild(card);
        });

        contador.textContent = `Mostrando ${lista.length} de ${modulosData.length} fichas`;
    }

    function aplicarFiltros() {
        const texto = buscador.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        const filtrados = modulosData.filter(m => {
            const coincideDocente = filtroDocente === "todos" || m.docente.includes(filtroDocente);
            
            const aprendizajesTxt = m.aprendizajes ? m.aprendizajes.join(' ') : '';
            const combined = `${m.codigo} ${m.nombre} ${m.descripcion} ${m.docente} ${m.herramientas.join(' ')} ${aprendizajesTxt}`
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            
            return coincideDocente && combined.includes(texto);
        });

        renderModulos(filtrados);
    }

    // Inicializar
    renderModulos(modulosData);

    // Eventos de Filtro por Docente
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroDocente = btn.getAttribute("data-filter");
            aplicarFiltros();
        });
    });

    // Evento de Búsqueda
    buscador.addEventListener("input", aplicarFiltros);

    // Modal de Ficha de Estudio
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-estudiar")) {
            const codigo = e.target.getAttribute("data-codigo");
            const mod = modulosData.find(m => m.codigo === codigo);
            if (mod) {
                const esArcides = mod.docente.includes("Arcides");
                const badgeClass = esArcides ? "badge-arcides" : "badge-javier";

                const aprendizajesHTML = mod.aprendizajes 
                    ? `<div class="learning-box">
                         <h4>💡 Lo que aprendimos en este módulo:</h4>
                         <ul>${mod.aprendizajes.map(a => `<li>${a}</li>`).join('')}</ul>
                       </div>` 
                    : '';

                contenidoModal.innerHTML = `
                    <span class="badge-docente ${badgeClass}">${mod.docente}</span>
                    <span class="badge-codigo" style="font-size: 0.9rem;">${mod.codigo}</span>
                    <h2 style="margin: 0.5rem 0; color: var(--text-dark);">${mod.nombre}</h2>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">${mod.descripcion}</p>

                    ${aprendizajesHTML}

                    <div class="modal-sections-grid">
                        <div class="info-section">
                            <h5>📋 Instrumentos</h5>
                            <ul>${mod.instrumentos.map(i => `<li>${i}</li>`).join('')}</ul>
                        </div>
                        <div class="info-section">
                            <h5>💻 Programas</h5>
                            <ul>${mod.programas.map(p => `<li>${p}</li>`).join('')}</ul>
                        </div>
                        <div class="info-section">
                            <h5>🛠️ Herramientas</h5>
                            <ul>${mod.herramientas.map(h => `<li>${h}</li>`).join('')}</ul>
                        </div>
                        <div class="info-section">
                            <h5>🔗 Recursos</h5>
                            <ul>${mod.recursos.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener" style="color: var(--primary-blue); font-weight:600;">${r.nombre}</a></li>`).join('')}</ul>
                        </div>
                    </div>

                    <div class="evidence-box">
                        <strong>📌 Evidencia Principal:</strong>
                        <p style="margin-top: 0.25rem;">${mod.evidencia}</p>
                    </div>
                `;
                modal.classList.add("active");
            }
        }
    });

    cerrarModal.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
});