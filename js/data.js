const modulosData = [
    {
        id: 1, codigo: "BTVDS 3.1", docente: "Profesor Javier Mineros",
        nombre: "Desarrollo de aplicaciones de software para la solución de problemas",
        resumenCorto: "Arquitecturas robustas, conexión PDO segura y subtrazabilidad automatizada de inventarios.",
        herramientas: ["C#", ".NET", "PHP", "SQL", "MySQL", "Visual Studio Community"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Durante este módulo nos enfocamos en diseñar sistemas orientados a resolver problemáticas reales mediante el uso de bases de datos relacionales y lenguajes de backend sólidos.</p>
            <ul>
                <li><b>Arquitectura de Software:</b> Estructuración de capas separando la interfaz, la lógica del negocio y el acceso a datos.</li>
                <li><b>Seguridad en Conexiones:</b> Implementación de PHP Data Objects (PDO) para evitar inyecciones SQL y garantizar transacciones seguras.</li>
                <li><b>Automatización de Inventarios:</b> Creación de sistemas de punto de venta locales con actualización de stock en tiempo real.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué significa PDO en el contexto de PHP?", o: ["PHP Data Objects", "Programming Database Operation", "Public Data Output", "Primary Database Organization"], r: 0 },
            { t: "¿Cuál es el principal propósito de usar PDO frente a mysql_connect antiguo?", o: ["Seguridad contra inyecciones SQL y soporte multibase", "Mayor velocidad gráfica", "Crear páginas estáticas", "Reducir el tamaño del navegador"], r: 0 },
            { t: "¿Qué gestor de base de datos se utilizó localmente con XAMPP?", o: ["MySQL / MariaDB", "MongoDB", "Oracle Cloud", "SQLite Pro"], r: 0 },
            { t: "En C# con Windows Forms o .NET, ¿qué patrón ayuda a organizar formularios y datos?", o: ["MVC o Arquitectura en Capas", "Algoritmo genético", "Compilación binaria directa", "Sistema Operativo móvil"], r: 0 },
            { t: "¿Qué instrucción SQL se usa para insertar registros en una tabla?", o: ["INSERT INTO", "ADD DATA", "PUSH TABLE", "NEW RECORD"], r: 0 },
            { t: "¿Para qué sirve la instrucción 'SELECT' en SQL?", o: ["Para consultar y recuperar datos", "Para borrar la base de datos", "Para compilar el código fuente", "Para iniciar XAMPP"], r: 0 },
            { t: "¿Qué componente de XAMPP ejecuta los scripts de PHP?", o: ["Apache", "FileZilla", "Mercury", "Tomcat"], r: 0 },
            { t: "¿Qué lenguaje se utilizó principalmente para la lógica de escritorio en este módulo?", o: ["C#", "Ruby", "Swift", "Kotlin"], r: 0 },
            { t: "¿Qué es una llave primaria (Primary Key) en una tabla relacional?", o: ["Un identificador único para cada registro", "Una clave para cifrar el WiFi", "Una contraseña de administrador", "Un respaldo automático"], r: 0 },
            { t: "¿Qué herramienta se usó como entorno de desarrollo integrado principal para C#?", o: ["Visual Studio Community", "Photoshop", "Premiere Pro", "Excel"], r: 0 }
        ]
    },
    {
        id: 2, codigo: "BTVDS 3.2", docente: "Profesor Arcides Canales",
        nombre: "Diseño e implementación de acuerdos de nivel de servicio (SLA)",
        resumenCorto: "Documentación SLA para clientes y refactorización del software 'La Esquina del Sabor'.",
        herramientas: ["C#", "Plantillas SLA", "Control de Calidad", "Visual Studio"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Este módulo combinó la ingeniería de requerimientos técnicos con la administración profesional de proyectos de desarrollo.</p>
            <ul>
                <li><b>Acuerdos SLA:</b> Aprendimos a redactar documentos contractuales y técnicos donde se establecen los estándares de calidad, tiempos de respuesta y entregables que el cliente exige al desarrollador.</li>
                <li><b>Refactorización Práctica:</b> Mejoramos el sistema del restaurante 'La Esquina del Sabor' aplicando rigurosamente los requerimientos solicitados en nuestra plantilla SLA.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué significan las siglas SLA?", o: ["Acuerdo de Nivel de Servicio (Service Level Agreement)", "Sistema Lógico Automatizado", "Software Libre Avanzado", "Servidor Local de Aplicaciones"], r: 0 },
            { t: "¿Cuál es el propósito principal de un documento SLA?", o: ["Definir formalmente expectativas, estándares y métricas entre cliente y desarrollador", "Diseñar la interfaz gráfica en Photoshop", "Escribir código en Python sin errores", "Gestionar redes inalámbricas"], r: 0 },
            { t: "¿Qué proyecto de software se mejoró aplicando requerimientos SLA?", o: ["La Esquina del Sabor", "Imperio Chocoyo", "Pupusa Tycoon", "Brawl Stars Manager"], r: 0 },
            { t: "¿Qué implica refactorizar código?", o: ["Mejorar la estructura interna sin alterar su comportamiento externo", "Borrar todo el proyecto y empezar de cero", "Traducir el código a inglés", "Imprimir el código en papel"], r: 0 },
            { t: "¿Qué rol cumple el desarrollador frente a un SLA?", o: ["Cumplir con los estándares de rendimiento y plazos estipulados", "Cobrar impuestos estatales", "Vender hardware", "Diseñar logotipos institucionales"], r: 0 },
            { t: "Una métrica común en un SLA de software es:", o: ["Tiempo de disponibilidad y resolución de fallos", "Número de colores en el monitor", "Peso físico de la laptop", "Velocidad del procesador AMD"], r: 0 },
            { t: "¿Por qué es importante documentar los requerimientos del cliente?", o: ["Para evitar malentendidos y cambios arbitrarios de alcance", "Para ocupar espacio en el disco duro", "Para cumplir un requisito sin importancia", "Para ralentizar el desarrollo"], r: 0 },
            { t: "¿Qué herramienta se utilizó comúnmente para redactar la documentación SLA?", o: ["Procesadores de texto / Word / Markdown", "Compilador de C++", "Bloc de notas sin guardar", "Reproductor multimedia"], r: 0 },
            { t: "El control de calidad en el desarrollo va ligado a:", o: ["Verificar que el software cumpla con lo prometido en el acuerdo", "La marca del teclado", "El diseño de la silla", "La hora del almuerzo"], r: 0 },
            { t: "¿Qué beneficio aporta un SLA al programador junior?", o: ["Claridad absoluta sobre qué entregar y cómo será evaluado su trabajo", "Poder trabajar sin supervisión nunca", "Evitar aprender bases de datos", "No usar control de versiones"], r: 0 }
        ]
    },
    {
        id: 3, codigo: "BTVDS 3.3", docente: "Profesor Arcides Canales",
        nombre: "Administración y análisis visual de datos relacionales",
        resumenCorto: "Consultas SQL avanzadas en SQL Server y generación de Dashboards en Power BI y Excel.",
        herramientas: ["SQL Server", "Power BI", "Excel", "T-SQL"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>En este módulo dominamos la manipulación de grandes volúmenes de información y la representación gráfica gerencial.</p>
            <ul>
                <li><b>Bases de Datos Masivas:</b> Consultas complejas, uniones (JOINs), procedimientos almacenados y mantenimiento en SQL Server.</li>
                <li><b>Business Intelligence:</b> Creación de Dashboards interactivos utilizando Power BI y Excel para la visualización analítica de datos.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué lenguaje se utiliza para gestionar bases de datos en Microsoft SQL Server?", o: ["T-SQL", "JavaScript", "HTML", "CSS"], r: 0 },
            { t: "¿Qué herramienta se utilizó para crear Dashboards interactivos y analíticos?", o: ["Power BI", "WinRAR", "Notepad++", "XAMPP Control Panel"], r: 0 },
            { t: "¿Qué tipo de unión (JOIN) devuelve todos los registros cuando hay coincidencia en ambas tablas?", o: ["INNER JOIN", "OUTER LOOP", "CROSS FILE", "SUPER JOIN"], r: 0 },
            { t: "¿Cuál es la función de una consulta de agregación como COUNT o SUM?", o: ["Calcular totales, conteos o métricas estadísticas sobre los datos", "Borrar registros duplicados", "Cambiar el idioma del servidor", "Instalar Power BI"], r: 0 },
            { t: "¿Qué ventaja ofrece un Dashboard en Power BI frente a una tabla estática?", o: ["Interactividad visual y actualización dinámica de indicadores clave", "Ocupa más espacio en disco", "Es más difícil de leer", "No requiere datos"], r: 0 },
            { t: "¿Qué significa la sigla SSMS en SQL Server?", o: ["SQL Server Management Studio", "Simple System Management Software", "Server Secure Main Script", "Structured Service Model Standard"], r: 0 },
            { t: "¿Para qué sirve un procedimiento almacenado (Stored Procedure)?", o: ["Para encapsular lógica SQL reutilizable en el servidor", "Para apagar la computadora", "Para crear animaciones web", "Para diseñar iconos"], r: 0 },
            { t: "¿Qué software de hoja de cálculo se combinó para el análisis visual?", o: ["Microsoft Excel", "Adobe Photoshop", "Visual Studio", "Android Studio"], r: 0 },
            { t: "¿Qué es la normalización de bases de datos?", o: ["Un proceso para reducir la redundancia y evitar anomalías", "Poner la base de datos en modo oscuro", "Traducir tablas a español", "Eliminar todas las contraseñas"], r: 0 },
            { t: "El análisis de datos permite principalmente:", o: ["Tomar decisiones informadas basadas en evidencias métricas", "Hacer que el monitor brille más", "Jugar videojuegos en red", "Ocultar errores de código"], r: 0 }
        ]
    },
    {
        id: 4, codigo: "BTVDS 3.4", docente: "Profesor Arcides Canales",
        nombre: "Desarrollo multiplataforma y gestión ERP empresarial",
        resumenCorto: "Aplicaciones con Python, PHP, Avalonia, WPF y operación de flujos empresariales con Odoo ERP.",
        herramientas: ["Python", "PHP", "Avalonia UI", "WPF", "Odoo ERP"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Exploramos la diversificación tecnológica para crear aplicaciones de escritorio y el funcionamiento de los sistemas de planificación de recursos empresariales (ERP).</p>
            <ul>
                <li><b>Multiplataforma:</b> Desarrollo utilizando múltiples frameworks y lenguajes adaptados a diferentes entornos (Python, PHP, Avalonia, WPF).</li>
                <li><b>Sistemas ERP:</b> Integración y comprensión de módulos empresariales con Odoo para la gestión de inventarios, ventas y contabilidad.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué significa ERP en el ámbito de los sistemas de información?", o: ["Enterprise Resource Planning (Planificación de Recursos Empresariales)", "Easy Rapid Programming", "Electronic Relational Process", "External Routine Protocol"], r: 0 },
            { t: "¿Qué plataforma ERP se estudió para la gestión de procesos empresariales?", o: ["Odoo", "Windows 10", "Visual Studio", "XAMPP"], r: 0 },
            { t: "¿Qué framework se utilizó para interfaces multiplataforma en .NET?", o: ["Avalonia UI / WPF", "DirectX 12", "Bootstrap 5", "Laravel"], r: 0 },
            { t: "¿Qué lenguaje dinámico se empleó para scripts y herramientas multiplataforma?", o: ["Python", "Assembly", "Cobol", "Fortran"], r: 0 },
            { t: "¿Cuál es el objetivo principal de un sistema ERP en una empresa?", o: ["Centralizar y unificar la gestión de todas las áreas de negocio", "Diseñar videojuegos en 3D", "Editar videos musicales", "Navegar por internet sin publicidad"], r: 0 },
            { t: "¿Qué lenguaje web backend se utilizó junto con PHP en este bloque?", o: ["PHP", "Swift", "Rust", "Dart"], r: 0 },
            { t: "¿Qué ventaja ofrece el desarrollo multiplataforma?", o: ["Crear software ejecutable en diferentes sistemas operativos con base de código compartida", "Aumentar el peso del archivo ejecutable", "Impedir el uso de bases de datos", "Funcionar sin electricidad"], r: 0 },
            { t: "¿Qué módulo típico compone un sistema ERP como Odoo?", o: ["Ventas, Inventario y Facturación", "Editor de partituras musicales", "Simulador de vuelo", "Reproductor de vinilos"], r: 0 },
            { t: "¿Qué entorno local se usó para levantar servicios web y bases de datos relacionales?", o: ["XAMPP", "Microsoft Word", "PowerPoint", "Paint"], r: 0 },
            { t: "El desarrollo de software empresarial busca ante todo:", o: ["Optimizar la eficiencia operativa y administrativa de las organizaciones", "Hacer código ilegible", "Evitar el uso de computadoras", "Gastar más recursos"], r: 0 }
        ]
    },
    {
        id: 5, codigo: "BTVDS 3.5", docente: "Profesor Javier Mineros",
        nombre: "Desarrollo de componentes para dispositivos móviles",
        resumenCorto: "Interfaces responsivas en XAML y despliegue multiplataforma móvil con .NET MAUI.",
        herramientas: [".NET MAUI", "C#", "XAML", "Android SDK", "Visual Studio"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Diseño y programación enfocada en dispositivos móviles aprovechando el ecosistema de .NET MAUI y XAML.</p>
            <ul>
                <li><b>Interfaces XAML:</b> Creación de componentes visuales adaptables a diferentes tamaños de pantalla y densidades de píxeles.</li>
                <li><b>Emulación y Despliegue:</b> Pruebas ejecutando emuladores de Android y dispositivos físicos para verificar rendimiento y navegación.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué framework multiplataforma oficial de Microsoft se utilizó para apps móviles?", o: [".NET MAUI", "DirectX", "Windows Forms clásico", "ASP.NET WebForms"], r: 0 },
            { t: "¿Qué lenguaje de marcado se utiliza para diseñar las vistas e interfaces en .NET MAUI?", o: ["XAML", "HTML5", "XML puro sin etiquetas", "Markdown"], r: 0 },
            { t: "¿Qué IDE principal integra las herramientas de desarrollo para .NET MAUI?", o: ["Visual Studio Community", "NetBeans", "Xcode", "Android Studio exclusivo"], r: 0 },
            { t: "¿Qué lenguaje de programación maneja el código detrás (Code-Behind) en MAUI?", o: ["C#", "Java", "Objective-C", "PHP"], r: 0 },
            { t: "¿Qué emulador se requirió habitualmente para probar las aplicaciones móviles en PC?", o: ["Android Emulator", "Nintendo Switch Emulator", "DOSBox", "VirtualBox Linux"], r: 0 },
            { t: "¿Qué significa que una aplicación sea 'multiplataforma móvil'?", o: ["Que puede compilarse y ejecutarse en Android e iOS (y escritorio) desde un mismo proyecto", "Que solo funciona sin internet", "Que no requiere código", "Que solo corre en Windows 95"], r: 0 },
            { t: "¿Cómo se gestionan los elementos visuales organizados en filas y columnas en XAML?", o: ["Mediante layouts como Grid, StackLayout y FlexLayout", "Usando comandos de consola de SQL", "Con archivos de audio", "Con hojas de Excel"], r: 0 },
            { t: "¿Qué SDK se instala en Visual Studio para compilar aplicaciones móviles Android?", o: ["Android SDK y emuladores de Google", "SDK de impresoras láser", "Driver de tarjeta gráfica", "Paquete de Office 365"], r: 0 },
            { t: "El diseño responsivo en móviles busca:", o: ["Adaptar la interfaz correctamente a cualquier tamaño de pantalla o rotación", "Ocultar los botones principales", "Hacer la letra invisible", "Gastar más batería"], r: 0 },
            { t: "¿Cuál es la extensión de archivo típica para las vistas de diseño en MAUI?", o: [".xaml", ".php", ".py", ".sql"], r: 0 }
        ]
    },
    {
        id: 6, codigo: "BTVDS 3.6", docente: "Profesor Javier Mineros",
        nombre: "Conversación de inglés sobre mantenimiento de sistemas informáticos",
        resumenCorto: "Vocabulario técnico en inglés y simulación de soporte técnico para hardware y software.",
        herramientas: ["Vocabulario IT", "Manuales en Inglés", "Soporte Técnico"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Fortalecimiento de la comunicación técnica bilingüe aplicada al diagnóstico, soporte y mantenimiento informático.</p>
            <ul>
                <li><b>Terminología IT:</b> Comprensión de manuales de hardware, códigos de error y documentación técnica en inglés.</li>
                <li><b>Simulación de Soporte:</b> Interacción oral y escrita resolviendo incidencias simuladas con usuarios en idioma inglés.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Cuál es el enfoque principal de este módulo técnico?", o: ["Dominar el vocabulario y comunicación técnica en inglés para soporte IT", "Aprender gramática literaria en español", "Diseñar videojuegos en 3D", "Programar en ensamblador"], r: 0 },
            { t: "¿Cómo se le llama en inglés al proceso de encontrar y corregir fallas en un sistema?", o: ["Troubleshooting", "Formatting", "Compiling", "Overclocking"], r: 0 },
            { t: "¿Por qué es crucial el inglés técnico para un desarrollador de software?", o: ["Porque la mayoría de documentación oficial, librerías y APIs están en ese idioma", "Para hablar con amigos en redes sociales", "Para aprobar clases de historia", "Para configurar impresoras locales"], r: 0 },
            { t: "¿Qué término en inglés se usa para referirse al mantenimiento preventivo del hardware?", o: ["Preventive maintenance / Dust cleaning", "Software deleting", "Network hacking", "System crashing"], r: 0 },
            { t: "¿Qué componente de la PC se conoce en inglés como 'Power Supply Unit'?", o: ["Fuente de poder (PSU)", "Tarjeta madre", "Disco duro", "Memoria RAM"], r: 0 },
            { t: "¿Qué significa el mensaje de error común 'Access Denied'?", o: ["Acceso denegado / Sin permisos suficientes", "Batería baja", "Impresora sin papel", "Actualización completada"], r: 0 },
            { t: "¿Qué herramienta se usa para leer especificaciones técnicas de fabricantes internacionales?", o: ["Manuales técnicos y sitios web oficiales en inglés", "Revistas de cocina", "Novelas gráficas", "Cuentos infantiles"], r: 0 },
            { t: "¿Cómo se traduce 'soporte técnico de usuarios' al inglés?", o: ["Helpdesk / Technical Support", "Software Engineering", "Database Administrator", "System Testing"], r: 0 },
            { t: "¿Qué habilidad se evalúa en las simulaciones de soporte bilingüe?", o: ["Fluidez técnica, claridad y resolución de problemas informáticos en inglés", "Rapidez al escribir código PHP", "Diseño de bases de datos SQL", "Instalación de XAMPP"], r: 0 },
            { t: "Un 'Driver' en informática en inglés corresponde a:", o: ["Controlador de dispositivo", "Unidad de almacenamiento USB", "Cable de red", "Pantalla táctil"], r: 0 }
        ]
    },
    {
        id: 7, codigo: "BTVDS 3.7", docente: "Profesor Javier Mineros",
        nombre: "Puesta en marcha de la microempresa en asociatividad cooperativa",
        resumenCorto: "Modelo Canvas, viabilidad técnica y creación de modelos cooperativos tecnológicos.",
        herramientas: ["Modelo Canvas", "Gestión de Proyectos", "Contabilidad Cooperativa"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>Planificación de emprendimientos tecnológicos bajo esquemas asociativos y cooperativos sostenibles.</p>
            <ul>
                <li><b>Modelo Canvas:</b> Diseño estructural de propuestas de valor, segmentos de clientes y flujos de ingresos.</li>
                <li><b>Cooperativismo:</b> Estructuración legal y operativa de microempresas formadas por desarrolladores de software.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué herramienta estratégica se utiliza para diseñar modelos de negocio en una sola página?", o: ["Modelo Canvas (Business Model Canvas)", "Diagrama de Gantt", "Matriz FODA", "Script de SQL"], r: 0 },
            { t: "¿Qué caracteriza a una microempresa bajo el modelo de asociatividad cooperativa?", o: ["La propiedad conjunta, toma de decisiones democrática y reparto equitativo de beneficios", "Tener un solo dueño multimillonario", "No pagar impuestos nunca", "Trabajar sin computadoras"], r: 0 },
            { t: "¿Qué representa la 'Propuesta de Valor' en el Modelo Canvas?", o: ["El beneficio único y diferencial que tu producto o servicio ofrece al cliente", "El precio del teclado", "La marca de la laptop", "El horario de almuerzo"], r: 0 },
            { t: "¿A qué se refiere el segmento de clientes en un plan de negocio?", o: ["A las personas o empresas específicas a quienes va dirigido el software", "A los servidores de Google", "A los profesores del instituto", "A los virus informáticos"], r: 0 },
            { t: "¿Qué componente evalúa la viabilidad financiera de la microempresa?", o: ["Costos de producción, flujos de ingresos y presupuesto inicial", "El color del logotipo", "La velocidad del procesador", "El tipo de fuente tipográfica"], r: 0 },
            { t: "¿Por qué es útil el asociativismo cooperativo para técnicos en software?", o: ["Permite unir talento, repartir riesgos y competir en proyectos grandes", "Obliga a programar en papel", "Evita usar control de versiones", "Elimina la necesidad de clientes"], r: 0 },
            { t: "¿Qué sección del Canvas describe cómo se adquieren ingresos económicos?", o: ["Fuentes de ingresos (Revenue Streams)", "Canales de distribución", "Socios clave", "Estructura de costos"], r: 0 },
            { t: "¿Qué es un socio clave en el ecosistema de una microempresa tecnológica?", o: ["Proveedores, aliados estratégicos o plataformas que facilitan operar el negocio", "Un competidor desleal", "Un error de compilación", "Una base de datos corrupta"], r: 0 },
            { t: "El emprendimiento tecnológico busca principalmente:", o: ["Transformar ideas de software innovadoras en soluciones con sostenibilidad comercial", "Imprimir manuales en físico", "Crear redes sociales falsas", "Desinstalar Windows"], r: 0 },
            { t: "¿Qué documento resume formalmente la visión y estructura operativa de la microempresa?", o: ["Plan de Negocio y Estructura Cooperativa", "Archivo ejecutable .exe", "Script de respaldo SQL", "Manual de usuario de XAMPP"], r: 0 }
        ]
    },
    {
        id: 8, codigo: "BTVDS 3.8", docente: "Profesor Arcides Canales",
        nombre: "Integración de inteligencia artificial y soluciones innovadoras",
        resumenCorto: "Uso de Google AI Studio, GitHub Copilot y desarrollo del proyecto innovador 'EstudIAnte'.",
        herramientas: ["Google AI Studio", "GitHub Copilot", "APIs de IA", "Python / C#"],
        estudioDetallado: `
            <h3>Repaso Integral del Módulo</h3>
            <p>El cierre de especialidad integrando herramientas de Inteligencia Artificial generativa y agentes inteligentes en el desarrollo.</p>
            <ul>
                <li><b>Prompt Engineering:</b> Integración avanzada de modelos de IA con Google AI Studio y el asistente de Visual Studio Code (Copilot).</li>
                <li><b>Proyecto 'EstudIAnte':</b> Creación de una solución tecnológica innovadora aplicando todos los saberes adquiridos a lo largo del año.</li>
            </ul>
        `,
        preguntas: [
            { t: "¿Qué plataforma de Google se exploró para experimentar con modelos de IA generativa?", o: ["Google AI Studio", "Google Maps Classic", "Google Notepad", "Google Calculator Online"], r: 0 },
            { t: "¿Qué herramienta asistente basada en IA se integró directamente en Visual Studio Code?", o: ["GitHub Copilot", "Microsoft Paint AI", "WinZip Assistant", "VLC Player Bot"], r: 0 },
            { t: "¿Cómo se llama el proyecto innovador desarrollado integrando los conocimientos del año?", o: ["EstudIAnte", "Pupusa Bot", "Windows 12", "Office 365 Pro"], r: 0 },
            { t: "¿Qué es la ingeniería de peticiones (Prompt Engineering)?", o: ["El arte y técnica de estructurar instrucciones precisas para que la IA genere el resultado deseado", "Reparar la fuente de poder de la PC", "Conectar cables de red RJ45", "Instalar XAMPP en Linux"], r: 0 },
            { t: "¿Qué beneficio aporta un asistente de código por IA al programador?", o: ["Acelerar la escritura de boilerplate, sugerir soluciones y detectar errores sintácticos", "Hacer que el programador no piense nunca", "Imprimir código automáticamente", "Borrar bases de datos por error"], r: 0 },
            { t: "¿Qué tipo de tecnología representa un 'Agente de IA'?", o: ["Sistemas capaces de razonar, usar herramientas y ejecutar tareas de forma autónoma o guiada", "Un ventilador inteligente para la laptop", "Un cable USB de alta velocidad", "Un monitor curvo"], r: 0 },
            { t: "¿Qué lenguaje se combinó comúnmente con las APIs de IA en este módulo?", o: ["Python o C#", "Cobol exclusivo", "Ensamblador puro", "Batch básico"], r: 0 },
            { t: "¿Por qué es obligatorio revisar y validar el código generado por una IA?", o: ["Porque puede contener alucinaciones, vulnerabilidades o errores lógicos", "Porque la IA cobra por cada línea", "Porque el monitor se apaga si no se revisa", "Porque es ilegal usar IA"], r: 0 },
            { t: "¿Qué representa la innovación en el desarrollo de software técnico?", o: ["Aportar soluciones creativas y eficientes a problemas reales de la comunidad o industria", "Copiar código sin entenderlo", "Usar fuentes de letra extrañas", "Cambiar el fondo de pantalla"], r: 0 },
            { t: "La inteligencia artificial en el desarrollo moderno funciona como:", o: ["Un tutor y copiloto de apoyo para potenciar la productividad del desarrollador", "Un reemplazo total de la creatividad humana", "Un virus informático benigno", "Un sistema operativo móvil"], r: 0 }
        ]
    }
];