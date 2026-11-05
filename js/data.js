const modulosData = [
    // --- MÓDULOS PROFE ARCIDES CANALES ---
    {
        codigo: "BTVDS 3.2",
        nombre: "Diseño e implementación de acuerdos de nivel de servicio (SLA)",
        docente: "Profesor Arcides Canales",
        descripcion: "Creación de acuerdos de nivel de servicio (SLA) para definir estándares con clientes y refactorización de código según requisitos.",
        aprendizajes: [
            "Creación de documentos SLA profesional para definir estándares y requisitos del cliente.",
            "Mejora del programa 'La Esquina del Sabor' basado en requerimientos específicos de la plantilla SLA."
        ],
        instrumentos: ["Plantilla de acuerdo SLA", "Lista de cotejo de requerimientos", "Rúbrica de software"],
        programas: ["Visual Studio Community", "Word", "VS Code"],
        herramientas: ["C#", "Documentación SLA", "Control de Calidad"],
        recursos: [
            { nombre: "Guía de Acuerdos SLA en IT (Microsoft Learn)", url: "https://learn.microsoft.com/es-es/" }
        ],
        evidencia: "Documento SLA cliente-desarrollador y refactorización del software 'La Esquina del Sabor'."
    },
    {
        codigo: "BTVDS 3.3",
        nombre: "Administración y análisis visual de datos relacionales",
        docente: "Profesor Arcides Canales",
        descripcion: "Dominio del lenguaje SQL en SQL Server para grandes volúmenes de datos y creación de Dashboards interactivos.",
        aprendizajes: [
            "Consultas avanzadas en SQL Server: selección, inserción, actualización y eliminación (CRUD) en bases de datos masivas.",
            "Modelado de Dashboards interactivos en Power BI y Excel para la toma de decisiones basada en datos."
        ],
        instrumentos: ["Guías de laboratorio SQL", "Rúbricas de diseño de Dashboards"],
        programas: ["SQL Server Management Studio (SSMS)", "Power BI Desktop", "Microsoft Excel"],
        herramientas: ["T-SQL", "Power Query", "Modelado de datos"],
        recursos: [
            { nombre: "Documentación oficial de SQL Server", url: "https://learn.microsoft.com/es-es/sql/" },
            { nombre: "Microsoft Power BI Docs", url: "https://learn.microsoft.com/es-es/power-bi/" }
        ],
        evidencia: "Dashboard interactivo en Power BI conectado a base de datos relacional de gran escala en SQL Server."
    },
    {
        codigo: "BTVDS 3.4",
        nombre: "Desarrollo multiplataforma y gestión ERP empresarial",
        docente: "Profesor Arcides Canales",
        descripcion: "Construcción de aplicaciones multiplataforma con diversos lenguajes y comprensión de sistemas ERP con Odoo.",
        aprendizajes: [
            "Desarrollo de aplicaciones de escritorio y multiplataforma usando Python, PHP, Avalonia UI y WPF.",
            "Operación y flujo funcional de módulos empresariales mediante el sistema ERP Odoo."
        ],
        instrumentos: ["Listas de cotejo", "Evaluaciones prácticas de integración ERP"],
        programas: ["Visual Studio", "VS Code", "XAMPP", "Instancia Odoo ERP"],
        herramientas: ["Python", "PHP", "Avalonia UI", "WPF", "Odoo ERP"],
        recursos: [
            { nombre: "Documentación de Avalonia UI", url: "https://docs.avaloniaui.net/" },
            { nombre: "Odoo Documentation", url: "https://www.odoo.com/documentation" }
        ],
        evidencia: "Aplicación de escritorio en Avalonia/WPF e integración funcional de módulos en Odoo ERP."
    },
    {
        codigo: "BTVDS 3.8",
        nombre: "Integración de inteligencia artificial y soluciones innovadoras",
        docente: "Profesor Arcides Canales",
        descripcion: "Implementación de modelos de IA generativa y agentes para el desarrollo de soluciones de software de alto impacto.",
        aprendizajes: [
            "Integración de APIs de Inteligencia Artificial con Google AI Studio y GitHub Copilot en VS Code.",
            "Desarrollo e implementación del proyecto innovador 'EstudIAnte' integrando todos los aprendizajes del año."
        ],
        instrumentos: ["Rúbrica de innovación tecnológica", "Defensa de proyecto"],
        programas: ["VS Code", "GitHub Copilot", "Google AI Studio"],
        herramientas: ["APIs de IA", "Prompt Engineering", "Python / C#"],
        recursos: [
            { nombre: "Google AI Studio Docs", url: "https://aistudio.google.com/" }
        ],
        evidencia: "Aplicación innovadora 'EstudIAnte' integrada con agentes de Inteligencia Artificial."
    },

    // --- MÓDULOS PROFE JAVIER MINEROS ---
    {
        codigo: "BTVDS 3.1",
        nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
        docente: "Profesor Javier Mineros",
        descripcion: "Construcción y lógica de sistemas de software enfocados en resolver necesidades reales utilizando arquitecturas robustas.",
        aprendizajes: [
            "Diseño de arquitecturas relacionales y conexión PDO segura.",
            "Lógica de negocio y subtrazabilidad automatizada en inventarios."
        ],
        instrumentos: ["Guías de laboratorio", "Rúbricas de evaluación de código"],
        programas: ["Visual Studio Community", "XAMPP", "SQL Server Management Studio", "VS Code"],
        herramientas: ["C#", ".NET", "PHP", "SQL", "MySQL"],
        recursos: [
            { nombre: "MDN Web Docs (JavaScript/HTML)", url: "https://developer.mozilla.org/es/" },
            { nombre: "Microsoft Learn (.NET / C#)", url: "https://learn.microsoft.com/es-es/" }
        ],
        evidencia: "Sistema de inventario y punto de venta local con PDO y base de datos relacional."
    },
    {
        codigo: "BTVDS 3.5",
        nombre: "Desarrollo de componentes para dispositivos móviles",
        docente: "Profesor Javier Mineros",
        descripcion: "Creación de interfaces y componentes adaptados para arquitecturas móviles multiplataforma.",
        aprendizajes: [
            "Construcción de layouts responsivos en XAML para dispositivos móviles.",
            "Manejo de estado y conexión a backends con .NET MAUI."
        ],
        instrumentos: ["Listas de cotejo", "Evaluaciones de emulación móvil"],
        programas: ["Visual Studio", ".NET MAUI Workloads", "Android Emulator"],
        herramientas: [".NET MAUI", "C#", "XAML", "Android SDK"],
        recursos: [
            { nombre: "Documentación oficial de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" }
        ],
        evidencia: "Aplicación móvil multiplataforma para seguimiento de rutas y operaciones."
    },
    {
        codigo: "BTVDS 3.6",
        nombre: "Conversación de inglés sobre mantenimiento de sistemas informáticos",
        docente: "Profesor Javier Mineros",
        descripcion: "Aplicación de vocabulario técnico en inglés enfocado en soporte, diagnóstico y mantenimiento de equipos informáticos.",
        aprendizajes: [
            "Manejo de vocabulario técnico en inglés para diagnóstico de sistemas.",
            "Simulación de soporte técnico a usuarios finales en idioma inglés."
        ],
        instrumentos: ["Rúbricas de exposición oral", "Simulaciones de soporte técnico"],
        programas: ["Plataformas de videoconferencia", "Lectores de documentación técnica"],
        herramientas: ["Vocabulario técnico IT", "Glifos de soporte", "Manuales en inglés"],
        recursos: [
            { nombre: "Microsoft Learn Documentation", url: "https://learn.microsoft.com/" }
        ],
        evidencia: "Manual técnico y glosario bilingüe de solución de fallas de hardware y software."
    },
    {
        codigo: "BTVDS 3.7",
        nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
        docente: "Profesor Javier Mineros",
        descripcion: "Estructuración y planificación de proyectos de emprendimiento bajo modelos asociativos y cooperativos.",
        aprendizajes: [
            "Creación del Modelo Canvas enfocado en cooperativas tecnológicas.",
            "Estructuración de presupuestos y viabilidad técnica de microempresas de desarrollo."
        ],
        instrumentos: ["Planes de negocio", "Matrices de evaluación cooperativa"],
        programas: ["Hojas de cálculo", "Herramientas de diagramación"],
        herramientas: ["Modelo Canvas", "Gestión de proyectos", "Contabilidad cooperativa"],
        recursos: [
            { nombre: "Documentación de Emprendimiento", url: "https://www.odoo.com/documentation" }
        ],
        evidencia: "Plan de negocio y constitución de modelo cooperativo digital."
    }
];