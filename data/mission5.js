// ============================================
// MISIÓN 5 — BUSCAR PRIMERO COMPRENDER, LUEGO SER COMPRENDIDO
// ============================================

const mission5 = {

    id: 5,

    title: "Buscar primero comprender, luego ser comprendido",

    objective:
        "Aprender a escuchar genuinamente a los demás antes de responder, opinar o intentar que nos entiendan a nosotros.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "La discusión con un amigo",

            context:
                "Un amigo te cuenta molesto que sintió que lo dejaste solo en un trabajo en equipo. Tu primera reacción es explicarle inmediatamente todas las razones por las que eso no fue así.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Explicarle de inmediato tu versión, sin preguntarle primero cómo se sintió.",

                    feedback:
                        "Responder antes de escuchar puede hacer que la otra persona sienta que no le estás prestando atención a lo que siente, aunque tengas razones válidas.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Escuchar primero cómo se sintió y por qué, antes de dar tu propia explicación.",

                    feedback:
                        "¡Muy bien! Comprender primero cómo se sintió el otro no significa que tengas la culpa; significa que le das espacio antes de defender tu punto de vista.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Decirle que está exagerando y que no había razón para sentirse así.",

                    feedback:
                        "Restarle importancia a lo que siente la otra persona cierra la conversación en lugar de abrirla. Comprender primero implica tomar en serio su experiencia.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "El consejo que nadie pidió",

            context:
                "Alguien te está contando un problema que está viviendo. Antes de que termine de hablar, ya estás pensando en la solución que le vas a dar.",

            question:
                "¿Cuál sería una respuesta más comprensiva?",

            options: [

                {
                    id: "A",

                    text:
                        "Interrumpir en cuanto identificas el problema y darle inmediatamente tu solución.",

                    feedback:
                        "A veces la persona necesita ser escuchada antes que recibir una solución. Interrumpir con consejos puede hacer que sienta que no la dejaste terminar de expresarse.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Dejarla terminar de hablar, hacer preguntas para entender mejor, y luego preguntar si quiere que le des tu opinión.",

                    feedback:
                        "¡Excelente! Escuchar completamente y preguntar antes de aconsejar demuestra que te importa entender la situación, no solo resolverla rápido.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Cambiar el tema hacia una situación parecida que te pasó a ti.",

                    feedback:
                        "Comparar rápidamente con tu propia experiencia puede hacer que la conversación deje de centrarse en lo que la otra persona necesitaba contar.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "La opinión distinta",

            context:
                "En una conversación, alguien expresa una opinión muy diferente a la tuya sobre un tema que te importa. Sientes ganas de explicarle de inmediato por qué está equivocado.",

            question:
                "¿Qué respuesta demuestra buscar primero comprender?",

            options: [

                {
                    id: "A",

                    text:
                        "Interrumpirlo para decirle por qué su opinión no tiene sentido.",

                    feedback:
                        "Responder antes de entender por completo la opinión del otro suele cerrar la conversación en lugar de generar un intercambio real.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Preguntarle por qué piensa así, para entender su punto de vista antes de compartir el tuyo.",

                    feedback:
                        "¡Muy bien! Entender por qué alguien piensa diferente no significa que tengas que estar de acuerdo; significa que la conversación parte de comprensión real.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Quedarte callado y evitar el tema por completo para no discutir.",

                    feedback:
                        "Evitar la conversación tampoco es comprender: es simplemente no participar. Buscar comprender implica involucrarte, no desaparecer del tema.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — ¿ESCUCHAR O RESPONDER?
    // ========================================

    miniGame: {

        title: "¿Escuchar o responder?",

        description:
            "Clasifica cada actitud según si refleja escucha genuina o solo el deseo de responder.",

        categories: [

            "Escucha genuina",

            "Solo quiere responder"

        ],

        situations: [

            {
                text: "Hacer preguntas para entender mejor lo que la otra persona siente.",
                correctCategory: "Escucha genuina"
            },

            {
                text: "Pensar en tu respuesta mientras la otra persona todavía está hablando.",
                correctCategory: "Solo quiere responder"
            },

            {
                text: "Repetir con tus palabras lo que entendiste, para confirmar que comprendiste bien.",
                correctCategory: "Escucha genuina"
            },

            {
                text: "Interrumpir para dar tu opinión antes de que la persona termine de explicarse.",
                correctCategory: "Solo quiere responder"
            },

            {
                text: "Prestar atención a cómo se siente la persona, no solo a los datos del problema.",
                correctCategory: "Escucha genuina"
            },

            {
                text: "Usar lo que dice el otro solamente para preparar tu propio argumento.",
                correctCategory: "Solo quiere responder"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en una conversación reciente donde respondiste antes de comprender del todo a la otra persona. ¿Qué harías diferente si la vivieras de nuevo?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido que comprender primero a los demás abre conversaciones más honestas, en lugar de solo esperar tu turno para hablar."

    }

};