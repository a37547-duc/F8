// Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progressBar.querySelector("span");

var progressBarWidth = progressBar.clientWidth;

var isDrag = false;
var initialClientX = 0;
var current = 0;
var currentWidth;
var handleChange = function (width) {
  var value = (width * 100) / progressBarWidth;
  console.log(value);
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }
  progress.style.width = `${value}%`;
  currentWidth = width;
  //   if (value >= 0 && value <= 100) {
  //     progress.style.width = `${value}%`;
  //     currentWidth = width;
  // Tuy không cập nhật lên UI nhưng giá trị của nó vẫn thay đổi
  //   }
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    handleChange(e.offsetX);
    isDrag = true;
    initialClientX = e.clientX;
    current = e.offsetX;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
  console.log(initialClientX);
});

document.addEventListener("mouseup", function () {
  isDrag = false;
  current = currentWidth;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    handleChange(current + moveWidth);
  }
});

// Xây dựng player chỉnh phát nhạc
var audio = new Audio(
  "./music/Zamir & Marc Indigo – On The Move (feat. Chevy) (Lyrics) [CC].mp3"
);
console.log(audio);

var playBtn = document.querySelector(".play-btn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);

  seconds = Math.floor(seconds - mins * 60);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var playIcon = `<i class="fa-solid fa-play"></i>`;

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});
audio.addEventListener("timeupdate", function () {
  //   console.log(audio.currentTime);
  currentTimeEl.innerText = getTime(audio.currentTime);
});
