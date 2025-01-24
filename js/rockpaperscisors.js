let playerScore = 0;
let computerScore = 0;

let btns = document.querySelectorAll('button');
btns.forEach(btn => {
    let playerInput;
    btn.addEventListener('click',() => {
        playerInput = btn.dataset.element;
        // console.log(playerInput);
        playGame(playerInput);
    });
    
});
 
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

function domManipulation(announce) {
    let result = document.querySelector('.announcement');
    result.innerHTML = announce;
}

function getPlayerChoice() {
    // let playerInput = prompt('Enter rock, paper or scissor: ').toLowerCase();
    
     console.log(playerInput);

    if (['rock', 'paper', 'scissor'].includes(playerInput)) {
        return playerInput;
    }else {
        console.log("Please pick from the choices given");
        return getPlayerChoice();
    }
    return playerInput;

}
console.log(getPlayerChoice());



function gameLogic(playerInput) {
    let computerChoice = getComputerChoice();
    let playerChoice = playerInput;
    console.log(computerChoice);


    if(playerChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You lose`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You lose');
        // console.log(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You lose`);
    }else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        playerScore++;
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You win`);
        console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You win');
    }else if (playerChoice === 'rock' && computerChoice === 'rock') {
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br> Tie`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'Tie');
    }
    
    if(playerChoice === 'paper' && computerChoice === 'paper'){
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  Tie!`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'Tie');
    }else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        computerScore++;
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You lose`);
        console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You lose');
    }else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You win`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You win');
    }
    
    if(playerChoice === 'scissor' && computerChoice === 'paper'){
        playerScore++;
        // domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You win`);
        console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You win');
    }else if (playerChoice === 'scissor' && computerChoice === 'scissor') {
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  Tie`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'Tie');
    }else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        computerScore++;
        domManipulation(`Computer picked:   ${computerChoice} <br>  Player picked:   ${playerChoice}  <br>  You lose`);
        // console.log('Computer picked: ' + computerChoice + '<br>' + 'Player picked: ' + playerChoice + '<br>' + 'You lose');
    }
    
    // console.log('Score <br>' + 'Computer ' + computerScore + '<br>' + 'Player ' + playerScore);
    let scoreBoard = document.querySelector('.score');
    scoreBoard.innerHTML = `<h2>Score</h2> Computer ${computerScore} <br> Player  ${playerScore}`;
}

function playGame(playerInput) {
    gameLogic(playerInput);
}
console.log(getComputerChoice());
playGame();
