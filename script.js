const itemRock = document.getElementById("rock");
const itemPaper = document.getElementById("paper");
const itemScissor = document.getElementById("scissors");
const myScoreBarila = document.getElementById("yourScoreAwla");
const comScoreBarila = document.getElementById("comScore");

const myScoreElement = document.getElementById("myScore");
const cpuScoreElement = document.getElementById("cpuScore");

let myScore = 0;
let cpuScore = 0;
const choices = ["👊", "🖐", "✌"];

const generateCpuChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};
// --------------------------------------------
function showRock() {
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
