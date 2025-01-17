function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return 'rock';
    }else if (computerChoice === 1) {
        return 'scissor';
    }else {
        return 'paper';
    }
}

function getPlayerChoice() {
    let playerInput = prompt('Enter rock, paper or scissor: ').toLowerCase();

    if (['rock', 'paper', 'scissor'].includes(playerInput)) {
        return playerInput;
    }else {
        alert("Please pick from the choices given");
        return getPlayerChoice();
    }
}

let playerScore = 0;
let computerScore = 0;

function gameLogic() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();


    if(playerChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You lose');
    }else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        playerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You win');
    }else if (playerChoice === 'rock' && computerChoice === 'rock') {
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'Tie');
    }
    
    if(playerChoice === 'paper' && computerChoice === 'paper'){
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'Tie');
    }else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        computerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You lose');
    }else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You win');
    }
    
    if(playerChoice === 'scissor' && computerChoice === 'paper'){
        playerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You win');
    }else if (playerChoice === 'scissor' && computerChoice === 'scissor') {
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'Tie');
    }else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        computerScore++;
        alert('Computer picked: ' + computerChoice + '\n' + 'Player picked: ' + playerChoice + '\n' + 'You lose');
    }
    
    console.log('Score \n' + 'Computer ' + computerScore + '\n' + 'Player ' + playerScore);
}

function playGame() {
    let round = 0;

    while (round < 5) {
        gameLogic();
        round++;
    }
}
console.log(getComputerChoice());
playGame();
