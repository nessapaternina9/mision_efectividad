// ============================================
// MISIÓN 1 — SER PROACTIVO
// ============================================

const mission1 = {

    id: 1,

    title: "Ser proactivo",

    objective:
        "Aprender a reconocer qué está bajo nuestro control y tomar iniciativa frente a las situaciones de la vida.",


    // ========================================
    // CASOS PRÁCTICOS
    // ========================================

    cases: [

        {
            id: 1,

            title: "El trabajo grupal",

            context:
                "Tienes una entrega grupal en dos días. Uno de tus compañeros todavía no ha enviado la parte que le correspondía y el resto del equipo está esperando para poder terminar.",

            question:
                "¿Qué harías?",

            options: [

                {
                    id: "A",

                    text:
                        "Esperar a que tu compañero resuelva la situación. Esa era su responsabilidad.",

                    feedback:
                        "Esperar puede parecer lo más fácil, pero estás dejando toda la situación en manos de otra persona. Una respuesta proactiva busca qué puedes hacer tú para mejorar la situación.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Escribirle, preguntar qué ocurrió y proponer una forma de avanzar para que el equipo pueda terminar.",

                    feedback:
                        "¡Muy bien! Estás tomando la iniciativa sobre una situación en la que sí puedes influir. Ser proactivo significa actuar en lugar de quedarse esperando.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Quejarte con los demás integrantes y esperar a que ellos decidan qué hacer.",

                    feedback:
                        "Entender el problema es importante, pero quedarse únicamente en la queja no cambia la situación. La proactividad aparece cuando pasamos de señalar el problema a buscar qué podemos hacer.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 2,

            title: "El examen que sigues aplazando",

            context:
                "Tienes un examen importante dentro de tres días. Sabes que necesitas estudiar, pero durante toda la semana has encontrado otras cosas que hacer y todavía no comienzas.",

            question:
                "¿Cuál sería una respuesta más proactiva?",

            options: [

                {
                    id: "A",

                    text:
                        "Esperar a sentirte con ganas de estudiar.",

                    feedback:
                        "Las ganas no siempre aparecen primero. Una persona proactiva entiende que también puede decidir comenzar aunque no tenga motivación.",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Aceptar que has aplazado el estudio y organizar desde hoy un plan para aprovechar los tres días.",

                    feedback:
                        "¡Excelente! Reconoces tu responsabilidad y decides actuar sobre aquello que sí está bajo tu control: tu tiempo, tus decisiones y tu preparación.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Pensar que el examen está muy difícil y que probablemente todos tendrán problemas.",

                    feedback:
                        "La dificultad del examen no está completamente bajo tu control. Lo que sí puedes decidir es cómo prepararte frente a esa dificultad.",

                    level: "reactive",
                    xp: 0
                }

            ]
        },


        {
            id: 3,

            title: "No fue mi culpa",

            context:
                "Alguien te hace una crítica por un error que cometiste. Tu primera reacción es pensar: “La culpa fue de otra persona; yo no tuve nada que ver”.",

            question:
                "¿Qué respuesta demuestra mayor proactividad?",

            options: [

                {
                    id: "A",

                    text:
                        "Defenderte inmediatamente y explicar por qué todo fue culpa de otra persona.",

                    feedback:
                        "Puede haber circunstancias externas, pero una respuesta proactiva también pregunta: ¿qué parte de esta situación sí puedo reconocer y mejorar?",

                    level: "reactive",
                    xp: 0
                },

                {
                    id: "B",

                    text:
                        "Escuchar la crítica, reconocer tu parte de responsabilidad y pensar qué puedes hacer diferente la próxima vez.",

                    feedback:
                        "¡Muy bien! Ser proactivo no significa aceptar culpas que no corresponden. Significa reconocer aquello que sí puedes asumir y actuar para mejorar.",

                    level: "proactive",
                    xp: 100
                },

                {
                    id: "C",

                    text:
                        "Ignorar la crítica para no darle importancia.",

                    feedback:
                        "Ignorar una situación no la hace desaparecer. La proactividad implica observarla, aprender de ella y decidir cómo actuar.",

                    level: "reactive",
                    xp: 0
                }

            ]
        }

    ],


    // ========================================
    // MINI-JUEGO — CÍRCULO DE CONTROL
    // ========================================

    miniGame: {

        title: "¿Dónde está tu poder de acción?",

        description:
            "Clasifica cada situación según el nivel de control que tienes sobre ella.",

        categories: [

            "Puedo controlar",

            "Puedo influir",

            "No puedo controlar"

        ],

        situations: [

            {
                text: "Cómo reacciono ante una crítica.",
                correctCategory: "Puedo controlar"
            },

            {
                text: "La opinión que otra persona tiene de mí.",
                correctCategory: "No puedo controlar"
            },

            {
                text: "Intentar convencer a mi equipo de una idea.",
                correctCategory: "Puedo influir"
            },

            {
                text: "Decidir cuándo comenzar a estudiar.",
                correctCategory: "Puedo controlar"
            },

            {
                text: "Que el profesor cambie la fecha de un examen.",
                correctCategory: "No puedo controlar"
            },

            {
                text: "Proponer una solución ante un problema del grupo.",
                correctCategory: "Puedo influir"
            }

        ]

    },


    // ========================================
    // REFLEXIÓN
    // ========================================

    reflection: {

        question:
            "Piensa en una situación de tu vida en la que estás esperando que otra persona haga algo. ¿Qué podrías hacer tú para tomar la iniciativa?",

        minimumCharacters: 20

    },


    // ========================================
    // RECOMPENSA
    // ========================================

    reward: {

        xp: 300,

        message:
            "Has completado tu primera misión y has dado un paso para convertir la proactividad en una habilidad para la vida."

    }

};