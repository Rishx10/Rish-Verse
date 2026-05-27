// ==========================================================================
// CRYPT INTERACTIVE GAME MECHANICS ENGINE WITH MOBILE NATIVE DUAL-INPUTS
// ==========================================================================

const POEM_ANSWERS = Object.keys(CRYPT_DICTIONARY);
let SECRET_WORD = POEM_ANSWERS[Math.floor(Math.random() * POEM_ANSWERS.length)];
const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

let currentAttempt = 0;
let userGuess = "";
let isGameOver = false;
let hintsUsed = 0;

document.addEventListener("DOMContentLoaded", () => {
    initializeGrid();
    initializeKeyboard();
    setupRulesModal();
    setupHintSystem();
    setupMobileInputSystem();

    // Balanced desktop event typing listener fallback
    document.addEventListener("keydown", (e) => {
        if (isGameOver) return;
        
        const modal = document.getElementById("rules-modal");
        if (modal && modal.classList.contains("active")) return;
        
        // Shut engine context typing down if dimensions evaluate as phone size
        if (window.innerWidth <= 480) return;

        if (e.key === "Enter") {
            processGuessSubmit();
        } else if (e.key === "Backspace") {
            processBackspace();
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            injectLetterTile(e.key);
        }
    });
});

// SYSTEM LINK TO NATIVE SYSTEM PHONE KEYBOARD HOOK
function setupMobileInputSystem() {
    const hiddenInput = document.getElementById("mobile-keyboard-trigger");
    const gridContainer = document.getElementById("wordle-grid");

    if (!hiddenInput || !gridContainer) return;

    // Open native mobile keyboard whenever layout background space area is tapped
    document.addEventListener("click", (e) => {
        const modal = document.getElementById("rules-modal");
        if (modal && modal.classList.contains("active")) return;
        if (e.target.closest("header") || e.target.closest("footer") || e.target.id === "hint-btn" || e.target.id === "open-rules") return;

        if (!isGameOver && window.innerWidth <= 480) {
            hiddenInput.focus();
        }
    });

    // Automatically trigger focused device popups right after rules overlay exits
    const closeBtn = document.getElementById("close-rules");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (window.innerWidth <= 480) {
                setTimeout(() => hiddenInput.focus(), 400);
            }
        });
    }

    // BULLETPROOF MOBILE BACKSPACE & ENTER INTERCEPTOR
    hiddenInput.addEventListener("keydown", (e) => {
        if (window.innerWidth <= 480) {
            if (e.key === "Backspace") {
                e.preventDefault(); // Stop default input layout behavior
                processBackspace();
                hiddenInput.value = userGuess; // Keep hidden buffer perfectly synced
            } else if (e.key === "Enter") {
                e.preventDefault();
                processGuessSubmit();
                hiddenInput.value = userGuess;
            }
        }
    });

    // Intercept software alphanumeric stream arrays from active devices
    hiddenInput.addEventListener("input", (e) => {
        if (isGameOver || window.innerWidth > 480) {
            hiddenInput.value = "";
            return;
        }

        const dataValue = e.data;
        
        // Handle standard character additions
        if (dataValue && /^[a-zA-Z]$/.test(dataValue)) {
            if (userGuess.length < WORD_LENGTH) {
                injectLetterTile(dataValue);
            }
        } 
        
        // Safety secondary calculation loop fallback for variable mobile delete triggers
        if (hiddenInput.value.length < userGuess.length) {
            processBackspace();
        }
        
        hiddenInput.value = userGuess;
    });
}

function setupHintSystem() {
    const hintBtn = document.getElementById("hint-btn");
    const hintBox = document.getElementById("hint-display-box");
    const hintText = document.getElementById("hint-text");

    if (!hintBtn || !hintText) return;

    hintBtn.addEventListener("click", () => {
        if (isGameOver || hintsUsed >= 3) return;

        hintsUsed++;
        const currentClues = CRYPT_DICTIONARY[SECRET_WORD];
        const selectedClueText = currentClues[hintsUsed - 1];

        hintText.style.opacity = "0";

        setTimeout(() => {
            hintText.innerText = `Hint #${hintsUsed}: "${selectedClueText}"`;
            hintText.classList.add("reveal-mode");
            hintBox.classList.add("active");
            hintText.style.opacity = "1";
            
            if (window.innerWidth <= 480) {
                document.getElementById("mobile-keyboard-trigger").focus();
            }
        }, 200);

        if (hintsUsed === 1) {
            hintBtn.innerText = "Unlock Next Hint (2 Left)";
        } else if (hintsUsed === 2) {
            hintBtn.innerText = "Unlock Final Hint (1 Left)";
        } else if (hintsUsed === 3) {
            hintBtn.innerText = "No Hints Remaining";
            hintBtn.disabled = true;
        }
    });
}

function setupRulesModal() {
    const modal = document.getElementById("rules-modal");
    const openBtn = document.getElementById("open-rules");
    const closeBtn = document.getElementById("close-rules");

    if (!modal) return;

    setTimeout(() => {
        modal.classList.add("active");
    }, 600);

    if (openBtn) openBtn.addEventListener("click", () => modal.classList.add("active"));
    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
}

function initializeGrid() {
    const gridContainer = document.getElementById("wordle-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        for (let j = 0; j < WORD_LENGTH; j++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            tile.setAttribute("id", `row-${i}-tile-${j}`);
            row.appendChild(tile);
        }
        gridContainer.appendChild(row);
    }
}

function initializeKeyboard() {
    const keyboardContainer = document.getElementById("keyboard-container");
    if (!keyboardContainer) return;

    keyboardContainer.innerHTML = "";

    const keyRows = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]
    ];

    keyRows.forEach(rowData => {
        const rowElement = document.createElement("div");
        rowElement.classList.add("keyboard-row");

        rowData.forEach(keyText => {
            const button = document.createElement("button");
            button.innerText = keyText;
            button.classList.add("key");
            button.setAttribute("id", `key-${keyText.toUpperCase()}`);
            
            if (keyText === "ENTER" || keyText === "DELETE") {
                button.classList.add("large");
            }

            button.addEventListener("click", () => handleVirtualKeyPress(keyText));
            rowElement.appendChild(button);
        });
        keyboardContainer.appendChild(rowElement);
    });
}

function handleVirtualKeyPress(key) {
    if (isGameOver) return;
    const modal = document.getElementById("rules-modal");
    if (modal && modal.classList.contains("active")) return;

    if (key === "ENTER") {
        processGuessSubmit();
    } else if (key === "DELETE") {
        processBackspace();
    } else {
        injectLetterTile(key);
    }
}

function injectLetterTile(letter) {
    if (userGuess.length >= WORD_LENGTH) return;
    userGuess += letter.toUpperCase();
    const activeTile = document.getElementById(`row-${currentAttempt}-tile-${userGuess.length - 1}`);
    if (activeTile) {
        activeTile.innerText = letter.toUpperCase();
        activeTile.classList.add("pop");
    }
}

// Fixed desktop typing reset sync parameters
function processBackspace() {
    if (userGuess.length === 0) return;
    const activeTile = document.getElementById(`row-${currentAttempt}-tile-${userGuess.length - 1}`);
    if (activeTile) {
        activeTile.innerText = "";
        activeTile.classList.remove("pop");
    }
    userGuess = userGuess.slice(0, -1);
}

function showCryptToast(message, duration = 3500) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = "none"; 
        toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-12px) scale(0.95)";
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

function processGuessSubmit() {
    if (userGuess.length < WORD_LENGTH) {
        showCryptToast("⚠️ Inside the crypt, words require 5 characters.");
        return;
    }

    const secretArray = SECRET_WORD.split("");
    const guessArray = userGuess.split("");
    
    const tileColors = Array(WORD_LENGTH).fill("#252525"); 
    const keyUpdates = {}; 

    guessArray.forEach((letter, idx) => {
        if (letter === secretArray[idx]) {
            tileColors[idx] = "#7d8f7a"; 
            keyUpdates[letter] = "#7d8f7a";
            secretArray[idx] = null;
            guessArray[idx] = null;
        }
    });

    guessArray.forEach((letter, idx) => {
        if (letter === null) return;
        const secretIdx = secretArray.indexOf(letter);
        if (secretIdx > -1) {
            tileColors[idx] = "#ad9363"; 
            if (keyUpdates[letter] !== "#7d8f7a") {
                keyUpdates[letter] = "#ad9363";
            }
            secretArray[secretIdx] = null;
        } else {
            if (!keyUpdates[letter]) {
                keyUpdates[letter] = "#202020";
            }
        }
    });

    // Capture the submission snapshot guess string context right now before looping clears it out
    const activeSubmittedGuess = userGuess;

    for (let i = 0; i < WORD_LENGTH; i++) {
        const tile = document.getElementById(`row-${currentAttempt}-tile-${i}`);
        
        setTimeout(() => {
            tile.classList.add("flip");
            
            setTimeout(() => {
                tile.classList.remove("flip");
                tile.style.background = tileColors[i];
                tile.style.borderColor = tileColors[i];
                tile.classList.add("reveal");
                
                const letter = activeSubmittedGuess[i];
                const keyElement = document.getElementById(`key-${letter}`);
                if (keyElement && keyUpdates[letter]) {
                    keyElement.style.background = keyUpdates[letter];
                    keyElement.style.borderColor = keyUpdates[letter];
                    keyElement.style.color = "#fff";
                }
            }, 250);
        }, i * 150); 
    }

    const totalAnimationTime = (WORD_LENGTH * 150) + 250;
    setTimeout(() => {
        if (activeSubmittedGuess === SECRET_WORD) {
            showCryptToast("🌒 Crypt Deciphered Successfully. Your soul aligns with the verse.", 4500);
            isGameOver = true;
            document.getElementById("hint-btn").disabled = true;

            // DYNAMIC AUTOMATIC RESET LOOP (5 SECONDS BUFFER)
            setTimeout(() => {
                showCryptToast("🔄 The layout resets... rolling a new verse fragment.", 3000);
                resetCryptGame();
            }, 5000);
            return;
        }

        currentAttempt++;
        userGuess = "";
        
        if (window.innerWidth <= 480) {
            document.getElementById("mobile-keyboard-trigger").value = "";
        }

        if (currentAttempt >= MAX_ATTEMPTS) {
            showCryptToast(`🔒 The lock mechanism froze. The secret keyword was: **${SECRET_WORD}**`, 4500);
            isGameOver = true;
            document.getElementById("hint-btn").disabled = true;

            // DYNAMIC AUTOMATIC RESET LOOP (5 SECONDS BUFFER)
            setTimeout(() => {
                showCryptToast("🔄 The vault cycles... a new keyword emerges.", 3000);
                resetCryptGame();
            }, 5000);
        }
    }, totalAnimationTime);
}

// COMPREHENSIVE AUTOMATIC GAME RESET MATRIX
function resetCryptGame() {
    // 1. Roll a completely new secret keyword out of your words.js list
    const answersPool = Object.keys(CRYPT_DICTIONARY);
    SECRET_WORD = answersPool[Math.floor(Math.random() * answersPool.length)];
    
    // 2. Clear core logical state parameters
    currentAttempt = 0;
    userGuess = "";
    isGameOver = false;
    hintsUsed = 0;

    // 3. Clear the main board layout grid tiles completely
    initializeGrid();

    // 4. Reset virtual keyboard keycap structural backdrops to original states
    initializeKeyboard();

    // 5. Reset the Hint Display Controller text box & interactive button setup
    const hintBtn = document.getElementById("hint-btn");
    const hintBox = document.getElementById("hint-display-box");
    const hintText = document.getElementById("hint-text");

    if (hintBtn && hintBox && hintText) {
        hintBtn.innerText = "Unlock Hint (3 Left)";
        hintBtn.disabled = false;
        hintBox.classList.remove("active");
        hintText.innerText = "The crypt box hums silently... seek clues below if you lose your way.";
        hintText.classList.remove("reveal-mode");
    }

    // 6. Clear device buffer captures if running phone view layouts
    if (window.innerWidth <= 480) {
        const mobileTrigger = document.getElementById("mobile-keyboard-trigger");
        if (mobileTrigger) {
            mobileTrigger.value = "";
            mobileTrigger.focus(); // Returns mobile soft focus smoothly back to layout
        }
    }
}