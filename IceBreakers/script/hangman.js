let secretWord = '';
let displayedWord = [];
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;  

function submitWord() {
    secretWord = document.getElementById('wordToGuess').value.toUpperCase();
    document.getElementById('wordToGuess').value = ''; // Clear input field
    document.getElementById('wordSubmissionSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    displayedWord = Array(secretWord.length).fill('_');
    updateWordDisplay();
}

function submitLetter() {
    const letter = document.getElementById('letterInput').value.toUpperCase();
    document.getElementById('letterInput').value = ''; // Clear input field
    if (guessedLetters.includes(letter) || letter === '') {
    }
    guessedLetters.push(letter);
    if (secretWord.includes(letter)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
        updateWordDisplay();
    } else {
        // Wrong guess
        mistakes++;
        updateHangmanImage();
    }
    updateGuessedLetters();
    checkGameStatus();
}

function updateWordDisplay() {
    document.getElementById('wordDisplay').textContent = displayedWord.join(' ');
}

function updateGuessedLetters() {
    document.getElementById('lettersGuessed').textContent = `Guessed Letters: ${guessedLetters.join(', ')}`;
}

function updateHangmanImage() {
    document.getElementById('hangmanProgressImg').src = `images/hangman${mistakes}.svg`;
}

function checkGameStatus() {
    if (mistakes >= maxMistakes) {
        document.getElementById('gameStatus').innerHTML = `Game Over! The word was: <strong>${secretWord}</strong>`;
        document.getElementById('letterInput').disabled = true;
    } else if (!displayedWord.includes('_')) {
        document.getElementById('gameStatus').innerHTML = `<strong>Congratulations!</strong> You guessed the word: <strong>${secretWord}</strong>`;
        document.getElementById('letterInput').disabled = true;
    }
}


function checkGameStatus() {
    if (mistakes >= maxMistakes) {
        document.getElementById('gameStatus').innerHTML = `Game Over! The word was: <strong>${secretWord}</strong>`;
        document.getElementById('letterInput').disabled = true;
    } else if (!displayedWord.includes('_')) {
        document.getElementById('gameStatus').innerHTML = `<strong>Congratulations!</strong> You guessed the word: <strong>${secretWord}</strong>`;
        document.getElementById('letterInput').disabled = true;
    }
    if (mistakes >= maxMistakes || !displayedWord.includes('_')) {
        document.getElementById('restartButton').style.display = 'block'; // Show the restart button
    }
}

function resetGame() {
    secretWord = '';
    displayedWord = [];
    guessedLetters = [];
    mistakes = 0;
    
    document.getElementById('gameStatus').innerHTML = '';
    document.getElementById('lettersGuessed').textContent = '';
    
    document.getElementById('hangmanProgressImg').src = 'images/hangman0.svg';
    
    document.getElementById('letterInput').disabled = false;
    
    document.getElementById('restartButton').style.display = 'none';
    
    document.getElementById('wordSubmissionSection').style.display = 'block';
    document.getElementById('gameSection').style.display = 'none';
}


