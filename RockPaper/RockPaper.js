const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById('result')
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const result = playRound(button.id,computerPlay());
        resultEl.textContent = result;
    })
});

function computerPlay() {
    const choice = ['rock','paper','scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice [randomChoice]
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection ==='scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection == 'scissors' && computerSelection === 'paper')

    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return `You Win! ${playerSelection} Beats ${computerSelection}`;
    } 
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        // return "You Lose!" + computerSelection + "beats" + playerSelection;
        return `You Lose! ${computerSelection} Beats ${playerSelection}`
    }

}