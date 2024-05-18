document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const startButton = document.getElementById('start');
    const humanScoreElement = document.getElementById('human-score');
    const computerScoreElement = document.getElementById('computer-score');
    const resultMessage = document.getElementById('result-message')


    let humanScore = 0;
    let computerScore = 0;
    let gamePlayed = 0;

    function getComputerChoice() {
        let randomNum = Math.floor(Math.random() * 3);
        return randomNum === 1 ? 'ROCK' : randomNum === 2 ? 'PAPER' : 'SCISSORS';
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            resultMessage.textContent = `TIE! Both chose ${humanChoice}`;
        } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') || 
                    (humanChoice === 'PAPER' && computerChoice ==='SCISSORS') ||
                    (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {

            computerScore++;
            resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        } else {
            humanScore++;
            resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        }

        updateScores();
        gamePlayed++;

        if (gamePlayed === 7) {
            determineWinner();
            disableGameOptions();
        }
    }
    
    function updateScores() {
        humanScoreElement.textContent = `Human score: ${humanScore}`;
        computerScoreElement.textContent = `Computer score:${computerScore};`
    }

    function determineWinner() {
        if (humanScore > computerScore) {
            resultMessage.textContent = `You win the series! Final Score: Human ${humanScore} - Computer ${computerScore}`;
        } else if (computerScore > humanScore) {
            resultMessage.textContent = `You lose the series! Final Score: Human ${humanScore} - Computer ${computerScore}`;
        } else {
            resultMessage.textContent = `The series is a tie! Final Score: Human ${humanScore} - Computer ${computerScore}`;
        }
    }

    function disableGameOptions() {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    function enableGameOptions() {
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }


    rock.addEventListener('click', () => playRound('ROCK'));
    paper.addEventListener('click', () => playRound('PAPER'));
    scissors.addEventListener('click', () => playRound('SCISSORS'));

    startButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        resultMessage.textContent = '';
        updateScores();
        enableGameOptions();
    })
});