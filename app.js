// Rock | Paper | Scrissor

let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;
let result = [];

const checkWinner = (player, computer) => {
  if (
    player !== "Rock" &&
    player !== "Paper" &&
    player !== "Scissor" &&
    player === null &&
    player === ""
  ) {
    alert("Please choose Rock, Paper or Scissor (It is case Sensitive).");
    // location.reload();
  } else {
    // computer = computerByChoice();
    console.log("You choosed: ", player);
    console.log("Computer choosed: ", computer);
    if (computer === player) {
      console.log("It's a tie.");
      console.log("=======================================");
    } else if (computer === "Rock") {
      if (player === "Scissor") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (player === "Paper") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    } else if (computer === "Scissor") {
      if (player === "Paper") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (player === "Rock") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    } else {
      if (player === "Rock") {
        computerScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      } else if (player === "Scissor") {
        userScore += 1;
        console.log("computer scores: ", computerScore);
        console.log("Your scores: ", userScore);
        console.log("=======================================");
      }
    }
  }
  let result = [userScore, computerScore];
  return result;
};

userChoice = prompt("Rock | Paper | Scissor,  Which one?");
// console.log(userChoice);
computerChoice = computerByChoice();
result = checkWinner(userChoice, computerChoice);

// console.log("============================");
console.log("Your total scores:", result[0]);
console.log("Computer's total scores:", result[1]);

if (result[0] > result[1]) {
  console.log("Congratulations! You won the match!!!");
} else if (result[1] > result[0]) {
  console.log("Computer won the match, maybe next time!!!");
}

function computerByChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  let randomNumebr = Math.floor(Math.random() * choices.length);
  //   console.log("Random Number is: ", randomNumebr);
  let computer = choices[randomNumebr];
  return computer;
}
