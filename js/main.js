document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("gridModulos");
    const modoBtns = document.querySelectorAll(".btn-mode");
    const container = document.getElementById("appContainer");

    let modoActual = "todos"; // 'todos' o docente específico
    let moduloActivo = null;  // ID del módulo en modo estudio o quiz
    let preguntaActual = 0;
    let respuestasUsuario = [];
    let preguntasMezcladas = [];

    // Cargar progreso guardado en localStorage o inicializar
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

    // Verificar si se puede acceder al módulo (Regla secuencial)
    function puedeAcceder(id, progreso) {
        if (id === 1) return true; // El primero siempre está abierto
        // Para desbloquear el módulo N, el módulo N-1 debe tener nota 10
        return progreso[id - 1] && progreso[id - 1].nota === 10;
    }

    function renderizarPrincipal() {
        const progreso = obtenerProgreso();
        
        let filtrados = modulosData;
        if (modoActual !== "todos") {
            filtrados = modulosData.filter(m => m.docente.includes(modoActual));
        }

        let html = `
            <div class="grid-modulos">
        `;

        filtrados.forEach((mod, index) => {
            const estado = progreso[mod.id];
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
                // Si ya sacó 10, solo resumen y nota
                botonEstudioHtml = `<button class="btn-accion" onclick="verResumen(${mod.id})">Ver Resumen</button>`;
                botonQuizHtml = `<button class="btn-accion disabled" disabled>Nota: 10/10 (Aprobado)</button>`;
            } else {
                // Flujo normal pendiente o con nota < 10
                if (!estado.estudiado) {
                    botonEstudioHtml = `<button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Estudiar Módulo</button>`;
                    botonQuizHtml = `<button class="btn-accion disabled" disabled>Estudia primero</button>`;
                } else {
                    botonEstudioHtml = `<button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Repasar Apuntes</button>`;
                    botonQuizHtml = `<button class="btn-accion" onclick="iniciarQuiz(${mod.id})">Realizar Cuestionario</button>`;
                }
            }

            html += `
                <div class="card-modulo ${completado ? 'completado' : ''}">
                    <div class="card-info" style="flex: 1; min-width: 280px;">
                        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
                            <span style="font-weight: 800; color: var(--pastel-purple);">${mod.codigo}</span>
                            <span style="color: var(--text-muted); font-size: 0.85rem;">(${mod.docente})</span>
                            ${badgeHtml}
                        </div>
                        <h3>${mod.nombre}</h3>
                        <p>${mod.resumenCorto}</p>
                    </div>
                    <div class="card-actions">
                        ${botonEstudioHtml}
                        ${botonQuizHtml}
                    </div>
                </div>
            `;
        });

        html += `</div>`;
        grid.innerHTML = html;
    }

    // --- FUNCIONES DE ESTUDIO ---
    window.iniciarEstudio = function(id) {
        const mod = modulosData.find(m => m.id === id);
        const progreso = obtenerProgreso();
        progreso[id].estudiado = true;
        guardarProgreso(progreso);

        container.innerHTML = `
            <div class="study-view">
                <button class="btn-mode" onclick="renderizarPrincipal()" style="margin-bottom: 1.5rem;">← Volver al listado</button>
                <span style="color: var(--pastel-purple); font-weight: 800;">${mod.codigo} · ${mod.docente}</span>
                <h2>${mod.nombre}</h2>
                <div class="study-content">
                    ${mod.estudiadoDetallado || mod.descripcion}
                    <div style="background: var(--bg-main); padding: 1.2rem; border-radius: 12px; margin-top: 1.5rem;">
                        <h4 style="color: var(--pastel-purple); margin-bottom: 0.5rem;">Herramientas y Programas Clave:</h4>
                        <p>${mod.herramientas.join(', ')}</p>
                    </div>
                </div>
                <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
                    <button class="btn-accion" onclick="iniciarQuiz(${mod.id})">Ir al Cuestionario del Módulo →</button>
                </div>
            </div>
        `;
        window.scrollTo(0, 0);
    };

    window.verResumen = function(id) {
        const mod = modulosData.find(m => m.id === id);
        container.innerHTML = `
            <div class="study-view">
                <button class="btn-mode" onclick="renderizarPrincipal()" style="margin-bottom: 1.5rem;">← Volver al listado</button>
                <span style="color: var(--pastel-mint); font-weight: 800;">Módulo Completado (10/10)</span>
                <h2>${mod.nombre}</h2>
                <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${mod.resumenCorto}</p>
                <div style="background: var(--pastel-mint-light); padding: 1.5rem; border-radius: 16px; border-left: 5px solid var(--pastel-mint); color: #065f46;">
                    <strong>Herramientas ocupadas:</strong> ${mod.herramientas.join(', ')}
                </div>
                <div style="margin-top: 1.5rem;">
                    <button class="btn-accion" onclick="iniciarEstudio(${mod.id})">Ver apuntes completos de nuevo</button>
                </div>
            </div>
        `;
        window.scrollTo(0, 0);
    };

    // --- FUNCIONES DE QUIZ ALEATORIO ---
    window.iniciarQuiz = function(id) {
        moduloActivo = modulosData.find(m => m.id === id);
        preguntaActual = 0;
        respuestasUsuario = [];

        // Mezclar preguntas aleatoriamente
        let preguntasCopia = JSON.parse(JSON.stringify(moduloActivo.preguntas));
        preguntasMezcladas = preguntasCopia.sort(() => Math.random() - 0.5);

        // Mezclar opciones de cada pregunta aleatoriamente
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
        container.innerHTML = `
            <div class="quiz-view">
                <button class="btn-mode" onclick="renderizarPrincipal()" style="margin-bottom: 1.5rem;">Cancelar y volver</button>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span style="font-weight: 800; color: var(--pastel-purple);">Cuestionario: ${moduloActivo.codigo}</span>
                    <span style="color: var(--text-muted);">Pregunta ${preguntaActual + 1} de 10</span>
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

        if (preguntaActual < 10) {
            mostrarPregunta();
        } else {
            calcularResultadoQuiz();
        }
    };

    function calcularResultadoQuiz() {
        let correctas = 0;
        preguntasMezcladas.forEach((p, idx) => {
            if (respuestasUsuario[idx] === p.r) {
                correctas++;
            }
        });

        const notaFinal = correctas; // Escala de 1 a 10
        const progreso = obtenerProgreso();
        progreso[moduloActivo.id].nota = notaFinal;
        guardarProgreso(progreso);

        let mensajeHtml = "";
        if (notaFinal === 10) {
            mensajeHtml = `
                <div style="background: var(--pastel-mint-light); border: 2px solid var(--pastel-mint); padding: 2rem; border-radius: 20px; text-align: center; color: #065f46;">
                    <h2>¡Excelente Trabajo! Nota: 10 / 10 🌟</h2>
                    <p style="margin: 1rem 0;">Has aprobado y dominado este módulo correctamente. Se ha desbloqueado el siguiente contenido en tu ruta.</p>
                    <button class="btn-accion" onclick="volverAlInicio()" style="background: var(--pastel-mint); color: #ffffff;">Continuar ruta de estudio</button>
                </div>
            `;
        } else {
            mensajeHtml = `
                <div style="background: var(--pastel-peach-light); border: 2px solid var(--pastel-peach); padding: 2rem; border-radius: 20px; text-align: center; color: #9a3412;">
                    <h2>Calificación obtenida: ${notaFinal} / 10 ⚠️</h2>
                    <p style="margin: 1rem 0;">Necesitas una nota perfecta de 10 para completar el módulo y avanzar al siguiente. Las preguntas se han barajado de nuevo para un nuevo intento.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem;">
                        <button class="btn-accion" onclick="iniciarEstudio(${moduloActivo.id})" style="background: var(--pastel-peach);">Repasar Apuntes</button>
                        <button class="btn-accion" onclick="iniciarQuiz(${moduloActivo.id})">Reintentar Cuestionario</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `<div class="study-view">${mensajeHtml}</div>`;
        window.scrollTo(0, 0);
    }

    window.volverAlInicio = function() {
        container.innerHTML = `<div id="appContainer"></div>`;
        renderizarPrincipal();
    };

    // Filtros de modo docente / todos
    modoBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modoBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            modoActual = btn.getAttribute("data-modo");
            renderizarPrincipal();
        });
    });

    // Inicializar vista general
    renderizarPrincipal();
});