window.renderizarPaginaCompleta = function() {
        const progreso = obtenerProgreso();
        const totalCompletados = Object.values(progreso).filter(p => p.nota === 10).length;
        const porcentaje = Math.round((totalCompletados / 8) * 100);

        mainAppContainer.innerHTML = `
            <div class="dashboard-header">
                <div class="dashboard-title-area">
                    <h1>Ruta Académica · 3.º DS «B»</h1>
                    <p>Plataforma de repaso técnico y evaluación interactiva por competencias.</p>
                </div>
                <div class="dashboard-stats">
                    <div class="stat-card-mini">
                        <span>Aprobados</span>
                        <b>${totalCompletados} / 8</b>
                    </div>
                    <div class="stat-card-mini">
                        <span>Progreso</span>
                        <b>${porcentaje}%</b>
                    </div>
                </div>
            </div>

            <div class="mode-selector">
                <button class="btn-mode ${modoActual==='todos'?'active':''}" data-modo="todos">Ruta Completa</button>
                <button class="btn-mode ${modoActual==='Arcides Canales'?'active':''}" data-modo="Arcides Canales">Profe Arcides</button>
                <button class="btn-mode ${modoActual==='Javier Mineros'?'active':''}" data-modo="Javier Mineros">Profe Javier</button>
            </div>
            
            <div id="appContainer">
                <div id="gridModulos"></div>
            </div>
        `;

        document.querySelectorAll(".btn-mode[data-modo]").forEach(b => {
            b.addEventListener("click", () => {
                document.querySelectorAll(".btn-mode[data-modo]").forEach(btn => btn.classList.remove("active"));
                b.classList.add("active");
                modoActual = b.getAttribute("data-modo");
                poblarGridModulos();
            });
        });

        poblarGridModulos();
    };