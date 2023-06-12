let playerPoints=0
let computerPoints=0

const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            playerSelection=button.id
            console.log(playerSelection)
            const score = document.querySelector('#score')
            if (playerPoints<5 && computerPoints<5){
                game()
            }
            else{
                pass
            }
        })
    })

function game(){
    
    const player = document.querySelector('#player')
    const computer = document.querySelector('#computer')
    

    function getComputerChoice(){
        pick=["rock", "paper", "scissors"]
        return pick[Math.floor(Math.random()*pick.length)]
    }
        
    
    const computerSelection = getComputerChoice();
        
    function playRound(playerSelection, computerSelection) {
        if (playerSelection==computerSelection){
            return "draw"
        }
        else if((playerSelection=="paper" && computerSelection=="rock") || (playerSelection=="scissors" && computerSelection=="paper") || (playerSelection=="rock" && computerSelection=="scissors")){
            playerPoints+=1
            return "player win"
        }
        else{
            computerPoints+=1
            return "computer win" 
        }
        
    }
    console.log(playRound(playerSelection, computerSelection));

    player.textContent = "player has "+playerPoints+" points"
    computer.textContent = "computer has "+computerPoints+" points"

    if(playerPoints==5){
        return score.textContent="player win"
    }
    else if(computerPoints==5){
        return score.textContent="computer win"
    }
}