const itemRock = document.getElementById("rock");
const itemPaper = document.getElementById("paper");
const itemScissor = document.getElementById("scissors");
const myScoreBarila = document.getElementById("yourScoreAwla");
const comScoreBarila = document.getElementById("comScore");

const myScoreElement = document.getElementById("myScore");
const cpuScoreElement = document.getElementById("cpuScore");
const winner = document.getElementById("winner");
const resetButton = document.getElementById("resetButton");

const winnerScore = 5;
let myScore = 0;
let cpuScore = 0;
const choices = ["👊", "🖐", "✌"];

const generateCpuChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};
// --------------------------------------------
function showRock() {
  if (myScore === winnerScore) {
    winner.innerText = "You are winner!";
    return;
  }
  if (cpuScore === winnerScore) {
    winner.innerText = "Cpu win!";
    return;
  }
  myScoreBarila.innerText = `Your score: 👊`;
  const cpuChoice = generateCpuChoice();
  comScoreBarila.innerText = `Computer score: ${cpuChoice}`;

  if (cpuChoice === "✌") {
    console.log("you are win!");
    myScore = myScore + 1;

    myScoreElement.innerText = myScore;
  }

  if (cpuChoice === "🖐") {
    console.log("Cpu are win!");
    cpuScore = cpuScore + 1;
    cpuScoreElement.innerText = cpuScore;
  }

  if (cpuChoice === "👊") {
    console.log("Draw!");
  }
}
itemRock.onclick = showRock;
// -------------------------------------------
function showPaper() {
  if (myScore === winnerScore) {
    winner.innerText = "You are winner!";
    return;
  }
  if (cpuScore === winnerScore) {
    winner.innerText = "Cpu win!";
    return;
  }
  myScoreBarila.innerText = `Your score: 🖐`;
  const cpuChoice = generateCpuChoice();
  comScoreBarila.innerText = `Computer score: ${cpuChoice}`;

  if (cpuChoice === "✌") {
    console.log("Cpu are win!");
    cpuScore = cpuScore + 1;
    cpuScoreElement.innerText = cpuScore;
  }
  if (cpuChoice === "👊") {
    console.log("You are win!");
    myScore = myScore + 1;

    myScoreElement.innerText = myScore;
  }
  if (cpuChoice === "🖐") {
    console.log("Draw!");
  }
}

itemPaper.onclick = showPaper;
// -----------------------------------------

function showScissor() {
  if (myScore === winnerScore) {
    winner.innerText = "You are winner!";
    return;
  }
  if (cpuScore === winnerScore) {
    winner.innerText = "Cpu win!";
    return;
  }
  // -----------------------------
  myScoreBarila.innerText = `Your score: ✌ `;
  const cpuChoice = generateCpuChoice();
  comScoreBarila.innerText = `Computer score: ${cpuChoice}`;

  if (cpuChoice === "✌") {
    console.log("Draw!");
  }
  if (cpuChoice === "👊") {
    console.log("Cpu are win!");
    cpuScore = cpuScore + 1;
    cpuScoreElement.innerText = cpuScore;
  }
  if (cpuChoice === "🖐") {
    console.log("You are win!");
    myScore = myScore + 1;

    myScoreElement.innerText = myScore;
  }
}
itemScissor.onclick = showScissor;

const resetGame = () => {
  myScore = 0;
  cpuScore = 0;

  myScoreElement.innerText = myScore;
  cpuScoreElement.innerText = cpuScore;
  winner.innerText = "";
};

resetButton.onclick = resetGame;
