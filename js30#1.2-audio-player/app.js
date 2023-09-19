const playButton = document.querySelector(".player__play");
const nextButton = document.querySelector(".player__next");
const prevButton = document.querySelector(".player__previous");

const backgroundImage = document.querySelector(".page__bg_image");
const containerImage = document.querySelector(".container__image");
const container = document.querySelector(".container");

const audio = document.querySelector(".audio");
const playerInput = document.querySelector(".player__input");

const playerArtist = document.querySelector(".player__artist");
const playerSongName = document.querySelector(".player__song_name");

const songs = [
  "Don't Start Now",
  "Don't Hurt Yourself",
  "Thrift Shop",
  "Blinding Lights",
  "Unholy",
];

const songsArray = [
  {
    songName: "Don't Start Now",
    singer: "Dua Lipa",
  },
  {
    songName: "Don't Hurt Yourself",
    singer: "Beyonce",
  },
  {
    songName: "Thrift Shop",
    singer: "Macklemore",
  },
  {
    songName: "Blinding Lights",
    singer: "The Weeknd",
  },
  {
    songName: "Unholy",
    singer: "Sam Smith",
  },
];

let songIndex = 0;

function loadSong(song) {
  const currentSong = songsArray.find((item) => item.songName === song);
  if (currentSong) {
    playerSongName.innerHTML = song;
    audio.src = `./audio/${song}.mp3`;
    containerImage.src = `./img/cover${songIndex + 1}.png`;
    backgroundImage.src = `./img/cover${songIndex + 1}.png`;
    playerArtist.textContent = currentSong.singer;
  }
}

loadSong(songs[songIndex]);

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

playButton.addEventListener("click", function () {
  const currentSrc = playButton.getAttribute("src");
  if (currentSrc === "./svg/play.png") {
    playButton.setAttribute("src", "./svg/pause.png");
    containerImage.style.transform = "scale(1.15)";
    audio.play();
  } else {
    playButton.setAttribute("src", "./svg/play.png");
    containerImage.style.transform = "scale(1)";
    audio.pause();
  }
});

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
  playButton.setAttribute("src", "./svg/pause.png");
  containerImage.style.transform = "scale(1.15)";
}

nextButton.addEventListener("click", prevSong);

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
  playButton.setAttribute("src", "./svg/pause.png");
  containerImage.style.transform = "scale(1.15)";
}

prevButton.addEventListener("click", nextSong);

function updateProgress(ev) {
  const { duration, currentTime } = ev.srcElement;
  const progressPercent = (currentTime / duration) * 100;
}
audio.addEventListener("timeupdate", updateProgress);

const durationTimeDisplay = document.querySelector(".durationTime");

audio.addEventListener("loadedmetadata", function () {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  const formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  durationTimeDisplay.textContent = formattedDuration;
});

const currentTimeDisplay = document.querySelector(".currentTime");

function updateCurrentTimeDisplay() {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  currentTimeDisplay.textContent = formattedTime;
}

setInterval(updateCurrentTimeDisplay, 1000);

updateCurrentTimeDisplay();

document.addEventListener("DOMContentLoaded", function () {
  const inputRange = document.querySelector(".player__input");
  inputRange.value = 0;

  function updateRange() {
    inputRange.value = (audio.currentTime / audio.duration) * 100;
  }

  audio.addEventListener("timeupdate", updateRange);

  inputRange.addEventListener("input", function () {
    const seekTime = (inputRange.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });
});
