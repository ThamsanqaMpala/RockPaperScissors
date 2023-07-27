



/*const btn = document.getElementById("compValue")

btn.addEventListener('click', getComputerChoice());
*/



function getComputerChoice(playerSelection){

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = getRandomNumber(1, 3);

    switch(randomNumber){
        case 1:
            console.log("Computer Picked Rock");
            break;
        case 2:
            console.log("Computer Picked Paper");
            break;
        case 3:
            console.log("Computer Picked Scissors");
            break;
        default:
            console.log("Oops something went wrong")
    }
    if(playerSelection == randomNumber ){
        console.log("Tie");
    }
}
function roundsPlayed(playerSelection, computerSelection){
    let roundNumuber = 1;
        /*do {
            console.log(`Round ${roundNumuber}`);
            const computerChoice = computerSelection();

            let playAgain = confirm("Play Again?");
            if(playAgain == true){
                roundNumuber++;
            }else{
                console.log("GAME OVER!!");
                break;
            }
            

        } while (roundNumuber <= 5);*/

    console.log(`Round ${roundNumuber}`);
    console.log("Select your choice");
    

}


function playerSelection(value){

    switch(value){
        case 1:
            console.log("Player Picked Rock");
            break;
        case 2:
            console.log("Player Picked Paper");
            break;
        case 3:
            console.log("Player Picked Scissors");
            break;
        default:
            console.log("Oops something went wrong")
    }
    getComputerChoice(value);
}


