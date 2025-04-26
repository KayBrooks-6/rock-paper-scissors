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
      computerScore++;
    } else {
      alert("You win!");
      humanScore++;
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
      // 1) figure out the human’s choice from the button’s ID
      const humanSelection = button.id;                // "scissors", "paper" or "rock"
      // 2) generate and store the computer’s choice
      const computerSelection = getComputerChoice();   // returns the string
      // 3) play the round
      playRound(humanSelection, computerSelection);
      // 4) show the running score
      updateScoreDisplay();
      // 5) check if someone reached 5
      resultMessage(humanScore, computerScore);
    });
  });

   // initialize display
   updateScoreDisplay();