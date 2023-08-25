const r = document.getElementById('r');
const w = document.getElementById('w');
const cs = document.getElementById('cs');
const ps = document.getElementById('ps');
const pc = document.getElementById('pc');
const cc = document.getElementById('cc');

/*const btn_rock = document.getElementById("rock");
btn_rock.addEventListener('', playerSelection(rock));

const btn_paper = document.getElementById("paper");
btn_paper.addEventListener('click', playerSelection(paper));


const btn_scissors = document.getElementById("scissors");
btn_scissors.addEventListener('click', playerSelection(scissors));*/




//Determining Computer Select
function getComputerSelect(){

    //Generating Random Number Between 1 and 3
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomNumber(1, 3);

    let compInput = "";
    //Assigning Value To Generated Number
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


/*Function Called By Player Select*/
let playerSelect = "";
function playRounds(playerSelect){
    playerSelect = playerSelect.toUpperCase();
    roundNumuber = 1;
    let futhi = false;
    let playerScore = 0;
    let computerScore = 0;

    //w.textContent = playerSelect);
    
        /*Loop To Check Selects Anzd Determine Winner*/
        do {
            
            r.textContent = `Round ${roundNumuber}`;
            ps.textContent = `Player Score = ${playerScore}`;
            cs.textContent = `Computer Score = ${computerScore}`;
            pc.textContent = playerSelect;

            let computerSelect = getComputerSelect();
            cc.textContent = computerSelect;
            

            if (computerSelect == playerSelect) {
                w.textContent = "Tie";
                futhi = playAgain();
            } else if ((computerSelect == "ROCK") && (playerSelect == "PAPER")) {
                w.textContent = `${playerSelect} beats ${computerSelect}. ${playerSelect} wins`;
                playerScore++;
                futhi = playAgain();
            } else if ((computerSelect == "PAPER") && (playerSelect == "ROCK")) {
                w.textContent = `${computerSelect} beats ${playerSelect}. ${computerSelect} wins`;
                computerScore++;
                futhi = playAgain();
            } else if ((computerSelect == "ROCK") && (playerSelect == "SCISSORS")) {
                w.textContent = `${computerSelect} beats ${playerSelect}. ${computerSelect} wins`;
                computerScore++;
                futhi = playAgain();
            } else if ((playerSelect == "ROCK") && (computerSelect == "SCISSORS")) {
                w.textContent = `${playerSelect} beats ${computerSelect}. ${playerSelect} wins`;
                playerScore++;
                futhi = playAgain();
            } else if ((computerSelect == "SCISSORS") && (playerSelect == "PAPER")) {
                w.textContent = `${computerSelect} beats ${playerSelect}. ${computerSelect} wins`;
                computerScore++;
                futhi = playAgain();
            } else if ((computerSelect == "PAPER") && (playerSelect == "SCISSORS")) {
                w.textContent = `${playerSelect} beats ${computerSelect}. ${playerSelect} wins`;
                playerScore++;
                futhi = playAgain();
            }
            
            //Play Again?
            
            r.textContent = `Round ${roundNumuber}`;
            ps.textContent = `Player Score = ${playerScore}`;
            cs.textContent = `Computer Score = ${computerScore}`;
        } while (futhi == true); //Continues To Play Untill Play Again Is NO
}
function playAgain(){
    const pa = document.getElementById('pa');
    pa.textContent = 'play again?????';

    let yes = document.createElement('button');
    pa.appendChild(yes);
    yes.innerHTML = 'YES';
    yes.onclick = function(){
        return true;

    }
    
    let no = document.createElement('button');
    pa.appendChild(no);
    no.textContent = 'NO';
    yes.onclick = function(){
        return false;
    }

    return;
    anotherGame = anotherGame.toUpperCase();
    if (anotherGame == "YES" || anotherGame == "Y") {
        playAgain = true;
        roundNumuber++;
    }else{
        process.exit(0);
    }
}

/*
function playerSelection(){


    let playerInput = value.toUpperCase();
    switch(playerInput){
        case "ROCK":
            w.textContent = "Player Picked Rock");
            break;
        case "PAPER":
            w.textContent = "Player Picked Paper");
            break;
        case "SCISSORS":
            w.textContent = "Player Picked Scissors");
            break;
        default:
            w.textContent = "Oops something went wrong")
    }
    let computerSelect = getComputerSelect();
    playRounds(playerInput, computerSelect);
}
*/