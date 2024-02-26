const choices = ["rock", "paper", "scissors"];
let pWinCount = 0;
let cWinCount = 0;


function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();
    if(player === "rock" && comp === "scissors" || player === "paper" && comp === "rock" || 
    player === "scissors" && comp === "paper"){
        pWinCount++;
        return "You win with " + player + " beating " + comp + "!";
    } else if (player === comp) {
        return "Tied with " + player + "!";
    }
    else {
        cWinCount++;
        return "You lose with " + player + " beating " + comp + "!";
    }
  }


function game () {
    let playerIn = "";
    for (let i=0; i<5; i++){
        let switcher = true;
        while(switcher){
            playerIn = prompt("What is your move?");
            if(!choices.includes(playerIn.toLowerCase(),0)){
                console.log("Not a valid choice!"); 
            } else switcher=false;
        }
        console.log(playRound(playerIn, getComputerChoice()));
    }
    if(pWinCount>cWinCount){
        console.log("You win the game of Rock-Paper-Scissors. Congratulations!");
    } else if (pWinCount>0 && cWinCount>0 ||pWinCount === cWinCount){
        console.log("The game Rock-Paper-Scissors of 5 rounds has been tied. Nobody wins!")
    } else console.log("You lose the game of Rock-Paper-Scissors. To bad!");
}