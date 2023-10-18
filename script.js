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
function getPlayerChoice(){
      let playerChoice = prompt("Rock, Paper, or Scissors?")
      return playerChoice.toLowerCase();
}
let player;
let computer;
let playerScore = 0;
let computerScore = 0;
function playRound(){
    switch(player){
        case 'rock':
            if (computer === 'scissors'){
                alert("You win! Rock beats Scissors!")
                playerScore += 1;
                break;
            }
            else if (computer === 'paper'){
                alert("You lose! Paper beats Rock!")
                computerScore += 1;
                break;
            }
            else {
                  alert("Draw!");
                  break;
            }
          case 'paper':
            if (computer === 'scissors') {
                alert("You lose! Scissors beat Paper!")
                computerScore += 1;
                break;
            }
            else if (computer === 'rock') {
                alert("You win! Paper beats Rock!")
                playerScore += 1;
                break;
            }
            else {
                alert("Draw!");
                break;
            }
          case 'scissors':
            if (computer === 'paper') {
                alert("You win! Scissors beat Paper!")
                playerScore += 1;
                break
            }
            else if (computer === 'rock') {
                alert("You lose! Rock beats Scissors")
                computerScore += 1;
                break;
            }
            else {
                alert("Draw!");
                break;
            }
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`)
}
function determineWinner(){
    if (playerScore > computerScore){
        console.log("You Win!");
    }
    else if (playerScore < computerScore) {
        console.log("You Lose!");
    }
    else {
          console.log("Draw!");
    }
}
function game(){
    for (let i = 1; i <= 5; i++){
        console.log(`Round ${i}: `);
        player = getPlayerChoice();
        computer = getComputerChoice();
        playRound();
    }
    determineWinner();
}

game();