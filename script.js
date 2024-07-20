const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const attemptCountElem = document.getElementById('attemptCount');
const attemptsDiv = document.getElementById('attempts');

let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptCountElem.textContent = attempts;
    message.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    resetButton.style.display = 'none';
    attemptsDiv.style.display = 'none';
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptCountElem.textContent = attempts;
    attemptsDiv.style.display = 'block';

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts. 🎉`;
        submitButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        message.textContent = '📉 Too low! Try again.';
    } else if (userGuess > randomNumber) {
        message.textContent = '📈 Too high! Try again.';
    }
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', startGame);

// Start the game when the page loads
startGame();
