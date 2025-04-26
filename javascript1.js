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



// const btn = document.querySelector(".scissors");
// btn.addEventListener("click", () => {
//   alert("siccors");
// });
// const paper = document.querySelector(".paper");
// paper.addEventListener("click", () => {
//   alert("paper");
// });
// const rock = document.querySelector(".rock");
// rock.addEventListener("click", () => {
//   alert("rock");
// });



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

function resultMessage (humanScore, computerScore) {
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

let humanSelection = "";
let computerSelection = getComputerChoice();


const container = document.querySelector("#results");

const content = document.createElement("div");
content.textContent = `computer score is ${computerScore}, and you are at ${humanScore}`;
container.appendChild(content);


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", () => {
            if (button.id === "scissors") {
                return humanSelection = "scissors";
            } else if (button.id === "paper") {
                return humanSelection = "paper";
            } else {
                return humanSelection = "Rock, you potota";
            }
        });
    button.addEventListener("click", playRound);
    button.addEventListener("click", resultMessage);
});