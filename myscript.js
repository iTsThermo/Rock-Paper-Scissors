function getComputerChoice(){
    var choice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if (choice == 0){
        return "Rock";
    }
    if (choice == 1){
        return "Paper";
    }
    if (choice == 2){
        return "Scissors"
    }
}
console.log(getComputerChoice());