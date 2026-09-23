// ============================================
// MISIÓN 6 — SINERGIZAR
// ============================================

const mission6 = {

    id: 6,

    title: "Sinergizar",

    objective:
        "Aprender a valorar las diferencias de los demás y a trabajar en equipo para lograr resultados que no serían posibles por separado.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "El equipo con ideas distintas",

            context:
                "En tu equipo de trabajo hay personas con formas muy diferentes de pensar. Uno es muy detallista y otro prefiere ver el panorama general. Eso a veces genera choques.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Pensar que sería más fácil trabajar solo, sin tener que lidiar con esas diferencias.",

                    feedback:
                        "Evitar las diferencias puede parecer más cómodo, pero también te priva de perspectivas que tú solo no tendrías.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Reconocer que esas diferencias pueden complementarse y buscar cómo aprovechar lo que cada uno aporta.",

                    feedback:
                        "¡Muy bien! Sinergizar es justamente eso: usar las diferencias como una fortaleza para llegar a un resultado mejor del que cualquiera lograría solo.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Insistir en que todos trabajen exactamente igual que tú, para evitar conflictos.",

                    feedback:
                        "Pedir que todos piensen igual que tú elimina justamente lo que las diferencias podrían aportar al resultado final.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "La idea que nadie había pensado",

            context:
                "Tu equipo está atascado buscando una solución. Cada persona ha propuesto ideas distintas, pero ninguna termina de convencer a todos por completo.",

            question:
                "¿Cuál sería una respuesta que refleje sinergia?",

            options: [

                {
                    id: "A",

                    text:
                        "Elegir la idea de la persona con más experiencia y descartar las demás.",

                    feedback:
                        "Elegir una sola idea sin explorar cómo combinarlas puede hacer que se pierdan elementos valiosos de las otras propuestas.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Juntar partes de varias ideas para construir una propuesta nueva que ninguno había pensado solo.",

                    feedback:
                        "¡Excelente! Esa es la esencia de la sinergia: el resultado combinado puede ser mejor que cualquiera de las ideas originales por separado.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Votar rápidamente por cualquier idea solo para terminar la discusión.",

                    feedback:
                        "Resolver rápido puede aliviar la tensión del momento, pero no aprovecha el potencial de construir algo mejor entre todos.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "El compañero que piensa diferente",

            context:
                "Un compañero de equipo tiene una forma de trabajar muy distinta a la tuya. Al principio te genera algo de frustración porque no hacen las cosas de la misma manera.",

            question:
                "¿Qué respuesta demuestra mejor la idea de sinergizar?",

            options: [

                {
                    id: "A",

                    text:
                        "Evitar trabajar con esa persona en el futuro por ser tan diferente a ti.",

                    feedback:
                        "Alejarte de las diferencias te protege de la fricción, pero también te cierra la posibilidad de aprender algo distinto de esa persona.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Preguntarle cómo ve las cosas y buscar en qué puntos su forma de trabajar puede complementar la tuya.",

                    feedback:
                        "¡Muy bien! Entender la forma de trabajar del otro, en lugar de rechazarla, es lo que permite encontrar cómo se complementan.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Tolerar la diferencia en silencio, sin buscar realmente aprovecharla.",

                    feedback:
                        "Tolerar no es lo mismo que aprovechar. Sinergizar implica ir un paso más allá y buscar activamente cómo esa diferencia suma.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — ¿SUMA O RESTA?
    // ========================================

    miniGame: {

        title: "¿Suma o resta al equipo?",

        description:
            "Clasifica cada actitud según si favorece la sinergia del equipo o la debilita.",

        categories: [

            "Favorece la sinergia",

            "La debilita"

        ],

        situations: [

            {
                text: "Combinar ideas distintas para llegar a una solución nueva.",
                correctCategory: "Favorece la sinergia"
            },

            {
                text: "Rechazar una idea solo porque viene de alguien con quien no coincides normalmente.",
                correctCategory: "La debilita"
            },

            {
                text: "Valorar que un compañero vea algo que tú no habías notado.",
                correctCategory: "Favorece la sinergia"
            },

            {
                text: "Insistir en que todos trabajen exactamente de la misma manera.",
                correctCategory: "La debilita"
            },

            {
                text: "Preguntar activamente la opinión de personas con perspectivas distintas a la tuya.",
                correctCategory: "Favorece la sinergia"
            },

            {
                text: "Descartar una propuesta sin escucharla completa, solo por venir de otra forma de pensar.",
                correctCategory: "La debilita"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en alguien con quien trabajas o estudias que piensa muy diferente a ti. ¿Qué podría aportar esa diferencia si la aprovecharas en lugar de evitarla?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has aprendido que las diferencias, bien aprovechadas, pueden construir resultados que ninguna persona lograría sola."

    }

};