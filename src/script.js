const _data = {
  gameOn: false,
  timeout: undefined,
  sounds: [],

  strict: false,
  playerCanPlay: false,
  score: 0,
  gameSequence: [],
  playerSequence: [],
};

const _gui = {
  counter: document.querySelector(".gui__counter"),
  switch: document.querySelector(".gui__btn-switch"),
  led: document.querySelector(".gui__led"),
  strict: document.querySelector(".gui__btn--strict"),
  start: document.querySelector(".gui__btn--start"),
  pads: document.querySelectorAll(".game__pad"),
};

const _soundUrls = [
  "../assets/audio/audio_simonSound1.mp3",
  "../assets/audio/audio_simonSound2.mp3",
  "../assets/audio/audio_simonSound3.mp3",
  "../assets/audio/audio_simonSound4.mp3",
];

_soundUrls.forEach((sndPath) => {
  const audio = new Audio(sndPath);
  _data.sounds.push(audio);
});

_gui.switch.addEventListener("click", () => {
  _data.gameOn = _gui.switch.classList.toggle("gui__btn-switch--on");
  console.log(_data.gameOn)

  _gui.counter.classList.toggle("gui__counter--on");
  _gui.counter.innerHTML = "--";
});

_gui.strict.addEventListener("click", () => {});

_gui.start.addEventListener("click", () => {});

const padListener = (e) => {};

_gui.pads.forEach((pad) => {
  pad.addEventListener("click", padListener);
});

const startGame = () => {};

const setScore = () => {};

const newColor = () => {};

const playSequence = () => {};

const blink = (text, callback) => {};

const waitForPlayerClick = () => {};

const resetOrPlayAgain = () => {};

const changePadCursor = (cursorType) => {};

const disablePads = () => {};
