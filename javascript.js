
let humanScore=0;
let computerScore=0;


function getHumanChoice(){
    // ask human which one they want rock paper or Scisor?
    
    // take input what the user choice
    return prompt("what is your choice").toLowerCase;
}
function getComputerChoice(){
    // make a rondom number multiply by 100 and it is divisple 3 it is rock it
    // is divisible by five it is paper and it is divisible by 7 it is scissor
    let randomNumber=Math.random()*100;
    if(randomNumber%3===0){
        return "rock"
    }else if(randomNumber%5===0){
        return "paper";
    }else if(randomNumber%7===0){
        return "scissor"
    }else return "paper";

}

function playRound(humanChoice,computerChoice){
    // humanchoice compare with computer choice and increment the score respectively
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
}


function playGame(){
    for(let i=1;i<=5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore){
        console.log("congratulation, You win");
    }else if(computerScore>humanScore){
        console.log("You lost");
    }else{
        console.log("it's tie");
    }
}

playGame();