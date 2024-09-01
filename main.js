const vocabulary = [
    {
        word: "to be / sein",
        englishPresent: "is",
        englishPreterit: "was",
        englishPerfect: "been",
        germanPresent: "ist",
        germanImperfect: "war",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gewesen",
    },
    {
        word: "to have / haben",
        englishPresent: "has",
        englishPreterit: "had",
        englishPerfect: "had",
        germanPresent: "hat",
        germanImperfect: "hatte",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gehabt",
    },
    {
        word: "to go / gehen",
        englishPresent: "goes",
        englishPreterit: "went",
        englishPerfect: "gone",
        germanPresent: "geht",
        germanImperfect: "ging",
        germanAuxiliary: "ist", // Correct auxiliary verb
        germanPerfect: "gegangen",
    },
    {
        word: "to read / lesen",
        englishPresent: "reads",
        englishPreterit: "read",
        englishPerfect: "read",
        germanPresent: "liest",
        germanImperfect: "las",
        germanAuxiliary: "hat", // Correct auxiliary verb
        germanPerfect: "gelesen",
    },
    // Add more words and their conjugations here
];

let currentWordIndex = 0;

function displayWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = vocabulary[currentWordIndex].word;
}

function checkConjugation() {
    const englishPresentInput = document.getElementById("english-present").value.trim().toLowerCase();
    const englishPreteritInput = document.getElementById("english-preterit").value.trim().toLowerCase();
    const englishPerfectInput = document.getElementById("english-perfect").value.trim().toLowerCase();
    const germanPresentInput = document.getElementById("german-present").value.trim().toLowerCase();
    const germanImperfectInput = document.getElementById("german-imperfect").value.trim().toLowerCase();
    const germanAuxiliaryInput = document.getElementById("german-auxiliary").value.trim().toLowerCase();
    const germanPerfectInput = document.getElementById("german-perfect").value.trim().toLowerCase();

    const currentWord = vocabulary[currentWordIndex];

    // Check all conditions
    const isEnglishCorrect = englishPresentInput === currentWord.englishPresent.toLowerCase() && englishPreteritInput === currentWord.englishPreterit.toLowerCase() && englishPerfectInput === currentWord.englishPerfect.toLowerCase();

    const isGermanCorrect =
        germanPresentInput === currentWord.germanPresent.toLowerCase() &&
        germanImperfectInput === currentWord.germanImperfect.toLowerCase() &&
        germanAuxiliaryInput === currentWord.germanAuxiliary.toLowerCase() && // Check auxiliary verb
        germanPerfectInput === currentWord.germanPerfect.toLowerCase();

    if (isEnglishCorrect && isGermanCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

function nextWord() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * vocabulary.length);

    // Ensure the new word is different from the current one
    while (randomIndex === currentWordIndex && vocabulary.length > 1) {
        randomIndex = Math.floor(Math.random() * vocabulary.length);
    }

    currentWordIndex = randomIndex;
    displayWord();
    clearInputs();
}

function clearInputs() {
    document.getElementById("english-present").value = "";
    document.getElementById("english-preterit").value = "";
    document.getElementById("english-perfect").value = "";
    document.getElementById("german-present").value = "";
    document.getElementById("german-imperfect").value = "";
    document.getElementById("german-auxiliary").value = "";
    document.getElementById("german-perfect").value = "";
}

document.getElementById("submit-button").addEventListener("click", () => {
    checkConjugation();
    setTimeout(nextWord, 2000); // Move to the next word after 2 seconds
});

document.getElementById("next-word-button").addEventListener("click", () => {
    nextWord();
});

// Initialize the first word display
displayWord();
