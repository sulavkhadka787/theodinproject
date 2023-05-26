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
        scoreMessage
    }
}


const scoreMessage=document.getElementById('scoreMessage');