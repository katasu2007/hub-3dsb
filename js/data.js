const modulosData = [
    // --- MÓDULOS DEL PROFESOR ARCIDES CANALES (4 Módulos) ---
    {
        id: 1, codigo: "BTVDS 3.1", docente: "Profesor Arcides Canales",
        nombre: "BTVDS 3.1 Desarrollo de aplicaciones de software para la solución de problemas",
        resumenCorto: "Prácticas de Programación Orientada a Objetos (POO), herencia, polimorfismo, acceso a datos y Code First con ASP Razor.",
        herramientas: ["C#", "POO", "ASP Razor", "Entity Framework Code First", "SQL Server", "Visual Studio Community"],
        estudioDetallado: `
            <h3>1. Introducción a la POO y Polimorfismo</h3>
            <p>Se abordan los conceptos fundamentales mediante la Práctica 1 (Introducción a la POO) y la Práctica 2 (Herencia y Polimorfismo) para estructurar clases lógicas en C#.</p>
            <h3>2. Acceso a Datos y Conexión</h3>
            <p>Se trabaja la etapa de informarse, la Práctica 3 ("A" Acceso a datos) y la Práctica 04 orientada a la creación y conexión de bases de datos relacionales.</p>
            <h3>3. Desarrollo Moderno con ASP Razor</h3>
            <p>Implementación de la Práctica 05 enfocada en Code First y ASP Razor para el desarrollo robusto de aplicaciones web y de software.</p>
        `,
        preguntas: [
            { t: "¿Qué conceptos abordan las primeras prácticas de POO del Profe Arcides?", o: ["Herencia y Polimorfismo", "Redes LAN", "Edición de video", "Diseño gráfico"], r: 0 },
            { t: "¿Qué tecnología se emplea en la Práctica 05 de este módulo?", o: ["Code First - ASP Razor", "PHP tradicional", "Excel avanzado", "Photoshop"], r: 0 },
            { t: "¿Cuál es el propósito de la Práctica 3 'Acceso a datos'?", o: ["Vincular clases de la aplicación con fuentes de datos persistentes", "Crear animaciones 3D", "Configurar routers", "Imprimir documentos"], r: 0 },
            { t: "¿Qué lenguaje de programación se utiliza en los entornos de Visual Studio?", o: ["C#", "Python", "Ruby", "Assembly"], r: 0 },
            { t: "¿Qué representa el enfoque 'Code First'?", o: ["Definir clases en código para generar la base de datos automáticamente", "Escribir SQL en papel", "Borrar tablas manualmente", "No usar base de datos"], r: 0 },
            { t: "¿Qué práctica corresponde a la creación de base de datos y conexión?", o: ["Práctica 04", "Práctica 01", "Práctica 10", "Práctica de inglés"], r: 0 },
            { t: "¿Qué utilidad tiene el polimorfismo en la POO?", o: ["Permitir que objetos de distintas clases respondan a un mismo método de forma especializada", "Hacer el código más lento", "Duplicar archivos", "Eliminar variables"], r: 0 },
            { t: "¿Qué herramienta se usa como entorno de desarrollo principal?", o: ["Visual Studio Community", "Bloc de notas", "Paint", "Reproductor de música"], r: 0 },
            { t: "¿Qué etapa precede al desarrollo práctico de las soluciones?", o: ["Etapa de Informarse", "Etapa de vacaciones", "Etapa de impresión", "Cierre cooperativo"], r: 0 },
            { t: "¿Cuál es la finalidad de evaluar el promedio estimado?", o: ["Medir el rendimiento global y competencias en el desarrollo de aplicaciones", "Comprar licencias", "Ver películas", "Instalar redes"], r: 0 }
        ]
    },
    {
        id: 2, codigo: "BTVDS 3.2", docente: "Profesor Arcides Canales",
        nombre: "Modulo 2 Desarrollo de componentes para dispositivos móviles",
        resumenCorto: "Prácticas de desarrollo móvil progresivo con .NET MAUI (Práctica 06, 7, 8, 9), autoevaluaciones y recuperación.",
        herramientas: [".NET MAUI", "C#", "XAML", "Visual Studio", "Emulador Android"],
        estudioDetallado: `
            <h3>1. Fundamentos de .NET MAUI</h3>
            <p>Se inicia con la Práctica 06 estableciendo los fundamentos de la maquetación y la lógica multiplataforma para dispositivos inteligentes utilizando C# y XAML.</p>
            <h3>2. Estructuración de Interfaces y Componentes Avanzados</h3>
            <p>A través de la Práctica 7, Práctica 8 y Práctica 9 Net Maui, se construyen interfaces de usuario responsivas, navegación entre páginas y enlace de datos móviles.</p>
            <h3>3. Autoevaluaciones y Recuperación</h3>
            <p>Se evalúa el dominio mediante la Autoevaluación Práctica 9 y actividades de nivelación o recuperación para garantizar los estándares técnicos.</p>
        `,
        preguntas: [
            { t: "¿Qué framework multiplataforma se aborda en este módulo móvil del Profe Arcides?", o: [".NET MAUI", "DirectX", "Windows Forms", "Laravel"], r: 0 },
            { t: "¿Con qué número de práctica inicia la secuencia avanzada de Net Maui?", o: ["Práctica 06", "Práctica 01", "Práctica 20", "Práctica 50"], r: 0 },
            { t: "¿Cuál es el propósito de las prácticas 7, 8 y 9 Net Maui?", o: ["Diseñar y estructurar componentes visuales y lógicos para apps móviles", "Crear páginas web HTML estáticas", "Configurar servidores Apache", "Reparar fuentes de poder"], r: 0 },
            { t: "¿Qué lenguaje gestiona el código detrás en los proyectos MAUI?", o: ["C#", "Java", "Python", "Swift"], r: 0 },
            { t: "¿Qué actividad evalúa los conocimientos al finalizar la unidad de MAUI?", o: ["Autoevaluación Práctica 9", "Examen de mecanografía", "Torneo de videojuegos", "Instalación de XAMPP"], r: 0 },
            { t: "¿Para qué sirve el espacio de nivelación o recuperación?", o: ["Para reforzar competencias no alcanzadas y consolidar la nota final", "Para cambiar de especialidad", "Para eliminar tareas", "Para apagar el servidor"], r: 0 },
            { t: "¿Qué lenguaje de marcado se usa para las vistas en MAUI?", o: ["XAML", "Markdown", "CSS puro", "SQL Server"], r: 0 },
            { t: "¿Dónde se ejecutan habitualmente las pruebas de estas apps móviles?", o: ["En el emulador de Android o dispositivos físicos conectados", "En una hoja de Excel", "Impresas en papel", "En una calculadora"], r: 0 },
            { t: "¿Qué caracteriza a un componente móvil reutilizable?", o: ["Modularidad y adaptabilidad a diferentes pantallas", "Tamaño fijo de píxeles", "No requerir código", "Funcionar sin procesador"], r: 0 },
            { t: "¿Cuál es el objetivo principal del módulo móvil?", o: ["Capacitar en la creación de software ejecutable en entornos móviles modernos", "Vender smartphones", "Diseñar logotipos", "Instalar fibra óptica"], r: 0 }
        ]
    },
    {
        id: 3, codigo: "BTVDS 3.3", docente: "Profesor Arcides Canales",
        nombre: "Modulo 3 Conversación de ingles sobre mantenimiento de sistemas informáticos",
        resumenCorto: "Prácticas metodológicas orientadas a la gestión ágil (Scrum), bases de datos CRUD e Inteligencia Artificial.",
        herramientas: ["Scrum", "Bases de Datos", "CRUD", "IA", "Metodologías Ágiles"],
        estudioDetallado: `
            <h3>1. Gestión Ágil de Proyectos con Scrum</h3>
            <p>A través de la Práctica 10 scrum, se estudian los roles, ceremonias y artefactos de las metodologías ágiles aplicadas al desarrollo de software.</p>
            <h3>2. Integración de Bases de Datos CRUD con IA</h3>
            <p>La Práctica 11-Base de datos CRUD-IA fusiona la creación de operaciones CRUD con herramientas de inteligencia artificial aplicada al desarrollo.</p>
            <h3>3. Evaluación de Promedio del Módulo 3</h3>
            <p>Consolidación del rendimiento técnico y técnico-lingüístico mediante el promedio estimado del módulo 3.</p>
        `,
        preguntas: [
            { t: "¿Qué metodología ágil se aborda en la Práctica 10 del Profe Arcides?", o: ["Scrum", "Cascada clásica", "Modelo en V", "Programación lineal"], r: 0 },
            { t: "¿Qué significan las siglas CRUD en bases de datos?", o: ["Create, Read, Update, Delete", "Compile, Run, Use, Debug", "Control, Register, User, Data", "Copy, Restore, Upload, Direct"], r: 0 },
            { t: "¿Qué combinación tecnológica presenta la Práctica 11?", o: ["Base de datos CRUD e Inteligencia Artificial (IA)", "Excel y Word", "Redes y hardware físico", "Dibujo técnico y pintura"], r: 0 },
            { t: "¿Cuál es el rol principal de Scrum en el desarrollo informático?", o: ["Organizar iteraciones (sprints) y equipos de trabajo de forma ágil y colaborativa", "Reparar monitores", "Crear cables UTP", "Instalar sistemas antiguos"], r: 0 },
            { t: "¿Qué evalúa el promedio estimado del módulo 3?", o: ["El desempeño global en gestión ágil, bases de datos e IA", "La velocidad de escritura", "El diseño de carteles", "La contabilidad cooperativa"], r: 0 },
            { t: "¿Por qué es importante integrar IA en operaciones CRUD modernas?", o: ["Para automatizar consultas, optimizar código y mejorar la eficiencia", "Para ralentizar computadoras", "Para consumir más energía", "Para evitar bases de datos"], r: 0 },
            { t: "¿Qué artefacto es común en la metodología Scrum?", o: ["Sprint Backlog y Tablero de tareas", "Disco duro de 1TB", "Cable HDMI", "Fuente de poder"], r: 0 },
            { t: "¿Qué herramienta o entorno se asocia al desarrollo de bases de datos relacionales?", o: ["SQL Server / MySQL", "Microsoft Paint", "Bloc de notas sin formato", "Reproductor de video"], r: 0 },
            { t: "¿Qué habilidad fomenta el trabajo bajo marcos ágiles como Scrum?", o: ["Adaptabilidad al cambio, comunicación constante y entregas incrementales", "Trabajo aislado sin hablar", "Evitar documentar", "Hacer todo en un día sin planificar"], r: 0 },
            { t: "¿Cuál es o fue el propósito del módulo 3?", o: ["Preparar al técnico para entornos de trabajo modernos con metodologías y datos inteligentes", "Vender equipo usado", "Impartir literatura", "Diseñar webs estáticas"], r: 0 }
        ]
    },
    {
        id: 4, codigo: "BTVDS 3.4", docente: "Profesor Arcides Canales",
        nombre: "Modulo 4 Puesta en marcha de la empresa en asociatividad cooperativa",
        resumenCorto: "Proyectos integrales: Prestashop (25%), Proyecto Final .net maui (25%), Winform y aspx (25%), y Augustine-Arduino (25%).",
        herramientas: ["Prestashop", ".NET MAUI", "WinForms", "ASPX", "Arduino", "E-commerce"],
        estudioDetallado: `
            <h3>1. E-commerce con Prestashop (25%)</h3>
            <p>Despliegue y configuración de tiendas virtuales autoadministrables para la comercialización digital en un entorno de microempresa cooperativa.</p>
            <h3>2. Desarrollo Multiplataforma y Web (50% combinados)</h3>
            <p>Comprende el Proyecto Final .net maui (25%) y el Proyecto Winform y aspx (25%) para soluciones robustas de escritorio y web corporativas.</p>
            <h3>3. Innovación con Hardware y Arduino (25%)</h3>
            <p>Implementación del Proyecto Augustine-Arduino (25%), uniendo el software de control con hardware embebido para automatización de procesos.</p>
        `,
        preguntas: [
            { t: "¿Qué porcentaje del módulo representa la práctica de Prestashop (Individual)?", o: ["25% del módulo", "10% del módulo", "50% del módulo", "100% del módulo"], r: 0 },
            { t: "¿Qué plataforma de comercio electrónico se implementó en este bloque?", o: ["Prestashop", "WordPress básico", "Excel Online", "Android Studio"], r: 0 },
            { t: "¿Qué tecnologías abarca el proyecto Winform y aspx?", o: ["Aplicaciones de escritorio (Windows Forms) y páginas web dinámicas (ASPX)", "Redes sociales", "Reparación de impresoras", "Edición de video"], r: 0 },
            { t: "¿Qué tipo de solución abarca el Proyecto Final .net maui?", o: ["Aplicación multiplataforma orientada a dispositivos móviles y sistemas", "Hoja de cálculo estática", "Cable de red cruzado", "Documento Word"], r: 0 },
            { t: "¿Qué hardware se integra en el Proyecto Augustine-Arduino?", o: ["Placas Arduino y componentes electrónicos", "Tarjetas gráficas", "Impresoras láser", "Router inalámbrico"], r: 0 },
            { t: "¿Cuál es el objetivo de poner en marcha una empresa en asociatividad cooperativa?", o: ["Simular la creación y gestión real de un negocio tecnológico asociativo con productos funcionales", "Hacer tareas sin sentido", "Jugar en red local", "Escribir ensayos"], r: 0 },
            { t: "¿Qué evalúa el promedio final del módulo 4?", o: ["La integración de los cuatro proyectos clave (Prestashop, MAUI, Winform/aspx y Arduino)", "La memoria RAM", "La velocidad de internet", "El diseño de la interfaz de Windows"], r: 0 },
            { t: "¿Qué ventaja ofrece Prestashop para una microempresa cooperativa?", o: ["Facilitar la venta online de productos con gestión integrada de catálogo y pagos", "Impedir que los clientes compren", "Reemplazar C#", "Eliminar bases de datos"], r: 0 },
            { t: "¿Qué relación existe entre WinForms y ASPX en .NET?", o: ["Ambos forman parte del ecosistema Microsoft .NET para desarrollo de escritorio y web clásica", "Son videojuegos", "Son marcas de procesadores", "Son protocolos WiFi"], r: 0 },
            { t: "¿Por qué se combina software y hardware (Arduino) en los proyectos finales?", o: ["Para ofrecer soluciones de automatización integral que conectan lo digital con lo físico", "Para gastar componentes", "Para hacer la PC más pesada", "Para no usar bases de datos"], r: 0 }
        ]
    },

    // --- MÓDULOS DEL PROFESOR JAVIER MINEROS (5 Módulos) ---
    {
        id: 5, codigo: "BTVDS 3.1", docente: "Profesor Javier Mineros",
        nombre: "Módulo 3.0 “Orientación de estudiantes al proceso educativo del tercer año”",
        resumenCorto: "Orientación inicial, creación de equipos de trabajo, portafolio y normativas del tercer año técnico.",
        herramientas: ["Portafolio", "Equipos de Trabajo", "Lineamientos Institucionales"],
        estudioDetallado: `
            <h3>1. Generalidades del Módulo 3.0</h3>
            <p>Se establecen los lineamientos de inducción, objetivos institucionales y pautas metodológicas para cursar exitosamente el tercer año de desarrollo de software con el Profe Javier.</p>
            <h3>2. Organización y Equipos de Trabajo</h3>
            <p>Gestión de dinámicas colaborativas mediante la creación de equipos de trabajo y espacios estructurados para compartir recursos digitales y portafolios.</p>
        `,
        preguntas: [
            { t: "¿Cuál es el propósito principal del Módulo 3.0 del Profe Javier?", o: ["Orientar a los estudiantes al proceso educativo del tercer año", "Programar en ensamblador", "Configurar redes LAN", "Instalar Linux"], r: 0 },
            { t: "¿Qué actividad inicial se realiza respecto a la organización estudiantil?", o: ["Creación de equipos de trabajo", "Venta de hardware", "Formateo masivo", "Diseño de logotipos"], r: 0 },
            { t: "¿Qué elemento recopila las evidencias de aprendizaje en este módulo?", o: ["Portafolio del módulo", "Hoja de cálculo en blanco", "Cable de red", "Manual antiguo"], r: 0 },
            { t: "¿Dónde se comparten habitualmente los recursos e información inicial (como QRs)?", o: ["En el espacio destinado para compartir QRs y portafolios", "En la papelera", "En un bloc sin guardar", "En un disco de vinilo"], r: 0 },
            { t: "¿A qué año académico está orientada esta inducción?", o: ["Tercer año de bachillerato técnico", "Primer año básico", "Universidad avanzada", "Parvularia"], r: 0 },
            { t: "¿Qué importancia tiene la conformación temprana de equipos de trabajo?", o: ["Facilitar el desarrollo colaborativo de los proyectos técnicos anuales", "Hacer ruido", "Evitar usar computadoras", "Impedir la comunicación"], r: 0 },
            { t: "¿Quién imparte la orientación de este módulo introductorio?", o: ["Profesor Javier Mineros", "Profesor Arcides Canales", "Personal externo", "Estudiantes nuevos"], r: 0 },
            { t: "¿Qué documento establece las pautas de evaluación y entrega?", o: ["Generalidades y portafolio del módulo", "Contrato de arrendamiento", "Factura comercial", "Manual de cocina"], r: 0 },
            { t: "¿Por qué es útil un portafolio estudiantil?", o: ["Para organizar de forma metódica las evidencias de las guías y actividades", "Para ocupar memoria RAM", "Para apagar la PC", "Para jugar en línea"], r: 0 },
            { t: "El inicio del proceso educativo técnico busca principalmente:", o: ["Preparar al alumno con bases claras de organización y compromiso", "Desmotivar al estudiante", "Eliminar laboratorios", "Ocultar programas"], r: 0 }
        ]
    },
    {
        id: 6, codigo: "BTVDS 3.2", docente: "Profesor Javier Mineros",
        nombre: "Módulo 3.2 Mantenimiento y aseguramiento de la operación del sistema informático",
        resumenCorto: "Planes SLA, modelado UML, monitoreo de mantenimiento, creación de dashboards y gestión de proyectos.",
        herramientas: ["UML", "Plantilla SLA", "Dashboards", "Monitoreo", "Soporte Técnico"],
        estudioDetallado: `
            <h3>1. Documentación Técnica y Acuerdos (SLA y UML)</h3>
            <p>Se trabaja con plantillas SLA y modelado de software UML para estipular formalmente los niveles de servicio y la arquitectura lógica de los sistemas informáticos.</p>
            <h3>2. Monitoreo y Creación de Dashboards</h3>
            <p>Se desarrollan prácticas de monitoreo de mantenimiento preventivo/correctivo y la estructuración de tableros de control (dashboards) en las semanas 3, 4 y 6 de ejecución.</p>
        `,
        preguntas: [
            { t: "¿Qué significan las siglas SLA en la gestión de sistemas?", o: ["Acuerdo de Nivel de Servicio (Service Level Agreement)", "Sistema Lógico Automatizado", "Servidor Local Avanzado", "Software Libre de Redes"], r: 0 },
            { t: "¿Qué lenguaje o técnica de modelado se utiliza para estructurar sistemas?", o: ["UML (Unified Modeling Language)", "HTML5 puro", "CSS Grid", "SQL Server T-SQL"], r: 0 },
            { t: "¿Cuál es el objetivo de las actividades de monitoreo y registro de mantenimiento?", o: ["Asegurar la operatividad continua y control de fallas en equipos o software", "Borrar archivos", "Diseñar webs estáticas", "Jugar en red local"], r: 0 },
            { t: "¿Qué se elabora en la práctica correspondiente a la semana 4?", o: ["Creación de dashboard y práctica de control", "Instalación de cables UTP", "Formateo de discos", "Edición de video"], r: 0 },
            { t: "¿Qué implica la fase de ejecución y planes de contingencia (Semana 6)?", o: ["Establecer protocolos de respuesta ante fallas críticas del sistema", "Apagar servidores permanentemente", "Imprimir manuales en papel", "Cambiar fondo de pantalla"], r: 0 },
            { t: "¿Cuál es la finalidad del proyecto final desarrollado entre semanas 7 y 8?", o: ["Consolidar la implementación integral del mantenimiento y operación del sistema", "Crear un videojuego arcade", "Vender hardware usado", "Diseñar logotipos"], r: 0 },
            { t: "¿Qué tipo de investigación se realiza al inicio del módulo?", o: ["Investigación técnica sobre normativas y soporte de sistemas", "Investigación histórica", "Biografía literaria", "Cocina internacional"], r: 0 },
            { t: "¿Por qué es importante usar plantillas SLA en soporte informático?", o: ["Para definir plazos, responsabilidades y calidad de respuesta ante el usuario", "Para ocupar espacio en disco", "Para ralentizar el desarrollo", "Para evitar programar en C#"], r: 0 },
            { t: "¿Qué herramienta visual ayuda a representar los flujos y clases en UML?", o: ["Diagramas de clases y casos de uso", "Hojas de cálculo financieras", "Reproductores de audio", "Procesadores de texto"], r: 0 },
            { t: "El aseguramiento de la operación busca principalmente:", o: ["Minimización de tiempos de inactividad y maximización de la eficiencia del software", "Gastar recursos de red", "Ocultar errores", "Impedir el acceso"], r: 0 }
        ]
    },
    {
        id: 7, codigo: "BTVDS 3.3", docente: "Profesor Javier Mineros",
        nombre: "Módulo 3.3 Administración de Bases de Datos",
        resumenCorto: "Instalación de Power BI, actividades prácticas de análisis de datos, ejecución de consultas y recuperación.",
        herramientas: ["Power BI", "Bases de Datos", "Dashboards", "SQL", "ETAPA 2 Planificar"],
        estudioDetallado: `
            <h3>1. Instalación y Configuración de Power BI</h3>
            <p>Se inicia descargando e instalando Power BI para la gestión analítica y visualización de bases de datos relacionales.</p>
            <h3>2. Ejecución de Consultas y Actividades Remediales</h3>
            <p>Comprende la planificación (Etapa 2), semanas de ejecución de bases de datos (Semana 9, 10, 11), dashboards analíticos y actividades de recuperación o reforzamiento.</p>
        `,
        preguntas: [
            { t: "¿Qué herramienta principal se descarga e instala para el análisis visual en este módulo?", o: ["Power BI", "Adobe Photoshop", "Microsoft Word", "WinRAR"], r: 0 },
            { t: "¿Qué abarca la denominada Etapa 2 dentro de la administración de datos?", o: ["Planificación de estructuras y esquemas de bases de datos", "Diseño de interfaces móviles MAUI", "Instalación de XAMPP", "Configuración WiFi"], r: 0 },
            { t: "¿Qué propósito tienen las ejecuciones prácticas de las semanas 9, 10 y 11?", o: ["Aplicar consultas y operaciones avanzadas sobre los datos almacenados", "Formatear computadoras", "Crear animaciones 3D", "Redactar contratos SLA"], r: 0 },
            { t: "¿Cuál es el objetivo de un Dashboard conectado a una base de datos?", o: ["Visualizar métricas e indicadores clave de rendimiento en tiempo real", "Impedir el acceso a información", "Ocupar disco duro", "Reemplazar SQL Server"], r: 0 },
            { t: "¿Qué función cumple la actividad remedial o de recuperación?", o: ["Brindar la oportunidad de alcanzar competencias pendientes en el manejo de datos", "Eliminar registros", "Cambiar de profesor", "Apagar servidores"], r: 0 },
            { t: "¿Qué lenguaje o entorno gestiona la base de datos subyacente?", o: ["SQL / T-SQL", "HTML5", "CSS3", "Markdown"], r: 0 },
            { t: "¿Por qué es crucial administrar correctamente las bases de datos corporativas?", o: ["Para garantizar la integridad, seguridad y disponibilidad de la información", "Para hacer consultas lentas", "Para borrar datos", "Para não usar servidores"], r: 0 },
            { t: "¿Qué tipo de gráficos predominan en los informes de Power BI?", o: ["Gráficos de barras, líneas, dispersión e indicadores KPI", "Texto plano", "Imágenes en blanco y negro", "Partituras musicales"], r: 0 },
            { t: "¿Qué actividad combina la ejecución final con documentación y dashboards?", o: ["EJECUTAR FINAL MÁS DASHBOARD MÁS DOCUMENTACIÓN", "Práctica de mecanografía", "Instalación de drivers", "Creación de equipos"], r: 0 },
            { t: "La administración avanzada de datos permite a las empresas:", o: ["Tomar decisiones estratégicas fundamentadas en análisis precisos", "Gastar en papel", "Ocultar información", "Evitar computadoras"], r: 0 }
        ]
    },
    {
        id: 8, codigo: "BTVDS 3.4", docente: "Profesor Javier Mineros",
        nombre: "Módulo 3.4 Elaboración de documentación de Sistemas informáticos",
        resumenCorto: "Guías en Python, creación de aplicaciones, fases de documentación del software, ejercicio final y recuperación.",
        herramientas: ["Python", "Documentación", "Fases de Software", "Visual Studio Code"],
        estudioDetallado: `
            <h3>1. Desarrollo de Apps con Python</h3>
            <p>Se inicia creando aplicaciones funcionales mediante guías individuales en Python, abordando la lógica de programación y la estructuración de scripts ejecutables.</p>
            <h3>2. Fases Metodológicas de Documentación (Fases 1 a 7)</h3>
            <p>Se recorre de forma secuencial el ciclo de vida del software: orientaciones para proyecto, Fase 1, Fase 2-3 (Arquitectura), Fase 4 (Desarrollo), Fase 5 y documentos finales, hasta las Fases 6 y 7, culminando con el ejercicio final y recuperación.</p>
        `,
        preguntas: [
            { t: "¿Qué lenguaje de programación se utiliza en las guías individuales iniciales del Profe Javier?", o: ["Python", "Cobol", "Assembly", "Fortran"], r: 0 },
            { t: "¿Qué fase abarca la arquitectura del software dentro de la documentación?", o: ["Fase 2-3", "Fase 10", "Fase inicial de prueba", "Fase de impresión"], r: 0 },
            { t: "¿Cuál es el propósito principal de documentar un sistema informático?", o: ["Dejar constancia clara de la arquitectura, diseño y manuales de operación del software", "Ocultar código fuente", "Llenar espacio en disco", "Evitar programar"], r: 0 },
            { t: "¿Qué actividades componen la etapa avanzada del ciclo documental?", o: ["Fases 5, 6 y 7 con sus documentos finales y ejercicio práctico", "Juegos de red", "Instalación de LAN física", "Diseño de logotipos"], r: 0 },
            { t: "¿Qué abarca la Fase 4 en el proceso documentado?", o: ["Desarrollo del software propiamente dicho", "Compra de equipos", "Instalación de impresoras", "Cierre cooperativo"], r: 0 },
            { t: "¿Para qué sirve el ejercicio final del módulo?", o: ["Evaluar la integración de la app en Python con su respectiva documentación técnica", "Formatear discos", "Redactar contratos SLA", "Configurar routers"], r: 0 },
            { t: "¿Qué se trabaja en la guía individual de Python?", o: ["Creación de aplicaciones y scripts lógicos personalizados", "Diseño de bases de datos SQL", "Traducción de manuales", "Tiendas Prestashop"], r: 0 },
            { t: "¿Qué utilidad tiene la Fase 1 en los proyectos de sistemas?", o: ["Definición inicial, requerimientos y orientaciones del proyecto", "Eliminación de código", "Compilación binaria", "Despliegue en nube"], r: 0 },
            { t: "¿Qué sección contempla la recuperación del módulo?", o: ["Actividad de RECUPERACIÓN para alumnos pendientes", "Examen de mecanografía", "Instalación de XAMPP", "Torneo gamer"], r: 0 },
            { t: "Una correcta documentación técnica garantiza que:", o: ["Cualquier desarrollador pueda dar mantenimiento y escalar el sistema en el futuro", "El software funcione sin luz", "No se necesiten bases de datos", "El programa sea indetectable"], r: 0 }
        ]
    },
    {
        id: 9, codigo: "BTVDS 3.8", docente: "Profesor Javier Mineros",
        nombre: "Módulo 3.8 Proyecto innovador de Desarrollo de Software",
        resumenCorto: "Avances de proyecto innovador (10%, 15%), prácticas semanales, manual de sistema, exposiciones y entrega final.",
        herramientas: ["Proyecto Innovador", "Manual de Sistema", "EXPOS", "Avances de Proyecto", "Entrega Final"],
        estudioDetallado: `
            <h3>1. Planificación y Avances del Proyecto Innovador</h3>
            <p>Se estructuran los entregables mediante el Avance 1 (10%), Práctica Semana 2 y 3, junto con la Segunda Entrega de Avance (15%) orientada a la solución tecnológica principal.</p>
            <h3>2. Documentación, Exposiciones y Entrega Final</h3>
            <p>Comprende la elaboración del manual de sistema, exposiciones (EXPOS), actividades finales de martes y miércoles, y la defensa de la entrega final.</p>
        `,
        preguntas: [
            { t: "¿Qué porcentaje representa el primer avance del proyecto innovador?", o: ["10%", "50%", "5%", "100%"], r: 0 },
            { t: "¿Qué porcentaje representa la segunda entrega de avance del proyecto?", o: ["15%", "5%", "20%", "50%"], r: 0 },
            { t: "¿Qué documento técnico se exige para explicar la operación de la solución desarrollada?", o: ["Manual de sistema", "Hoja de cálculo vacía", "Contrato de arrendamiento", "Recibo eléctrico"], r: 0 },
            { t: "¿Qué actividad evalúa la defensa oral y presentación del sistema ante el docente?", o: ["EXPOS (Exposiciones)", "Instalación de XAMPP", "Formateo de equipos", "Mecanografía"], r: 0 },
            { t: "¿Cuál es el propósito de las prácticas de semana 2 y 3 en este módulo?", o: ["Avanzar de manera incremental en el desarrollo y validación del proyecto innovador", "Crear páginas estáticas", "Reparar impresoras", "Tareas sin relación"], r: 0 },
            { t: "¿Qué culmina el ciclo formativo del Módulo 3.8?", o: ["La entrega final y actividades de cierre del proyecto", "Eliminación de código", "Cambio de especialidad", "Cierre del taller"], r: 0 },
            { t: "¿Qué caracteriza a un proyecto innovador de desarrollo de software?", o: ["Aportar una solución informática original y funcional a una problemática real", "Copiar código de internet", "Imprimir manuales en papel", "Crear virus"], r: 0 },
            { t: "¿Por qué se realizan entregas por porcentajes (avances)?", o: ["Para garantizar el seguimiento continuo, control de calidad y evitar retrasos al final", "Para perder el tiempo", "Para ocupar memoria", "Para no programar"], r: 0 },
            { t: "¿Qué herramienta se evalúa en conjunto con el software entregado?", o: ["Manual de sistema y explicaciones funcionales", "La marca del teclado", "El color del monitor", "La velocidad del ventilador"], r: 0 },
            { t: "El desarrollo de un proyecto innovador busca consolidar al estudiante como:", o: ["Un técnico capaz de concebir, ejecutar y defender una solución de software integral", "Un operador de llamadas", "Técnico de redes físicas", "Diseñador estático"], r: 0 }
        ]
    }
];