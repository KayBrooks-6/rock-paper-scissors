let humanScore = 0;
let computerScore = 0;

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

let humanSelection = "";
let computerSelection = getComputerChoice();


function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      alert("Tie");
      return;
    }
    // human loses
    const loses =
      (computerSelection === "Rock"   && humanSelection === "scissors") ||
      (computerSelection === "scissors" && humanSelection === "paper") ||
      (computerSelection === "paper"    && humanSelection === "Rock");
  
    if (loses) {
      alert("You lose!");
      computerScore +=1;
    } else {
      alert("You win!");
      humanScore += 1;
    }
  }


const container = document.querySelector("#results");
const scoreDisplay = document.createElement("div");
container.appendChild(scoreDisplay);

function updateScoreDisplay() {
  scoreDisplay.textContent =
    `Computer: ${computerScore} — You: ${humanScore}`;
}


function resultMessage(humanScore, computerScore) {
    if (humanScore === 5) {
      const para = document.createElement("p");
      para.textContent = "Congrats, you sly potato!";
      container.appendChild(para);
    } else if (computerScore === 5) {
      const para = document.createElement("p");
      para.textContent = "The AI overlords have won...";
      container.appendChild(para);
    }
  }  

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {

      const humanSelection = button.id;               
      const computerSelection = getComputerChoice(); 
      playRound(humanSelection, computerSelection);
      updateScoreDisplay();
      resultMessage(humanScore, computerScore);
      
    });
  });

   // initialize display
   updateScoreDisplay();