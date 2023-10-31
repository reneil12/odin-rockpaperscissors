function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3) + 1
    switch(randomNum){
      case 1:
          computerChoice = 'rock';
          return computerChoice;
      case 2:
          computerChoice = 'paper';
          return computerChoice;
      default:
          computerChoice = 'scissors';
          return computerChoice;
    }
}

const playerChoice = document.querySelectorAll(".btn");
    playerChoice.forEach((pChoice) =>  {
        function getPlayerChoice() {
            console.log(pChoice.value);
            player = pChoice.value;
            game();
        }
    pChoice.addEventListener('click', getPlayerChoice);
});

const resetButton = document.querySelector('.reset-btn')
resetButton.disabled = true;
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = originalResultText;
    scoreText.textContent = originalScoreText;
    winnerText.textContent = originalWinnerText;
    resetButton.disabled = true;
        playerChoice.forEach((button) => {
            button.disabled = false;
        })

})

let player;
let computer;
let playerScore = 0;
let computerScore = 0;
const resultText = document.querySelector('.result');
const scoreText = document.querySelector('.score');
const winnerText = document.querySelector('.winner');
const originalResultText = resultText.textContent;
const originalScoreText = scoreText.textContent;
const originalWinnerText = winnerText.textContent;


function playRound(){
    switch(player){
        case 'rock':
            if (computer === 'scissors'){
                resultText.textContent = "You win! Rock beats Scissors!";
                playerScore += 1;
                break;
            }
            else if (computer === 'paper'){
                resultText.textContent = "You lose! Paper beats Rock!";
                computerScore += 1;
                break;
            }
            else {
                resultText.textContent = "Draw!";
                  break;
            }
          case 'paper':
            if (computer === 'scissors') {
                resultText.textContent = "You lose! Scissors beat Paper!"
                computerScore += 1;
                break;
            }
            else if (computer === 'rock') {
                resultText.textContent = "You win! Paper beats Rock!"
                playerScore += 1;
                break;
            }
            else {
                resultText.textContent = "Draw!";
                break;
            }
          case 'scissors':
            if (computer === 'paper') {
                resultText.textContent = "You win! Scissors beat Paper!"
                playerScore += 1;
                break
            }
            else if (computer === 'rock') {
                resultText.textContent = "You lose! Rock beats Scissors"
                computerScore += 1;
                break;
            }
            else {
                resultText.textContent = "Draw!";
                break;
            }
    }
    scoreText.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}
function determineWinner(){
    if (playerScore === 5 || computerScore === 5){
        resetButton.disabled = false;
        playerChoice.forEach((button) => {
            button.disabled = true;
        })

        if (playerScore > computerScore){
            winnerText.textContent = "Player Wins!";
        }
        else {
            winnerText.textContent = "Computer Wins!";
        }
    }   
}
function game(){
    computer = getComputerChoice();
    playRound();
    determineWinner();
}


