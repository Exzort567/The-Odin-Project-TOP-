function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum === 1 ? "ROCK" : randomNum === 2 ? "PAPER" :  "SCISSORS";
}

function getHumanChoice() {
    return prompt("Please enter 'rock', 'paper', 'scissors: '");
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    
    const humanSelection = function () { return getHumanChoice().toUpperCase(); }
    const computerSelection = function () { return getComputerChoice(); }


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('TIE');
        } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
            computerScore++;
            console.log('You loose! Paper beats Rock.');
        } else if (humanChoice === 'PAPER' && computerChoice ==='ROCK') {
            humanScore++;
            console.log('You win! Paper beats Rock.');
        } else if (humanChoice === 'PAPER' && computerChoice ==='SCISSORS') {
            computerScore++;
            console.log('You loose! Scissors beat Paper');
        } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
            humanScore++;
            console.log('You win! Scissors beats Paper');
        } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
            humanScore++;
            console.log('You win! Rock beats Scissors.');
        } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
            computerScore++;
            console.log('You loose! Rock beats Scissors.');
        } else {
            console.log(humanChoice + ' is not a correct value. Please enter ROCK, PAPER, SCISSORS')
        }

    }
    

    for (i = 1; i <= 5; i++) {
        console.log('Game: ' + i);
        playRound(humanSelection(), computerSelection());
    }

    if (humanScore > computerScore) {
        console.log('You win! The total score is ' + humanScore + ' ' + computerScore);
    } else {
        console.log('You loose! The total score is ' + computerScore + ' ' + humanScore);
    }

}

playGame();






