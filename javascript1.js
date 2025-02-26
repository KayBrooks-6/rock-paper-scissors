// function getComputerChoice(max) {
//     return Math.floor(Math.random() * max);

// }

// console.log(getComputerChoice(8));




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
// function above will make a random number between 0 & 1, 
// if the value is between a certain value it will choice one of the choices. 

getComputerChoice(return);

function getHumanChoice() {
    const greeting = prompt("Rock, Paper or Scissors");
    let humanChoiceLower = greeting.toLowerCase();

    if (humanChoiceLower === "scissors") {
        return "scissors";
    } else if (humanChoiceLower == "paper") {
        return "paper"
    } else {
        return "Rock, you potota";
    }
}

// This function will prompt the user for 3 choices,
// and will convert the response into lowercase and store in a variable.
// Then it will test against 3 what if statements. 

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, getComputerChoice) {
    for (let ) {

    } if ((computerSelection && humanSelection === "scissors") || (computerSelection && humanSelection === "paper") || (computerSelection && humanSelection === "Rock, you potota")) {
        alert("Tie");
    } else if ((computerSelection === "Rock, you potota" && humanSelection === "scissors") || (computerSelection === ""scissors" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "Rock, you potota")) {
        alert("you lose!")
        return computerScore++;
    } else {
        alert("you win!")
        return humanScore++;
    }
}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);