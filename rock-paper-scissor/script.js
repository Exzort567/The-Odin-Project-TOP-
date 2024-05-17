function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum === 1 ? "ROCK" : randomNum === 2 ? "PAPER" :  "SCISSORS";
}

function getHumanChoice() {
    return prompt("Please enter 'rock', 'paper', 'scissors: '");
}
