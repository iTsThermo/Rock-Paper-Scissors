//Precondition: None
//Poscondition: Returns random outcome - Rock, Paper, Scissors as computer choice
function getComputerChoice(){
    let choice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

const npc = getComputerChoice();
console.log("NPC Choice: " + npc)
const player = "Rock";

function round(player, npc){
    if (player == npc){
        return "It was a tie, re-roll";
    }
    else if (player == 'Rock' && npc == 'Scissors'){
        return "Player wins: Rock beats Scissors";
    }
    else if (player == 'Rock' && npc == 'Paper'){
        return "Player loses: Rock loses against Paper";
    }
    else if (player == 'Paper' && npc == 'Scissors'){
        return "Player Loses: Paper loses against Scissors";
    }
    else if(player == 'Paper' && npc == 'Rock'){
        return "Player Loses: Paper wins against Rock";
    }
    else if(player == 'Scissors' && npc == 'Rock'){
        return "Player Loses: Scissors loses against Rock";
    }
    else if(player == 'Scissors' && npc == 'Paper'){
        return "Player Wins: Scissors wins against Paper";
    }
    
}

console.log(round(player, npc));