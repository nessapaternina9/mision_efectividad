// ============================================
// MISIÓN 2 — COMENZAR CON UN FIN EN MENTE
// ============================================

const mission2 = {

    id: 2,

    title: "Comenzar con un fin en mente",

    objective:
        "Aprender a definir con claridad aquello que queremos lograr antes de comenzar a actuar.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "El proyecto sin rumbo",

            context:
                "Tienes que realizar un proyecto importante. Tu equipo quiere comenzar de inmediato, pero todavía no han definido exactamente qué quieren lograr ni cómo debería verse el resultado final.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Comenzar inmediatamente y decidir los detalles sobre la marcha.",

                    feedback:
                        "Empezar rápido no siempre significa avanzar mejor. Tener claro el resultado que quieres conseguir ayuda a tomar decisiones más coherentes durante el camino.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Definir primero qué quieren conseguir, cómo debería ser el resultado y luego organizar las tareas.",

                    feedback:
                        "¡Muy bien! Antes de actuar, estás imaginando el resultado que quieres alcanzar. Tener un fin claro ayuda a orientar tus decisiones y tu esfuerzo.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Dejar que cada integrante haga lo que considere mejor y unir todo al final.",

                    feedback:
                        "Cuando cada persona avanza hacia una idea diferente, el resultado puede perder coherencia. Definir primero un objetivo común ayuda a que todos sepan hacia dónde van.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "¿Qué quieres conseguir?",

            context:
                "Quieres mejorar una habilidad importante para ti. Dices: “Quiero ser mejor en esto”, pero no has definido exactamente qué significa para ti mejorar.",

            question:
                "¿Cuál sería un mejor punto de partida?",

            options: [

                {
                    id: "A",

                    text:
                        "Empezar a practicar sin definir ningún objetivo y esperar a ver qué sucede.",

                    feedback:
                        "Practicar puede ayudarte, pero tener un objetivo concreto te permite saber qué quieres mejorar y reconocer si realmente estás avanzando.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Definir qué quieres lograr y cómo sabrás que has avanzado.",

                    feedback:
                        "¡Excelente! Tener una imagen clara del resultado te proporciona una dirección. No se trata solo de hacer cosas, sino de saber para qué las haces.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Esperar a que alguien más te diga exactamente qué deberías querer conseguir.",

                    feedback:
                        "Las opiniones de otras personas pueden orientarte, pero comenzar con un fin en mente también implica identificar qué resultado tiene sentido para ti.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "La decisión importante",

            context:
                "Tienes dos oportunidades diferentes y ambas parecen interesantes. Antes de escoger, notas que estás pensando principalmente en cuál opción te resulta más atractiva en este momento.",

            question:
                "¿Qué podrías hacer antes de decidir?",

            options: [

                {
                    id: "A",

                    text:
                        "Elegir inmediatamente la opción que parece más emocionante.",

                    feedback:
                        "Lo emocionante puede ser importante, pero una decisión también puede evaluarse pensando en hacia dónde quieres llegar y cuál alternativa se acerca más a ese resultado.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Pensar primero qué quieres conseguir a largo plazo y comparar las opciones con ese objetivo.",

                    feedback:
                        "¡Muy bien! Estás utilizando tu objetivo como una brújula para decidir. Comenzar con un fin en mente ayuda a que tus elecciones tengan dirección.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Escoger la opción que la mayoría de personas considera más conveniente.",

                    feedback:
                        "Las opiniones externas pueden ser útiles, pero no sustituyen la claridad sobre lo que tú quieres construir. Primero necesitas saber hacia dónde quieres ir.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — DEFINE EL DESTINO
    // ========================================

    miniGame: {

        title: "¿Cuál es el destino?",

        description:
            "Identifica cuáles objetivos tienen un resultado claro y cuáles necesitan ser definidos mejor.",

        categories: [

            "Objetivo claro",

            "Necesita definición"

        ],

        situations: [

            {
                text: "Quiero mejorar en mis estudios.",
                correctCategory: "Necesita definición"
            },

            {
                text: "Quiero terminar este semestre habiendo aprobado todas mis asignaturas.",
                correctCategory: "Objetivo claro"
            },

            {
                text: "Quiero ahorrar dinero.",
                correctCategory: "Necesita definición"
            },

            {
                text: "Quiero ahorrar $500.000 durante los próximos cinco meses.",
                correctCategory: "Objetivo claro"
            },

            {
                text: "Quiero tener una vida mejor.",
                correctCategory: "Necesita definición"
            },

            {
                text: "Quiero dedicar tres horas semanales durante dos meses a desarrollar una nueva habilidad.",
                correctCategory: "Objetivo claro"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en algo que quieres conseguir en tu vida. ¿Cómo cambiaría tu forma de actuar si tuvieras completamente claro el resultado que quieres alcanzar?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido a mirar primero el destino para tomar decisiones con mayor dirección y propósito."

    }

};