let playerScore=0;
let computerScore=0;
let roundWinner='';

function playRound(playerSelection,computerSelection){
    console.log('playround test');
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
    console.log('get random number');
    let randomNumber=Math.floor(Math.random()*3)
    console.log('random-number',randomNumber);
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
const endgameMsg=document.getElementById('endgameMsg');
const overlay=document.getElementById('overlay');
const playerSign=document.getElementById('playerSign');
const computerSign=document.getElementById('computerSign');

rockBtn.addEventListener('click',()=>handleClick('ROCK'));
paperBtn.addEventListener('click',()=>handleClick('PAPER'));
scissorsBtn.addEventListener('click',()=>handleClick('SCISSORS'))

//currently working on this function
function handleClick(playerSelection){
    console.log('mabel is epl expert handleclicjk');
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
    console.log('updage chaoices is runnig bithc h')
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

    switch(computerSelection){
        case 'ROCK':
            console.log('rock-compuiter')
            computerSign.textContent='✊';
            break;
        case 'PAPER':
            console.log('paper-computer')
            computerSign.textContent='✋';
            break;
        case 'SCISSORS':
            console.log('scissors-computers')
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
    computerScorePara.textContent=`Computer: ${computerScore}`;
}

function setFinalMessage(){
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You Won!')
        :(endgameMsg.textContent = 'You Lost...')
}