// ============================================
// ELEMENTOS DE LA PÁGINA
// ============================================

const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const playerScreen = document.getElementById("playerScreen");

const mapScreen = document.getElementById("mapScreen");

const playerForm = document.getElementById("playerForm");

const playerName = document.getElementById("playerName");

const playerGroupInput = document.getElementById("playerGroupInput");

const playerWelcome = document.getElementById("playerWelcome");

const playerGroupDisplay = document.getElementById("playerGroup");

const playerXP = document.getElementById("playerXP");

const habitsContainer = document.getElementById("habitsContainer");

const habitScreen = document.getElementById("habitScreen");

const caseScreen = document.getElementById("caseScreen");

const startHabitButton =
    document.getElementById("startHabitButton");

const backToHabitButton =
    document.getElementById("backToHabitButton");

    const caseFeedback =
    document.getElementById("caseFeedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const feedbackXP =
    document.getElementById("feedbackXP");

const nextCaseButton =
    document.getElementById("nextCaseButton");

const backToMapButton =
    document.getElementById("backToMapButton");

const memoramaScreen = document.getElementById("memoramaScreen");

const bonusButton = document.getElementById("bonusButton");

const memoramaBoard = document.getElementById("memoramaBoard");

const memoramaComplete = document.getElementById("memoramaComplete");

const memoramaXP = document.getElementById("memoramaXP");

const backToMapFromMemoramaButton =
    document.getElementById("backToMapFromMemoramaButton");

const sopaScreen = document.getElementById("sopaScreen");

const sopaButton = document.getElementById("sopaButton");

const sopaGrid = document.getElementById("sopaGrid");

const sopaWordList = document.getElementById("sopaWordList");

const sopaComplete = document.getElementById("sopaComplete");

const sopaXP = document.getElementById("sopaXP");

const backToMapFromSopaButton =
    document.getElementById("backToMapFromSopaButton");

const finalScreen = document.getElementById("finalScreen");

const finalButton = document.getElementById("finalButton");

const finalSummary = document.getElementById("finalSummary");

const backToMapFromFinalButton =
    document.getElementById("backToMapFromFinalButton");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const resetButton = document.getElementById("resetButton");
const resultsButton = document.getElementById("resultsButton");

const resultsScreen = document.getElementById("resultsScreen");

const resultsXPTotal = document.getElementById("resultsXPTotal");

const resultsPercentage = document.getElementById("resultsPercentage");

const resultsMissionsList = document.getElementById("resultsMissionsList");

const resultsBonusList = document.getElementById("resultsBonusList");

const backToMapFromResultsButton =
    document.getElementById("backToMapFromResultsButton");
// ============================================
// DATOS DEL JUGADOR
// ============================================

const player = {
    name: "",
    group: "",
    xp: 0,
    level: 1,
    completedHabits: []
};

// ============================================
// MISIÓN ACTUAL
// ============================================

let currentMission = null;
let currentCaseIndex = 0;

// ============================================
// ESTADO DEL MEMORAMA
// ============================================

let memoramaCards = [];
let flippedCards = [];
let matchedPairs = 0;
let memoramaLocked = false;

// ============================================
// ESTADO DE LA SOPA DE LETRAS
// ============================================

let sopaGridData = [];
let sopaPlacedWords = [];
let sopaFoundWords = [];
let sopaSelectedCells = [];

// ============================================
// ABRIR SOPA DE LETRAS
// ============================================

sopaButton.addEventListener("click", function () {

    mapScreen.classList.add("hidden");

    sopaScreen.classList.remove("hidden");

    startSopa();

});

// ============================================
// VOLVER AL MAPA DESDE LA SOPA
// ============================================

backToMapFromSopaButton.addEventListener("click", function () {

    sopaScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});
// ============================================
// COMENZAR MISIÓN
// ============================================

startButton.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");

    playerScreen.classList.remove("hidden");

});


// ============================================
// REGISTRAR JUGADOR
// ============================================

playerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    player.name = playerName.value.trim();
    player.group = playerGroupInput.value.trim();

    showMap();

    saveProgress();

});


// ============================================
// MOSTRAR MAPA
// ============================================

function showMap() {

    playerScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

    playerWelcome.textContent =
        `¡Hola, ${player.name}!`;

    playerGroupDisplay.textContent = 
    `Grupo ${player.group}`;

    updateXP();

    renderHabits();

    updateBonusButton();

    updateProgress();

}

// ============================================
// MOSTRAR/OCULTAR BOTÓN FINAL
// ============================================

function updateFinalButton() {

    const allMissionsDone = player.completedHabits.length >= 7;

    if (allMissionsDone && memoramaCompleted && sopaCompleted) {

        finalButton.classList.remove("hidden");

    } else {

        finalButton.classList.add("hidden");

    }

}
// ============================================
// REVISAR SI YA SE COMPLETÓ TODO Y MOSTRAR FINAL
// ============================================

function checkAllComplete() {

    const allMissionsDone = player.completedHabits.length >= 7;

    if (allMissionsDone && memoramaCompleted && sopaCompleted) {

        setTimeout(function () {

            mapScreen.classList.add("hidden");
            habitScreen.classList.add("hidden");
            caseScreen.classList.add("hidden");
            memoramaScreen.classList.add("hidden");
            sopaScreen.classList.add("hidden");

            finalScreen.classList.remove("hidden");

            finalSummary.textContent =
                `${player.name}, completaste las 7 misiones y ganaste ⭐ ${player.xp} XP en total.`;

        }, 1500);

    }

}
// ============================================
// MOSTRAR/OCULTAR BOTÓN BONUS
// ============================================

function updateBonusButton() {

    if (player.completedHabits.length >= 7) {

        bonusButton.classList.remove("hidden");

        sopaButton.classList.remove("hidden");

    } else {

        bonusButton.classList.add("hidden");

        sopaButton.classList.add("hidden");

    }

}


// ============================================
// MOSTRAR HÁBITOS
// ============================================

function renderHabits() {

    habitsContainer.innerHTML = "";

    habits.forEach(function (habit) {

        const habitCard = document.createElement("article");

        habitCard.classList.add("habit-card");

        if (habit.unlocked) {

            habitCard.classList.add("unlocked");

        } else {

            habitCard.classList.add("locked");

        }

        if (habit.unlocked) {

    habitCard.addEventListener("click", function () {

        openHabit(habit);

    });

}


        habitCard.innerHTML = `

            <div class="habit-number">
                MISIÓN ${habit.id}
            </div>

            <h4 class="habit-title">
                ${habit.title}
            </h4>

            <p class="habit-description">
                ${habit.description}
            </p>

            <div class="habit-footer">

                <span>
                    ⭐ ${habit.xp} XP
                </span>

                <span>
                    ${habit.unlocked ? "🔓 Disponible" : "🔒 Bloqueado"}
                </span>

            </div>

        `;


        habitsContainer.appendChild(habitCard);

    });

}


// ============================================
// ACTUALIZAR XP
// ============================================

function updateXP() {

    playerXP.textContent =
        `⭐ ${player.xp} XP`;

}

// ============================================
// ACTUALIZAR BARRA DE PROGRESO
// ============================================

function updateProgress() {

    const totalHabits = habits.length;

    const completedCount = player.completedHabits.length;

    const percentage =
        Math.round((completedCount / totalHabits) * 100);

    progressFill.style.width = `${percentage}%`;

    progressText.textContent = `${percentage}%`;


    // ========================================
    // COLOR SEGÚN EL PORCENTAJE
    // ========================================

    if (percentage <= 30) {

        progressFill.style.background = "#e63946";

    } else if (percentage <= 50) {

        progressFill.style.background = "#f4a261";

    } else {

        progressFill.style.background = "#2a9d8f";

    }

}

// ============================================
// ABRIR MISIÓN
// ============================================

function openHabit(habit) {

    mapScreen.classList.add("hidden");

    habitScreen.classList.remove("hidden");


    // ========================================
    // IDENTIFICAR LOS DATOS DE LA MISIÓN
    // ========================================

      if (habit.id === 1) {

        currentMission = mission1;

    } else if (habit.id === 2) {

        currentMission = mission2;

    } else if (habit.id === 3) {

        currentMission = mission3;

    } else if (habit.id === 4) {

        currentMission = mission4;

    } else if (habit.id === 5) {

        currentMission = mission5;

    } else if (habit.id === 6) {

        currentMission = mission6;

    } else if (habit.id === 7) {

        currentMission = mission7;

    }
    // ========================================
    // MOSTRAR INFORMACIÓN
    // ========================================

    document.getElementById("habitTitle").textContent =
        currentMission.title;

    document.getElementById("habitDescription").textContent =
        currentMission.objective;

}

// ============================================
// COMENZAR MISIÓN
// ============================================

startHabitButton.addEventListener("click", function () {

    habitScreen.classList.add("hidden");

    caseScreen.classList.remove("hidden");

    currentCaseIndex = 0;

    showCase(currentMission.cases[currentCaseIndex]);

});


// ============================================
// MOSTRAR CASO
// ============================================

function showCase(caseData) {

    document.getElementById("caseTitle").textContent =
        caseData.title;

    document.getElementById("caseContext").textContent =
        caseData.context;

    document.getElementById("caseQuestion").textContent =
        caseData.question;


    // ========================================
    // PREPARAR FEEDBACK
    // ========================================

    caseFeedback.classList.add("hidden");

// ========================================
// MOSTRAR OPCIONES
// ========================================

const caseOptions =
    document.getElementById("caseOptions");

caseOptions.innerHTML = "";

// Copiamos el array para no mutar el original
const shuffledOptions = [...caseData.options];

// Fisher-Yates shuffle
for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] =
        [shuffledOptions[j], shuffledOptions[i]];
}

// Reasignamos las letras (A, B, C, D...) según el nuevo orden
const letters = ["A", "B", "C", "D", "E", "F"];

shuffledOptions.forEach(function (option, index) {
    option.displayLetter = letters[index];
});

shuffledOptions.forEach(function (option) {

    const optionButton =
        document.createElement("button");

    optionButton.classList.add("case-option");

    optionButton.textContent =
        `${option.displayLetter}. ${option.text}`;

    optionButton.addEventListener("click", function () {
        showFeedback(option);
    });

    caseOptions.appendChild(optionButton);

});

}

// ============================================
// ENVIAR PROGRESO A GOOGLE SHEETS
// ============================================

function sendProgress(mision, opcion, correcta, xp) {

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMjF1KxOlXZ3nMDmPFWnQGK06yTgWUD7m3PeokfAbTolkKUdtwX6YWQDbZcdskHE0z/exec";

    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
            nombre: player.name,
            mision: mision,
            opcion: opcion,
            correcta: correcta,
            xp: xp
        })
    })
    .catch(function (error) {
        console.error("No se pudo guardar el progreso:", error);
    });

}


// ============================================
// MOSTRAR FEEDBACK
// ============================================

function showFeedback(option) {

    feedbackTitle.textContent =
        option.level === "proactive"
            ? "🎉 ¡Muy bien!"
            : "💭 Reflexiona sobre tu decisión";


    feedbackText.textContent =
        option.feedback;


    feedbackXP.textContent =
        option.xp > 0
            ? `⭐ +${option.xp} XP`
            : "⭐ +0 XP";


    player.xp += option.xp;

    updateXP();


    caseFeedback.classList.remove("hidden");

    // NUEVO: enviamos el progreso a Google Sheets
    sendProgress(
        currentMission.title,                 // nombre de la misión
        option.displayLetter,                 // qué opción eligió
        option.level === "proactive",         // true si fue la buena
        option.xp                             // xp ganado
    );

}
// ============================================
// SIGUIENTE CASO O FIN DE LA MISIÓN
// ============================================

nextCaseButton.addEventListener("click", function () {

    currentCaseIndex++;

    if (currentCaseIndex < currentMission.cases.length) {

        showCase(currentMission.cases[currentCaseIndex]);

    } else {

        completeMission();

    }

});
// ============================================
// ESTADO GENERAL DE FINALIZACIÓN
// ============================================

let memoramaCompleted = false;
let sopaCompleted = false;

// ============================================
// VOLVER A LA MISIÓN
// ============================================

backToHabitButton.addEventListener("click", function () {

    caseScreen.classList.add("hidden");

    habitScreen.classList.remove("hidden");

});

// ============================================
// VOLVER AL MAPA
// ============================================

backToMapButton.addEventListener("click", function () {

    habitScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});

// ============================================
// COMPLETAR MISIÓN
// ============================================

function completeMission() {

    player.xp += currentMission.reward.xp;

    player.completedHabits.push(currentMission.id);

    unlockNextHabit(currentMission.id);

    updateXP();

    caseScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

    renderHabits();

    updateBonusButton();

    updateFinalButton();

    checkAllComplete();

    saveProgress();

    updateProgress();

}


// ============================================
// DESBLOQUEAR SIGUIENTE HÁBITO
// ============================================

function unlockNextHabit(completedId) {

    const nextHabit = habits.find(function (habit) {

        return habit.id === completedId + 1;

    });

    if (nextHabit) {

        nextHabit.unlocked = true;

    }

}

// ============================================
// INICIAR MEMORAMA
// ============================================

function startMemorama() {

    memoramaCards = [];

    memoramaPairs.forEach(function (pair) {

        memoramaCards.push({
            pairId: pair.id,
            type: "habit",
            text: pair.habit,
            matched: false
        });

        memoramaCards.push({
            pairId: pair.id,
            type: "phrase",
            text: pair.phrase,
            matched: false
        });

    });

    shuffleCards(memoramaCards);

    flippedCards = [];
    matchedPairs = 0;
    memoramaLocked = false;

    memoramaComplete.classList.add("hidden");

    renderMemorama();

}


// ============================================
// MEZCLAR CARTAS
// ============================================

function shuffleCards(cards) {

    for (let i = cards.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;

    }

}

// ============================================
// MOSTRAR CARTAS
// ============================================

function renderMemorama() {

    memoramaBoard.innerHTML = "";

    memoramaCards.forEach(function (card, index) {

        const cardElement = document.createElement("button");

        cardElement.classList.add("memory-card");

        if (card.matched) {

            cardElement.classList.add("matched");

        }

        const isVisible =
            card.matched || flippedCards.includes(index);

        cardElement.textContent = isVisible ? card.text : "❓";

        cardElement.addEventListener("click", function () {

            flipCard(index);

        });

        memoramaBoard.appendChild(cardElement);

    });

}

// ============================================
// VOLTEAR CARTA
// ============================================

function flipCard(index) {

    const card = memoramaCards[index];

    if (memoramaLocked || card.matched || flippedCards.includes(index)) {

        return;

    }

    flippedCards.push(index);

    renderMemorama();

    if (flippedCards.length === 2) {

        checkMatch();

    }

}


// ============================================
// COMPARAR PAREJA
// ============================================

function checkMatch() {

    memoramaLocked = true;

    const firstIndex = flippedCards[0];
    const secondIndex = flippedCards[1];

    const firstCard = memoramaCards[firstIndex];
    const secondCard = memoramaCards[secondIndex];

    const isMatch =
        firstCard.pairId === secondCard.pairId &&
        firstCard.type !== secondCard.type;

    if (isMatch) {

        firstCard.matched = true;
        secondCard.matched = true;

        matchedPairs++;

        flippedCards = [];
        memoramaLocked = false;

        renderMemorama();

        if (matchedPairs === memoramaPairs.length) {

            finishMemorama();

        }

    } else {

        setTimeout(function () {

            flippedCards = [];
            memoramaLocked = false;

            renderMemorama();

        }, 1000);

    }

}
// ============================================
// TERMINAR MEMORAMA
// ============================================

function finishMemorama() {

    const bonusXP = 200;

    player.xp += bonusXP;

    updateXP();

    memoramaXP.textContent = `⭐ +${bonusXP} XP`;

    memoramaComplete.classList.remove("hidden");

    memoramaCompleted = true;

    updateFinalButton();

    checkAllComplete();

    saveProgress();
}

function finishSopa() {

    const bonusXP = 200;

    player.xp += bonusXP;

    updateXP();

    sopaXP.textContent = `⭐ +${bonusXP} XP`;

    sopaComplete.classList.remove("hidden");

    sopaCompleted = true;

    updateFinalButton();

    checkAllComplete();

    saveProgress();

}
// ============================================
// ABRIR MEMORAMA
// ============================================

bonusButton.addEventListener("click", function () {

    mapScreen.classList.add("hidden");

    memoramaScreen.classList.remove("hidden");

    startMemorama();

});


// ============================================
// VOLVER AL MAPA DESDE EL MEMORAMA
// ============================================

backToMapFromMemoramaButton.addEventListener("click", function () {

    memoramaScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});
// ============================================
// DIRECCIONES PARA COLOCAR PALABRAS
// ============================================

const sopaDirections = [
    { row: 0, col: 1 },    // derecha
    { row: 1, col: 0 },    // abajo
    { row: 1, col: 1 },    // diagonal abajo-derecha
    { row: 1, col: -1 }    // diagonal abajo-izquierda
];


// ============================================
// GENERAR CUADRÍCULA VACÍA Y COLOCAR PALABRAS
// ============================================

function generateSopaGrid() {

    sopaGridData = [];

    for (let row = 0; row < sopaGridSize; row++) {

        const rowData = [];

        for (let col = 0; col < sopaGridSize; col++) {

            rowData.push("");

        }

        sopaGridData.push(rowData);

    }

    sopaPlacedWords = [];

    sopaWords.forEach(function (wordData) {

        placeWordInGrid(wordData);

    });

    fillEmptyCells();

}


// ============================================
// INTENTAR COLOCAR UNA PALABRA
// ============================================

function placeWordInGrid(wordData) {

    const word = wordData.word;

    let placed = false;
    let attempts = 0;

    while (!placed && attempts < 200) {

        attempts++;

        const direction =
            sopaDirections[Math.floor(Math.random() * sopaDirections.length)];

        const startRow = Math.floor(Math.random() * sopaGridSize);
        const startCol = Math.floor(Math.random() * sopaGridSize);

        if (canPlaceWord(word, startRow, startCol, direction)) {

            const cells = [];

            for (let i = 0; i < word.length; i++) {

                const row = startRow + direction.row * i;
                const col = startCol + direction.col * i;

                sopaGridData[row][col] = word[i];

                cells.push({ row: row, col: col });

            }

            sopaPlacedWords.push({
                id: wordData.id,
                word: word,
                habit: wordData.habit,
                cells: cells
            });

            placed = true;

        }

    }

}


// ============================================
// VERIFICAR SI UNA PALABRA CABE AHÍ
// ============================================

function canPlaceWord(word, startRow, startCol, direction) {

    for (let i = 0; i < word.length; i++) {

        const row = startRow + direction.row * i;
        const col = startCol + direction.col * i;

        if (row < 0 || row >= sopaGridSize || col < 0 || col >= sopaGridSize) {

            return false;

        }

        const currentLetter = sopaGridData[row][col];

        if (currentLetter !== "" && currentLetter !== word[i]) {

            return false;

        }

    }

    return true;

}


// ============================================
// RELLENAR ESPACIOS VACÍOS CON LETRAS AL AZAR
// ============================================

function fillEmptyCells() {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let row = 0; row < sopaGridSize; row++) {

        for (let col = 0; col < sopaGridSize; col++) {

            if (sopaGridData[row][col] === "") {

                const randomLetter =
                    alphabet[Math.floor(Math.random() * alphabet.length)];

                sopaGridData[row][col] = randomLetter;

            }

        }

    }

}
// ============================================
// INICIAR SOPA DE LETRAS
// ============================================

function startSopa() {

    generateSopaGrid();

    sopaFoundWords = [];
    sopaSelectedCells = [];

    sopaComplete.classList.add("hidden");

    renderSopa();

    renderSopaWordList();

}


// ============================================
// MOSTRAR CUADRÍCULA
// ============================================

function renderSopa() {

    sopaGrid.innerHTML = "";

    for (let row = 0; row < sopaGridSize; row++) {

        for (let col = 0; col < sopaGridSize; col++) {

            const cellButton = document.createElement("button");

            cellButton.classList.add("sopa-cell");

            cellButton.textContent = sopaGridData[row][col];

            const isSelected = sopaSelectedCells.some(function (cell) {

                return cell.row === row && cell.col === col;

            });

            const foundWord = getFoundWordForCell(row, col);

            if (isSelected) {

                cellButton.classList.add("selected");

            }

            if (foundWord) {

                cellButton.classList.add("found");

                cellButton.style.backgroundColor =
                    getWordColor(foundWord.id);

            }

            cellButton.addEventListener("click", function () {

                handleSopaCellClick(row, col);

            });

            sopaGrid.appendChild(cellButton);

        }

    }

}


// ============================================
// MOSTRAR LISTA DE PALABRAS
// ============================================

function renderSopaWordList() {

    sopaWordList.innerHTML = "";

    sopaWords.forEach(function (wordData) {

        const listItem = document.createElement("li");

        const isFound = sopaFoundWords.includes(wordData.id);

        if (isFound) {

            listItem.classList.add("found");

        }

        listItem.innerHTML = `
            <span
                class="sopa-word-swatch"
                style="background:${getWordColor(wordData.id)}"
            ></span>
            <span class="sopa-word-text">${wordData.word}</span>
            <span class="sopa-word-habit">${wordData.habit}</span>
        `;

        sopaWordList.appendChild(listItem);

    });

}
// ============================================
// CLIC EN UNA CELDA
// ============================================

function handleSopaCellClick(row, col) {

    sopaSelectedCells.push({ row: row, col: col });

    if (sopaSelectedCells.length === 1) {

        renderSopa();

        return;

    }

    if (sopaSelectedCells.length === 2) {

        checkSopaSelection();

    }

}


// ============================================
// VERIFICAR LA SELECCIÓN
// ============================================

function checkSopaSelection() {

    const start = sopaSelectedCells[0];
    const end = sopaSelectedCells[1];

    const lineCells = getLineCells(start, end);

    if (lineCells) {

        const matchedWord = findMatchingWord(lineCells);

        if (matchedWord) {

            sopaFoundWords.push(matchedWord.id);

            if (sopaFoundWords.length === sopaWords.length) {

                finishSopa();

            }

        }

    }

    sopaSelectedCells = [];

    renderSopa();

    renderSopaWordList();

}


// ============================================
// OBTENER LAS CELDAS ENTRE DOS PUNTOS
// ============================================

function getLineCells(start, end) {

    const rowDiff = end.row - start.row;
    const colDiff = end.col - start.col;

    const isStraightLine =
        rowDiff === 0 ||
        colDiff === 0 ||
        Math.abs(rowDiff) === Math.abs(colDiff);

    if (!isStraightLine) {

        return null;

    }

    const stepRow = Math.sign(rowDiff);
    const stepCol = Math.sign(colDiff);

    const length =
        Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;

    const cells = [];

    for (let i = 0; i < length; i++) {

        cells.push({
            row: start.row + stepRow * i,
            col: start.col + stepCol * i
        });

    }

    return cells;

}


// ============================================
// BUSCAR SI ESA LÍNEA ES UNA PALABRA VÁLIDA
// ============================================

function findMatchingWord(lineCells) {

    return sopaPlacedWords.find(function (placedWord) {

        if (sopaFoundWords.includes(placedWord.id)) {

            return false;

        }

        if (placedWord.cells.length !== lineCells.length) {

            return false;

        }

        const sameOrder = placedWord.cells.every(function (placedCell, index) {

            return (
                placedCell.row === lineCells[index].row &&
                placedCell.col === lineCells[index].col
            );

        });

        const reverseOrder = placedWord.cells.every(function (placedCell, index) {

            const reversedIndex = lineCells.length - 1 - index;

            return (
                placedCell.row === lineCells[reversedIndex].row &&
                placedCell.col === lineCells[reversedIndex].col
            );

        });

        return sameOrder || reverseOrder;

    });

}

// ============================================
// CLIC EN UNA CELDA
// ============================================

function handleSopaCellClick(row, col) {

    sopaSelectedCells.push({ row: row, col: col });

    if (sopaSelectedCells.length === 1) {

        renderSopa();

        return;

    }

    if (sopaSelectedCells.length === 2) {

        checkSopaSelection();

    }

}


// ============================================
// VERIFICAR LA SELECCIÓN
// ============================================

function checkSopaSelection() {

    const start = sopaSelectedCells[0];
    const end = sopaSelectedCells[1];

    const lineCells = getLineCells(start, end);

    if (lineCells) {

        const matchedWord = findMatchingWord(lineCells);

        if (matchedWord) {

            sopaFoundWords.push(matchedWord.id);

            if (sopaFoundWords.length === sopaWords.length) {

                finishSopa();

            }

        }

    }

    sopaSelectedCells = [];

    renderSopa();

    renderSopaWordList();

}


// ============================================
// OBTENER LAS CELDAS ENTRE DOS PUNTOS
// ============================================

function getLineCells(start, end) {

    const rowDiff = end.row - start.row;
    const colDiff = end.col - start.col;

    const isStraightLine =
        rowDiff === 0 ||
        colDiff === 0 ||
        Math.abs(rowDiff) === Math.abs(colDiff);

    if (!isStraightLine) {

        return null;

    }

    const stepRow = Math.sign(rowDiff);
    const stepCol = Math.sign(colDiff);

    const length =
        Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;

    const cells = [];

    for (let i = 0; i < length; i++) {

        cells.push({
            row: start.row + stepRow * i,
            col: start.col + stepCol * i
        });

    }

    return cells;

}


// ============================================
// BUSCAR SI ESA LÍNEA ES UNA PALABRA VÁLIDA
// ============================================

function findMatchingWord(lineCells) {

    return sopaPlacedWords.find(function (placedWord) {

        if (sopaFoundWords.includes(placedWord.id)) {

            return false;

        }

        if (placedWord.cells.length !== lineCells.length) {

            return false;

        }

        const sameOrder = placedWord.cells.every(function (placedCell, index) {

            return (
                placedCell.row === lineCells[index].row &&
                placedCell.col === lineCells[index].col
            );

        });

        const reverseOrder = placedWord.cells.every(function (placedCell, index) {

            const reversedIndex = lineCells.length - 1 - index;

            return (
                placedCell.row === lineCells[reversedIndex].row &&
                placedCell.col === lineCells[reversedIndex].col
            );

        });

        return sameOrder || reverseOrder;

    });

}

// ============================================
// ABRIR SOPA DE LETRAS
// ============================================

sopaButton.addEventListener("click", function () {

    mapScreen.classList.add("hidden");

    sopaScreen.classList.remove("hidden");

    startSopa();

});


// ============================================
// VOLVER AL MAPA DESDE LA SOPA
// ============================================

backToMapFromSopaButton.addEventListener("click", function () {

    sopaScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});

// ============================================
// ABRIR PANTALLA FINAL
// ============================================

finalButton.addEventListener("click", function () {

    mapScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

    finalSummary.textContent =
        `${player.name}, completaste las 7 misiones y ganaste ⭐ ${player.xp} XP en total.`;

});


// ============================================
// VOLVER AL MAPA DESDE LA PANTALLA FINAL
// ============================================

backToMapFromFinalButton.addEventListener("click", function () {

    finalScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});

// ============================================
// GUARDAR PROGRESO
// ============================================

function saveProgress() {

    const progressData = {
        player: player,
        habits: habits,
        memoramaCompleted: memoramaCompleted,
        sopaCompleted: sopaCompleted
    };

    localStorage.setItem(
        "misionEfectividadProgreso",
        JSON.stringify(progressData)
    );

}

// ============================================
// CARGAR PROGRESO
// ============================================

function loadProgress() {

    const savedData = localStorage.getItem("misionEfectividadProgreso");

    if (!savedData) {

        return false;

    }

    const progressData = JSON.parse(savedData);

    player.name = progressData.player.name;
    player.group = progressData.player.group;
    player.xp = progressData.player.xp;
    player.level = progressData.player.level;
    player.completedHabits = progressData.player.completedHabits;

    progressData.habits.forEach(function (savedHabit) {

        const habit = habits.find(function (h) {

            return h.id === savedHabit.id;

        });

        if (habit) {

            habit.unlocked = savedHabit.unlocked;

        }

    });

    memoramaCompleted = progressData.memoramaCompleted;
    sopaCompleted = progressData.sopaCompleted;

    return true;

}

// ============================================
// INICIAR JUEGO — REVISAR SI HAY PROGRESO GUARDADO
// ============================================

const hasProgress = loadProgress();

if (hasProgress) {

    welcomeScreen.classList.add("hidden");

    showMap();

    updateFinalButton();

}
// ============================================
// REINICIAR PROGRESO
// ============================================

resetButton.addEventListener("click", function () {

    const confirmReset = confirm(
        "¿Seguro que quieres borrar tu progreso? Esto no se puede deshacer."
    );

    if (confirmReset) {

        localStorage.removeItem("misionEfectividadProgreso");

        location.reload();

    }

});
// ============================================
// MOSTRAR RESULTADOS
// ============================================

function renderResults() {

    // ----------------------------------------
    // RESUMEN GENERAL
    // ----------------------------------------

    const totalHabits = habits.length;

    const completedCount = player.completedHabits.length;

    const percentage =
        Math.round((completedCount / totalHabits) * 100);

    resultsXPTotal.textContent = `⭐ ${player.xp} XP total`;

    resultsPercentage.textContent = `${percentage}% completado`;


// ============================================
// OBTENER COLOR DE UNA PALABRA
// ============================================

function getWordColor(wordId) {

    return sopaColors[wordId - 1];

}

// ============================================
// SABER QUÉ PALABRA ENCONTRADA OCUPA UNA CELDA
// ============================================

function getFoundWordForCell(row, col) {

    for (let i = 0; i < sopaFoundWords.length; i++) {

        const wordId = sopaFoundWords[i];

        const placedWord = sopaPlacedWords.find(function (word) {

            return word.id === wordId;

        });

        if (!placedWord) {

            continue;

        }

        const belongsHere = placedWord.cells.some(function (cell) {

            return cell.row === row && cell.col === col;

        });

        if (belongsHere) {

            return placedWord;

        }

    }

    return null;

}
    // ----------------------------------------
    // LISTA DE MISIONES
    // ----------------------------------------

    resultsMissionsList.innerHTML = "";

    habits.forEach(function (habit) {

        const isCompleted =
            player.completedHabits.includes(habit.id);

        const listItem = document.createElement("li");

        listItem.classList.add(
            isCompleted ? "completed" : "pending"
        );

        listItem.innerHTML = `
            <span>${habit.title}</span>
            <span>${isCompleted ? "✅ Completada" : "⏳ Pendiente"}</span>
        `;

        resultsMissionsList.appendChild(listItem);

    });


    // ----------------------------------------
    // LISTA DE MISIONES BONUS
    // ----------------------------------------

    resultsBonusList.innerHTML = "";

    const bonusActivities = [

        { name: "Memorama de los 7 hábitos", done: memoramaCompleted },
        { name: "Sopa de letras", done: sopaCompleted }

    ];

    bonusActivities.forEach(function (activity) {

        const listItem = document.createElement("li");

        listItem.classList.add(
            activity.done ? "completed" : "pending"
        );

        listItem.innerHTML = `
            <span>${activity.name}</span>
            <span>${activity.done ? "✅ Completada" : "⏳ Pendiente"}</span>
        `;

        resultsBonusList.appendChild(listItem);

    });

}

// ============================================
// OBTENER COLOR DE UNA PALABRA
// ============================================

function getWordColor(wordId) {

    return sopaColors[wordId - 1];

}


// ============================================
// SABER QUÉ PALABRA ENCONTRADA OCUPA UNA CELDA
// ============================================

function getFoundWordForCell(row, col) {

    for (let i = 0; i < sopaFoundWords.length; i++) {

        const wordId = sopaFoundWords[i];

        const placedWord = sopaPlacedWords.find(function (word) {

            return word.id === wordId;

        });

        if (!placedWord) {

            continue;

        }

        const belongsHere = placedWord.cells.some(function (cell) {

            return cell.row === row && cell.col === col;

        });

        if (belongsHere) {

            return placedWord;

        }

    }

    return null;

}
// ============================================
// ABRIR RESULTADOS
// ============================================

resultsButton.addEventListener("click", function () {

    mapScreen.classList.add("hidden");

    resultsScreen.classList.remove("hidden");

    renderResults();

});


// ============================================
// VOLVER AL MAPA DESDE RESULTADOS
// ============================================

backToMapFromResultsButton.addEventListener("click", function () {

    resultsScreen.classList.add("hidden");

    mapScreen.classList.remove("hidden");

});