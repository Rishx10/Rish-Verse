// ==========================================================================
// RISH VERSE CRYPT GAME REACTION ENGINE & TRUE DICTIONARY PIPELINE
// ==========================================================================

const TARGET_SECRET_WORD = "VERSE"; // Set your target hidden crypt word here
let trueEnglishDictionary = new Set();

let currentActiveAttemptRow = 0;
let currentTileCharacterIndex = 0;
let currentGuessStringPayload = "";
let systemGameLockedStateFlag = false;

/**
 * Initialize and construct game board matrix frames dynamically
 */
function initializeCryptMatrixFrame() {
    const gridContainer = document.getElementById("cryptGrid");
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    for (let r = 0; r < 6; r++) {
        const rowFrame = document.createElement("div");
        rowFrame.className = "crypt-row";
        rowFrame.setAttribute("data-row-index", r);

        for (let t = 0; t < 5; t++) {
            const tileNode = document.createElement("div");
            tileNode.className = "crypt-tile";
            tileNode.setAttribute("data-tile-index", t);
            rowFrame.appendChild(tileNode);
        }
        gridContainer.appendChild(rowFrame);
    }
    updatePulsingCursorTrack();
}

/**
 * Updates the pulsing bottom-border cursor element state cleanly
 */
function updatePulsingCursorTrack() {
    document.querySelectorAll(".crypt-tile").forEach(tile => tile.classList.remove("active-cursor"));
    
    if (systemGameLockedStateFlag || currentActiveAttemptRow >= 6) return;

    if (currentTileCharacterIndex < 5) {
        const targetRow = document.querySelector(`.crypt-row[data-row-index="${currentActiveAttemptRow}"]`);
        if (targetRow) {
            const targetTile = targetRow.querySelector(`.crypt-tile[data-tile-index="${currentTileCharacterIndex}"]`);
            if (targetTile) targetTile.classList.add("active-cursor");
        }
    }
}

/**
 * Fetch a massive, complete list of 5-letter English words for genuine dictionary validation
 */
async function fetchMasterEnglishDictionary() {
    try {
        // Connects to a complete public open-source repository of verified 5-letter words
        const response = await fetch("https://raw.githubusercontent.com/tabatkins/wordle-list/main/words");
        const rawTextData = await response.text();
        
        rawTextData.split("\n").forEach(word => {
            let cleanWord = word.trim().toUpperCase();
            if (cleanWord.length === 5) {
                trueEnglishDictionary.add(cleanWord);
            }
        });
        
        // Safety insurance logic: make sure the secret target word itself is explicitly authorized
        trueEnglishDictionary.add(TARGET_SECRET_WORD.toUpperCase());
        console.log(`✨ True dictionary loaded: ${trueEnglishDictionary.size} real English words compiled.`);
    } catch (err) {
        console.error("Dictionary download interrupted. Reverting to basic backup validation: ", err);
        // Instant backup list if local client network blocks Github raw domains
        ["DRINK", "VERSE", "CRYPT", "POEMS", "LIGHT", "ROUGE", "STAGE", "TRAIN", "CLOUDS"].forEach(w => trueEnglishDictionary.add(w));
    }
}

function displayMinimalistToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

/**
 * Handle incoming character stroke inputs securely
 */
function processCharacterInput(letter) {
    if (systemGameLockedStateFlag || currentTileCharacterIndex >= 5) return;

    const targetRow = document.querySelector(`.crypt-row[data-row-index="${currentActiveAttemptRow}"]`);
    if (!targetRow) return;

    const targetTile = targetRow.querySelector(`.crypt-tile[data-tile-index="${currentTileCharacterIndex}"]`);
    if (targetTile) {
        targetTile.innerText = letter;
        currentGuessStringPayload += letter;
        currentTileCharacterIndex++;
        updatePulsingCursorTrack();
    }
}

function executeDeleteSequence() {
    if (systemGameLockedStateFlag || currentTileCharacterIndex === 0) return;

    currentTileCharacterIndex--;
    currentGuessStringPayload = currentGuessStringPayload.slice(0, -1);

    const targetRow = document.querySelector(`.crypt-row[data-row-index="${currentActiveAttemptRow}"]`);
    if (targetRow) {
        const targetTile = targetRow.querySelector(`.crypt-tile[data-tile-index="${currentTileCharacterIndex}"]`);
        if (targetTile) {
            targetTile.innerText = "";
        }
    }
    updatePulsingCursorTrack();
}

async function validateSubmissionPackage() {
    if (systemGameLockedStateFlag) return;

    const targetRow = document.querySelector(`.crypt-row[data-row-index="${currentActiveAttemptRow}"]`);
    if (!targetRow) return;

    if (currentGuessStringPayload.length < 5) {
        displayMinimalistToast("⚠️ Not enough character traces inside index.");
        targetRow.classList.add("shake");
        setTimeout(() => targetRow.classList.remove("shake"), 400);
        return;
    }

    // TRUE COMPREHENSIVE DICTIONARY VALIDATION CHECK
    if (!trueEnglishDictionary.has(currentGuessStringPayload)) {
        displayMinimalistToast(`⚠️ "${currentGuessStringPayload}" is not a valid word.`);
        targetRow.classList.add("shake");
        setTimeout(() => targetRow.classList.remove("shake"), 400);
        return; // Halts right here so fake inputs do not penalize attempts or deduct guesses!
    }

    // Word is validated and real! Proceed with game logic evaluations
    evaluateRowColorFeedback(targetRow);
}

function evaluateRowColorFeedback(rowElement) {
    const tiles = rowElement.querySelectorAll(".crypt-tile");
    let secretTrackingArray = TARGET_SECRET_WORD.split("");
    let statusLogResultsArray = Array(5).fill("charcoal");

    // Pass 1: Tag direct sage green positions
    for (let i = 0; i < 5; i++) {
        if (currentGuessStringPayload[i] === secretTrackingArray[i]) {
            statusLogResultsArray[i] = "sage-green";
            secretTrackingArray[i] = null;
        }
    }

    // Pass 2: Tag misplaced gold elements
    for (let i = 0; i < 5; i++) {
        if (statusLogResultsArray[i] !== "sage-green") {
            const targetMatchIndex = secretTrackingArray.indexOf(currentGuessStringPayload[i]);
            if (targetMatchIndex !== -1) {
                statusLogResultsArray[i] = "muted-gold";
                secretTrackingArray[targetMatchIndex] = null;
            }
        }
    }

    // Apply colored identity transformations across cells
    tiles.forEach((tile, idx) => {
        setTimeout(() => {
            tile.style.transition = "background-color 0.4s ease, border-color 0.4s ease";
            if (statusLogResultsArray[idx] === "sage-green") {
                tile.style.backgroundColor = "#7d8f7a";
                tile.style.borderColor = "#7d8f7a";
            } else if (statusLogResultsArray[idx] === "muted-gold") {
                tile.style.backgroundColor = "#bfa36f";
                tile.style.borderColor = "#bfa36f";
            } else {
                tile.style.backgroundColor = "#222";
                tile.style.borderColor = "rgba(255,255,255,0.05)";
            }
        }, idx * 100);
    });

    if (currentGuessStringPayload === TARGET_SECRET_WORD) {
        systemGameLockedStateFlag = true;
        document.getElementById("gamePromptLabel").innerText = "✨ Access Granted. The inner vault chambers dissolve open.";
        displayMinimalistToast("🎉 Crypt Deciphered Successfully!");
        updatePulsingCursorTrack();
        return;
    }

    currentActiveAttemptRow++;
    currentTileCharacterIndex = 0;
    currentGuessStringPayload = "";

    if (currentActiveAttemptRow >= 6) {
        systemGameLockedStateFlag = true;
        document.getElementById("gamePromptLabel").innerText = `❌ Vault Sealed. The correct token phrase was ${TARGET_SECRET_WORD}.`;
        displayMinimalistToast("⚠️ Crypt lockdown sequence engaged.");
    }
    
    updatePulsingCursorTrack();
}

// Bind Hardware Input Listeners
document.addEventListener("keydown", (e) => {
    if (systemGameLockedStateFlag) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.key === "Enter") {
        validateSubmissionPackage();
    } else if (e.key === "Backspace" || e.key === "Delete") {
        executeDeleteSequence();
    } else if (/^[a-zA-Z]$/.test(e.key)) {
        processCharacterInput(e.key.toUpperCase());
    }
});

// Bind On-Screen Virtual Click Interaction Keypads
document.addEventListener("DOMContentLoaded", async () => {
    initializeCryptMatrixFrame();
    await fetchMasterEnglishDictionary(); // Launch global vocabulary cache instantly

    document.querySelectorAll(".kb-key").forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const actionKey = button.getAttribute("data-key");

            if (actionKey === "ENTER") {
                validateSubmissionPackage();
            } else if (actionKey === "DELETE") {
                executeDeleteSequence();
            } else if (actionKey) {
                processCharacterInput(actionKey.toUpperCase());
            }
        });
    });
});