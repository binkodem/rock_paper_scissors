function game(){
    let playerPoints=0
    let computerPoints=0

    for (let i = 0; i < 5; i++) {
        function getComputerChoice(){
            pick=["rock", "paper", "scissors"]
            return pick[Math.floor(Math.random()*pick.length)]
        }
        
        const playerSelection = prompt().toLowerCase();
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
    } 

    if(playerPoints>computerPoints){
        return "player win with "+playerPoints+" points"
    }  
    else if(playerPoints<computerPoints){
        return "computer win with "+computerPoints+" points"
    }
    else{
        return "it's a draw"
    }
}

console.log(game())