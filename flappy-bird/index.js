const cvs = document.querySelector(".canvas");
const ctx = cvs.getContext("2d");

const button = document.querySelector(".button");
const result = document.querySelector(".result");
const resultScore = document.querySelector(".result__text_score");
const resultTime = document.querySelector(".result__text_time");
const recordIcon = document.querySelector(".record__icon");
const tablOfRecords = document.querySelector(".table__of_records");
const closeIcon = document.querySelector(".cross__icon");

const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeUp = new Image();
const pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

const fly = new Audio();
const score_audio = new Audio();
const bird_die = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
bird_die.src = "audio/bird_die.mp3";

let gap = 110;

let isGameOver = false;
let gameStartTime = 0;
let pipe = [];
let score = 0;
let timeInSeconds = 0;

let xPos = 10;
let yPos = 150;
let grav = 1.5;

function moveUp() {
  yPos -= 30;
  fly.play();
}

document.addEventListener("keydown", moveUp);

function startGame() {
  isGameOver = false;
  button.style.display = "none";
  result.style.display = "none";
  score = 0;
  gameStartTime = Date.now();
  pipe = [];

  pipe[0] = {
    x: cvs.width,
    y: 0,
  };
}

function gameOver() {
  isGameOver = true;
  button.style.display = "block";
  result.style.display = "block";
  gameStartTime = Date.now();
  resultScore.textContent = "Score: " + score;
  addScoreToLS(score, timeInSeconds);
  displayScores();
}

function inferredEndTime() {
  const gameEndTime = Date.now();
  timeInSeconds = Math.floor((gameEndTime - gameStartTime) / 1000);
  resultTime.textContent = "Time: " + timeInSeconds + " sec";
}

pipe[0] = {
  x: cvs.width,
  y: 0,
};

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

    pipe[i].x--;

    if (pipe[i].x == 110) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
      });
    }

    if (
      (xPos + bird.width >= pipe[i].x &&
        xPos <= pipe[i].x + pipeUp.width &&
        (yPos <= pipe[i].y + pipeUp.height ||
          yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) ||
      yPos + bird.height >= cvs.height - fg.height
    ) {
      ctx.drawImage(bird, xPos, yPos);
      ctx.drawImage(fg, 0, cvs.height - fg.height);
      bird_die.play();
      gameOver();
      return;
    }

    if (pipe[i].x == 5) {
      score++;
      score_audio.play();
    }
  }

  button.addEventListener("click", () => {
    if (isGameOver) {
      location.reload();
      startGame();
    }
  });

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);

  yPos += grav;

  inferredEndTime();

  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;
startGame();

tablOfRecords.style.display = "none";

recordIcon.addEventListener("click", () => {
  tablOfRecords.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  tablOfRecords.style.display = "none";
});

function addScoreToLS(score, time) {
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ score, time });
  localStorage.setItem("scores", JSON.stringify(scores));
}

function displayScores() {
  const tableBody = document.querySelector(".table__body");
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  scores.sort((a, b) => b.score - a.score);
  scores.splice(10);

  tableBody.innerHTML = `
  <th class="table__category">Place</th>
  <th class="table__category">Score</th>
  <th class="table__category">Time</th>
  `;

  scores.forEach((scoreObj, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="table__category table__place">${index + 1}</td>
      <td class="table__category table__score">${scoreObj.score}</td>
      <td class="table__category table__time">${scoreObj.time} sec</td>
    `;
    tableBody.appendChild(row);
  });
}
