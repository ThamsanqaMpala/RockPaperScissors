



/*const btn = document.getElementById("compValue")

btn.addEventListener('click', getComputerChoice());
*/



function getComputerChoice(playerSelection){

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomNumber(1, 3);

    let compInput = "";
    switch(randomNumber){
        case 1:
            console.log("Computer Picked Rock");
            compInput = "ROCK";
            break;
        case 2:
            console.log("Computer Picked Paper");
            compInput = "PAPER";
            break;
        case 3:
            console.log("Computer Picked Scissors");
            compInput = "SCISSORS";
            break;
        default:
            console.log("Oops something went wrong")
    }
    return compInput;
}
function playRounds(playerSelection, computerSelection){
    let roundNumuber = 1;
    let playAgain = false;
    let playerScore = 0;
    let computerScore = 0;

        do {
            console.log(`Round ${roundNumuber}`);
            console.log(`Player Score = ${playerScore}`);
            console.log(`Computer Score = ${computerScore}`);

            let computerChoice = computerSelection();
            let playerChoice = playerSelection();

            if (computerChoice == playerChoice) {
                console.log("Tie");
            } else if ((computerChoice == "ROCK") && (playerChoice == "PAPER")) {
                console.log(`${playerChoice} beats ${computerChoice}. ${playerChoice} wins`);
                playerScore++;
            } else if ((computerChoice == "PAPER") && (playerChoice == "ROCK")) {
                console.log(`${computerChoice} beats ${playerChoice}. ${computerChoice} wins`);
                computerScore++;
            } else if ((computerChoice == "ROCK") && (playerChoice == "SCISSORS")) {
                console.log(`${computerChoice} beats ${playerChoice}. ${computerChoice} wins`);
                computerScore++;
            } else if ((playerChoice == "ROCK") && (computerChoice == "SCISSORS")) {
                console.log(`${playerChoice} beats ${computerChoice}. ${playerChoice} wins`);
                playerScore++;
            } else if ((computerChoice == "SCISSORS") && (playerChoice == "PAPER")) {
                console.log(`${computerChoice} beats ${playerChoice}. ${computerChoice} wins`);
                computerScore++;roundcompNumuber
            } else if ((computerChoice == "PAPER") && (playerChoice == "SCISSORS")) {
                console.log(`${playerChoice} beats ${computerChoice}. ${playerChoice} wins`);
                playerScore++;
            }


            let anotherGame = prompt("Play again, YES(Y) or NO(N) ?");
            anotherGame = anotherGame.toUpperCase();
            if (anotherGame == "YES" || anotherGame == "Y") {
                playAgain = true;
                roundNumuber++;
            }else{
                process.exit(0);
            }
        } while (playAgain = true);
    return;
}


function playerSelection(value){

    console.log("What`s your choice");
    let playerInput = prompt("Rock, Paper or Scissors ? ");
    playerInput = playerInput.toUpperCase();
    switch(playerInput){
        case "ROCK":
            console.log("Player Picked Rock");
            break;
        case "PAPER":
            console.log("Player Picked Paper");
            break;
        case "SCISSORS":
            console.log("Player Picked Scissors");
            break;
        default:
            console.log("Oops something went wrong")
    }
    return playerInput;
}


