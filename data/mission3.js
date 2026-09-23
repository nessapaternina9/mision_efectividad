// ============================================
// MISIÓN 3 — PONER PRIMERO LO PRIMERO
// ============================================

const mission3 = {

    id: 3,

    title: "Poner primero lo primero",

    objective:
        "Aprender a organizar el tiempo y la energía priorizando lo que realmente importa, en lugar de lo que solo parece urgente.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "La tarde llena de pendientes",

            context:
                "Tienes una tarde libre. Debes avanzar en un trabajo importante que se entrega en una semana, pero también te llegan varios mensajes y notificaciones que parecen requerir respuesta inmediata.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Responder primero todos los mensajes porque parecen urgentes, y dejar el trabajo importante para después.",

                    feedback:
                        "Lo urgente no siempre es lo importante. Responder mensajes puede sentirse productivo, pero puede alejarte de aquello que realmente aporta valor a largo plazo.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Definir cuál es la tarea más importante de la tarde y dedicarle tiempo primero, antes de revisar los mensajes.",

                    feedback:
                        "¡Muy bien! Estás distinguiendo entre lo urgente y lo importante, y decidiendo con intención en qué invertir tu tiempo primero.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Intentar hacer todo al mismo tiempo: el trabajo y los mensajes.",

                    feedback:
                        "Dividir la atención entre varias tareas a la vez suele hacer que ninguna avance realmente bien. Priorizar significa elegir qué va primero.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "La semana sin plan",

            context:
                "Empieza una semana con varias responsabilidades: estudio, trabajo en equipo y tiempo personal. No tienes ningún plan armado, solo la intención de \"hacer las cosas cuando se pueda\".",

            question:
                "¿Cuál sería una respuesta más efectiva?",

            options: [

                {
                    id: "A",

                    text:
                        "Dejar que cada día decida por sí mismo qué se hace, sin ningún tipo de organización previa.",

                    feedback:
                        "Sin un plan, es fácil que el tiempo se llene de tareas de último momento en lugar de lo que realmente importa.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Identificar las prioridades de la semana y organizar un plan que les dé espacio real en la agenda.",

                    feedback:
                        "¡Excelente! Estás dándole un lugar concreto en tu tiempo a lo que realmente importa, en lugar de esperar a que sobre espacio para eso.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Planear solamente las tareas más fáciles y dejar las difíciles para \"cuando haya más tiempo\".",

                    feedback:
                        "Aplazar lo importante porque es difícil suele hacer que nunca encuentre espacio. Priorizar implica darle lugar a lo que importa, no solo a lo cómodo.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "Decir que no",

            context:
                "Un compañero te pide ayuda con algo que no es urgente ni prioritario para ti en este momento, justo cuando tenías planeado avanzar en algo importante para ti.",

            question:
                "¿Qué respuesta demuestra mejor manejo de prioridades?",

            options: [

                {
                    id: "A",

                    text:
                        "Decir que sí de inmediato, aunque eso signifique aplazar tu tarea importante.",

                    feedback:
                        "Ayudar a otros es valioso, pero decir sí a todo sin evaluar tus propias prioridades puede hacer que lo importante para ti nunca avance.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Explicar con respeto que en este momento tienes algo prioritario, y proponer ayudar en otro momento.",

                    feedback:
                        "¡Muy bien! Saber decir que no, con respeto, es parte de poner primero lo primero. No se trata de ignorar a los demás, sino de proteger lo que realmente importa.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Decir que no de forma cortante, sin dar ninguna explicación.",

                    feedback:
                        "Proteger tu tiempo es importante, pero hacerlo sin respeto puede afectar la relación con la otra persona. Priorizar no significa dejar de lado la comunicación.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — URGENTE VS IMPORTANTE
    // ========================================

    miniGame: {

        title: "¿Urgente o importante?",

        description:
            "Clasifica cada situación según si es urgente, importante, ambas o ninguna.",

        categories: [

            "Urgente",

            "Importante",

            "Ninguna de las dos"

        ],

        situations: [

            {
                text: "Un mensaje que acaba de llegar y parece necesitar respuesta ya.",
                correctCategory: "Urgente"
            },

            {
                text: "Estudiar de forma constante para un examen dentro de tres semanas.",
                correctCategory: "Importante"
            },

            {
                text: "Revisar redes sociales sin un propósito claro.",
                correctCategory: "Ninguna de las dos"
            },

            {
                text: "Cuidar tu descanso y tu salud a largo plazo.",
                correctCategory: "Importante"
            },

            {
                text: "Una notificación que interrumpe pero no requiere acción real.",
                correctCategory: "Ninguna de las dos"
            },

            {
                text: "Entregar un trabajo que vence hoy mismo.",
                correctCategory: "Urgente"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en algo importante para ti que has estado aplazando porque siempre aparece algo \"urgente\" primero. ¿Qué espacio concreto podrías darle esta semana?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido a distinguir entre lo urgente y lo importante, y a darle un lugar real en tu tiempo a lo que de verdad importa."

    }

};