function getComputerChoice() {
    let i = Math.random();
    
    if (i > 0 && i <= 0.3) {
        return "scissors";
    } else if (i > 0.3 && i <= 0.6) {
        return "paper";
    } else {
        return "Rock, you potota";
    }
}

getComputerChoice();

// function getHumanChoice() {
//     const greeting = prompt("Rock, Paper or Scissors");
//     let humanChoiceLower = greeting.toLowerCase();

//     if (humanChoiceLower === "scissors") {
//         return "scissors";
//     } else if (humanChoiceLower == "paper") {
//         return "paper";
//     } else {
//         return "Rock, you potota";
//     }
// }


let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, getComputerChoice) {
    if ((computerSelection && humanSelection === "scissors") || (computerSelection && humanSelection === "paper") || (computerSelection && humanSelection === "Rock, you potota")) {
        alert("Tie");
    } else if (computerSelection === "Rock, you potota" && humanSelection === "scissors") {
        alert("you lose!");
        return computerScore++;
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
        alert("you lose!");
        return computerScore++;
    } else if (computerSelection === "paper" && humanSelection === "Rock, you potota") {
        alert("you lose!");
        return computerScore++;
    } else {
        alert("you win!");
        return humanScore++;
    }
}

function ResultMessage (humanScore, computerScore) {
    if (humanScore === 5) {
        let para = document.createElement('p');
        para.textContent = "Congrats you, oh you sly potato!";
        container.appendChild(para);
        
    } else if (computerScore === 5) {
         let para = document.createElement('p');
        para.textContent = "The Ai overlords won...";
        container.appendChild(para);   
        }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const container = document.querySelector("#results");

const content = document.createElement("div");
content.textContent = `computer score is ${computerScore}, and you are at ${humanScore}`;
container.appendChild(content);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
    button.addEventListener("click", ResultMessage);
})
