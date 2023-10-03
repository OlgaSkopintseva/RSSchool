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