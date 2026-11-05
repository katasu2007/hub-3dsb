document.addEventListener("DOMContentLoaded", () => {
    const seccionIntro = document.getElementById("seccionIntro");
    const mainAppContainer = document.getElementById("mainAppContainer");
    const btnComenzarRuta = document.getElementById("btnComenzarRuta");

    let modoActual = "todos"; 

    // Evento seguro para el botón de introducción
    if (btnComenzarRuta) {
        btnComenzarRuta.addEventListener("click", () => {
            if (seccionIntro) seccionIntro.style.display = "none";
            if (mainAppContainer) mainAppContainer.style.display = "block";
            renderizarPaginaCompleta();
            window.scrollTo(0, 0);
        });
    }

    function obtenerProgreso() {
        let p = localStorage.getItem("hub_progreso_3dsb");
        if (!p) {
            p = {};
            modulosData.forEach(m => {
                p[m.id] = { estudiado: false, nota: null };
            });
            guardarProgreso(p);
        } else {
            p = JSON.parse(p);
        }
        return p;
    }

    function guardarProgreso(p) {
        localStorage.setItem("hub_progreso_3dsb", JSON.stringify(p));
    }

    function puedeAcceder(id, progreso) {
        if (id === 1) return true;
        return progreso[id - 1] && progreso[id - 1].nota === 10;
    }

    window.renderizarPaginaCompleta = function() {
        const progreso = obtenerProgreso();
        const totalCompletados = Object.values(progreso).filter(p => p.nota === 10).length;
        const totalModulos = modulosData.length;
        const porcentaje = Math.round((totalCompletados / totalModulos) * 100);

        if (!mainAppContainer) return;

        mainAppContainer.innerHTML = `
            <div class="dashboard-header">
                <div class="dashboard-title-area">
                    <h1>Ruta Académica · 3.º DS «B»</h1>
                    <p>Plataforma de repaso técnico y evaluación interactiva por competencias.</p>
                </div>
                <div class="dashboard-stats">
                    <div class="stat-card-mini">
                        <span>Aprobados</span>
                        <b>${totalCompletados} / ${totalModulos}</b>
                    </div>
                    <div class="stat-card-mini">
                        <span>Progreso</span>
                        <b>${porcentaje}%</b>
                    </div>
                </div>
            </div>

            <div class="mode-selector">
                <button class="btn-mode ${modoActual==='todos'?'active':''}" data-modo="todos">Módulos</button>
                <button class="btn-mode ${modoActual==='Arcides Canales'?'active':''}" data-modo="Arcides Canales">Módulos Profe Arcides</button>
                <button class="btn-mode ${modoActual==='Javier Mineros'?'active':''}" data-modo="Javier Mineros">Módulos Profe Javier</button>
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

    function poblarGridModulos() {
        const grid = document.getElementById("gridModulos");
        if (!grid) return;

        const progreso = obtenerProgreso();
        let filtrados = modulosData;

        // Filtro exacto según la pestaña activa
        if (modoActual === "Arcides Canales") {
            filtrados = modulosData.filter(m => m.docente.includes("Arcides Canales"));
        } else if (modoActual === "Javier Mineros") {
            filtrados = modulosData.filter(m => m.docente.includes("Javier Mineros"));
        }

        let html = `<div class="grid-modulos">`;

        filtrados.forEach((mod) => {
            const estado = progreso[mod.id] || { estudiado: false, nota: null };
            const desbloqueado = puedeAcceder(mod.id, progreso);
            const completado = estado.nota === 10;
            const tieneNota = estado.nota !== null;

            let badgeHtml = `<span class="badge-status status-pendiente">Pendiente</span>`;
            if (completado) {
                badgeHtml = `<span class="badge-status status-completado">Completado (Nota: 10/10)</span>`;
            } else if (tieneNota) {
                badgeHtml = `<span class="badge-status status-pendiente">Nota actual: ${estado.nota}/10 (Requiere 10)</span>`;
            }

            let botonEstudioHtml = "";
            let botonQuizHtml = "";

            if (!desbloqueado) {
                botonEstudioHtml = `<button class="btn-accion disabled" disabled>Bloqueado 🔒</button>`;
                botonQuizHtml = `<button class="btn-accion disabled" disabled>Cuestionario Bloqueado</button>`;
            } else if (completado) {
                botonEstudioHtml = `<button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Repasar</button>`;
                botonQuizHtml = `<button class="btn-accion disabled" disabled>Nota: 10/10 (Aprobado)</button>`;
            } else {
                if (!estado.estudiado) {
                    botonEstudioHtml = `<button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Estudiar Módulo</button>`;
                    botonQuizHtml = `<button class="btn-accion disabled" disabled>Estudia primero</button>`;
                } else {
                    botonEstudioHtml = `<button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Repasar</button>`;
                    botonQuizHtml = `<button class="btn-accion" onclick="iniciarQuiz(${mod.id})">Realizar Cuestionario</button>`;
                }
            }

            let infoCabeceraHtml = "";
            let accionesHtml = "";

            if (modoActual === "todos") {
                infoCabeceraHtml = `
                    <span style="font-weight: 800; color: var(--pastel-purple);">${mod.codigo}</span>
                    <span style="color: var(--text-muted); font-size: 0.85rem;">(${mod.docente})</span>
                    ${badgeHtml}
                `;
                accionesHtml = `
                    <div class="card-actions">
                        ${botonEstudioHtml}
                        ${botonQuizHtml}
                    </div>
                `;
            } else {
                infoCabeceraHtml = `
                    <span style="font-weight: 800; color: var(--pastel-purple);">${mod.codigo}</span>
                `;
                accionesHtml = ""; // Sin botones ni estados en las pestañas exclusivas de profesores
            }

            html += `
                <div class="card-modulo ${completado && modoActual === 'todos' ? 'completado' : ''}">
                    <div class="card-info" style="flex: 1; min-width: 280px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
                            ${infoCabeceraHtml}
                        </div>
                        <h3>${mod.nombre}</h3>
                        <p>${mod.resumenCorto}</p>
                    </div>
                    ${accionesHtml}
                </div>
            `;
        });

        html += `</div>`;
        grid.innerHTML = html;
    }

    window.iniciarEstudio = function(id) {
        const mod = modulosData.find(m => m.id === id);
        const progreso = obtenerProgreso();
        progreso[id].estudiado = true;
        guardarProgreso(progreso);

        const completado = progreso[id].nota === 10;

        let botonSiguienteHtml = completado 
            ? `<button class="btn-accion" onclick="renderizarPaginaCompleta()" style="background: var(--pastel-mint); color: #065f46;">← Volver al listado</button>`
            : `<button class="btn-accion" onclick="iniciarQuiz(${mod.id})">Ir al Cuestionario del Módulo →</button>`;

        if (!mainAppContainer) return;

        mainAppContainer.innerHTML = `
            <div class="study-view">
                <button class="btn-mode" onclick="renderizarPaginaCompleta()" style="margin-bottom: 1.5rem;">← Volver al listado</button>
                <span style="color: var(--pastel-purple); font-weight: 800;">${mod.codigo} · ${mod.docente}</span>
                <h2 style="font-size: 1.8rem; margin: 0.5rem 0 1rem 0;">${mod.nombre}</h2>
                <div class="study-content">
                    
                    <div style="background: var(--pastel-purple-light); padding: 1.2rem 1.5rem; border-radius: 16px; margin-bottom: 1.5rem; border-left: 5px solid var(--pastel-purple);">
                        <h4 style="color: var(--pastel-purple); margin-bottom: 0.3rem; font-weight: 800;">🛠️ Herramientas y Programas Ocupados:</h4>
                        <p style="margin: 0; font-weight: 700; color: var(--text-dark);">${mod.herramientas.join(', ')}</p>
                    </div>

                    <h3 style="color: var(--text-dark); font-size: 1.2rem; margin-top: 1.5rem; margin-bottom: 0.5rem;">📋 ¿Qué se hace en este módulo? (Información Práctica)</h3>
                    ${mod.estudioDetallado}

                </div>
                <div style="margin-top: 2.5rem; display: flex; justify-content: flex-end; gap: 1rem;">
                    ${botonSiguienteHtml}
                </div>
            </div>
        `;
        window.scrollTo(0, 0);
    };

    let moduloActivo = null;
    let preguntaActual = 0;
    let respuestasUsuario = [];
    let preguntasMezcladas = [];

    window.iniciarQuiz = function(id) {
        moduloActivo = modulosData.find(m => m.id === id);
        preguntaActual = 0;
        respuestasUsuario = [];

        let preguntasCopia = JSON.parse(JSON.stringify(moduloActivo.preguntas));
        preguntasMezcladas = preguntasCopia.sort(() => Math.random() - 0.5);

        preguntasMezcladas.forEach(p => {
            let opcionesOriginales = p.o.map((texto, idx) => ({ texto, esCorrecta: idx === p.r }));
            opcionesOriginales.sort(() => Math.random() - 0.5);
            p.o = opcionesOriginales.map(o => o.texto);
            p.r = opcionesOriginales.findIndex(o => o.esCorrecta);
        });

        mostrarPregunta();
        window.scrollTo(0, 0);
    };

    function mostrarPregunta() {
        const p = preguntasMezcladas[preguntaActual];
        if (!mainAppContainer) return;

        mainAppContainer.innerHTML = `
            <div class="quiz-view">
                <button class="btn-mode" onclick="renderizarPaginaCompleta()" style="margin-bottom: 1.5rem;">Cancelar y volver</button>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span style="font-weight: 800; color: var(--pastel-purple);">Cuestionario: ${moduloActivo.codigo}</span>
                    <span style="color: var(--text-muted);">Pregunta ${preguntaActual + 1} de ${preguntasMezcladas.length}</span>
                </div>
                <div class="quiz-question-box">
                    <h3 style="font-size: 1.15rem; color: var(--text-dark);">${p.t}</h3>
                </div>
                <div class="quiz-options">
                    ${p.o.map((op, idx) => `
                        <label class="quiz-option-label">
                            <input type="radio" name="opcionQuiz" value="${idx}" style="accent-color: var(--pastel-purple);">
                            <span>${op}</span>
                        </label>
                    `).join('')}
                </div>
                <div style="display: flex; justify-content: flex-end;">
                    <button class="btn-accion" onclick="siguientePregunta()">Siguiente Pregunta →</button>
                </div>
            </div>
        `;
    }

    window.siguientePregunta = function() {
        const seleccionada = document.querySelector('input[name="opcionQuiz"]:checked');
        if (!seleccionada) {
            alert("Por favor selecciona una respuesta antes de continuar.");
            return;
        }

        const idxSeleccionada = parseInt(seleccionada.value);
        respuestasUsuario.push(idxSeleccionada);
        preguntaActual++;

        if (preguntaActual < preguntasMezcladas.length) {
            mostrarPregunta();
        } else {
            calcularResultadoQuiz();
        }
    };

    function calcularResultadoQuiz() {
        let correctas = 0;
        preguntasMezcladas.forEach((p, idx) => {
            if (respuestasUsuario[idx] === p.r) correctas++;
        });

        const notaFinal = correctas;
        const totalPreguntas = preguntasMezcladas.length;
        const progreso = obtenerProgreso();
        progreso[moduloActivo.id].nota = notaFinal;
        guardarProgreso(progreso);

        let mensajeHtml = "";
        if (notaFinal === totalPreguntas) {
            mensajeHtml = `
                <div style="background: var(--pastel-mint-light); border: 2px solid var(--pastel-mint); padding: 2rem; border-radius: 20px; text-align: center; color: #065f46;">
                    <h2>¡Excelente Trabajo! Nota: ${notaFinal} / ${totalPreguntas} 🌟</h2>
                    <p style="margin: 1rem 0;">Has aprobado y dominado este módulo correctamente. Se ha desbloqueado el siguiente contenido en tu ruta.</p>
                    <button class="btn-accion" onclick="renderizarPaginaCompleta()" style="background: var(--pastel-mint); color: #ffffff;">Continuar ruta de estudio</button>
                </div>
            `;
        } else {
            mensajeHtml = `
                <div style="background: var(--pastel-peach-light); border: 2px solid var(--pastel-peach); padding: 2rem; border-radius: 20px; text-align: center; color: #9a3412;">
                    <h2>Calificación obtenida: ${notaFinal} / ${totalPreguntas} ⚠️</h2>
                    <p style="margin: 1rem 0;">Necesitas una nota perfecta para completar el módulo y avanzar al siguiente. Las preguntas se han barajado de nuevo para un nuevo intento.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap;">
                        <button class="btn-accion" onclick="iniciarEstudio(${moduloActivo.id})" style="background: var(--pastel-peach);">Repasar</button>
                        <button class="btn-accion" onclick="iniciarQuiz(${moduloActivo.id})">Reintentar Cuestionario</button>
                        <button class="btn-accion" onclick="renderizarPaginaCompleta()" style="background: #cbd5e1; color: var(--text-dark);">Volver al listado</button>
                    </div>
                </div>
            `;
        }

        if (mainAppContainer) {
            mainAppContainer.innerHTML = `<div class="study-view">${mensajeHtml}</div>`;
        }
        window.scrollTo(0, 0);
    };
});