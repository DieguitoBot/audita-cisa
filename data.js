/* Generado con python3 scripts/build_bank.py */
window.STUDY_DATA = {
  "domains": [
    {
      "id": 1,
      "name": "Proceso de auditoría de SI",
      "short": "Auditoría de SI",
      "description": "Evidencia, controles y decisiones basadas en riesgos.",
      "icon": "scan"
    },
    {
      "id": 2,
      "name": "Gobernanza y gestión de TI",
      "short": "Gobernanza de TI",
      "description": "Estrategia, responsabilidades y valor para el negocio.",
      "icon": "layers"
    },
    {
      "id": 3,
      "name": "Adquisición y desarrollo de SI",
      "short": "Desarrollo de SI",
      "description": "Requisitos, pruebas y puesta en producción.",
      "icon": "code"
    },
    {
      "id": 4,
      "name": "Operaciones y resiliencia del negocio",
      "short": "Operaciones y resiliencia",
      "description": "Continuidad, recuperación y servicios confiables.",
      "icon": "activity"
    },
    {
      "id": 5,
      "name": "Protección de activos de información",
      "short": "Protección de activos",
      "description": "Accesos, redes y protección de la información.",
      "icon": "shield"
    }
  ],
  "cases": [
    {
      "id": 1,
      "name": "Betatronics",
      "label": "Controles bajo la lupa",
      "pages": "79–83",
      "text": "Betatronics fabrica productos electrónicos y necesita evaluar sus controles generales de TI. Se han repetido problemas de cuentas de administrador compartidas, contraseñas, separación de funciones y cambios sin documentar. El despliegue de parches solo es parcialmente efectivo. El CIO entregó narrativas y flujos aprobados, pero falta evaluar los riesgos. La empresa crece rápidamente y registra mayor rotación de personal. El estatuto de auditoría designa al comité de auditoría como órgano supervisor.",
      "sourceCount": 8
    },
    {
      "id": 2,
      "name": "Accenco",
      "label": "Cuando TI pierde el rumbo",
      "pages": "157–161",
      "text": "Accenco es una entidad financiera pequeña en crecimiento. Sus objetivos de negocio y de TI solo aparecen en listas y diapositivas incompletas. El comité de riesgos casi no se reúne y no conserva actas. Varias iniciativas no tienen presupuesto. El responsable de SI y auditoría interna reportan al CFO, quien supervisa TI. Los programadores pueden acceder a datos de producción con aprobación exclusiva del DBA; un bibliotecario de programas migra el código. Los responsables de negocio revisan y firman los resultados financieros mensuales.",
      "sourceCount": 8
    },
    {
      "id": 3,
      "name": "Wonderwheels",
      "label": "Una migración en problemas",
      "pages": "241–245",
      "text": "Wonderwheels es un minorista con terminales de venta inalámbricas que utilizan WEP. Los servidores de tienda se sitúan en zonas de atención al público. La base de datos central está en una subred protegida, pero lleva más de dos años sin parches y perdió soporte del proveedor. Se envían datos de ventas a un tercero sin verificar su protección. La migración a una nueva base se entrega por fases y utiliza datos reales en pilotos. Aparecen bloqueos, corrupción de datos y errores que ya habían sido corregidos. Auditoría no participa en decisiones clave sobre controles y cumplimiento.",
      "sourceCount": 4
    },
    {
      "id": 4,
      "name": "Pinkwater Bank",
      "label": "Prepararse para la interrupción",
      "pages": "345–348",
      "text": "Pinkwater Bank tiene 16 sucursales y propone enlaces de microondas y una conexión alternativa a Internet, además de Wi-Fi para clientes. Los planes de continuidad llevan más de ocho años sin actualizarse pese a un crecimiento superior al 300 %. La sede tiene 750 empleados y más de 60 servidores; el sitio alternativo contratado dispone de 25 servidores y 100 puestos. Las aplicaciones críticas tienen objetivos de recuperación de tres a cinco días. Las sucursales mantienen acuerdos recíprocos de respaldo. La gerencia busca mejorar la recuperación con costos razonables.",
      "sourceCount": 4
    },
    {
      "id": 5,
      "name": "Spectertainment",
      "label": "La oficina está en todas partes",
      "pages": "545–546",
      "text": "Spectertainment produce y distribuye videos musicales. Sus empleados trabajan desde casa o mientras viajan, accediendo a los sistemas mediante VPN y credenciales individuales. Se obliga a cambiar la contraseña inicial. Hay capacitación y una política de acceso remoto, pero esta no define requisitos para dispositivos personales. Auditoría detecta el uso frecuente de equipos propios para conectarse a la VPN. La gerencia quiere conservar la productividad del trabajo remoto y reforzar la seguridad.",
      "sourceCount": 5
    }
  ],
  "questions": [
    {
      "id": "ep1-1",
      "number": 1,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "En relación con las fases del proceso típico de auditoría de sistemas, ¿cuáles son CORRECTAS?",
      "options": [
        "Planificación",
        "Ejecución de pruebas unitarias",
        "Trabajo de campo / documentación",
        "Reporte y seguimiento",
        "Desarrollo de software",
        "Aseguramiento de la calidad del código fuente"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "A (Planificación), C (Trabajo de campo/documentación) y D (Reporte y seguimiento) son las fases principales de la auditoría según ISACA. B y F pertenecen al ciclo de vida del software, no a la auditoría. E es propio de desarrollo de sistemas, no de auditoría",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 1",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-2",
      "number": 2,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "Sobre el marco de referencia de ISACA para auditoría de sistemas, identifique los elementos CORRECTOS:",
      "options": [
        "Estándares",
        "Directrices (guidelines)",
        "Herramientas y técnicas",
        "Modelos de negocio",
        "Políticas internas de la empresa",
        "Diagramas UML"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "A (Estándares), B (Directrices) y C (Herramientas y técnicas) son los tres niveles del marco ISACA (standards, guidelines, tools). D, E y F son ajenos al marco formal de ISACA.",
      "note": "El archivo no incluye una línea explícita de respuestas. La clave A, B y C se reconstruyó a partir de su sustento.",
      "source": "EP1 Resuelto.md · pregunta 2",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-3",
      "number": 3,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles de las siguientes son funciones del Código de Ética de ISACA?",
      "options": [
        "Mantener la confidencialidad de la información",
        "Asegurar la rentabilidad de la empresa auditada",
        "Ejercer la profesión con objetividad y diligencia",
        "Velar por la continuidad del negocio en todo caso",
        "Apoyar la educación profesional de los interesados",
        "Ejecutar auditorías sin ningún tipo de documentación"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "A (confidencialidad), C (objetividad y diligencia) y E (educación profesional) están en el Código de Ética de ISACA. B, D y F no corresponden a obligaciones éticas del auditor, sino a responsabilidades de gestión empresarial o errores de procedimiento.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 3",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-4",
      "number": 4,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "Sobre los tipos de auditorías en sistemas de información, identifique las correctas:",
      "options": [
        "Auditoría de cumplimiento",
        "Auditoría operacional",
        "Auditoría de innovación tecnológica",
        "Auditoría de marketing digital",
        "Auditoría financiera",
        "Auditoría forense"
      ],
      "answers": [
        0,
        1,
        4,
        5
      ],
      "explanation": "A (cumplimiento), B (operacional), E (financiera) y F (forense) son reconocidas en ISACA. C y D no son categorías estándar en auditoría de sistemas, más bien son áreas temáticas o evaluaciones estratégicas.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 4",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-5",
      "number": 5,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "En una auditoría basada en riesgos, ¿cuáles de los siguientes riesgos son considerados dentro del modelo de ISACA?",
      "options": [
        "Riesgo inherente",
        "Riesgo de control",
        "Riesgo de detección",
        "Riesgo de marketing",
        "Riesgo reputacional",
        "Riesgo de auditoría"
      ],
      "answers": [
        0,
        1,
        2,
        5
      ],
      "explanation": "A, B y C (inherente, de control y de detección) forman la base del modelo de riesgos de auditoría. F (riesgo de auditoría) es la combinación de los anteriores. D y E son riesgos de negocio, no específicos de auditoría.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 5",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-6",
      "number": 6,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "Sobre el Control Self-Assessment (CSA), ¿qué afirmaciones son correctas?",
      "options": [
        "Es una autoevaluación de controles realizada por el personal y la gerencia.",
        "Reemplaza completamente el trabajo del auditor interno.",
        "Permite mayor involucramiento de los empleados en la gestión de riesgos.",
        "Garantiza al 100% la inexistencia de fraudes.",
        "Es conducido siempre de manera externa.",
        "Puede realizarse mediante cuestionarios y talleres facilitados."
      ],
      "answers": [
        0,
        2,
        5
      ],
      "explanation": "A, C y F describen correctamente al CSA. B es incorrecto: el CSA no sustituye la auditoría, la complementa. D es falso: no hay garantía absoluta en auditoría. E es falso: el CSA es interno, no externo.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 6",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-7",
      "number": 7,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles son ejemplos de controles técnicos (lógicos)?",
      "options": [
        "Políticas de vacaciones del personal",
        "Firewalls y sistemas IDS",
        "Candados físicos en los servidores",
        "Antivirus y gestión de contraseñas",
        "Procedimientos de contratación",
        "Cámaras de seguridad CCTV"
      ],
      "answers": [
        1,
        3
      ],
      "explanation": "B y D corresponden a controles técnicos (lógicos). A y E son administrativos. C y F son controles físicos.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 7",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-8",
      "number": 8,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles son controles preventivos en auditoría de sistemas?",
      "options": [
        "Copias de seguridad",
        "Encriptación de datos",
        "Autenticación multifactor",
        "Detección de intrusiones",
        "Auditoría de logs",
        "Corrección de errores detectados"
      ],
      "answers": [
        1,
        2
      ],
      "explanation": "B (encriptación) y C (autenticación) previenen incidentes. A y F son correctivos. D y E son detectivos.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 8",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-9",
      "number": 9,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "En relación con la planificación de auditorías basadas en riesgos, ¿qué aspectos se consideran?",
      "options": [
        "Evaluación de riesgos inherentes y de control",
        "Asignación de recursos de auditoría",
        "Análisis del mercado de productos de la empresa",
        "Cambios regulatorios relevantes",
        "Desarrollo de prototipos de software",
        "Definición del alcance y objetivos de la auditoría"
      ],
      "answers": [
        0,
        1,
        3,
        5
      ],
      "explanation": "A, B, D y F son pasos clave en la planificación basada en riesgos. C y E no corresponden al proceso de planificación de auditoría.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 9",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-10",
      "number": 10,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles de los siguientes objetivos de control son reconocidos en auditoría de SI?",
      "options": [
        "Eficiencia operativa",
        "Innovación disruptiva",
        "Cumplimiento normativo",
        "Minimización de costos de marketing",
        "Salvaguarda de activos de información",
        "Aumento de la participación de mercado"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "A (eficiencia), C (cumplimiento) y E (salvaguarda) son objetivos clásicos de control. B, D y F son metas de negocio, no de control.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 10",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-11",
      "number": 11,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "De los siguientes, ¿cuáles son controles compensatorios?",
      "options": [
        "Segmentación de red para sistemas no seguros",
        "Copias de respaldo de datos críticos",
        "Contraseñas robustas obligatorias",
        "Uso de multifactor en dispositivos sin cuentas individuales",
        "Antivirus actualizado",
        "Procedimientos de conciliación contable"
      ],
      "answers": [
        0,
        3
      ],
      "explanation": "A y D son controles compensatorios, usados cuando los controles principales no pueden aplicarse. B y E son preventivos/correctivos. C y F son controles estándar, no compensatorios.",
      "note": "Un control es compensatorio por la función que cumple ante una carencia concreta. Segmentación, conciliaciones u otros controles pueden ser compensatorios según el contexto. MFA sobre cuentas compartidas no restablece por sí solo la trazabilidad individual.",
      "source": "EP1 Resuelto.md · pregunta 11",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-12",
      "number": 12,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles de los siguientes marcos son prescriptivos de controles reconocidos?",
      "options": [
        "PCI DSS",
        "CIS Controls",
        "OWASP SAMM",
        "COBIT 2019",
        "ITIL",
        "Cloud Controls Matrix (CSA)"
      ],
      "answers": [
        0,
        1,
        2,
        5
      ],
      "explanation": "A, B, C y F son prescriptivos (definen controles específicos). D (COBIT) e ITIL son marcos de gobierno y gestión, no prescriptivos de controles.",
      "note": "La clasificación del EP1 es simplificada: OWASP SAMM es un modelo de madurez de seguridad del software. No todos los elementos listados prescriben controles de la misma manera.",
      "source": "EP1 Resuelto.md · pregunta 12",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-13",
      "number": 13,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "En una auditoría integrada, ¿qué elementos se combinan?",
      "options": [
        "Auditoría financiera",
        "Auditoría de marketing",
        "Auditoría operacional",
        "Auditoría de sistemas de información",
        "Auditoría de calidad de proveedores",
        "Auditoría ambiental"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "A, C y D conforman la auditoría integrada. B, E y F pueden ser relevantes, pero no forman parte del núcleo de la auditoría integrada ISACA.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 13",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-14",
      "number": 14,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "¿Cuáles son ejemplos de controles administrativos (manageriales)?",
      "options": [
        "Políticas y procedimientos internos",
        "Firewalls",
        "Capacitación del personal en seguridad",
        "Cámaras de videovigilancia",
        "Reportes de cumplimiento",
        "Antivirus actualizado"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "A, C y E corresponden a controles administrativos. B y F son técnicos. D es físico.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 14",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-15",
      "number": 15,
      "domain": 1,
      "kind": "ep1",
      "topic": "Parcial · capítulo 1",
      "prompt": "Respecto al riesgo y materialidad en auditoría, ¿qué afirmaciones son correctas?",
      "options": [
        "La materialidad es inversamente proporcional al riesgo aceptable de auditoría.",
        "Riesgo inherente es el riesgo antes de considerar los controles.",
        "Riesgo de detección es el riesgo de que el auditor no identifique un error material.",
        "Riesgo de control es irrelevante en auditoría de SI.",
        "Materialidad solo se aplica a auditoría financiera, no a auditoría de sistemas.",
        "Un error menor nunca puede ser material, aunque se acumule con otros."
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "A, B y C son definiciones correctas según ISACA. D es falso: el riesgo de control es clave. E es falso: la materialidad aplica también a SI. F es falso: varios errores menores pueden volverse materiales en conjunto.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 15",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-16",
      "number": 16,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "¿Cuáles de los siguientes marcos están directamente relacionados con cumplimiento regulatorio en TI?",
      "options": [
        "GDPR",
        "TOGAF",
        "SOX",
        "Zachman",
        "ISO 9001",
        "SCRUM"
      ],
      "answers": [
        0,
        2
      ],
      "explanation": "GDPR y SOX son marcos regulatorios de cumplimiento. TOGAF y Zachman son de arquitectura empresarial, no cumplimiento. ISO 9001 es calidad, no cumplimiento legal directo. SCRUM es metodología ágil, no marco regulatorio.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 16",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-17",
      "number": 17,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En el marco de COBIT 2019, ¿cuáles son principios centrales de la gobernanza de TI?",
      "options": [
        "Generar valor para los stakeholders",
        "Minimizar el uso de metodologías ágiles",
        "Optimizar riesgos y recursos",
        "Asegurar crecimiento del marketing digital",
        "Alinear TI con objetivos de negocio",
        "Reemplazar estándares internacionales"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "COBIT busca valor, optimización de riesgos/recursos y alineación con negocio. B y F son falsos: COBIT no excluye ni reemplaza metodologías. D no es objetivo de COBIT.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 17",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-18",
      "number": 18,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "¿Cuáles de los siguientes elementos son considerados documentos normativos de TI?",
      "options": [
        "Políticas",
        "Procedimientos",
        "Diagramas UML",
        "Directrices",
        "Modelos de negocio canvas",
        "Casos de uso de software"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Políticas, procedimientos y directrices son parte de la documentación normativa. UML, canvas y casos de uso son metodologías de diseño, no normativa TI.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 18",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-19",
      "number": 19,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En arquitectura empresarial, ¿qué marcos son los más conocidos?",
      "options": [
        "TOGAF",
        "Zachman",
        "COSO",
        "ITAF",
        "CMMI",
        "ISO 27001"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "TOGAF y Zachman son marcos de arquitectura empresarial. COSO e ITAF son auditoría y control interno. CMMI es madurez de procesos. ISO 27001 es seguridad de la información.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 19",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-20",
      "number": 20,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "¿Cuáles de los siguientes pertenecen a gestión de riesgos empresariales (ERM)?",
      "options": [
        "ISO 31000",
        "COSO ERM",
        "SCRUM",
        "TOGAF",
        "Kanban",
        "Lean IT"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "ISO 31000 y COSO ERM son marcos de gestión de riesgos. C, E y F son metodologías ágiles/lean, no ERM. D es arquitectura, no ERM.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 20",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-21",
      "number": 21,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En programas de privacidad de datos, ¿cuáles principios son básicos?",
      "options": [
        "Consentimiento del titular",
        "Minimización de datos",
        "Creación de prototipos rápidos",
        "Maximizar el marketing digital",
        "Uso obligatorio de blockchain",
        "Transparencia en el tratamiento"
      ],
      "answers": [
        0,
        1,
        5
      ],
      "explanation": "A, B y F son principios de privacidad (ej. GDPR). C, D y E no son principios universales de privacidad.",
      "note": "El consentimiento no es una condición universal para todo tratamiento. Estudia también la finalidad y la base aplicable al tratamiento; aquí se conserva la selección del EP1.",
      "source": "EP1 Resuelto.md · pregunta 21",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-22",
      "number": 22,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En la clasificación de datos, ¿qué categorías son correctas?",
      "options": [
        "Pública",
        "Interna",
        "Crítica financiera",
        "Confidencial",
        "Reservada / Restringida",
        "Transitoria"
      ],
      "answers": [
        0,
        3,
        4
      ],
      "explanation": "A, D y E son categorías reconocidas en gobernanza de datos. B es válida pero más propia de organizaciones específicas. C y F no son categorías estándar.",
      "note": "“Interna” también es una categoría habitual y válida. Las categorías dependen del esquema aprobado por la organización; la exclusión de B corresponde a la clave de este parcial.",
      "source": "EP1 Resuelto.md · pregunta 22",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-23",
      "number": 23,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En la gestión de recursos informáticos, ¿qué se incluye típicamente?",
      "options": [
        "Licencias de software",
        "Infraestructura en la nube",
        "Puntos de venta físicos",
        "Hardware de red",
        "Oficinas administrativas",
        "Personal de TI"
      ],
      "answers": [
        0,
        1,
        3,
        5
      ],
      "explanation": "Licencias, nube, hardware y personal son recursos de TI. C y E son recursos de negocio, no TI directamente.",
      "note": "Un punto de venta puede incluir recursos de TI. La clave interpreta “puntos de venta físicos” como locales comerciales, no como sus terminales informáticos.",
      "source": "EP1 Resuelto.md · pregunta 23",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-24",
      "number": 24,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "Sobre la gestión de proveedores de TI, ¿qué prácticas son correctas?",
      "options": [
        "Evaluación de SLA",
        "Auditorías a proveedores críticos",
        "Fomentar dependencia exclusiva de un proveedor",
        "Monitoreo del cumplimiento contractual",
        "Ignorar riesgos de terceros",
        "Externalizar todo sin control"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Evaluar SLA, auditar y monitorear son prácticas correctas. C, E y F representan malas prácticas de gestión de proveedores.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 24",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-25",
      "number": 25,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En la supervisión y generación de reportes de TI, ¿qué elementos son válidos?",
      "options": [
        "KPIs",
        "Balanced Scorecard",
        "Tableros de control (Dashboards)",
        "Diagrama de Gantt",
        "Business Model Canvas",
        "Árbol de decisiones"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "KPIs, BSC y dashboards son herramientas de supervisión. D, E y F se usan en gestión y análisis, no en supervisión de TI directamente.",
      "note": "El enunciado se reubicó antes de las opciones; en el archivo aparece después de la clave.",
      "source": "EP1 Resuelto.md · pregunta 25",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-26",
      "number": 26,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En la gestión de calidad de TI, ¿qué marcos o normas aplican?",
      "options": [
        "ISO 9001",
        "ISO/IEC 20000",
        "ITIL v4",
        "PRINCE2",
        "Lean Six Sigma",
        "COBIT 2019"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "ISO 9001, ISO 20000 e ITIL son normas de calidad/servicios TI. PRINCE2 es gestión de proyectos. Lean Six Sigma es mejora de procesos, no específico TI. COBIT es gobernanza, no calidad.",
      "note": "Lean Six Sigma también puede aplicarse a la mejora de calidad en TI. Se conserva A, B y C para practicar el parcial, pero excluir E no es una regla general.",
      "source": "EP1 Resuelto.md · pregunta 26",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-27",
      "number": 27,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En el contexto de gobernanza de TI, ¿qué roles suelen estar involucrados?",
      "options": [
        "CIO (Chief Information Officer)",
        "CDO (Chief Data Officer)",
        "CTO (Chief Technology Officer)",
        "CEO (Chief Executive Officer)",
        "Auditor de Sistemas",
        "Gerente de Marketing"
      ],
      "answers": [
        0,
        1,
        2,
        3,
        4
      ],
      "explanation": "CIO, CTO, CDO y auditor están directamente relacionados con gobernanza de TI. CEO participa en la estrategia general. Marketing no es rol principal en gobernanza de TI.",
      "note": "La participación depende del modelo de gobierno. Auditoría aporta aseguramiento independiente; no debe asumir decisiones de gestión. Otras áreas de negocio también pueden participar.",
      "source": "EP1 Resuelto.md · pregunta 27",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-28",
      "number": 28,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "¿Cuáles de los siguientes estándares están asociados a seguridad de la información y continuidad (relacionados a gobernanza)?",
      "options": [
        "ISO 27001",
        "ISO 22301",
        "COBIT 2019",
        "ISO 9004",
        "SCRUM",
        "Agile PM"
      ],
      "answers": [
        0,
        1
      ],
      "explanation": "ISO 27001 (seguridad) e ISO 22301 (continuidad del negocio) aplican. COBIT es gobernanza, no seguridad específica. 9004 es calidad. SCRUM y Agile PM son metodologías de gestión.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 28",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-29",
      "number": 29,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "Respecto al Enterprise Risk Management (ERM), ¿qué conceptos son correctos?",
      "options": [
        "Identificación de riesgos",
        "Evaluación de probabilidad e impacto",
        "Eliminación total de riesgos",
        "Transferencia y mitigación",
        "Ignorar riesgos bajos",
        "Optimización de beneficios"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "ERM implica identificar, evaluar, mitigar o transferir riesgos. C es falso: los riesgos no se eliminan totalmente. E es mala práctica: incluso riesgos bajos deben monitorearse. F no es parte del objetivo directo del ERM.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 29",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "ep1-30",
      "number": 30,
      "domain": 2,
      "kind": "ep1",
      "topic": "Parcial · capítulo 2",
      "prompt": "En la gestión de calidad de TI, ¿qué prácticas forman parte de la mejora continua?",
      "options": [
        "Ciclo PDCA (Plan-Do-Check-Act)",
        "Auditorías internas de calidad",
        "Análisis de brechas",
        "Implementación ágil sin documentación",
        "Ignorar indicadores de desempeño",
        "Benchmarking contra mejores prácticas"
      ],
      "answers": [
        0,
        1,
        2,
        5
      ],
      "explanation": "A, B, C y F son prácticas de mejora continua. D y E representan errores en la gestión de calidad.",
      "note": "",
      "source": "EP1 Resuelto.md · pregunta 30",
      "sourceFile": "EP1 Resuelto.md"
    },
    {
      "id": "domain-1-1",
      "number": 1,
      "domain": 1,
      "kind": "domain",
      "topic": "Autoridad de auditoría",
      "prompt": "¿Qué afirmaciones describen correctamente el estatuto de auditoría?",
      "options": [
        "Define la autoridad de la función auditora",
        "Sustituye las pruebas de cada encargo",
        "Establece responsabilidades de auditoría",
        "Detalla obligatoriamente cada muestra del año",
        "Debe contar con aprobación del órgano competente",
        "Una solicitud informal lo reemplaza"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "El estatuto da el mandato general y define autoridad y responsabilidades. La solicitud de un encargo, su alcance o su calendario no sustituyen ese mandato; las muestras se definen al planificar cada auditoría.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 1, pp. 25–28. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-2",
      "number": 2,
      "domain": 1,
      "kind": "domain",
      "topic": "Autoevaluación de controles",
      "prompt": "Un área organiza talleres de CSA. ¿Qué resultados son coherentes con su propósito?",
      "options": [
        "La gerencia reconoce su responsabilidad sobre los controles",
        "Auditoría deja de necesitar evidencia independiente",
        "El personal identifica riesgos de su proceso",
        "Se garantiza detectar todos los fraudes",
        "Se eliminan los controles formales",
        "Los responsables proponen mejoras de control"
      ],
      "answers": [
        0,
        2,
        5
      ],
      "explanation": "CSA refuerza la propiedad de los controles por el negocio y la participación de los empleados. Puede aportar información a auditoría, pero no reemplaza su evaluación ni garantiza ausencia de fraude.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluaciones 2 y 7, pp. 25–29. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-3",
      "number": 3,
      "domain": 1,
      "kind": "domain",
      "topic": "Auditoría basada en riesgos",
      "prompt": "Al diseñar un programa de auditoría basado en riesgos, ¿qué acciones son apropiadas?",
      "options": [
        "Comprender los procesos del negocio",
        "Auditar solo equipos con mayor precio de compra",
        "Relacionar fallas de TI con impactos de negocio",
        "Asignar el mismo esfuerzo a todas las áreas",
        "Priorizar procesos con mayor exposición",
        "Excluir la estrategia del contexto"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "Comprender el negocio permite identificar impactos y priorizar cobertura. El costo del equipo por sí solo no mide el riesgo; distribuir esfuerzos de forma uniforme puede dejar áreas críticas sin atención.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 3, pp. 25–28. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-4",
      "number": 4,
      "domain": 1,
      "kind": "domain",
      "topic": "Modelo de riesgo",
      "prompt": "¿Qué asociaciones de riesgos de auditoría son correctas?",
      "options": [
        "Inherente: exposición antes de considerar controles",
        "Control: posibilidad de que los controles no eviten o detecten un error material",
        "Detección: posibilidad de que el auditor no detecte un error material",
        "Inherente: riesgo que solo aparece después de una auditoría",
        "Control: riesgo de seleccionar una muestra no representativa",
        "Muestreo: posibilidad de inferir incorrectamente sobre la población"
      ],
      "answers": [
        0,
        1,
        2,
        5
      ],
      "explanation": "El riesgo inherente precede a la consideración de controles; el de control corresponde a sus fallas y el de detección a las pruebas del auditor. El riesgo de muestreo afecta las inferencias realizadas desde una muestra.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 4, p. 28. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-5",
      "number": 5,
      "domain": 1,
      "kind": "domain",
      "topic": "Hallazgos fuera del alcance",
      "prompt": "Durante una revisión de aplicación aparece una debilidad material del sistema operativo. ¿Qué actuaciones son razonables?",
      "options": [
        "Ignorarla por estar fuera del alcance",
        "Examinar los controles del sistema relevantes para la aplicación",
        "Comunicar el hallazgo y su posible impacto",
        "Modificar silenciosamente el alcance sin considerar recursos",
        "Recomendar una revisión detallada adicional si corresponde",
        "Cerrar el hallazgo con una simple exclusión de responsabilidad"
      ],
      "answers": [
        1,
        2,
        4
      ],
      "explanation": "La debilidad puede afectar las conclusiones sobre la aplicación. Se revisa lo relevante, se informa y se recomienda profundizar con los recursos adecuados. Ni ignorarla ni ampliar sin coordinación resuelve el problema.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 5, p. 28. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-6",
      "number": 6,
      "domain": 1,
      "kind": "domain",
      "topic": "Planificación continua",
      "prompt": "¿Qué cambios justifican revisar periódicamente el plan de auditoría?",
      "options": [
        "La aparición de amenazas relevantes",
        "La automatización de un proceso crítico",
        "La necesidad de conservar siempre el calendario original",
        "Un cambio importante en los procesos del negocio",
        "La obligación de auditar únicamente hallazgos antiguos",
        "El deseo de evitar toda reasignación de recursos"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El plan debe reflejar cambios en el entorno de riesgos, tecnología y negocio. Los hallazgos previos son insumos, pero no reemplazan la evaluación de la exposición actual.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 6, p. 28. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-7",
      "number": 7,
      "domain": 1,
      "kind": "domain",
      "topic": "Responsabilidad sobre controles",
      "prompt": "En un taller de CSA, ¿qué responsabilidades están bien asignadas?",
      "options": [
        "Los dueños del proceso evalúan sus riesgos",
        "El auditor asume la operación diaria de los controles",
        "La gerencia mantiene la responsabilidad por el control interno",
        "Los participantes documentan debilidades y acciones",
        "El facilitador garantiza que no existen riesgos residuales",
        "El comité deja de recibir información sobre riesgos"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La autoevaluación involucra al negocio sin trasladar su responsabilidad al auditor. Documentar acciones facilita el seguimiento; ninguna dinámica de taller elimina por sí misma el riesgo residual.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 7 y sección 1.2.1. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-8",
      "number": 8,
      "domain": 1,
      "kind": "domain",
      "topic": "Evaluación de riesgos",
      "prompt": "Antes de seleccionar pruebas, ¿qué decisiones apoya una evaluación de riesgos?",
      "options": [
        "Qué áreas requieren mayor cobertura",
        "Qué controles relevantes conviene probar",
        "Qué conclusiones pueden firmarse sin evidencia",
        "Qué objetivos y alcance necesita el encargo",
        "Cómo eliminar la necesidad de independencia",
        "Qué hallazgos deben redactarse antes del trabajo de campo"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Evaluar riesgos orienta alcance, prioridades y selección de controles. Las conclusiones requieren evidencia obtenida después; la planificación no permite anticipar hallazgos como hechos ni elimina la independencia.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 8, p. 29. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-9",
      "number": 9,
      "domain": 1,
      "kind": "domain",
      "topic": "Cobertura de auditoría",
      "prompt": "¿Qué afirmaciones sobre riesgo y cobertura son correctas?",
      "options": [
        "La cobertura debe responder a la exposición del negocio",
        "La materialidad ayuda a juzgar la importancia de una debilidad",
        "El fraude es la única fuente relevante de riesgo",
        "La suficiencia de evidencia se evalúa para respaldar conclusiones",
        "El plan debe depender solo de cuántos auditores estén libres",
        "Toda área no auditada carece de riesgo"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El riesgo guía la cobertura; la materialidad ayuda a valorar la importancia de las fallas y la suficiencia de evidencia respalda las conclusiones. Recursos y fraude son factores, no sustitutos de la evaluación integral.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 9, p. 29. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-1-10",
      "number": 10,
      "domain": 1,
      "kind": "domain",
      "topic": "Controles y recuperación",
      "prompt": "Una organización conserva respaldos fuera de sus instalaciones. ¿Qué afirmaciones son correctas?",
      "options": [
        "Restaurar un respaldo ayuda a corregir los efectos de una interrupción",
        "El respaldo evita que se modifique indebidamente el archivo original",
        "Separar físicamente copias reduce la exposición a un mismo incidente local",
        "La existencia de copias demuestra por sí sola que pueden restaurarse",
        "Probar restauraciones aporta evidencia de recuperabilidad",
        "Los respaldos reemplazan el control de acceso"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "El respaldo usado para restaurar cumple una función correctiva. Su ubicación separada limita fallas comunes, pero hay que verificar su restauración. No impide accesos indebidos ni daños sobre los originales.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · autoevaluación 10, pp. 26–30. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-1",
      "number": 1,
      "domain": 2,
      "kind": "domain",
      "topic": "Supervisión de TI",
      "prompt": "¿Qué prácticas ayudan a supervisar el desempeño y cumplimiento de TI?",
      "options": [
        "Mostrar indicadores relevantes en un tablero",
        "Guardar documentos sin analizarlos y asumir cumplimiento",
        "Vincular métricas con objetivos definidos",
        "Investigar desviaciones y asignar responsables",
        "Usar exclusivamente el número de servidores",
        "Tratar un dashboard como prueba automática de controles efectivos"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Un tablero resume información para tomar decisiones cuando los indicadores se vinculan a objetivos y generan seguimiento. Un repositorio o un indicador aislado no demuestran por sí solos que los controles funcionen.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 1, pp. 87–90. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-2",
      "number": 2,
      "domain": 2,
      "kind": "domain",
      "topic": "Estrategia de TI",
      "prompt": "¿Qué elementos corresponden a una planificación estratégica de TI?",
      "options": [
        "Analizar objetivos futuros del negocio",
        "Definir cómo TI apoyará esos objetivos",
        "Limitarse al modelo exacto de cada computadora",
        "Considerar capacidades que necesitará la organización",
        "Sustituir la estrategia por el presupuesto del próximo mes",
        "Ignorar cambios en productos y servicios"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La estrategia define dirección y capacidades para apoyar al negocio. Especificaciones de compras y presupuestos detallados se desarrollan en niveles tácticos u operativos alineados con esa dirección.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 2, p. 90. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-3",
      "number": 3,
      "domain": 2,
      "kind": "domain",
      "topic": "Horizontes de planificación",
      "prompt": "Al preparar planes de TI a largo plazo, ¿qué factores deben considerarse?",
      "options": [
        "Metas de la organización",
        "Avances tecnológicos relevantes",
        "Requisitos regulatorios aplicables al negocio",
        "Solo las preferencias del proveedor actual",
        "Planes de TI desconectados del negocio",
        "Suposición de que las prioridades nunca cambian"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "La planificación de largo plazo integra metas, evolución tecnológica y contexto regulatorio. Los planes de corto plazo deben mantener esa alineación y revisarse cuando cambian las condiciones.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 3, pp. 87–90. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-4",
      "number": 4,
      "domain": 2,
      "kind": "domain",
      "topic": "Responsable de seguridad",
      "prompt": "¿Qué actividades son coherentes con la función de un responsable de seguridad de datos?",
      "options": [
        "Recomendar políticas de seguridad",
        "Supervisar su aplicación",
        "Aprobar unilateralmente todo riesgo comercial",
        "Promover la concienciación del personal",
        "Reemplazar a los propietarios de datos en todas sus decisiones",
        "Ocultar desviaciones para evitar conflictos"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Recomendar y supervisar políticas es una responsabilidad central, complementada con concienciación. Los propietarios y la gerencia conservan sus atribuciones sobre datos y aceptación de riesgos.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 4, pp. 87–90. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-5",
      "number": 5,
      "domain": 2,
      "kind": "domain",
      "topic": "Apoyo de la dirección",
      "prompt": "¿Qué demuestra un compromiso efectivo de la alta dirección con la seguridad?",
      "options": [
        "Respaldar políticas y responsabilidades",
        "Asignar recursos según prioridades de riesgo",
        "Delegar seguridad y desentenderse de los resultados",
        "Resolver conflictos relevantes de prioridades",
        "Suponer que comprar herramientas asegura el éxito",
        "Exigir cero riesgos sin evaluar viabilidad"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El compromiso se refleja en dirección, recursos y supervisión. Presupuesto y herramientas contribuyen, pero no sustituyen la responsabilidad ejecutiva ni hacen posible garantizar riesgo cero.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 5, pp. 87–91. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-6",
      "number": 6,
      "domain": 2,
      "kind": "domain",
      "topic": "Medición de gobierno",
      "prompt": "¿Qué preguntas permiten evaluar el desempeño del gobierno de TI?",
      "options": [
        "¿Los órganos de supervisión cumplen su función?",
        "¿Las decisiones de TI apoyan los objetivos empresariales?",
        "¿Cuántas líneas de código escribe cada persona, como única medida?",
        "¿Se supervisa la realización de beneficios y el riesgo?",
        "¿Se evita comunicar resultados al directorio?",
        "¿Se considera éxito cualquier gasto ejecutado?"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El gobierno se evalúa por la orientación y supervisión de TI y su aporte al negocio. Métricas puramente operativas o de gasto no bastan para evaluar decisiones, beneficios y exposición.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 6, pp. 87–91. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-7",
      "number": 7,
      "domain": 2,
      "kind": "domain",
      "topic": "Separación de funciones",
      "prompt": "¿Qué decisiones respetan la separación de funciones en desarrollo y operación?",
      "options": [
        "Separar el desarrollo de la operación de producción",
        "Permitir que el autor apruebe y publique sus cambios sin revisión",
        "Permitir que una persona desarrolle y mantenga código bajo controles de liberación independientes",
        "Mantener aprobación independiente de cambios a producción",
        "Dar acceso ilimitado a producción a todo desarrollador",
        "Sustituir la separación por confianza verbal"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Desarrollo y mantenimiento pueden ser compatibles cuando aprobación y despliegue están controlados. Combinar autoría, autorización y operación sin revisión permite introducir cambios no autorizados.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 7, pp. 88–91. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-8",
      "number": 8,
      "domain": 2,
      "kind": "domain",
      "topic": "Administración de bases de datos",
      "prompt": "¿Qué medidas reducen el riesgo de actividades privilegiadas de un DBA?",
      "options": [
        "Revisar registros de acceso y actividad",
        "Conservar trazas protegidas contra alteración por el revisado",
        "Permitir que el DBA apruebe y borre todas sus propias evidencias",
        "Definir accesos según autorización del propietario de datos",
        "Evaluar solo el título del cargo",
        "Eliminar registros para mejorar el rendimiento sin evaluar riesgos"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El monitoreo independiente de actividades privilegiadas es esencial. La autorización del propietario y la protección de las trazas refuerzan el control; revisar únicamente el cargo no demuestra uso apropiado.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 8, pp. 88–91. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-9",
      "number": 9,
      "domain": 2,
      "kind": "domain",
      "topic": "Autorización independiente",
      "prompt": "Si no es posible separar todas las funciones de una transacción, ¿qué medidas son apropiadas?",
      "options": [
        "Priorizar la separación de la autorización",
        "Permitir que quien origina la transacción la apruebe sin revisión",
        "Registrar quién origina, autoriza y modifica",
        "Revisar de forma independiente las excepciones",
        "Eliminar autorizaciones para agilizar el proceso",
        "Considerar que una bitácora impide por sí sola todo abuso"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La autorización independiente limita la capacidad de ejecutar operaciones indebidas. Las trazas y las revisiones complementan el control, pero registrar una acción no equivale a prevenirla.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 9, pp. 88–91. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-2-10",
      "number": 10,
      "domain": 2,
      "kind": "domain",
      "topic": "Controles compensatorios",
      "prompt": "En una empresa pequeña, un programador también opera el sistema. ¿Qué controles ayudan a compensar esta limitación?",
      "options": [
        "Verificar que solo se implementen cambios aprobados",
        "Revisar independientemente los cambios reales de producción",
        "Guardar únicamente registros de desarrollo sin compararlos con producción",
        "Conservar evidencia de aprobación y pruebas",
        "Asumir que una plantilla pequeña elimina el riesgo",
        "Bloquear toda programación aunque sea una función autorizada"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Los controles compensatorios deben abordar el riesgo real: cambios indebidos en producción. La aprobación, la verificación de lo implantado y la revisión independiente permiten detectar desviaciones sin impedir funciones necesarias.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · autoevaluación 10, pp. 88–92. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-1",
      "number": 1,
      "domain": 3,
      "kind": "domain",
      "topic": "Datos para pruebas",
      "prompt": "Un proveedor necesita datos para probar un sistema bancario. ¿Qué medidas son apropiadas?",
      "options": [
        "Sanitizar o anonimizar información sensible antes de entregarla",
        "Usar datos representativos de escenarios relevantes",
        "Enviar credenciales reales para facilitar pruebas",
        "Limitar el acceso y uso de los datos de prueba",
        "Suponer que un contrato elimina la exposición de datos",
        "Copiar toda producción sin evaluar necesidad"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La protección de la información es prioritaria. Los datos también deben representar escenarios útiles, con acceso limitado. La representatividad no justifica divulgar datos sensibles o credenciales innecesariamente.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 1, pp. 163–166. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-2",
      "number": 2,
      "domain": 3,
      "kind": "domain",
      "topic": "Pruebas en paralelo",
      "prompt": "¿Qué caracteriza a una prueba en paralelo bien diseñada?",
      "options": [
        "Comparar resultados del sistema nuevo con el existente",
        "Procesar entradas comparables en ambos sistemas",
        "Sustituir toda validación de usuarios por una comparación técnica",
        "Investigar diferencias para validar requisitos de negocio",
        "Garantizar por sí sola que no existen defectos",
        "Probar solo el costo de las licencias"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Las ejecuciones paralelas comparan resultados para comprobar que el nuevo sistema satisface necesidades del usuario. Las diferencias deben analizarse; no sustituyen todas las demás pruebas ni aseguran ausencia de defectos.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 2, pp. 163–166. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-3",
      "number": 3,
      "domain": 3,
      "kind": "domain",
      "topic": "Rediseño de procesos",
      "prompt": "Un proceso rediseñado elimina un control preventivo. ¿Qué debería evaluar auditoría?",
      "options": [
        "Si existe otro control que cubra el mismo objetivo",
        "El riesgo que queda después del cambio",
        "La obligación de restituir todos los controles antiguos sin análisis",
        "Si una medida detectiva permite responder a tiempo",
        "Si el nuevo proceso es más rápido, como única evidencia suficiente",
        "Cómo operar personalmente el control en lugar del negocio"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La evaluación se centra en el objetivo de control y la exposición residual. Un control alternativo puede ser válido; restaurar todos los controles o aceptar el cambio solo por velocidad ignora el análisis de riesgos.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 3, pp. 163–166. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-4",
      "number": 4,
      "domain": 3,
      "kind": "domain",
      "topic": "Validación de datos",
      "prompt": "Respecto a errores de captura, ¿qué afirmaciones son correctas?",
      "options": [
        "Un dígito verificador puede detectar ciertos errores de transcripción",
        "Un dígito verificador puede detectar ciertas transposiciones",
        "Un control de rango detecta necesariamente todo intercambio de dígitos",
        "Un control de duplicados busca registros repetidos",
        "Un dígito verificador demuestra que la operación fue autorizada",
        "Un control de formato garantiza la exactitud económica"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Cada validación tiene un objetivo: dígitos verificadores detectan ciertos errores de escritura; duplicados identifica repeticiones. Ninguna de estas pruebas demuestra autorización o exactitud total del contenido.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 4, pp. 163–166. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-5",
      "number": 5,
      "domain": 3,
      "kind": "domain",
      "topic": "Accesos en un ERP",
      "prompt": "¿Qué verificaciones son relevantes al auditar controles de acceso de un ERP financiero?",
      "options": [
        "Comparar permisos con responsabilidades vigentes",
        "Buscar combinaciones de privilegios incompatibles",
        "Suponer que la instalación del ERP asegura separación de funciones",
        "Revisar permisos privilegiados y bajas de usuarios",
        "Considerar suficiente la cantidad de manuales impresos",
        "Posponer toda revisión hasta que ocurra un fraude"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Los accesos determinan quién puede operar sobre procesos integrados y datos financieros. Permisos excesivos o incompatibles pueden tener gran impacto; la documentación y la compra del producto no demuestran control efectivo.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 5, pp. 163–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-6",
      "number": 6,
      "domain": 3,
      "kind": "domain",
      "topic": "Requisitos de adquisición",
      "prompt": "Al revisar requisitos para adquirir software, ¿qué debe comprobar el auditor?",
      "options": [
        "Que las especificaciones sean completas",
        "Que contemplen necesidades de control del negocio",
        "Que el proveedor sea elegido personalmente por auditoría",
        "Que los usuarios responsables validen sus necesidades",
        "Que el cronograma sustituya los requisitos",
        "Que se omitan requisitos difíciles de probar"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La integridad de las especificaciones es central: permite evaluar productos y verificar resultados. El auditor revisa el proceso y los controles; la selección comercial y la definición operativa corresponden a la gestión.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 6, pp. 163–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-7",
      "number": 7,
      "domain": 3,
      "kind": "domain",
      "topic": "Compra de software",
      "prompt": "Al adquirir un paquete en vez de desarrollarlo desde cero, ¿qué afirmaciones son correctas?",
      "options": [
        "La selección y configuración adquieren un papel central",
        "Los requisitos de negocio siguen siendo necesarios",
        "Se eliminan todas las pruebas de aceptación",
        "Deben evaluarse diferencias entre el paquete y las necesidades",
        "El proveedor asume automáticamente toda responsabilidad de control",
        "La compra elimina riesgos de implementación"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La selección y configuración reemplazan gran parte del diseño y desarrollo propios. Aun así, requisitos, análisis de brechas, pruebas y responsabilidades de aceptación siguen siendo necesarios.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 7, pp. 163–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-8",
      "number": 8,
      "domain": 3,
      "kind": "domain",
      "topic": "Trazabilidad de requisitos",
      "prompt": "Un proyecto en cascada no satisface al usuario. ¿Qué ayuda a investigar el problema?",
      "options": [
        "Revisar la definición y aprobación de requisitos",
        "Relacionar requisitos con casos de prueba y entregables",
        "Asumir que toda falla se debe a falta de capacitación",
        "Revisar cómo se aprobaron los cambios de alcance",
        "Ignorar las especificaciones originales",
        "Aceptar únicamente la opinión del desarrollador"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Los requisitos son el punto de partida para investigar desalineaciones. La trazabilidad y los cambios aprobados permiten distinguir errores de definición, implementación o validación sin atribuir causas sin evidencia.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 8, pp. 163–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-9",
      "number": 9,
      "domain": 3,
      "kind": "domain",
      "topic": "Arquitectura de clientes ligeros",
      "prompt": "Una organización centraliza el procesamiento con clientes ligeros. ¿Qué implicaciones debe evaluar?",
      "options": [
        "Mayor dependencia de la disponibilidad de servidores",
        "La necesidad de capacidad suficiente en la plataforma central",
        "La desaparición de toda dependencia de red",
        "El efecto de una caída central sobre varios usuarios",
        "La garantía automática de confidencialidad",
        "La eliminación de la necesidad de recuperación"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La centralización incrementa el impacto de fallas en servidores y conectividad. Capacidad, disponibilidad y recuperación merecen atención; el diseño no garantiza por sí mismo confidencialidad ni continuidad.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 9, pp. 163–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-3-10",
      "number": 10,
      "domain": 3,
      "kind": "domain",
      "topic": "Desarrollo ágil",
      "prompt": "¿Qué afirmaciones describen riesgos y prácticas de desarrollo ágil?",
      "options": [
        "El conocimiento tácito del equipo puede ser importante",
        "La colaboración frecuente ayuda a aclarar requisitos",
        "La agilidad exige ausencia total de documentación",
        "La rotación de personas puede provocar pérdida de conocimiento",
        "No existen requisitos de usuario",
        "La agilidad elimina la necesidad de controles"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Los métodos ágiles dependen mucho de colaboración y conocimiento compartido. Conviene conservar documentación suficiente para continuidad y control; agilidad no significa trabajar sin requisitos ni pruebas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · autoevaluación 10, pp. 164–167. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-1",
      "number": 1,
      "domain": 4,
      "kind": "domain",
      "topic": "Comparación de desempeño",
      "prompt": "Al comparar una instalación de procesamiento con otras, ¿qué hace útil el benchmarking?",
      "options": [
        "Seleccionar entornos comparables",
        "Definir indicadores medidos de manera consistente",
        "Interpretar las diferencias según el contexto del negocio",
        "Copiar objetivos ajenos sin evaluar necesidades",
        "Usar únicamente el tamaño del edificio",
        "Suponer que el promedio del sector es siempre el objetivo óptimo"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "El benchmarking necesita comparabilidad y métricas consistentes. Las diferencias se interpretan considerando volumen, criticidad y contexto; imitar cifras sin contexto puede conducir a decisiones equivocadas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 1, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-2",
      "number": 2,
      "domain": 4,
      "kind": "domain",
      "topic": "Sitios alternativos",
      "prompt": "Un servicio tolera muy poco tiempo de interrupción. ¿Qué criterios son pertinentes para su recuperación?",
      "options": [
        "Evaluar un sitio preparado para operar rápidamente",
        "Verificar que la solución alcance el RTO requerido",
        "Suponer que un sitio frío estará listo de inmediato",
        "Probar conectividad, datos y capacidad de la alternativa",
        "Escoger siempre el menor costo sin considerar impacto",
        "Asumir que el contrato demuestra por sí solo recuperabilidad"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Un hot site puede reducir el tiempo de recuperación, pero debe validarse contra el RTO y la capacidad necesaria. Un contrato no sustituye pruebas de que personas, sistemas y datos podrán operar.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 2, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-3",
      "number": 3,
      "domain": 4,
      "kind": "domain",
      "topic": "Evidencia de cambios",
      "prompt": "¿Qué prácticas permiten detectar cambios no autorizados en producción?",
      "options": [
        "Partir de registros de cambios generados por el sistema",
        "Rastrear cambios reales hasta su aprobación",
        "Revisar solo formularios que ya fueron aprobados",
        "Comparar versiones implantadas con versiones autorizadas",
        "Suponer que todo cambio documentado es el único existente",
        "Excluir cambios urgentes de cualquier revisión"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Partir de lo efectivamente modificado permite encontrar cambios sin documentación. Revisar únicamente formularios omite modificaciones clandestinas; los cambios urgentes también necesitan trazabilidad y revisión.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 3, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-4",
      "number": 4,
      "domain": 4,
      "kind": "domain",
      "topic": "Conectividad con socios",
      "prompt": "Al extender servicios internos a socios mediante VPN, ¿qué controles son apropiados?",
      "options": [
        "Autenticar a quienes se conectan",
        "Restringir el acceso a recursos autorizados",
        "Suponer que la VPN vuelve confiable cualquier equipo remoto",
        "Proteger la información en tránsito",
        "Eliminar los registros de conexión",
        "Otorgar acceso a toda la red por defecto"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La VPN protege la conexión, mientras autenticación y autorización limitan quién entra y a qué accede. No certifica la seguridad del dispositivo ni justifica acceso irrestricto.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 4, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-5",
      "number": 5,
      "domain": 4,
      "kind": "domain",
      "topic": "Criticidad de aplicaciones",
      "prompt": "¿Qué criterios ayudan a clasificar la criticidad de una aplicación para continuidad?",
      "options": [
        "El impacto de su indisponibilidad en procesos del negocio",
        "El tiempo que el negocio puede tolerar sin ella",
        "Solo el precio de compra del software",
        "Las dependencias de servicios esenciales",
        "La preferencia personal del administrador",
        "Solo la antigüedad del servidor"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La criticidad depende del valor y dependencia del negocio, no del precio o edad de la tecnología. El análisis de impacto permite establecer prioridades y objetivos de recuperación.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 5, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-6",
      "number": 6,
      "domain": 4,
      "kind": "domain",
      "topic": "Utilidades privilegiadas",
      "prompt": "Al revisar seguridad de bases de datos, ¿qué preocupa del uso de utilidades del sistema?",
      "options": [
        "Que puedan eludir controles de la aplicación",
        "Que permitan modificar directamente datos sensibles",
        "Que todo uso de una utilidad sea necesariamente malicioso",
        "Que su acceso carezca de restricción o monitoreo",
        "Que las utilidades sustituyan la autorización del propietario",
        "Que instalar más herramientas garantice integridad"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Las utilidades pueden acceder a datos por fuera de los controles habituales. Su uso legítimo requiere privilegios limitados, autorización y registros revisables; no todo uso es abuso.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 6, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-7",
      "number": 7,
      "domain": 4,
      "kind": "domain",
      "topic": "Revisión de redes",
      "prompt": "Al iniciar una revisión de una red conectada a Internet, ¿qué actividades dan contexto a las pruebas?",
      "options": [
        "Comprender arquitectura y diseño",
        "Identificar flujos de datos y límites de confianza",
        "Evaluar un firewall aislado sin entender su ubicación",
        "Ubicar conexiones externas y activos críticos",
        "Suponer que todas las subredes tienen igual exposición",
        "Revisar únicamente la marca del equipo"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Entender arquitectura y flujos permite evaluar si los controles están situados donde corresponde. Un dispositivo aislado o su marca no explica qué protege ni qué rutas quedan expuestas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 7, pp. 247–250. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-8",
      "number": 8,
      "domain": 4,
      "kind": "domain",
      "topic": "Auditoría de recuperación",
      "prompt": "¿Qué actividades preservan el papel de auditoría al evaluar un plan de recuperación?",
      "options": [
        "Observar pruebas del plan",
        "Evaluar evidencia de resultados y desviaciones",
        "Asumir la operación diaria del plan que luego auditará",
        "Comunicar debilidades y dar seguimiento a acciones",
        "Ser el único responsable de mantener el plan",
        "Aprobar por la gerencia toda estrategia de negocio"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Auditoría aporta evaluación independiente, observa pruebas y comunica hallazgos. Desarrollo, mantenimiento y ejecución del plan son responsabilidades de gestión y operación.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 8, pp. 248–251. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-9",
      "number": 9,
      "domain": 4,
      "kind": "domain",
      "topic": "RPO y RTO",
      "prompt": "¿Qué afirmaciones sobre objetivos de recuperación son correctas?",
      "options": [
        "El RPO expresa la pérdida de datos tolerable medida en tiempo",
        "El RTO expresa el tiempo objetivo para recuperar un servicio",
        "Un RPO bajo puede requerir replicación frecuente",
        "El RTO mide el número de usuarios del sistema",
        "Un RPO alto exige siempre replicación síncrona",
        "Replicar elimina la necesidad de protegerse de corrupción de datos"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "RPO se refiere a cuánto historial puede perderse y RTO a cuánto tarda la recuperación. La replicación puede reducir pérdida, pero también propagar corrupción; requiere otras medidas de protección.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 9, pp. 248–251. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-4-10",
      "number": 10,
      "domain": 4,
      "kind": "domain",
      "topic": "Responsabilidades en continuidad",
      "prompt": "¿Qué asignaciones de responsabilidad son apropiadas?",
      "options": [
        "TI restaura los sistemas y datos según el plan",
        "El negocio define prioridades de sus procesos",
        "TI decide por sí sola toda la tolerancia de interrupción empresarial",
        "La gerencia aprueba estrategias de continuidad",
        "El auditor declara todo desastre por su cuenta",
        "La compra de respaldos transfiere toda responsabilidad al proveedor"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "TI ejecuta la recuperación tecnológica, alineada con las prioridades del negocio y decisiones de la gerencia. La continuidad abarca más que tecnología y no se transfiere completamente a proveedores.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · autoevaluación 10, pp. 248–251. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-1",
      "number": 1,
      "domain": 5,
      "kind": "domain",
      "topic": "Detección de intrusiones",
      "prompt": "En un IDS basado en firmas, ¿qué aspectos deberían revisarse?",
      "options": [
        "La actualización de firmas",
        "La cobertura y ubicación de los sensores",
        "La expectativa de detectar absolutamente todos los ataques nuevos",
        "El tratamiento de alertas relevantes",
        "La suposición de que puede leer cualquier tráfico cifrado sin acceso a claves",
        "La creencia de que reemplaza todos los controles preventivos"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Las firmas actualizadas permiten reconocer patrones conocidos y los sensores deben cubrir tráfico pertinente. El cifrado y ataques desconocidos limitan la detección; generar alertas sin atenderlas no controla el riesgo.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 1, pp. 351–354. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-2",
      "number": 2,
      "domain": 5,
      "kind": "domain",
      "topic": "Acceso a nóminas",
      "prompt": "¿Qué controles ayudan a limitar el acceso a datos de nómina?",
      "options": [
        "Reglas que autorizan solo al personal que lo necesita",
        "Permisos vinculados con las funciones de cada usuario",
        "Permitir acceso general y confiar únicamente en logs",
        "Revisión periódica de permisos por el responsable de datos",
        "Limitar horarios como única protección",
        "Compartir una contraseña entre todos los empleados"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La autorización basada en necesidad y la revisión de permisos restringen acceso a datos. Los logs permiten detectar actividad y el horario reduce una ventana, pero ninguno sustituye la autorización.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 2, pp. 351–354. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-3",
      "number": 3,
      "domain": 5,
      "kind": "domain",
      "topic": "Protección de producción",
      "prompt": "¿Qué hallazgos comprometen directamente la protección de bases de datos de producción?",
      "options": [
        "Ausencia de controles de autenticación",
        "Cuentas privilegiadas sin revisión de actividad",
        "Separación efectiva de administración y supervisión",
        "Permisos de escritura abiertos a usuarios sin necesidad",
        "Pruebas de restauración documentadas",
        "Bajas de usuarios ejecutadas oportunamente"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La falta de autenticación, permisos excesivos y actividad privilegiada no revisada exponen los datos. Separación, restauraciones verificadas y bajas oportunas son controles favorables, no debilidades.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 3, pp. 351–354. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-4",
      "number": 4,
      "domain": 5,
      "kind": "domain",
      "topic": "Inicio de sesión único",
      "prompt": "Al implantar SSO, ¿qué afirmaciones son correctas?",
      "options": [
        "Una credencial comprometida puede dar acceso a varios servicios autorizados",
        "La autenticación reforzada reduce el riesgo de suplantación",
        "SSO debe conceder automáticamente todos los privilegios existentes",
        "Deben mantenerse reglas de autorización por servicio",
        "SSO garantiza que nunca habrá robo de sesiones",
        "El inicio de sesión único elimina la necesidad de revocar accesos"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "SSO centraliza autenticación y puede ampliar el impacto de una credencial comprometida. La autorización sigue siendo necesaria en cada servicio, junto con protección y revocación de sesiones y credenciales.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 4, pp. 351–354. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-5",
      "number": 5,
      "domain": 5,
      "kind": "domain",
      "topic": "Voz sobre IP",
      "prompt": "¿Qué factores afectan la calidad de un servicio de voz sobre IP?",
      "options": [
        "Latencia de la red",
        "Variación del retardo entre paquetes",
        "Pérdida de paquetes",
        "Color de los teléfonos",
        "Número de diapositivas de la política",
        "La existencia de un logotipo de seguridad"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "La voz requiere entrega oportuna y estable. Latencia, jitter y pérdidas afectan la conversación; la ingeniería de tráfico y la calidad de servicio permiten gestionar esas condiciones.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 5, pp. 351–354. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-6",
      "number": 6,
      "domain": 5,
      "kind": "domain",
      "topic": "Nube compartida",
      "prompt": "Una aseguradora usa una aplicación en nube compartida. ¿Qué controles responden al riesgo de exposición entre clientes?",
      "options": [
        "Aislamiento entre entornos de distintos clientes",
        "Autorización para acceder a datos sensibles",
        "Suponer que compartir infraestructura equivale a compartir permisos",
        "Protección de datos y gestión de claves",
        "Considerar que el ahorro elimina los riesgos de confidencialidad",
        "Publicar datos de clientes para facilitar soporte"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La separación lógica, permisos y protección de datos reducen el riesgo de acceso cruzado. Compartir infraestructura no debe implicar compartir información y el ahorro económico no justifica exposición.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 6, pp. 352–355. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-7",
      "number": 7,
      "domain": 5,
      "kind": "domain",
      "topic": "Protección del tráfico",
      "prompt": "Respecto de protocolos de protección de tráfico, ¿qué afirmaciones son correctas?",
      "options": [
        "La confidencialidad y la autenticación son objetivos distintos",
        "Una firma por sí sola no cifra el contenido del mensaje",
        "Un túnel correctamente configurado puede proteger paquetes encapsulados",
        "Un certificado por sí solo demuestra que todo tráfico está cifrado",
        "La autenticación elimina la necesidad de comprobar integridad",
        "El nombre del protocolo sustituye la revisión de su configuración"
      ],
      "answers": [
        0,
        1,
        2
      ],
      "explanation": "Hay que revisar servicios y configuración reales: cifrado, integridad y autenticación no son equivalentes. Certificados o firmas no demuestran por sí solos confidencialidad de toda una conexión.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 7, pp. 352–355. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-8",
      "number": 8,
      "domain": 5,
      "kind": "domain",
      "topic": "Firmas digitales",
      "prompt": "¿Qué propiedades pueden aportar las firmas digitales cuando se verifican correctamente?",
      "options": [
        "Detectar alteraciones del contenido firmado",
        "Verificar la firma respecto de una clave pública confiable",
        "Impedir que un tercero lea un mensaje que no está cifrado",
        "Apoyar evidencia del origen del mensaje",
        "Impedir toda copia del archivo",
        "Reemplazar automáticamente el cifrado"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Una firma permite comprobar integridad y vincular el mensaje con una clave, cuya confianza debe validarse. No oculta el contenido ni evita que se copie; confidencialidad requiere protección adicional.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 8, pp. 352–355. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-9",
      "number": 9,
      "domain": 5,
      "kind": "domain",
      "topic": "Denegación de servicio",
      "prompt": "¿Qué describe un ataque distribuido de denegación de servicio?",
      "options": [
        "Múltiples equipos generan tráfico contra un objetivo",
        "Busca degradar la disponibilidad del servicio",
        "Necesita necesariamente leer la base de datos del objetivo",
        "Puede saturar recursos o capacidad de red",
        "Solo puede originarse desde un único equipo",
        "Es equivalente a una firma digital inválida"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "DDoS utiliza múltiples fuentes para consumir recursos y afectar disponibilidad. No necesita obtener datos ni alterar firmas, aunque pueda coincidir con otros ataques.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 9, pp. 352–355. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "domain-5-10",
      "number": 10,
      "domain": 5,
      "kind": "domain",
      "topic": "Prevención de malware",
      "prompt": "¿Qué prácticas ayudan a prevenir la ejecución de malware?",
      "options": [
        "Analizar adjuntos antes de que lleguen al usuario",
        "Mantener actualizados los mecanismos de detección",
        "Restaurar un sistema después de infectarse y llamarlo prevención del incidente original",
        "Analizar archivos antes de ejecutarlos",
        "Asumir que deshabilitar USB elimina todos los vectores",
        "Desactivar inspección para evitar alertas"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La inspección previa y las actualizaciones reducen exposición a archivos maliciosos. Restaurar es una medida correctiva; bloquear un canal como USB no cubre correo, web u otros vectores.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · autoevaluación 10, pp. 352–355. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": null
    },
    {
      "id": "case-1-1",
      "number": 1,
      "domain": 1,
      "kind": "case",
      "topic": "Evaluación inicial",
      "prompt": "Betatronics ya entregó narrativas de procesos. ¿Qué debe hacer auditoría antes de elegir sus pruebas?",
      "options": [
        "Evaluar riesgos de TI",
        "Dar por efectivos los controles porque el CIO aprobó las narrativas",
        "Relacionar procesos con impactos y controles relevantes",
        "Elegir solo las pruebas más fáciles",
        "Priorizar el trabajo según la exposición identificada",
        "Probar controles al azar sin objetivos"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "Las narrativas explican procesos, pero no demuestran su funcionamiento ni su criticidad. Una evaluación de riesgos permite priorizar pruebas con fundamento y aprovechar los seis meses de trabajo disponibles.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 1, pp. 79–82. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-2",
      "number": 2,
      "domain": 1,
      "kind": "case",
      "topic": "Cuentas compartidas",
      "prompt": "Varias personas conocen las credenciales del administrador. ¿Qué conclusiones son correctas?",
      "options": [
        "Es difícil atribuir acciones a una persona",
        "El conocimiento compartido garantiza continuidad y elimina riesgos",
        "Una cuenta individual con privilegios limitados mejora trazabilidad",
        "Los privilegios administrativos amplían el impacto de un uso indebido",
        "Cambiar el nombre visible de la cuenta resuelve el problema",
        "No es necesario revisar la actividad privilegiada"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Una credencial compartida reduce la rendición de cuentas y permite acciones de gran impacto. Cuentas identificables, privilegios apropiados y monitoreo ayudan; renombrar la cuenta no identifica a su usuario real.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 2, pp. 79–82. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-3",
      "number": 3,
      "domain": 1,
      "kind": "case",
      "topic": "Muestreo de cambios",
      "prompt": "Para encontrar cambios que nunca fueron documentados, ¿qué procedimientos son apropiados?",
      "options": [
        "Elegir exclusivamente solicitudes aprobadas",
        "Seleccionar cambios reales del código en producción",
        "Buscar su autorización y evidencia de pruebas",
        "Investigar modificaciones sin soporte documental",
        "Descartar automáticamente cambios fuera de horario",
        "Concluir que no hay cambios si faltan formularios"
      ],
      "answers": [
        1,
        2,
        3
      ],
      "explanation": "La población debe partir de los elementos controlados: cambios realmente implantados. Así se descubren modificaciones que no tienen solicitud. Una muestra de solicitudes aprobadas no revela lo que nunca se documentó.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 3, pp. 79–82. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-4",
      "number": 4,
      "domain": 1,
      "kind": "case",
      "topic": "Evidencia de controles",
      "prompt": "¿Qué pruebas concretas aportarían evidencia sobre los problemas detectados en Betatronics?",
      "options": [
        "Rastrear una tarea administrativa hasta la cuenta que la ejecutó",
        "Aceptar solo la declaración verbal del CIO",
        "Comprobar si un parche implantado cuenta con registro de cambio",
        "Examinar si una transacción respetó funciones incompatibles",
        "Contar páginas de políticas como única prueba",
        "Suponer que un diagrama aprobado demuestra cumplimiento"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Las pruebas examinan eventos reales, autorizaciones y separación de responsabilidades. Las políticas y diagramas ayudan a entender el diseño, pero no prueban por sí solos la operación efectiva.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 4, p. 82. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-5",
      "number": 5,
      "domain": 1,
      "kind": "case",
      "topic": "Mandato y planificación",
      "prompt": "Al preparar el programa de los próximos dos años, ¿qué debe tener presente el auditor?",
      "options": [
        "Revisar el estatuto para conocer autoridad y responsabilidades",
        "Usar el estatuto como sustituto de la evaluación de riesgos",
        "Respetar la supervisión del comité de auditoría",
        "Considerar crecimiento y rotación al actualizar riesgos",
        "Auditar solo asuntos que el CIO permita informalmente",
        "Congelar el programa aunque cambie el negocio"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "El estatuto establece el mandato y la supervisión de auditoría. El programa debe utilizarlo como base y adaptarse a los riesgos del crecimiento y la rotación, sin perder independencia.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 5, pp. 79–83. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-6",
      "number": 6,
      "domain": 1,
      "kind": "case",
      "topic": "Operaciones externalizadas",
      "prompt": "Al evaluar respaldos y procesamiento por lotes de un proveedor, ¿qué actuaciones aportan aseguramiento?",
      "options": [
        "Leer el contrato y dar por probada la operación",
        "Planificar una revisión de los controles relevantes",
        "Contrastar evidencia de ejecución con los requisitos del servicio",
        "Valorar alcance y limitaciones de los informes disponibles",
        "Aceptar todo reporte comercial como evidencia suficiente",
        "Excluir operaciones externas del análisis de riesgos"
      ],
      "answers": [
        1,
        2,
        3
      ],
      "explanation": "Contratos e informes aportan contexto, pero no garantizan controles efectivos. La revisión debe obtener evidencia adecuada y considerar qué cubren los reportes externos y qué requiere evaluación adicional.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 6, pp. 80–83. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-7",
      "number": 7,
      "domain": 1,
      "kind": "case",
      "topic": "Revisión tardía de logs",
      "prompt": "La revisión de logs puede no detectar errores a tiempo. ¿Qué afirmaciones son correctas?",
      "options": [
        "Se trata de una posible falla de un control detectivo",
        "Es exclusivamente riesgo de que el auditor seleccione mal su muestra",
        "Debe evaluarse la frecuencia y oportunidad de revisión",
        "Es imposible mitigarlo porque los logs ya existen",
        "Asignar responsables y escalamiento puede mejorar el control",
        "Guardar registros equivale a revisarlos"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "Que el control no detecte oportunamente es riesgo de control. Hay que evaluar frecuencia, responsables, alertas y seguimiento. La simple conservación de registros no implica detección ni respuesta.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 7, pp. 80–83. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-1-8",
      "number": 8,
      "domain": 1,
      "kind": "case",
      "topic": "Uso de COBIT",
      "prompt": "Betatronics propone adoptar COBIT para mejorar sus controles. ¿Qué recomendaciones son apropiadas?",
      "options": [
        "Relacionar objetivos de TI con necesidades del negocio",
        "Copiar todos los procesos sin considerar tamaño y riesgos",
        "Definir responsables y medidas de desempeño",
        "Priorizar mejoras según brechas y riesgos",
        "Tratar el marco como sustituto de la gerencia",
        "Suponer que su adopción certifica automáticamente todos los controles"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Un marco debe adaptarse al contexto y traducirse en responsabilidades, objetivos y mejoras verificables. Adoptar un nombre o copiar procesos no demuestra efectividad ni sustituye decisiones de gestión.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 1 · caso Betatronics, pregunta 8, pp. 80–83. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 1
    },
    {
      "id": "case-2-1",
      "number": 1,
      "domain": 2,
      "kind": "case",
      "topic": "Estrategia incompleta",
      "prompt": "Accenco solo tiene listas breves y diapositivas de objetivos. ¿Qué problemas debe abordar?",
      "options": [
        "La ausencia de una dirección estratégica explícita",
        "La falta de trazabilidad entre iniciativas de TI y metas de negocio",
        "El hecho de que cualquier diapositiva sea inválida como documento",
        "La dificultad de priorizar inversiones sin objetivos claros",
        "La obligación de comprar más equipos antes de planificar",
        "La necesidad de impedir toda participación del directorio"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El problema es el contenido incompleto, no el formato. Sin objetivos claros es difícil priorizar proyectos, definir servicios y evaluar valor. El directorio debe ejercer supervisión.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 1, pp. 157–160. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-2",
      "number": 2,
      "domain": 2,
      "kind": "case",
      "topic": "Políticas y procedimientos",
      "prompt": "¿Qué acciones ayudan a que Accenco convierta su estrategia en trabajo consistente?",
      "options": [
        "Definir políticas que expresen expectativas de la dirección",
        "Mantener decisiones únicamente verbales",
        "Establecer procedimientos y responsables",
        "Comunicar reglas de acceso y de cambios a producción",
        "Asumir que el DBA debe definir todos los objetivos de negocio",
        "Medir éxito solo por cantidad de documentos"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Las políticas concretan intenciones y los procedimientos orientan la ejecución. Deben comunicarse y aplicarse; acumular documentos o delegar todo al DBA no demuestra alineación ni control.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 2, pp. 157–160. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-3",
      "number": 3,
      "domain": 2,
      "kind": "case",
      "topic": "Estructura de gobierno",
      "prompt": "El CFO concentra supervisión de TI. ¿Qué propuestas responden al riesgo de concentración?",
      "options": [
        "Dar visibilidad al directorio sobre prioridades y resultados de TI",
        "Evaluar una línea de reporte con autoridad suficiente para el responsable de TI",
        "Concluir que toda empresa pequeña necesita obligatoriamente un CIO exclusivo",
        "Clarificar quién dirige y quién supervisa las decisiones",
        "Eliminar la participación del negocio en decisiones de TI",
        "Permitir que el CFO suprima todo hallazgo sobre su área"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El diseño debe asegurar autoridad, dirección y supervisión adecuadas. Una empresa pequeña puede combinar cargos, pero debe controlar conflictos y no impedir que los hallazgos lleguen al órgano supervisor.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, preguntas 3 y 6, pp. 157–161. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-4",
      "number": 4,
      "domain": 2,
      "kind": "case",
      "topic": "Propiedad de los datos",
      "prompt": "Los programadores reciben acceso directo a producción con aprobación exclusiva del DBA. ¿Qué debe mejorarse?",
      "options": [
        "Obtener autorización del propietario de negocio de los datos",
        "Considerar al DBA propietario automático de toda información",
        "Limitar alcance y duración del acceso según necesidad",
        "Registrar y revisar el uso de accesos excepcionales",
        "Dar escritura permanente a todo el equipo de desarrollo",
        "Confundir custodia técnica con autorización de negocio"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "El DBA administra técnicamente los datos; la autorización corresponde al propietario de negocio. Accesos excepcionales deben limitarse y revisarse para reducir modificaciones indebidas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 4, p. 160. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-5",
      "number": 5,
      "domain": 2,
      "kind": "case",
      "topic": "Revisión de resultados",
      "prompt": "Los responsables de negocio revisan y firman resultados financieros. ¿Qué afirmaciones son correctas?",
      "options": [
        "La revisión puede detectar discrepancias por alteraciones de datos",
        "La firma demuestra siempre que se revisaron todos los detalles",
        "La revisión debe tener evidencia y criterios suficientes",
        "Es un control que puede mitigar riesgos de accesos indebidos",
        "Elimina la necesidad de controlar accesos",
        "Convierte automáticamente toda transacción en autorizada"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Una revisión sustantiva por responsables del negocio puede detectar diferencias significativas. Su efectividad depende de su alcance y evidencia; no legitima accesos indebidos ni sustituye controles preventivos.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 5, p. 160. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-6",
      "number": 6,
      "domain": 2,
      "kind": "case",
      "topic": "Roles en una empresa pequeña",
      "prompt": "Si el CFO también cumple la función de CIO, ¿qué medidas son razonables?",
      "options": [
        "Documentar responsabilidades y conflictos potenciales",
        "Renunciar a todo control por falta de personal",
        "Separar funciones hasta donde sea viable",
        "Aplicar revisiones supervisoras o independientes",
        "Permitir autoaprobación sin evidencia",
        "Dejar sin responsable las decisiones tecnológicas"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La combinación de roles puede ser necesaria, pero debe acompañarse de supervisión y controles compensatorios. La limitación de personal no elimina responsabilidad ni justifica autoaprobación irrestricta.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 6, pp. 160–161. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-7",
      "number": 7,
      "domain": 2,
      "kind": "case",
      "topic": "Presupuesto alineado",
      "prompt": "Varias iniciativas de TI no tienen fondos. ¿Qué debería recomendar auditoría?",
      "options": [
        "Integrar el presupuesto de TI con el ciclo presupuestario empresarial",
        "Justificar inversiones mediante casos de negocio",
        "Ocultar costos de operación para facilitar la aprobación",
        "Definir costos, prioridades y cadena de aprobación",
        "Aprobar todos los proyectos aunque no exista financiación",
        "Tratar el presupuesto como un listado desconectado de la estrategia"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Un presupuesto alineado identifica costos y prioridades y usa casos de negocio para justificar recursos. Debe cubrir compromisos relevantes y contar con aprobaciones, sin ocultar gastos ni prometer iniciativas inviables.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 7, pp. 160–161. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-2-8",
      "number": 8,
      "domain": 2,
      "kind": "case",
      "topic": "Independencia de auditoría",
      "prompt": "Auditoría interna reporta al CFO, quien gestiona TI. ¿Qué medidas pueden reducir este conflicto?",
      "options": [
        "Acceso funcional al comité de auditoría o directorio",
        "Permitir que el CFO elimine conclusiones antes de comunicarlas",
        "Revisión independiente adicional de áreas sensibles",
        "Supervisión de hallazgos por un órgano ajeno al área auditada",
        "Sustituir evidencia por la confianza del CFO",
        "Permitir que el auditor opere los controles y evalúe su propio trabajo"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La supervisión independiente y el acceso al órgano de gobierno reducen interferencias. Una revisión externa puede aportar aseguramiento adicional, aunque no elimina por sí sola toda limitación estructural.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 2 · caso Accenco, pregunta 8, p. 161. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 2
    },
    {
      "id": "case-3-1",
      "number": 1,
      "domain": 3,
      "kind": "case",
      "topic": "Priorizar exposición",
      "prompt": "Wonderwheels utiliza WEP en los terminales de venta. ¿Qué conclusiones son apropiadas?",
      "options": [
        "El enlace inalámbrico puede exponer información sensible",
        "Estar en una subred protegida elimina toda necesidad de parches",
        "Debe revisarse la protección de las transmisiones desde el punto de venta",
        "La priorización debe considerar exposición y sensibilidad de los datos",
        "El uso de Internet implica siempre transmisión sin protección",
        "El nombre de un mecanismo de cifrado garantiza que sea adecuado"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "El caso destaca la debilidad de WEP en el tramo inalámbrico. Se debe valorar la protección real de cada tramo. Una subred reduce exposición pero no corrige software vulnerable ni sustituye mantenimiento.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, pregunta 1, pp. 241–244. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-2",
      "number": 2,
      "domain": 3,
      "kind": "case",
      "topic": "Datos enviados a terceros",
      "prompt": "Antes de enviar archivos de ventas al analista externo, ¿qué controles son adecuados?",
      "options": [
        "Verificar qué información contienen realmente",
        "Asumir que el término agregado garantiza ausencia de identificadores",
        "Eliminar o anonimizar datos personales que no sean necesarios",
        "Proteger los archivos durante su transporte",
        "Enviar todas las columnas por comodidad",
        "Considerar que el transporte físico garantiza confidencialidad"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Hay que comprobar el contenido y minimizar datos antes de compartirlos. La agregación nominal no demuestra ausencia de información sensible; la protección debe cubrir el transporte y el acceso del destinatario.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, pregunta 2, pp. 241–244. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-3",
      "number": 3,
      "domain": 3,
      "kind": "case",
      "topic": "Auditoría en proyectos",
      "prompt": "Auditoría quedó fuera de decisiones clave de la migración. ¿Qué participación es apropiada?",
      "options": [
        "Revisar oportunamente controles y criterios de cumplimiento",
        "Asumir la aprobación operativa de cada entrega para luego auditarla",
        "Comunicar riesgos al órgano que supervisa el proyecto",
        "Mantener independencia frente a quienes diseñan y operan la solución",
        "Limitar la revisión a una sola norma sin evaluar alcance",
        "Evitar todo contacto con el proyecto hasta su cierre"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La participación temprana permite advertir riesgos y evaluar controles. Para preservar independencia, auditoría debe aportar aseguramiento y asesoría sin convertirse en propietaria de las decisiones que después evaluará.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, pregunta 3, p. 244; adaptación centrada en independencia. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-4",
      "number": 4,
      "domain": 3,
      "kind": "case",
      "topic": "Causa raíz",
      "prompt": "Reaparecen errores y se corrompen datos durante la migración. ¿Qué debe promover auditoría?",
      "options": [
        "Investigar causas con evidencia técnica y de proceso",
        "Suponer que cambiar el calendario solucionará las fallas",
        "Analizar si las correcciones y versiones se controlan correctamente",
        "Involucrar especialistas cuando sea necesario",
        "Redactar personalmente todas las especificaciones funcionales",
        "Declarar éxito por resultados positivos de pruebas iniciales"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Ante inestabilidad sustancial hay que investigar causas y controles de versiones y pruebas. Un nuevo calendario o una prueba inicial exitosa no explica corrupción ni regresiones. Auditoría puede requerir especialistas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, pregunta 4, pp. 244–245. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-5",
      "number": 5,
      "domain": 3,
      "kind": "case",
      "topic": "Software sin soporte",
      "prompt": "La base de datos perdió soporte y lleva años sin parches. ¿Qué acciones son razonables mientras se migra?",
      "options": [
        "Evaluar exposición y controles temporales",
        "Limitar accesos y monitorear actividad anómala",
        "Considerar que una subred elimina todas las vulnerabilidades",
        "Mantener un plan de sustitución con responsables y seguimiento",
        "Ignorar el retraso porque existe una intención de migrar",
        "Desactivar registros para acelerar el proyecto"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "El riesgo continúa durante la transición. Segmentación, privilegios limitados y monitoreo pueden reducirlo, pero deben acompañarse de un plan viable de sustitución. La intención de migrar no remedia vulnerabilidades.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, ampliación sobre plataforma sin soporte, pp. 241–242. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-6",
      "number": 6,
      "domain": 3,
      "kind": "case",
      "topic": "Pilotos con datos reales",
      "prompt": "Los pilotos usan datos reales y procesos operativos. ¿Qué medidas deberían existir?",
      "options": [
        "Definir criterios de aceptación antes de ampliar el piloto",
        "Proteger los datos utilizados",
        "Permitir fallas sin seguimiento porque el sistema es piloto",
        "Preparar reversión y recuperación ante fallas",
        "Eliminar la responsabilidad de los usuarios sobre la aceptación",
        "Usar producción como único ambiente de pruebas sin evaluar impacto"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Un piloto con datos reales puede afectar operaciones y confidencialidad. Debe contar con criterios, protección, monitoreo y reversión. Llamarlo piloto no elimina el impacto ni las responsabilidades.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, ampliación sobre entregas por fases, pp. 241–242. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-7",
      "number": 7,
      "domain": 3,
      "kind": "case",
      "topic": "Errores que regresan",
      "prompt": "Una función antes corregida vuelve a fallar tras una entrega. ¿Qué controles conviene evaluar?",
      "options": [
        "Pruebas de regresión",
        "Gestión de versiones y líneas base",
        "El color de la interfaz como causa única",
        "Trazabilidad de correcciones entre entregas",
        "Eliminación de pruebas antiguas sin analizar cobertura",
        "Autorización automática de todo cambio urgente"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Las regresiones pueden relacionarse con versiones equivocadas, correcciones perdidas o cambios que afectan funciones existentes. Pruebas, líneas base y trazabilidad permiten detectar y prevenir estas situaciones.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, ampliación sobre recurrencia de errores, pp. 241–245. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-3-8",
      "number": 8,
      "domain": 3,
      "kind": "case",
      "topic": "Protección integral",
      "prompt": "¿Qué hallazgos de Wonderwheels requieren evaluar controles además del cifrado de red?",
      "options": [
        "Servidores de tienda en áreas accesibles al público",
        "Datos enviados a terceros sin verificar su contenido",
        "Dependencia de software sin soporte",
        "La existencia de una VPN como demostración de riesgo cero",
        "Corrupción de datos durante la migración",
        "La idea de que toda vulnerabilidad es solo inalámbrica"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "explanation": "La protección incluye seguridad física, terceros, mantenimiento e integridad de datos, además de comunicaciones. Una VPN no resuelve exposición física, contenido compartido ni fallas de la migración.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 3 · caso Wonderwheels, ampliación del escenario, pp. 241–245. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 3
    },
    {
      "id": "case-4-1",
      "number": 1,
      "domain": 4,
      "kind": "case",
      "topic": "Enlaces privados",
      "prompt": "Pinkwater propone enlaces privados de microondas. ¿Qué debe considerar auditoría?",
      "options": [
        "Las transmisiones pueden ser interceptadas",
        "La propiedad privada del enlace garantiza confidencialidad",
        "Deben evaluarse cifrado e integridad de extremo a extremo",
        "La sensibilidad de datos de clientes aumenta el impacto de exposición",
        "El bajo costo demuestra seguridad suficiente",
        "No es necesario autenticar extremos de una red privada"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Una red privada no hace imposible la interceptación. Debe protegerse la información sensible y evaluarse la implementación real, no inferir seguridad del costo o de quién posee el enlace.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, pregunta 1, pp. 345–348. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-2",
      "number": 2,
      "domain": 4,
      "kind": "case",
      "topic": "Wi-Fi de invitados",
      "prompt": "¿Qué medidas reducen el riesgo del Wi-Fi público de las sucursales?",
      "options": [
        "Separarlo de los sistemas bancarios mediante controles de red",
        "Permitir rutas internas completas a los clientes",
        "Restringir flujos entre la red de invitados y la red interna",
        "Verificar la segmentación con pruebas",
        "Usar solo un horario de acceso como sustituto del aislamiento",
        "Suponer que registrar conexiones impide ataques"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La separación efectiva mediante controles de red reduce rutas de ataque hacia sistemas internos. Los logs y horarios pueden complementar, pero no reemplazan el aislamiento y su verificación.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, pregunta 2, pp. 345–348. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-3",
      "number": 3,
      "domain": 4,
      "kind": "case",
      "topic": "Capacidad del sitio alternativo",
      "prompt": "El banco tiene 750 empleados, pero contrató 100 puestos de recuperación. ¿Qué conclusiones son válidas?",
      "options": [
        "Debe evaluarse cuántas funciones críticas necesitan esos puestos",
        "Es obligatorio contratar siempre un puesto por cada empleado",
        "El crecimiento justifica revisar periódicamente la capacidad",
        "El número de servidores debe derivarse de necesidades de recuperación",
        "La diferencia numérica demuestra por sí sola incumplimiento del RTO",
        "Esperar tres años es adecuado aunque cambien las necesidades"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "No todos los empleados y servidores son esenciales para la operación mínima. La capacidad debe responder al análisis de impacto y revisarse regularmente, especialmente ante crecimiento acelerado.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, pregunta 3, pp. 345–348. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-4",
      "number": 4,
      "domain": 4,
      "kind": "case",
      "topic": "Apoyo entre sucursales",
      "prompt": "El banco busca recuperación económica de sucursales. ¿Qué debe validar en sus acuerdos recíprocos?",
      "options": [
        "Capacidad para recibir funciones y personal críticos",
        "Disponibilidad de equipos, conectividad y datos necesarios",
        "Que cada sucursal pueda atender a cualquier otra sin evaluación",
        "Procedimientos y pruebas de activación",
        "Que la distancia por sí sola elimine todo desastre común",
        "Que los acuerdos verbales basten para probar viabilidad"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La recuperación recíproca puede ser eficiente si existe capacidad real, recursos y procedimientos probados. Distancia y buena voluntad no garantizan disponibilidad ante un incidente que afecte varias sedes.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, pregunta 4, pp. 346–348. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-5",
      "number": 5,
      "domain": 4,
      "kind": "case",
      "topic": "Planes desactualizados",
      "prompt": "Los planes llevan ocho años sin actualizarse. ¿Qué actuaciones deberían priorizarse?",
      "options": [
        "Revisar procesos, dependencias e impactos actuales",
        "Conservar supuestos antiguos porque el plan está firmado",
        "Actualizar responsables y contactos",
        "Probar el plan revisado frente a escenarios relevantes",
        "Esperar a un desastre para comprobar el crecimiento",
        "Modificar únicamente la portada del documento"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "Un plan debe reflejar operaciones, recursos y personas actuales. El crecimiento vuelve dudosos los supuestos antiguos; actualizar contenido y probarlo aporta evidencia de capacidad real.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, ampliación sobre planes antiguos, p. 345. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-6",
      "number": 6,
      "domain": 4,
      "kind": "case",
      "topic": "Objetivos de recuperación",
      "prompt": "Las aplicaciones críticas tienen RTO de tres a cinco días. ¿Qué afirmaciones son correctas?",
      "options": [
        "El tiempo de recuperación probado debe compararse con esos objetivos",
        "El RTO establece automáticamente cuántos días de datos se pueden perder",
        "La pérdida tolerable de datos necesita un RPO definido",
        "Las dependencias deben recuperarse a tiempo para habilitar el servicio",
        "Todo servicio puede recuperarse en cualquier orden",
        "Un respaldo reciente demuestra por sí solo cumplimiento del RTO"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "RTO mide el tiempo para volver a operar, mientras RPO mide pérdida de datos tolerable. Hay que incluir dependencias y medir restauración y puesta en servicio; una copia reciente no demuestra rapidez de recuperación.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, ampliación sobre RTO, p. 345. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-7",
      "number": 7,
      "domain": 4,
      "kind": "case",
      "topic": "Disponibilidad del proveedor",
      "prompt": "El proveedor del hot site atiende a varias organizaciones. ¿Qué aspectos conviene evaluar?",
      "options": [
        "Disponibilidad de instalaciones alternativas ante uso simultáneo",
        "Condiciones para activar el servicio y recibir recursos",
        "Suponer que todo equipo estará reservado exclusivamente sin verificarlo",
        "Evidencia de pruebas y capacidad contratada",
        "Guardar la única copia de respaldo donde puede no estar disponible",
        "Considerar innecesario revisar el contrato"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La recuperación depende de la disponibilidad efectiva, los términos de activación y recursos probados. La existencia de instalaciones alternativas debe verificarse; no debe suponerse exclusividad ni depender de una única copia inaccesible.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, ampliación del contrato de recuperación, pp. 345–348. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-4-8",
      "number": 8,
      "domain": 4,
      "kind": "case",
      "topic": "Respaldo de conectividad",
      "prompt": "Para validar la conexión alternativa por cable, ¿qué debería examinar auditoría?",
      "options": [
        "Si realmente soporta los servicios críticos cuando falla el enlace principal",
        "Si comparte puntos únicos de falla con la conexión principal",
        "La garantía verbal del proveedor como única evidencia",
        "La protección efectiva del tráfico y el comportamiento durante conmutación",
        "La suposición de que una segunda conexión elimina todo riesgo",
        "Solo el precio de instalación"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Una alternativa debe funcionar durante la falla prevista. Hay que revisar capacidad, dependencias comunes, protección del tráfico y pruebas de conmutación; contratar dos enlaces no demuestra independencia efectiva.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 4 · caso Pinkwater Bank, ampliación sobre enlace alternativo, p. 345. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 4
    },
    {
      "id": "case-5-1",
      "number": 1,
      "domain": 5,
      "kind": "case",
      "topic": "Seguridad del equipo remoto",
      "prompt": "Un empleado se conecta desde casa mediante VPN. ¿Qué afirmaciones son correctas?",
      "options": [
        "La VPN no elimina el malware del equipo personal",
        "Un equipo comprometido puede convertirse en punto de entrada",
        "El túnel garantiza que el sistema operativo esté actualizado",
        "Debe evaluarse la seguridad del dispositivo que se conecta",
        "Toda conexión desde casa es automáticamente ilegítima",
        "La VPN sustituye todos los controles del extremo"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La VPN protege el canal, no la integridad del equipo. Un dispositivo comprometido puede utilizar una conexión legítima para acceder a recursos internos; por eso se necesitan controles del extremo.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, pregunta 1, pp. 545–546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-2",
      "number": 2,
      "domain": 5,
      "kind": "case",
      "topic": "Defensa en capas",
      "prompt": "¿Qué medidas ayudan a proteger el acceso remoto de Spectertainment?",
      "options": [
        "Controles en red y sistema operativo",
        "Autorizaciones dentro de aplicaciones y datos",
        "Depender de una única contraseña compartida",
        "Restricción del acceso según función del usuario",
        "Considerar que proteger la red elimina controles de aplicación",
        "Dar acceso a toda la base de datos a cualquier usuario autenticado"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La protección debe cubrir infraestructura, aplicaciones y datos. Autenticarse permite comprobar identidad, pero no autoriza automáticamente todas las operaciones. Las capas se complementan.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, pregunta 2, p. 546; ampliación de defensa en capas. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-3",
      "number": 3,
      "domain": 5,
      "kind": "case",
      "topic": "Restablecer una contraseña",
      "prompt": "Un empleado llama porque olvidó su contraseña. ¿Qué debe hacer el responsable de seguridad?",
      "options": [
        "Verificar la identidad antes de restablecerla",
        "Entregar una contraseña por el solo hecho de recibir una llamada",
        "Usar un procedimiento de recuperación previamente definido",
        "Registrar la operación de recuperación",
        "Solicitar que revele su contraseña anterior como único método",
        "Publicar una contraseña temporal común para todo el personal"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La identidad se comprueba antes de generar nuevas credenciales mediante un procedimiento confiable. Registrar la acción aporta trazabilidad. Una llamada por sí sola no prueba identidad.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, pregunta 3, pp. 545–546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-4",
      "number": 4,
      "domain": 5,
      "kind": "case",
      "topic": "Política BYOD",
      "prompt": "¿Qué debe definir una política de uso de dispositivos personales?",
      "options": [
        "Si su uso para trabajar está permitido",
        "Qué condiciones de seguridad deben cumplir",
        "Que un dispositivo personal queda fuera de todo control empresarial",
        "Responsabilidades del usuario y condiciones de acceso a recursos",
        "Que todos los equipos son confiables por pertenecer a empleados",
        "Que una VPN elimina la necesidad de la política"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La política de uso aceptable y los requisitos BYOD deben aclarar permisos, responsabilidades y condiciones. La propiedad personal del equipo no elimina los riesgos asociados al acceso corporativo.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, pregunta 4, pp. 545–546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-5",
      "number": 5,
      "domain": 5,
      "kind": "case",
      "topic": "Beneficios y límites de BYOD",
      "prompt": "¿Qué afirmaciones sobre permitir equipos personales son razonables?",
      "options": [
        "Puede mejorar flexibilidad y productividad",
        "Puede reducir algunos costos de adquisición",
        "Garantiza una baja de accesos más sencilla en todos los casos",
        "No demuestra por sí mismo mayor conciencia de seguridad",
        "Asegura ausencia de incidentes porque el empleado cuida su equipo",
        "Elimina todo costo de soporte y administración"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "BYOD puede aportar productividad y ahorro, pero crea necesidades de soporte, control y baja de accesos. Elegir usar un equipo propio no demuestra formación en seguridad ni elimina costos.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, pregunta 5, p. 546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-6",
      "number": 6,
      "domain": 5,
      "kind": "case",
      "topic": "Baja de un trabajador",
      "prompt": "Un empleado con equipo propio deja la empresa. ¿Qué acciones ayudan a proteger la información?",
      "options": [
        "Revocar credenciales y sesiones de acceso corporativo",
        "Esperar a que entregue un equipo que nunca fue de la empresa",
        "Aplicar el procedimiento acordado para retirar datos corporativos",
        "Comprobar que ya no pueda usar VPN ni aplicaciones empresariales",
        "Conservar indefinidamente su cuenta activa por comodidad",
        "Asumir que desactivar el correo revoca todo acceso"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La baja debe cubrir todos los accesos y los datos corporativos según las políticas acordadas. El equipo puede seguir siendo del trabajador; no hay que confundir propiedad del dispositivo con derecho de acceso a sistemas.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, ampliación de riesgos BYOD, pp. 545–546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-7",
      "number": 7,
      "domain": 5,
      "kind": "case",
      "topic": "Capacitación y evidencia",
      "prompt": "La empresa ya ofrece un curso de seguridad. ¿Qué debe verificar auditoría además de su existencia?",
      "options": [
        "Si los empleados conocen los procedimientos relevantes",
        "Si los controles técnicos respaldan las reglas comunicadas",
        "Si el curso garantiza automáticamente conducta segura",
        "Si se identifican y corrigen incumplimientos",
        "Si puede eliminarse la gestión de dispositivos por haber capacitación",
        "Si la lista de asistentes demuestra ausencia de malware"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "La capacitación es un control administrativo que debe reflejarse en comprensión y conducta. Se complementa con controles técnicos y seguimiento; asistir no prueba que el equipo sea seguro.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, ampliación sobre formación, p. 545. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "case-5-8",
      "number": 8,
      "domain": 5,
      "kind": "case",
      "topic": "Acceso remoto fortalecido",
      "prompt": "¿Qué mejoras responden a los riesgos del escenario sin depender únicamente del cifrado de la VPN?",
      "options": [
        "Reforzar la autenticación de usuarios",
        "Evaluar el estado de seguridad de dispositivos antes de permitir acceso",
        "Entregar permisos administrativos globales a todos",
        "Limitar recursos accesibles según necesidad",
        "Confiar en cualquier dispositivo por estar fuera de la oficina",
        "Mantener cuentas compartidas para simplificar soporte"
      ],
      "answers": [
        0,
        1,
        3
      ],
      "explanation": "Autenticación reforzada, evaluación del dispositivo y mínimo privilegio abordan riesgos distintos al canal de comunicación. Un túnel cifrado puede ser utilizado indebidamente si se comprometen la identidad o el equipo.",
      "note": "",
      "source": "Manual CISA 2024 · dominio 5 · caso Spectertainment, ampliación de acceso remoto, pp. 545–546. Pregunta original de práctica, no oficial.",
      "sourceFile": "CISA Official Review Manual (2024)_compressed-1.md",
      "caseId": 5
    },
    {
      "id": "iso-1-1",
      "number": 1,
      "domain": null,
      "clause": 1,
      "kind": "iso",
      "topic": "Cláusula 1 · Alcance",
      "prompt": "Una ONG pequeña trata datos de donantes. ¿Qué afirmaciones sobre el alcance de ISO/IEC 27701:2025 son correctas?",
      "options": [
        "Puede aplicarla aunque no tenga fines de lucro",
        "Puede aplicarla aunque sea pequeña",
        "Solo se aplica a empresas tecnológicas",
        "Solo regula organizaciones públicas",
        "Incluye requisitos para mantener y mejorar un PIMS",
        "Excluye a los encargados del tratamiento"
      ],
      "answers": [
        0,
        1,
        4
      ],
      "explanation": "La cláusula 1 admite organizaciones de todos los tamaños y tipos, incluidos los organismos sin fines de lucro. El sistema abarca establecimiento, implementación, mantenimiento y mejora, y se dirige tanto a responsables como a encargados.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 1 · páginas impresas 1. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-1-2",
      "number": 2,
      "domain": null,
      "clause": 1,
      "kind": "iso",
      "topic": "Cláusula 1 · Alcance",
      "prompt": "Un equipo confunde el alcance de la norma con el alcance de su PIMS. ¿Qué aclaraciones son válidas?",
      "options": [
        "La norma está dirigida a responsables y encargados de PII",
        "La cláusula 1 fija automáticamente los límites de cada organización",
        "Cada organización debe determinar el alcance de su PIMS",
        "La norma solo contiene definiciones",
        "El alcance particular puede ignorar el tratamiento de PII",
        "El documento incluye orientación para implementar sus requisitos"
      ],
      "answers": [
        0,
        2,
        5
      ],
      "explanation": "La cláusula 1 explica a quién se dirige la norma y su propósito. La delimitación concreta del sistema corresponde a 4.3, debe documentarse e incluir el tratamiento de PII. El documento contiene requisitos y orientación.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 1 y 4.3 · páginas impresas 1. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-2-1",
      "number": 1,
      "domain": null,
      "clause": 2,
      "kind": "iso",
      "topic": "Cláusula 2 · Referencias normativas",
      "prompt": "Al revisar la cláusula 2 de la edición proporcionada, ¿qué afirmaciones sobre referencias normativas son correctas?",
      "options": [
        "ISO/IEC 29100 figura como referencia normativa",
        "Toda norma mencionada en una nota se convierte en referencia normativa de la cláusula 2",
        "Una referencia fechada remite a la edición citada",
        "Una referencia sin fecha siempre remite a la primera edición",
        "ISO/IEC 29100 aparece sin año en esta cláusula",
        "ISO/IEC 27001 es la única referencia de esta cláusula"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "La referencia normativa listada es ISO/IEC 29100 y no lleva fecha. La regla diferencia referencias fechadas y no fechadas; las menciones orientativas de otras normas no sustituyen esta lista.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 2 · páginas impresas 1. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-2-2",
      "number": 2,
      "domain": null,
      "clause": 2,
      "kind": "iso",
      "topic": "Cláusula 2 · Referencias normativas",
      "prompt": "Un equipo prepara el material de consulta de la norma. ¿Qué decisiones siguen la regla de referencias normativas?",
      "options": [
        "Fijar todas las referencias sin fecha en la edición de 2019",
        "Para una referencia sin fecha, considerar la edición más reciente y sus modificaciones",
        "Ignorar ISO/IEC 29100 porque no aparece un año",
        "Reconocer ISO/IEC 29100 como marco de privacidad",
        "Tratar la bibliografía y las referencias normativas como categorías idénticas",
        "Consultar la edición indicada cuando una referencia tenga fecha"
      ],
      "answers": [
        1,
        3,
        5
      ],
      "explanation": "La cláusula 2 remite al marco de privacidad ISO/IEC 29100. Las referencias no fechadas siguen su edición más reciente con modificaciones; para las fechadas se aplica la edición citada.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 2 · páginas impresas 1. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-3-1",
      "number": 1,
      "domain": null,
      "clause": 3,
      "kind": "iso",
      "topic": "Cláusula 3 · Términos, definiciones y abreviaturas",
      "prompt": "Se detecta que un proceso no cumple un requisito. ¿Qué distinciones terminológicas son correctas?",
      "options": [
        "El incumplimiento de un requisito es una no conformidad",
        "Toda corrección puntual elimina necesariamente la causa",
        "La acción correctiva busca eliminar causas y evitar la repetición",
        "La información documentada solo puede estar en papel",
        "La información documentada puede incluir evidencia de resultados",
        "Una no conformidad solo existe si hubo una sanción"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "Una no conformidad es el incumplimiento de un requisito. La acción correctiva se dirige a sus causas, y la información documentada puede ser de diversos formatos e incluir registros de resultados. Corregir un caso no demuestra por sí solo que se eliminó su causa.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 3.10, 3.16 y 3.17 · páginas impresas 1–4. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-3-2",
      "number": 2,
      "domain": null,
      "clause": 3,
      "kind": "iso",
      "topic": "Cláusula 3 · Términos, definiciones y abreviaturas",
      "prompt": "¿Qué asociaciones corresponden al vocabulario de esta edición?",
      "options": [
        "PIMS: un producto informático específico obligatorio",
        "Corresponsable: quien decide finalidades y medios junto con otros responsables",
        "Declaración de aplicabilidad: documentación de controles y justificaciones de inclusión o exclusión",
        "PIMS: sistema de gestión que aborda la privacidad afectada por el tratamiento de PII",
        "Corresponsable: cualquier proveedor sin capacidad de decisión",
        "Declaración de aplicabilidad: un certificado emitido automáticamente"
      ],
      "answers": [
        1,
        2,
        3
      ],
      "explanation": "El PIMS es un sistema de gestión, no una herramienta concreta. La corresponsabilidad implica determinación conjunta de finalidades y medios. La declaración de aplicabilidad documenta controles y justificaciones; no es un certificado.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 3.21, 3.23 y 3.25 · páginas impresas 1–4. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-3-3",
      "number": 3,
      "domain": null,
      "clause": 3,
      "kind": "iso",
      "topic": "Cláusula 3 · Términos, definiciones y abreviaturas",
      "prompt": "Un equipo revisa sus indicadores y habilidades. ¿Qué interpretaciones son correctas?",
      "options": [
        "La competencia consiste únicamente en asistir a un curso",
        "La eficacia se refiere a realizar lo planificado y alcanzar los resultados previstos",
        "El desempeño solo admite cifras y nunca resultados cualitativos",
        "El riesgo está relacionado con el efecto de la incertidumbre",
        "La competencia implica aplicar conocimientos y habilidades para lograr resultados",
        "Un riesgo requiere que el daño ya se haya materializado"
      ],
      "answers": [
        1,
        3,
        4
      ],
      "explanation": "La competencia se demuestra mediante la capacidad de aplicar conocimientos y habilidades. La eficacia relaciona actividades y resultados con lo planificado; el desempeño puede ser cuantitativo o cualitativo. El riesgo no exige un daño ya ocurrido.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 3.7, 3.9, 3.11 y 3.13 · páginas impresas 1–4. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 7
    },
    {
      "id": "iso-4-1",
      "number": 1,
      "domain": null,
      "clause": 4,
      "kind": "iso",
      "topic": "Cláusula 4 · Contexto de la organización",
      "prompt": "Una empresa trata datos de sus empleados y también procesa datos por cuenta de clientes. ¿Qué debe considerar al analizar su contexto?",
      "options": [
        "Puede desempeñar funciones diferentes según el tratamiento",
        "Debe elegir una sola función para toda la empresa sin analizar los tratamientos",
        "Debe distinguir las funciones cuando actúa como responsable y encargado",
        "Debe determinar si el cambio climático es relevante para su contexto",
        "Puede ignorar las cuestiones externas",
        "La relevancia del contexto se decide solo por el tamaño del área de TI"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La función depende de quién decide los fines y medios de cada tratamiento. Si la organización actúa en ambas funciones debe distinguirlas. El análisis incluye cuestiones internas y externas y determinar la relevancia del cambio climático.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 4.1 · páginas impresas 4–6. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 10
    },
    {
      "id": "iso-4-2",
      "number": 2,
      "domain": null,
      "clause": 4,
      "kind": "iso",
      "topic": "Cláusula 4 · Contexto de la organización",
      "prompt": "¿Qué actividades forman parte de comprender las necesidades y expectativas de las partes interesadas?",
      "options": [
        "Identificar únicamente a los accionistas",
        "Identificar las partes relevantes para el PIMS",
        "Incluir a los titulares de la PII entre las partes interesadas",
        "Determinar requisitos relevantes y cuáles se atenderán mediante el PIMS",
        "Asumir que todo cliente es necesariamente un titular individual",
        "Excluir a los encargados y sus subcontratistas sin evaluar su relevancia"
      ],
      "answers": [
        1,
        2,
        3
      ],
      "explanation": "La cláusula 4.2 exige identificar partes y requisitos relevantes, y determinar su tratamiento en el PIMS. Incluye a los titulares; los clientes también pueden ser organizaciones y otros participantes pueden ser relevantes.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 4.2 · páginas impresas 4–6. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 10
    },
    {
      "id": "iso-4-3",
      "number": 3,
      "domain": null,
      "clause": 4,
      "kind": "iso",
      "topic": "Cláusula 4 · Contexto de la organización",
      "prompt": "¿Qué prácticas son adecuadas al establecer el alcance del PIMS?",
      "options": [
        "Documentar los límites y la aplicabilidad",
        "Omitir el contexto externo porque no es controlable",
        "Considerar los requisitos identificados en 4.2",
        "Mantener el alcance únicamente como un acuerdo verbal",
        "Excluir todo tratamiento de PII del alcance",
        "Incluir el tratamiento de PII al determinarlo"
      ],
      "answers": [
        0,
        2,
        5
      ],
      "explanation": "El alcance debe estar disponible como información documentada, considerar el contexto de 4.1 y los requisitos de 4.2, e incluir el tratamiento de PII. Un acuerdo verbal no satisface la exigencia documental.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 4.3 · páginas impresas 4–6. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 10
    },
    {
      "id": "iso-4-4",
      "number": 4,
      "domain": null,
      "clause": 4,
      "kind": "iso",
      "topic": "Cláusula 4 · Contexto de la organización",
      "prompt": "La organización ya redactó un manual de privacidad. ¿Qué sigue siendo necesario para cumplir con la gestión del sistema?",
      "options": [
        "Implementar el PIMS y sus procesos",
        "Considerar que redactar el manual completa todos los requisitos",
        "Mantener y mejorar continuamente el sistema",
        "Eliminar las interacciones entre procesos del análisis",
        "Considerar los procesos necesarios y sus interacciones",
        "Esperar a un incidente para comenzar a operar el sistema"
      ],
      "answers": [
        0,
        2,
        4
      ],
      "explanation": "La cláusula 4.4 requiere establecer, implementar, mantener y mejorar el PIMS, incluidos sus procesos e interacciones. Un manual puede apoyar el sistema, pero no sustituye su funcionamiento.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 4.4 · páginas impresas 4–6. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 10
    },
    {
      "id": "iso-5-1",
      "number": 1,
      "domain": null,
      "clause": 5,
      "kind": "iso",
      "topic": "Cláusula 5 · Liderazgo",
      "prompt": "¿Qué actuaciones evidencian liderazgo y compromiso de la alta dirección?",
      "options": [
        "Integrar los requisitos del PIMS en los procesos de negocio",
        "Delegar el trabajo y desentenderse de los resultados",
        "Asegurar recursos para el sistema",
        "Alinear política y objetivos con la dirección estratégica",
        "Limitar la privacidad a una campaña anual de comunicación",
        "Promover la mejora continua y apoyar a las personas"
      ],
      "answers": [
        0,
        2,
        3,
        5
      ],
      "explanation": "El liderazgo se refleja en integración, alineación, recursos, apoyo y mejora. Delegar tareas no elimina las actuaciones de liderazgo que exige 5.1 ni la atención a los resultados previstos.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 5.1 · páginas impresas 6–7. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 12
    },
    {
      "id": "iso-5-2",
      "number": 2,
      "domain": null,
      "clause": 5,
      "kind": "iso",
      "topic": "Cláusula 5 · Liderazgo",
      "prompt": "¿Qué características debe reunir la política de privacidad del PIMS?",
      "options": [
        "Ser adecuada al propósito de la organización",
        "Incluir compromisos de cumplir requisitos aplicables y mejorar continuamente",
        "Sustituir los objetivos de privacidad y hacerlos innecesarios",
        "Mantenerse secreta para todas las personas de la organización",
        "Estar documentada y comunicarse internamente",
        "Estar disponible para partes interesadas según corresponda"
      ],
      "answers": [
        0,
        1,
        4,
        5
      ],
      "explanation": "La política debe orientar los objetivos, ser adecuada y expresar compromisos de cumplimiento y mejora. Debe documentarse, comunicarse dentro de la organización y estar disponible para partes interesadas según corresponda.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 5.2 · páginas impresas 6–7. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 12
    },
    {
      "id": "iso-5-3",
      "number": 3,
      "domain": null,
      "clause": 5,
      "kind": "iso",
      "topic": "Cláusula 5 · Liderazgo",
      "prompt": "La dirección asigna funciones para el PIMS. ¿Qué responsabilidades y condiciones debe asegurar?",
      "options": [
        "Que solo el proveedor externo conozca las funciones",
        "Que se asigne responsabilidad y autoridad para asegurar la conformidad del PIMS",
        "Que nadie informe a la dirección para preservar la independencia",
        "Que se asigne la responsabilidad de informar sobre el desempeño a la alta dirección",
        "Que las responsabilidades y autoridades relevantes se comuniquen en la organización",
        "Que la norma imponga un nombre de puesto idéntico para todas las organizaciones"
      ],
      "answers": [
        1,
        3,
        4
      ],
      "explanation": "La cláusula 5.3 exige asignar y comunicar responsabilidades y autoridad. Incluye asegurar conformidad e informar del desempeño a la dirección, sin prescribir aquí un nombre único de puesto.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 5.3 · páginas impresas 6–7. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 12
    },
    {
      "id": "iso-6-1",
      "number": 1,
      "domain": null,
      "clause": 6,
      "kind": "iso",
      "topic": "Cláusula 6 · Planificación",
      "prompt": "Al planificar acciones sobre riesgos y oportunidades del PIMS, ¿qué corresponde hacer?",
      "options": [
        "Considerar las cuestiones de contexto y los requisitos relevantes",
        "Limitarse a elaborar una lista sin planificar acciones",
        "Planificar cómo integrar las acciones en los procesos",
        "Evaluar la eficacia de las acciones",
        "Considerar solo oportunidades comerciales e ignorar efectos no deseados",
        "Posponer toda actuación hasta una auditoría externa"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La planificación parte de 4.1 y 4.2 y busca lograr resultados, prevenir o reducir efectos indeseados y mejorar. Se requieren acciones integradas en los procesos y evaluación de su eficacia.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 6.1.1 · páginas impresas 7–10. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 13
    },
    {
      "id": "iso-6-2",
      "number": 2,
      "domain": null,
      "clause": 6,
      "kind": "iso",
      "topic": "Cláusula 6 · Planificación",
      "prompt": "¿Qué debe incorporar el proceso de evaluación de riesgos de privacidad?",
      "options": [
        "Criterios de aceptación y de evaluación del riesgo",
        "Cambiar los criterios arbitrariamente para que cada evaluación dé resultados distintos",
        "Considerar consecuencias solo para la organización",
        "Identificar propietarios de riesgos",
        "Analizar consecuencias para la organización y los titulares, probabilidad y nivel de riesgo",
        "Comparar con criterios y priorizar el tratamiento"
      ],
      "answers": [
        0,
        3,
        4,
        5
      ],
      "explanation": "El proceso debe producir resultados consistentes, válidos y comparables. Identifica riesgos y propietarios, analiza consecuencias para organización y titulares y su probabilidad, y compara niveles con criterios para priorizar. Se conserva información documentada del proceso.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 6.1.2 · páginas impresas 7–10. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 13
    },
    {
      "id": "iso-6-3",
      "number": 3,
      "domain": null,
      "clause": 6,
      "kind": "iso",
      "topic": "Cláusula 6 · Planificación",
      "prompt": "Un equipo selecciona controles para tratar riesgos de privacidad. ¿Qué afirmaciones son correctas?",
      "options": [
        "Solo puede escoger controles del anexo A",
        "Debe contrastar los controles determinados con el anexo A para evitar omisiones necesarias",
        "Debe identificar y documentar el programa de seguridad de la información implementado",
        "Puede incorporar controles adicionales cuando sean necesarios",
        "La orientación del anexo B nunca debe considerarse",
        "La evaluación de riesgos es irrelevante para seleccionar el tratamiento"
      ],
      "answers": [
        1,
        2,
        3
      ],
      "explanation": "El tratamiento parte de la evaluación. Los controles pueden proceder de otras fuentes o diseñarse; se contrastan con el anexo A, cuya lista no es exhaustiva. También se documenta el programa de seguridad y se considera la orientación del anexo B.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 6.1.3 · páginas impresas 7–10. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 13
    },
    {
      "id": "iso-6-4",
      "number": 4,
      "domain": null,
      "clause": 6,
      "kind": "iso",
      "topic": "Cláusula 6 · Planificación",
      "prompt": "¿Qué debe reflejar la declaración de aplicabilidad y la aprobación del tratamiento?",
      "options": [
        "Controles necesarios y justificación de su inclusión",
        "Justificación de exclusiones de controles del anexo A",
        "El estado de implementación de los controles necesarios",
        "La aprobación del plan y aceptación de riesgos residuales por los propietarios de los riesgos",
        "La obligación de incluir todos los controles sin analizar su necesidad",
        "La eliminación automática de todo riesgo por firmar el plan"
      ],
      "answers": [
        0,
        1,
        2,
        3
      ],
      "explanation": "La declaración recoge controles, justificaciones y estado de implementación. El proceso requiere que los propietarios aprueben el plan y acepten los riesgos residuales. Excluir controles del anexo A requiere justificación; la firma no elimina el riesgo.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 6.1.3 · páginas impresas 7–10. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 13
    },
    {
      "id": "iso-6-5",
      "number": 5,
      "domain": null,
      "clause": 6,
      "kind": "iso",
      "topic": "Cláusula 6 · Planificación",
      "prompt": "Al definir objetivos de privacidad y modificar el PIMS, ¿qué actuaciones son adecuadas?",
      "options": [
        "Establecer objetivos coherentes con la política y medibles cuando sea practicable",
        "Documentar, comunicar, supervisar y actualizar los objetivos según corresponda",
        "Omitir responsables y plazos para mantener flexibilidad",
        "Definir acciones, recursos, responsables, plazos y evaluación de resultados",
        "Aplicar los cambios necesarios de forma planificada",
        "Considerar que un objetivo documentado ya está alcanzado"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "explanation": "La cláusula 6.2 conecta los objetivos con una planificación verificable para alcanzarlos. La medición se exige cuando es practicable; documentarlos no acredita haberlos logrado. La cláusula 6.3 exige planificar los cambios del sistema.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 6.2 y 6.3 · páginas impresas 7–10. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 13
    },
    {
      "id": "iso-7-1",
      "number": 1,
      "domain": null,
      "clause": 7,
      "kind": "iso",
      "topic": "Cláusula 7 · Apoyo",
      "prompt": "Se identifica una brecha de competencia en el equipo de privacidad. ¿Qué respuestas son adecuadas?",
      "options": [
        "Determinar la competencia necesaria para el trabajo",
        "Asumir que cualquier diploma demuestra todas las competencias",
        "Proporcionar los recursos necesarios",
        "Tomar acciones para adquirir competencia y evaluar su eficacia cuando corresponda",
        "Disponer de evidencia documentada de la competencia",
        "Sustituir la evaluación por una lista de asistencia en todos los casos"
      ],
      "answers": [
        0,
        2,
        3,
        4
      ],
      "explanation": "La organización proporciona recursos y asegura competencia basada en educación, formación o experiencia. Cuando toma acciones para adquirir competencia debe evaluar su eficacia y disponer de evidencia; la asistencia por sí sola no demuestra necesariamente la habilidad requerida.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 7.1 y 7.2 · páginas impresas 10–11. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 16
    },
    {
      "id": "iso-7-2",
      "number": 2,
      "domain": null,
      "clause": 7,
      "kind": "iso",
      "topic": "Cláusula 7 · Apoyo",
      "prompt": "¿Qué combina adecuadamente concienciación y comunicación del PIMS?",
      "options": [
        "Hacer consciente al personal de su contribución y de las consecuencias del incumplimiento",
        "Comunicar únicamente después de un incidente",
        "Determinar qué se comunica, cuándo, con quién y cómo",
        "Asegurar que las personas conozcan la política de privacidad",
        "Excluir las comunicaciones externas del análisis",
        "Suponer que publicar un documento garantiza comprensión"
      ],
      "answers": [
        0,
        2,
        3
      ],
      "explanation": "La concienciación comprende política, contribución y consecuencias del incumplimiento. La comunicación debe considerar tanto el ámbito interno como el externo y definir contenido, momento, destinatarios y forma.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 7.3 y 7.4 · páginas impresas 10–11. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 16
    },
    {
      "id": "iso-7-3",
      "number": 3,
      "domain": null,
      "clause": 7,
      "kind": "iso",
      "topic": "Cláusula 7 · Apoyo",
      "prompt": "Al crear o actualizar información documentada, ¿qué prácticas corresponden?",
      "options": [
        "Usar siempre papel porque el formato electrónico está prohibido",
        "Incluir la documentación requerida y la que la organización necesite para la eficacia del sistema",
        "Identificar y describir adecuadamente los documentos",
        "Revisar y aprobar su idoneidad y adecuación",
        "Evitar toda revisión para agilizar la publicación",
        "Considerar el formato y el medio adecuados"
      ],
      "answers": [
        1,
        2,
        3,
        5
      ],
      "explanation": "El PIMS necesita tanto la documentación requerida como la determinada por la organización. Al crearla o actualizarla se atienden identificación, formato, medio, revisión y aprobación. No hay una obligación general de usar papel.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 7.5.1 y 7.5.2 · páginas impresas 10–11. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 16
    },
    {
      "id": "iso-7-4",
      "number": 4,
      "domain": null,
      "clause": 7,
      "kind": "iso",
      "topic": "Cláusula 7 · Apoyo",
      "prompt": "¿Qué medidas apoyan el control de la información documentada?",
      "options": [
        "Asegurar que esté disponible donde y cuando se necesite",
        "Permitir cambios sin control a cualquier lector",
        "Protegerla frente al uso indebido o pérdida de integridad",
        "Controlar versiones, retención y disposición según corresponda",
        "Identificar y controlar documentos externos necesarios para el PIMS",
        "Ignorar la legibilidad mientras se conserve el archivo"
      ],
      "answers": [
        0,
        2,
        3,
        4
      ],
      "explanation": "Controlar la documentación implica disponibilidad y protección, acceso, almacenamiento, preservación de legibilidad, cambios y retención. También alcanza a documentos externos necesarios; el permiso para leer no supone permiso para modificar.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 7.5.3 · páginas impresas 10–11. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 16
    },
    {
      "id": "iso-8-1",
      "number": 1,
      "domain": null,
      "clause": 8,
      "kind": "iso",
      "topic": "Cláusula 8 · Operación",
      "prompt": "Un proceso relevante del PIMS pasa a un proveedor y se producen cambios imprevistos. ¿Qué acciones son adecuadas?",
      "options": [
        "Controlar los servicios externos relevantes",
        "Asumir que la contratación transfiere toda la necesidad de control",
        "Establecer criterios operativos y controlar los procesos conforme a ellos",
        "Revisar las consecuencias de cambios imprevistos y mitigar efectos adversos según sea necesario",
        "Eliminar toda evidencia una vez firmado el contrato",
        "Controlar los cambios planificados"
      ],
      "answers": [
        0,
        2,
        3,
        5
      ],
      "explanation": "La operación incluye criterios, control de procesos y evidencia suficiente, así como control de los servicios externos relevantes. Deben controlarse cambios planificados y revisarse los imprevistos, mitigando efectos adversos cuando sea necesario.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 8.1 · páginas impresas 12. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 18
    },
    {
      "id": "iso-8-2",
      "number": 2,
      "domain": null,
      "clause": 8,
      "kind": "iso",
      "topic": "Cláusula 8 · Operación",
      "prompt": "Se propone un cambio significativo en el tratamiento de PII. ¿Qué corresponde a la operación del PIMS?",
      "options": [
        "Evaluar riesgos únicamente tras materializarse un daño",
        "Evaluar riesgos cuando se proponen o producen cambios significativos y a intervalos planificados",
        "Conservar los resultados de las evaluaciones",
        "Implementar el plan de tratamiento y conservar sus resultados",
        "Considerar que aprobar el plan equivale a implementarlo",
        "Aplicar los criterios de evaluación establecidos en 6.1.2"
      ],
      "answers": [
        1,
        2,
        3,
        5
      ],
      "explanation": "La operación ejecuta la planificación: realiza evaluaciones con los criterios definidos y conserva resultados. También implementa el plan de tratamiento y documenta sus resultados. La aprobación no sustituye a la implementación.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 8.2 y 8.3 · páginas impresas 12. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 18
    },
    {
      "id": "iso-9-1",
      "number": 1,
      "domain": null,
      "clause": 9,
      "kind": "iso",
      "topic": "Cláusula 9 · Evaluación del desempeño",
      "prompt": "¿Qué decisiones hacen útil el seguimiento y la medición del PIMS?",
      "options": [
        "Determinar qué se supervisa y mide",
        "Elegir métodos capaces de producir resultados válidos",
        "Guardar cifras sin analizarlas nunca",
        "Determinar cuándo medir y cuándo analizar y evaluar",
        "Disponer de evidencia documentada de los resultados",
        "Usar cualquier indicador sin relación con desempeño o eficacia"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "explanation": "La cláusula 9.1 requiere definir objeto, métodos y momentos de seguimiento, medición, análisis y evaluación. Los resultados documentados permiten evaluar desempeño de privacidad y eficacia del PIMS; acumular cifras sin evaluación no basta.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 9.1 · páginas impresas 12–14. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 18
    },
    {
      "id": "iso-9-2",
      "number": 2,
      "domain": null,
      "clause": 9,
      "kind": "iso",
      "topic": "Cláusula 9 · Evaluación del desempeño",
      "prompt": "¿Qué debe contemplar una auditoría interna del PIMS?",
      "options": [
        "Conformidad con requisitos propios y con los de la norma, e implementación y mantenimiento eficaces",
        "Objetivos, criterios y alcance definidos para cada auditoría",
        "Selección de auditores que asegure objetividad e imparcialidad",
        "Un programa que considere importancia de procesos y resultados de auditorías previas",
        "Sustituir la evidencia por opiniones no contrastadas",
        "Ocultar los resultados a los responsables pertinentes"
      ],
      "answers": [
        0,
        1,
        2,
        3
      ],
      "explanation": "La auditoría verifica conformidad y funcionamiento eficaz. El programa incluye frecuencia, métodos y responsabilidades y considera procesos y auditorías previas. Se definen objetivos, criterios y alcance, se preserva imparcialidad y se comunican resultados con evidencia documental.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 9.2 · páginas impresas 12–14. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 18
    },
    {
      "id": "iso-9-3",
      "number": 3,
      "domain": null,
      "clause": 9,
      "kind": "iso",
      "topic": "Cláusula 9 · Evaluación del desempeño",
      "prompt": "¿Qué corresponde a la revisión del PIMS por la alta dirección?",
      "options": [
        "Revisarlo a intervalos planificados",
        "Considerar acciones previas y cambios en contexto y partes interesadas",
        "Ignorar tendencias de no conformidades y resultados de auditoría",
        "Considerar información de desempeño y oportunidades de mejora",
        "Registrar decisiones sobre mejoras o cambios y disponer de evidencia de resultados",
        "Reemplazar toda decisión por la mera recepción de un tablero"
      ],
      "answers": [
        0,
        1,
        3,
        4
      ],
      "explanation": "La revisión considera entradas como acciones previas, cambios y tendencias de desempeño, incluidas mediciones y auditorías. Sus resultados comprenden decisiones sobre mejoras y cambios del sistema y deben estar disponibles como evidencia documentada.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 9.3 · páginas impresas 12–14. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 18
    },
    {
      "id": "iso-10-1",
      "number": 1,
      "domain": null,
      "clause": 10,
      "kind": "iso",
      "topic": "Cláusula 10 · Mejora",
      "prompt": "Se repite una no conformidad que antes solo se corrigió de forma puntual. ¿Qué actuaciones son adecuadas?",
      "options": [
        "Controlar y corregir el problema y atender sus consecuencias cuando corresponda",
        "Cerrar el caso sin analizarlo porque ya ocurrió antes",
        "Determinar causas y si existen o pueden aparecer situaciones similares",
        "Implementar acciones necesarias y revisar su eficacia",
        "Actualizar el PIMS si es necesario",
        "Confundir la corrección inmediata con la eliminación demostrada de la causa"
      ],
      "answers": [
        0,
        2,
        3,
        4
      ],
      "explanation": "La reacción inmediata atiende el problema y sus consecuencias, pero 10.2 también exige evaluar la necesidad de eliminar causas, analizar recurrencias potenciales, actuar y revisar eficacia. El PIMS se modifica cuando es necesario, apoyando la mejora continua de 10.1.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 10.1 y 10.2 · páginas impresas 14. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 20
    },
    {
      "id": "iso-10-2",
      "number": 2,
      "domain": null,
      "clause": 10,
      "kind": "iso",
      "topic": "Cláusula 10 · Mejora",
      "prompt": "¿Qué criterios permiten cerrar y aprender de una acción correctiva?",
      "options": [
        "Conservar evidencia de la naturaleza de la no conformidad y de las acciones posteriores",
        "Conservar los resultados de la acción correctiva",
        "Ajustar las acciones a los efectos de la no conformidad",
        "Declarar eficaz una acción solo porque fue asignada",
        "Mejorar continuamente la idoneidad, adecuación y eficacia del PIMS",
        "Eliminar registros para que no aparezcan en la próxima auditoría"
      ],
      "answers": [
        0,
        1,
        2,
        4
      ],
      "explanation": "La acción correctiva debe ser adecuada a los efectos y su eficacia debe revisarse. La evidencia comprende el problema, las acciones posteriores y sus resultados. Asignar una acción no demuestra su eficacia, y borrar evidencia impide acreditar el tratamiento y aprender de él.",
      "note": "Ejercicio original de estudio; no es una pregunta oficial ni una traducción oficial de la norma.",
      "source": "ISO/IEC 27701:2025 · cláusula 10.1 y 10.2 · páginas impresas 14. PDF proporcionado.",
      "sourceFile": "ISO 27701-2025.pdf",
      "sourcePage": 20
    }
  ],
  "iso": {
    "title": "ISO/IEC 27701:2025",
    "sourceFile": "ISO 27701-2025.pdf",
    "clauses": [
      {
        "id": 1,
        "name": "Alcance",
        "pages": "1",
        "pdfPage": 7,
        "summary": "Define el propósito de la norma: establecer, implementar, mantener y mejorar un sistema de gestión de información de privacidad (PIMS).",
        "points": [
          "Está dirigida a responsables y encargados del tratamiento de información de identificación personal (PII).",
          "Puede aplicarse a organizaciones de cualquier tamaño y sector, incluidas entidades públicas y organizaciones sin fines de lucro.",
          "Incluye requisitos y orientación para implementarlos. El alcance general de la norma se distingue del alcance particular del PIMS que cada organización determina en 4.3."
        ],
        "example": "Una ONG pequeña que trata datos de donantes también puede aplicar la norma."
      },
      {
        "id": 2,
        "name": "Referencias normativas",
        "pages": "1",
        "pdfPage": 7,
        "summary": "Identifica ISO/IEC 29100, marco de privacidad, como referencia normativa de esta edición.",
        "points": [
          "Las referencias normativas incorporan contenido necesario para interpretar y aplicar los requisitos.",
          "Una referencia fechada remite a la edición indicada; una referencia sin fecha remite a su edición más reciente, incluidas las modificaciones.",
          "La referencia a ISO/IEC 29100 aparece sin fecha. Una mención bibliográfica o una nota orientativa no equivale por sí sola a una referencia normativa de la cláusula 2."
        ],
        "example": "Al preparar una lista de documentos de referencia, distingue la referencia normativa de las normas citadas como orientación."
      },
      {
        "id": 3,
        "name": "Términos, definiciones y abreviaturas",
        "pages": "1–4",
        "pdfPage": 7,
        "summary": "Establece un vocabulario común junto con los términos de ISO/IEC 29100. PII se refiere a información de identificación personal y PIMS al sistema que gestiona su privacidad.",
        "points": [
          "3.1–3.9: organización, partes interesadas, alta dirección, sistema de gestión, política, objetivo, riesgo, proceso y competencia. El riesgo se relaciona con la incertidumbre; la competencia implica aplicar conocimientos y habilidades.",
          "3.10–3.20: información documentada, desempeño, mejora continua, eficacia, requisito, conformidad, no conformidad, acción correctiva, auditoría, medición y seguimiento. Una acción correctiva aborda las causas para prevenir la repetición.",
          "3.21–3.25: corresponsable del tratamiento, cliente, PIMS, programa de seguridad de la información y declaración de aplicabilidad. La corresponsabilidad implica decidir conjuntamente finalidades y medios; la declaración documenta controles y justifica su inclusión o exclusión."
        ],
        "example": "Corregir un registro equivocado resuelve el caso puntual; cambiar y verificar el proceso que originó el error puede formar parte de una acción correctiva."
      },
      {
        "id": 4,
        "name": "Contexto de la organización",
        "pages": "4–6",
        "pdfPage": 10,
        "summary": "Sitúa el PIMS en la realidad de la organización: contexto, partes interesadas, funciones en el tratamiento y límites del sistema.",
        "points": [
          "4.1: analizar cuestiones internas y externas relevantes y determinar si el cambio climático es relevante. Identificar si se actúa como responsable, corresponsable o encargado; distinguir las funciones cuando se desempeñan varias.",
          "4.2: identificar partes interesadas, sus requisitos relevantes y cuáles se atenderán mediante el PIMS. Incluir a quienes tienen intereses o responsabilidades en el tratamiento, especialmente a los titulares de PII.",
          "4.3: documentar los límites y la aplicabilidad del PIMS considerando el contexto y los requisitos; incluir el tratamiento de PII.",
          "4.4: establecer, implementar, mantener y mejorar el sistema, sus procesos y sus interacciones."
        ],
        "example": "Un proveedor puede ser encargado para los datos de sus clientes y responsable para los datos de sus empleados; debe distinguir ambos tratamientos."
      },
      {
        "id": 5,
        "name": "Liderazgo",
        "pages": "6–7",
        "pdfPage": 12,
        "summary": "La alta dirección impulsa el PIMS, lo integra en el negocio y asegura política, recursos y responsabilidades.",
        "points": [
          "5.1: alinear política y objetivos con la dirección estratégica, integrar requisitos en los procesos, aportar recursos, apoyar a las personas y promover la mejora.",
          "5.2: establecer una política apropiada al propósito, que oriente los objetivos y comprometa el cumplimiento de requisitos aplicables y la mejora continua. Documentarla, comunicarla internamente y ponerla a disposición de partes interesadas según corresponda.",
          "5.3: asignar y comunicar responsabilidades y autoridad para asegurar la conformidad del PIMS e informar sobre su desempeño a la alta dirección."
        ],
        "example": "Aprobar una política no basta si los equipos carecen de recursos y nadie informa a la dirección sobre el desempeño del sistema."
      },
      {
        "id": 6,
        "name": "Planificación",
        "pages": "7–10",
        "pdfPage": 13,
        "summary": "Convierte contexto y requisitos en acciones sobre riesgos y oportunidades, objetivos de privacidad y cambios planificados.",
        "points": [
          "6.1.1: determinar riesgos y oportunidades, planificar acciones, integrarlas en los procesos y evaluar su eficacia.",
          "6.1.2: definir criterios de evaluación y aceptación del riesgo para obtener resultados consistentes y comparables. Identificar propietarios de riesgos, analizar probabilidad y consecuencias para la organización y los titulares, y priorizar el tratamiento. Conservar información del proceso.",
          "6.1.3: seleccionar tratamientos y controles necesarios, identificar y documentar el programa de seguridad, contrastar controles con el anexo A y considerar la orientación del anexo B. Preparar la declaración de aplicabilidad, justificar inclusiones y exclusiones y registrar el estado de implementación. Obtener aprobación del plan y aceptación de riesgos residuales por sus propietarios; conservar información del proceso.",
          "6.2: fijar objetivos coherentes con la política, medibles cuando sea practicable, documentados, comunicados, supervisados y actualizados. Definir acciones, recursos, responsables, plazos y evaluación de resultados.",
          "6.3: realizar de manera planificada los cambios necesarios en el PIMS."
        ],
        "example": "Ante un nuevo uso de datos, evaluar el impacto sobre las personas, asignar un propietario del riesgo y aprobar un plan con controles y riesgo residual."
      },
      {
        "id": 7,
        "name": "Apoyo",
        "pages": "10–11",
        "pdfPage": 16,
        "summary": "Proporciona los medios para sostener el PIMS: recursos, competencia, concienciación, comunicación e información documentada.",
        "points": [
          "7.1–7.2: proporcionar recursos y determinar las competencias necesarias. Asegurar competencia por educación, formación o experiencia; evaluar las acciones para adquirirla y disponer de evidencia documentada.",
          "7.3: las personas deben conocer la política, su contribución a la eficacia del sistema y las consecuencias de incumplir sus requisitos.",
          "7.4: determinar qué comunicar, cuándo, con quién y cómo, tanto interna como externamente.",
          "7.5.1–7.5.2: incluir la documentación exigida y la necesaria para la eficacia del sistema. Identificarla, darle formato adecuado y revisarla y aprobarla al crearla o actualizarla.",
          "7.5.3: asegurar disponibilidad y protección; controlar acceso, distribución, conservación, versiones, retención y disposición según corresponda. Identificar y controlar también la documentación externa necesaria."
        ],
        "example": "Una lista de asistencia acredita presencia en una capacitación; una evaluación práctica ayuda a demostrar la competencia adquirida."
      },
      {
        "id": 8,
        "name": "Operación",
        "pages": "12",
        "pdfPage": 18,
        "summary": "Ejecuta lo planificado y conserva evidencia de los procesos, de las evaluaciones de riesgo y del tratamiento aplicado.",
        "points": [
          "8.1: establecer criterios para los procesos y controlarlos; disponer de documentación suficiente para confiar en que se ejecutaron según lo previsto. Controlar cambios planificados, revisar cambios imprevistos y mitigar efectos adversos.",
          "8.1: controlar procesos, productos y servicios externos relevantes para el PIMS.",
          "8.2: evaluar riesgos a intervalos planificados y cuando se propongan o produzcan cambios significativos, usando los criterios de 6.1.2 y conservando resultados.",
          "8.3: implementar el plan de tratamiento de riesgos y conservar sus resultados."
        ],
        "example": "Antes de migrar un tratamiento a un nuevo proveedor, evaluar el cambio significativo y controlar el servicio externo."
      },
      {
        "id": 9,
        "name": "Evaluación del desempeño",
        "pages": "12–14",
        "pdfPage": 18,
        "summary": "Comprueba el desempeño de privacidad y la eficacia del PIMS mediante medición, auditoría interna y revisión por la dirección.",
        "points": [
          "9.1: definir qué supervisar y medir, los métodos para obtener resultados válidos y cuándo medir, analizar y evaluar; disponer de evidencia de resultados.",
          "9.2.1–9.2.2: auditar a intervalos planificados la conformidad y la implementación eficaz. El programa contempla frecuencia, métodos, responsabilidades, planificación e informes, considerando importancia de procesos y auditorías anteriores. Definir objetivos, criterios y alcance, asegurar objetividad e imparcialidad y comunicar resultados a los responsables pertinentes.",
          "9.3.1–9.3.2: la alta dirección revisa el sistema a intervalos planificados. Considera acciones anteriores, cambios de contexto y necesidades de partes interesadas, tendencias de no conformidades, acciones correctivas, mediciones y auditorías, y oportunidades de mejora.",
          "9.3.3: registrar las decisiones sobre mejoras y cambios necesarios en el PIMS y disponer de evidencia de la revisión."
        ],
        "example": "Un tablero de indicadores sirve como entrada a la revisión; también se necesitan decisiones sobre las mejoras o cambios que correspondan."
      },
      {
        "id": 10,
        "name": "Mejora",
        "pages": "14",
        "pdfPage": 20,
        "summary": "Mantiene la idoneidad, adecuación y eficacia del PIMS y aborda las no conformidades para evitar su repetición.",
        "points": [
          "10.1: mejorar continuamente la idoneidad, adecuación y eficacia del sistema.",
          "10.2: reaccionar ante la no conformidad, controlarla y corregirla cuando corresponda, y atender sus consecuencias.",
          "10.2: revisar el problema, determinar sus causas y comprobar si existen o podrían ocurrir situaciones similares. Implementar las acciones necesarias, verificar su eficacia y modificar el PIMS cuando sea necesario.",
          "Las acciones correctivas deben ser proporcionales a los efectos. Disponer de evidencia de la no conformidad, las acciones posteriores y sus resultados."
        ],
        "example": "Si se repite una entrega de datos al destinatario equivocado, corregir cada envío no basta: hay que abordar la causa y comprobar que las medidas funcionan."
      }
    ]
  }
};
