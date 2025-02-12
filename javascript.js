
let humanScore=0;
let computerScore=0;
const body=document.querySelector("body")
const div=document.createElement("div");

body.appendChild(div);

const p=document.createElement("p");
const userScore=document.createElement("p");
const machineScore=document.createElement("p");

function getComputerChoice(){
    // make a rondom number multiply by 100 and it is divisple 3 it is rock it
    // is divisible by five it is paper and it is divisible by 7 it is scissor
    let randomNumber=Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber%3===0){
        return "rock"
    }else if(randomNumber%8===0){
        return "paper";
    }else if(randomNumber%7===0){
        return "scissor"
    }else return "paper";

}

function playRound(humanChoice,computerChoice){
    // humanchoice compare with computer choice and increment the score respectively

    if(humanScore===5||computerScore===5){
        const gameOver=document.createElement("h2");
        gameOver.textContent="Game is over";
        div.appendChild(gameOver);
    if(humanScore>computerScore){
    p.textContent="congratulation, You win";
   }else if(computerScore>humanScore){
        p.textContent="You lost";
    }else{
        p.textContent="it's tie";
    }
    }

    console.log("playRound is executing");
    if(humanChoice===computerChoice){
        console.log('tie');
    }else if(humanChoice==="rock"){
        if(computerChoice==="paper"){
            computerScore++;
        }else{
            humanScore++;
        }
    }else if(humanChoice==="paper"){
        if(computerChoice==="rock"){
            humanScore++;
        }else {
            computerScore++;
        }
    }else{
        if(computerChoice==="rock"){
            computerChoice++;
        }else{
            humanScore++;
        }
    }
      
    userScore.textContent=`computer Score:${computerScore}`;
    machineScore.textContent=`your Score:${humanScore}`;
    div.appendChild(userScore);
    div.appendChild(machineScore);
}


function playGame(){
   
    const rockBtn=document.createElement("button");
    const paperBtn=document.createElement("button");
    const scissorBtn=document.createElement("button");

    rockBtn.textContent="rock";
    paperBtn.textContent="paper";
    scissorBtn.textContent="scissor";

    rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
    paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
    scissorBtn.addEventListener("click",()=>playRound("scissor",getComputerChoice()));
    
    div.appendChild(rockBtn);
    div.appendChild(paperBtn);
    div.appendChild(scissorBtn);     
   
    p.textContent="Current Score";
    div.appendChild(p);
    
}

playGame();
