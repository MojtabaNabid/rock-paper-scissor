// Rock | Paper | Scrissor
const choices = ["rock", "paper", "scissor"];
let userScore = 0;
let computerScore = 0;
let result = [];

function computerByChoice() {
  let randomNumebr = Math.floor(Math.random() * choices.length);
  //   console.log("Random Number is: ", randomNumebr);
  let computer = choices[randomNumebr];
  return computer;
}

const checkWinner = (player, computer) => {
  if (choices.indexOf(player) !== -1) {
    console.log("You choosed: ", player);
    console.log("Computer choosed: ", computer);
    if (computer === player) {
      console.log("It's a tie.");
    } else if (computer === "rock") {
      player === "scissor" ? (computerScore += 1) : (userScore += 1);
    } else if (computer === "scissor") {
      player === "paper" ? (computerScore += 1) : (userScore += 1);
    } else {
      player === "rock" ? (computerScore += 1) : (userScore += 1);
    }
  } else {
    console.log("You cheated!!");
    // return undefined;
    // userScore = 0;
    // computerScore = 0;
  }
};

const play = () => {
  let player = prompt("rock | paper | scissor,  Which one?");
  // console.log(player);
  let computer = computerByChoice();
  // console.log(computer);
  checkWinner(player, computer);

  console.log("Your score: ", userScore);
  console.log("Computer's score: ", computerScore);
  console.log("........................");
  if (userScore >= 3 || computerScore >= 3) {
    let result =
      userScore >= computerScore ? "Congrats! You won." : "Sorry, You lost!";
    console.log(result);
  } else {
    play();
  }
};

play();
