let playerScore=0;
let computerScore=0;
let roundWinner='';

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        roundWinner='tie'
    }
    if(
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ){
        playerScore++;
        roundWinner = 'player'
    }

    if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') 
    ){
        computerScore++;
        roundWinner='computer'
    }

        updateScoreMessage(roundWinner,playerSelection,computerSelection);
    
}

function updateScoreMessage(winner,playerSelection,computerSelection){
    if(winner === 'player'){
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} beats ${computerSelection.toLowerCase()}`
        return
    }

    if(winner==='computer'){
        scoreMessage.textContent=`${capitalizeFirstLetter(playerSelection)}
        is beaten by ${computerSelection.toLowerCase()}`
    }
    return;

    scoreMessage.textContent=`${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getRandomChoice(){
    let randomNumber=Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'Rock'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
        default:
            return 'INVALID SELECTION'
    }
}

function isGameOver(){
    return playerScore===5 || computerScore===5;
}

const scoreInfo=document.getElementById('scoreInfo');
const scoreMessage=document.getElementById('scoreMessage');
const playerScorePara=document.getElementById('playerScore');
const computerScorePara=document.getElementById('computerScore');
const rockBtn=document.getElementById('rockBtn');
const paperBtn=document.getElementById('paperBtn');
const scissorsBtn=document.getElementById('scissorsBtn');
const endgameModal=document.getElementById('endgameModal');
const overlay=document.getElementById('overlay');
const playerSign=document.getElementById('playerSign');
const computerSign=document.getElementById('computerSign');

rockBtn.addEventListener('click',()=>handleClick('ROCK'));
paperBtn.addEventListener('click',()=>handleClick('PAPER'));
scissorsBtn.addEventListener('click',()=>handleClick('SCISSORS'))

//currently working on this function
function handleClick(playerSelection){
    if(isGameOver()){
        openEndgameModal();
        return;
    }

    const computerSelection=getRandomChoice();
    playRound(playerSelection,computerSelection);
    updateChoices(playerSelection,computerSelection);
    updateScore();

    if(isGameOver()){
        openEndgameModal();
        setFinalMessage();
    }

}

function openEndgameModal(){
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function updateChoices(playerSelection,computerSelection){
    switch(playerSelection){
        case 'ROCK':
            playerSign.textContent='✊';
            break;
        case 'PAPER':
            playerSign.textContent='✋';
            break;
        case 'SCISSORS':
            playerSign.textContent='✌';
            break;
    }

    switch (computerSelection){
        case 'ROCK':
            computerSign.textContent='✊';
            break;
        case 'PAPER':
            computerSign.textContent='✋';
            break;
        case 'SCISSORS':
            computerSign.textContent='✌';
            break;
    }
}

function updateScore(){
    if(roundWinner === 'tie'){
        scoreInfo.textContent="It's a tie!";
    }
    else if(roundWinner === 'player'){
        scoreInfo.textContent='You won!'
    }

    else if(roundWinner === 'computer'){
        scoreInfo.textContent='You lost!';
    }

    playerScorePara.textContent=`Player: ${playerScore}`;
    computerScorePara.textContent=`Player: ${computerScore}`;
}