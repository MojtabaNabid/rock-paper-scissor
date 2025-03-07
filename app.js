// Rock | Paper | Scrissor

let choose = "";
let computerChoice = "";
let userScore = 1;
let computerScore = 1;

while (computerScore < 3 || userScore < 3) {
  console.log("Start of the program");
  choose = prompt("Rock | Paper | Scissor,  Which one?");
  console.log(choose);
  if (
    choose !== "Rock" &&
    choose !== "Paper" &&
    choose !== "Scissor" &&
    choose === null &&
    choose === ""
  ) {
    alert("Please choose Rock, Paper or Scissor (It is case Sensitive).");
    // location.reload();
  } else {
    computerChoice = computerByChoice();
    console.log("You choosed: ", choose);
    console.log("Computer choosed: ", computerChoice);
    if (computerChoice === choose) {
      console.log("It's a tie.");
      console.log("=======================================");
    } else if (computerChoice === "Rock") {
      if (choose === "Scissor") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (choose === "Paper") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    } else if (computerChoice === "Scissor") {
      if (choose === "Paper") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (choose === "Rock") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    } else {
      if (choose === "Rock") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (choose === "Scissor") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    }
  }
}

// console.log("============================");
console.log("Your total scores:", userScore);
console.log("Computer's total scores:", computerScore);

if (userScore > computerScore) {
  console.log("Congratulations! You won the match!!!");
} else if (computerScore > userScore) {
  console.log("Computer won the match, maybe next time!!!");
}

function computerByChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  let randomNumebr = Math.floor(Math.random() * choices.length);
  console.log("Random Number is: ", randomNumebr);
  let computer = choices[randomNumebr];
  return computer;
}
