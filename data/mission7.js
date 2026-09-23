// ============================================
// MISIÓN 7 — AFILAR LA SIERRA
// ============================================

const mission7 = {

    id: 7,

    title: "Afilar la sierra",

    objective:
        "Aprender a cuidar y renovar nuestras capacidades físicas, mentales, emocionales y espirituales, en lugar de agotarlas sin descanso.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "La semana sin descanso",

            context:
                "Llevas varios días seguidos estudiando y trabajando sin parar. Sientes que si descansas vas a atrasarte, así que sigues exigiéndote al máximo.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Seguir sin descansar, pensando que parar sería perder tiempo valioso.",

                    feedback:
                        "Exigirte sin pausa puede sentirse productivo al inicio, pero suele bajar tu concentración y tu energía con el tiempo.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Reconocer que necesitas un descanso real y organizar tu tiempo para incluirlo.",

                    feedback:
                        "¡Muy bien! Afilar la sierra significa entender que el descanso no es lo opuesto a ser productivo, sino parte de serlo de forma sostenible.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Descansar solo cuando el cuerpo ya no da más, sin haberlo planeado antes.",

                    feedback:
                        "Llegar al agotamiento antes de parar suele costar más caro que descansar de forma preventiva y organizada.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "Solo una parte de ti",

            context:
                "Te has enfocado completamente en el estudio y el trabajo. Has dejado de lado el ejercicio, el tiempo con las personas que quieres y los espacios que disfrutas.",

            question:
                "¿Cuál sería una respuesta más equilibrada?",

            options: [

                {
                    id: "A",

                    text:
                        "Seguir enfocado únicamente en el estudio y el trabajo, ya que parecen lo más importante ahora.",

                    feedback:
                        "Enfocarte solo en un área puede dar resultados a corto plazo, pero descuidar las demás termina afectando también tu rendimiento en esa área.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Buscar espacio también para el cuerpo, las relaciones y los momentos que te renuevan, no solo para lo académico o laboral.",

                    feedback:
                        "¡Excelente! Cuidar distintas dimensiones de tu vida, no solo una, es lo que te permite sostener el esfuerzo a largo plazo.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Dejar el descanso y las relaciones para cuando \"tengas más tiempo\", sin fecha definida.",

                    feedback:
                        "Aplazar indefinidamente el cuidado personal suele significar que nunca llega el momento en que realmente sucede.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "El cansancio que ignoras",

            context:
                "Notas que últimamente te cuesta concentrarte, te sientes más irritable y con menos energía, pero decides ignorarlo y seguir con la misma rutina.",

            question:
                "¿Qué respuesta demuestra mejor cuidar de ti mismo?",

            options: [

                {
                    id: "A",

                    text:
                        "Ignorar esas señales y continuar exactamente igual, esperando que se pasen solas.",

                    feedback:
                        "Ignorar las señales de cansancio no las hace desaparecer; suelen acumularse hasta afectar más fuerte tu bienestar.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Reconocer esas señales como una alerta y hacer ajustes conscientes en tu rutina para cuidarte.",

                    feedback:
                        "¡Muy bien! Prestar atención a esas señales y actuar a tiempo es justamente afilar la sierra: renovarte antes de llegar al agotamiento.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Exigirte todavía más, pensando que el cansancio se resuelve con más esfuerzo.",

                    feedback:
                        "Responder al cansancio con más exigencia suele profundizar el desgaste en lugar de resolverlo.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — LAS CUATRO DIMENSIONES
    // ========================================

    miniGame: {

        title: "¿Qué dimensión estás cuidando?",

        description:
            "Clasifica cada actividad según la dimensión de renovación a la que pertenece.",

        categories: [

            "Física",

            "Mental",

            "Emocional/Social",

            "Espiritual"

        ],

        situations: [

            {
                text: "Dormir las horas suficientes y comer de forma balanceada.",
                correctCategory: "Física"
            },

            {
                text: "Leer o aprender algo nuevo que te interese.",
                correctCategory: "Mental"
            },

            {
                text: "Pasar tiempo de calidad con personas que quieres.",
                correctCategory: "Emocional/Social"
            },

            {
                text: "Dedicar un momento a reflexionar sobre lo que realmente te importa en la vida.",
                correctCategory: "Espiritual"
            },

            {
                text: "Hacer ejercicio o moverte físicamente de forma regular.",
                correctCategory: "Física"
            },

            {
                text: "Hablar abiertamente con alguien de confianza sobre cómo te sientes.",
                correctCategory: "Emocional/Social"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en las cuatro dimensiones (física, mental, emocional/social y espiritual). ¿Cuál has estado descuidando más últimamente y qué podrías hacer esta semana para cuidarla?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido que renovarte en distintas dimensiones no es una pausa al progreso: es lo que lo hace sostenible en el tiempo."

    }

};