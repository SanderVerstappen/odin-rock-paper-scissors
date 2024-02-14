const options = ["rock", "paper", "scissors",];


function getComputerChoice() {
  const randomChoice = options[Math.floor(Math.random() * options.length)];
  return randomChoice;
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ){
    return "Player";
  }
  else {
    return "Computer";
  }
}


function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie"
  }
  else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  }
  else {
    return `You lose!. ${computerSelection} beats ${playerSelection}`
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;
  console.log("Game starts!")
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("------------------------------");
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
  }
  console.log("Game Over")
  if (playerScore > computerScore) {
    console.log("Player won the game!")
  }
  else if (computerScore > playerScore) {
    console.log("Computer won the game!")
  }
  else {
    console.log("The game was a Tie!")
  }
}

game();
