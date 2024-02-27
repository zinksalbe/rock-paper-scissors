const choices = ["rock", "paper", "scissors"];
let pWinCount = 0;
let cWinCount = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundStatus = document.querySelector(".status");
const update = document.querySelector(".update");
const notify = document.querySelector(".notify");
const restartButton = document.querySelector(".restartButton");

btnRock.addEventListener("click", () => playRound(btnRock.value, getComputerChoice()));

btnPaper.addEventListener("click", () => playRound(btnPaper.value, getComputerChoice()));

btnScissors.addEventListener("click", () => playRound(btnScissors.value, getComputerChoice()));

restartButton.addEventListener("click", () => restartGame());

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();
    if (player === "rock" && comp === "scissors" || player === "paper" && comp === "rock" ||
        player === "scissors" && comp === "paper") {
        pWinCount++;
        playerScore.textContent = "Player Score: " + pWinCount;
        roundStatus.textContent = "You won!";
        update.textContent = player.charAt(0).toUpperCase() + player.slice(1) + " beats " + comp.charAt(0).toUpperCase() + comp.slice(1) + "!";
    } else if (player === comp) {
        roundStatus.textContent = "It's a Tie!";
        update.textContent = player.charAt(0).toUpperCase() + player.slice(1) + " ties with " + comp.charAt(0).toUpperCase() + comp.slice(1) + "!";
    }
    else {
        cWinCount++;
        computerScore.textContent = "Enemy Score: " + cWinCount;
        roundStatus.textContent = "You lost!";
        update.textContent = player.charAt(0).toUpperCase() + player.slice(1) + " is beaten by " + comp.charAt(0).toUpperCase() + comp.slice(1) + "!";
    }

    if (pWinCount == 5 || cWinCount == 5) {
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        if (pWinCount > cWinCount) {
            notify.textContent = "Congratz! You've beaten your opponent!";
        } else notify.textContent = "Whomp whomp.. you lost!";
        openOverlay();
    }
}

function openOverlay() {
    document.getElementById("overlay").style.display = "block";
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function restartGame() {
    pWinCount = 0;
    cWinCount = 0;
    playerScore.textContent = "Player Score: 0";
    computerScore.textContent = "Enemy Score: 0";
    roundStatus.textContent = "Beat your opponent!";
    update.textContent = "First to score 5 points wins the game";
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    closeOverlay();
}

// function gameOver() {
//     if (pWinCount === 5 || cWinCount)
// }


// function game(choice) {
//     // let playerIn = "";
//     // for (let i = 0; i < 5; i++) {
//     //     let switcher = true;
//     //     while (switcher) {
//     //         playerIn = prompt("What is your move?");
//     //         if (!choices.includes(playerIn.toLowerCase(), 0)) {
//     //             console.log("Not a valid choice!");
//     //         } else switcher = false;
//     //     }
//     console.log(playRound(choice, getComputerChoice()));
//     // }
//     if (pWinCount > cWinCount) {
//         console.log("You win the game of Rock-Paper-Scissors. Congratulations!");
//     } else if (pWinCount > 0 && cWinCount > 0 || pWinCount === cWinCount) {
//         console.log("The game Rock-Paper-Scissors of 5 rounds has been tied. Nobody wins!")
//     } else console.log("You lose the game of Rock-Paper-Scissors. To bad!");
// }