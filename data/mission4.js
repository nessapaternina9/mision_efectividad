// ============================================
// MISIÓN 4 — PENSAR EN GANAR/GANAR
// ============================================

const mission4 = {

    id: 4,

    title: "Pensar en ganar/ganar",

    objective:
        "Aprender a buscar soluciones donde las distintas personas involucradas puedan beneficiarse, en lugar de pensar que solo una puede salir ganando.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "El horario del trabajo en grupo",

            context:
                "Tu equipo debe reunirse para avanzar en un trabajo. Tú prefieres reunirte en la mañana, pero otro compañero solo tiene tiempo en la tarde. Ambos insisten en su horario.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Insistir en que se reúnan en tu horario, porque a ti te queda mejor.",

                    feedback:
                        "Buscar solo tu propia conveniencia puede generar que la otra persona se sienta ignorada. Pensar en ganar/ganar implica considerar también lo que necesita el otro.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Proponer buscar un punto intermedio o alternar los horarios, para que ambos puedan participar.",

                    feedback:
                        "¡Muy bien! Estás buscando una solución donde las dos partes puedan verse beneficiadas, en lugar de que una tenga que ceder por completo.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Ceder completamente al horario del otro, aunque a ti no te convenga en absoluto.",

                    feedback:
                        "Ceder por evitar el conflicto tampoco es ganar/ganar: es ganar/perder al revés. La idea es encontrar una solución que también te tenga en cuenta a ti.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "La negociación de tareas",

            context:
                "En un proyecto en equipo, dos personas quieren encargarse de la misma parte del trabajo, la que consideran más interesante, y ninguna quiere hacer las demás tareas.",

            question:
                "¿Cuál sería la mejor forma de resolverlo?",

            options: [

                {
                    id: "A",

                    text:
                        "Que gane quien discuta con más fuerza su punto de vista.",

                    feedback:
                        "Resolver las diferencias solo por quién insiste más fuerte no garantiza una solución justa ni sostenible para el equipo.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Conversar sobre los intereses de cada uno y buscar una repartición de tareas donde ambos sientan que ganan algo.",

                    feedback:
                        "¡Excelente! Entender qué le interesa a cada persona permite encontrar una repartición de tareas donde ambas partes queden conformes.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Dejar que decida una sola persona del grupo sin conversarlo con las demás.",

                    feedback:
                        "Decidir sin conversar puede evitar la discusión en el momento, pero deja a alguien sintiendo que no fue tomado en cuenta.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "El conflicto de intereses",

            context:
                "Quieres proponer una idea nueva, pero sabes que otra persona del equipo tiene una idea distinta que también le parece buena. Sientes que solo una de las dos puede quedar.",

            question:
                "¿Qué respuesta demuestra pensar en ganar/ganar?",

            options: [

                {
                    id: "A",

                    text:
                        "Defender tu idea hasta que la otra persona finalmente ceda.",

                    feedback:
                        "Buscar que la otra idea desaparezca no es negociar: es intentar ganar a costa del otro. Eso no suele fortalecer al equipo.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Explorar si es posible combinar lo mejor de ambas ideas o construir una tercera opción entre los dos.",

                    feedback:
                        "¡Muy bien! Muchas veces no se trata de elegir entre una idea u otra, sino de crear algo nuevo que tome en cuenta a ambas partes.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Retirar tu idea por completo para evitar cualquier discusión.",

                    feedback:
                        "Retirarte sin conversarlo puede parecer más fácil, pero también significa perder la oportunidad de aportar algo valioso al resultado final.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — ¿QUÉ TIPO DE SOLUCIÓN ES?
    // ========================================

    miniGame: {

        title: "¿Qué tipo de solución es?",

        description:
            "Clasifica cada situación según el tipo de resultado que representa.",

        categories: [

            "Gana/Gana",

            "Gana/Pierde",

            "Pierde/Pierde"

        ],

        situations: [

            {
                text: "Ambas personas ceden un poco y encuentran un punto intermedio que les sirve a las dos.",
                correctCategory: "Gana/Gana"
            },

            {
                text: "Una persona se sale con la suya y la otra queda completamente insatisfecha.",
                correctCategory: "Gana/Pierde"
            },

            {
                text: "Ninguna de las dos partes cede y el proyecto termina sin avanzar.",
                correctCategory: "Pierde/Pierde"
            },

            {
                text: "Se combinan dos ideas distintas en una propuesta que beneficia a todo el equipo.",
                correctCategory: "Gana/Gana"
            },

            {
                text: "Alguien cede por completo solo para evitar el conflicto, sintiéndose insatisfecho después.",
                correctCategory: "Gana/Pierde"
            },

            {
                text: "Dos personas discuten tanto que terminan dañando la relación sin resolver nada.",
                correctCategory: "Pierde/Pierde"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en una situación reciente donde sentiste que solo una persona podía ganar. ¿Cómo podría haberse convertido en una solución de ganar/ganar?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido a buscar soluciones donde las distintas partes puedan beneficiarse, en lugar de pensar que ganar significa que alguien más tiene que perder."

    }

};