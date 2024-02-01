const start = document.querySelector('#start');
start.addEventListener('click', game)

//Precondition: None
//Postcondition: Returns random outcome - Rock, Paper, Scissors as computer choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Precondition: None
//Postcondition: Game of Rock-Paper-Scisorrs is played a # of times to determine a winner
function game(){
let playerPoints = 0;
let npcPoints = 0;

let numOfRounds = 5;
let roundsPlayed = 0;

document.querySelector("#rock").addEventListener('click', ()=>{
    let npc = getComputerChoice();
    console.log(round("rock", npc));
    roundsPlayed++;
    if (numOfRounds - 1 < roundsPlayed){
        console.log("Done with 5 games");
        roundsPlayed = 0;
    }});
    
document.querySelector('#paper').addEventListener('click', ()=>{
    let npc = getComputerChoice();
    console.log(round("paper", npc));
    roundsPlayed++;
    if (numOfRounds - 1 < roundsPlayed){
        console.log("Done with 5 games");
        roundsPlayed = 0;
    }});
    
document.querySelector('#scissors').addEventListener('click', ()=>{
    let npc = getComputerChoice();
    console.log(round("scissors", npc));
    roundsPlayed++;
    if (numOfRounds - 1 < roundsPlayed){
        console.log("Done with 5 games");
        roundsPlayed = 0;
    }});

if (playerPoints > npcPoints){
    return "You Win!";
}
else if (npcPoints > playerPoints){
    return "Computer Wins!"
}
else{
    return "Draw!";
}

function round(player, npc){
    if (player == 'rock' && npc == 'scissors'){
        ++playerPoints;
        return "You wins: Rock beats Scissors";
        
    }
    else if (player == 'rock' && npc == 'paper'){
        ++npcPoints;
        return "You loses: Rock loses against Paper";
        
    }
    else if (player == 'paper' && npc == 'scissors'){
        ++npcPoints;
        return "You Loses: Paper loses against Scissors";
        
    }
    else if(player == 'paper' && npc == 'rock'){
        ++playerPoints;
        return "You Wins: Paper wins against Rock";
        
    }
    else if(player == 'scissors' && npc == 'rock'){
        ++npcPoints;
        return "You Loses: Scissors loses against Rock";
        
    }
    else if(player == 'scissors' && npc == 'paper'){
        ++playerPoints;
        return "You Wins: Scissors wins against Paper";
    }
    else{
        console.log("TIE! Re-Rolling")
        let new_roll = getComputerChoice();
        return round(player, new_roll);
    }
}
}