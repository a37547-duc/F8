// Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progressBar.querySelector("span");

// Yêu cầu: Chuyển đổi hết thành phần trăm(%)
var handleUpdateValue = function () {
  progress.style.width = `${value}%`;
};
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
  var currentTime = (value / 100) * audio;
  audio.currentTime = currentTime;
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
    // value = (moveWidth * 100) / progressBarWidth;
    handleChange(current + moveWidth);
    // if (value < 0) {
    //   value = 0;
    // }
    // if (value > 100) {
    //   value = 100;
    // }
    handleUpdateValue(value);
    var currenttime = (value / 100) * audio.duration;
    currentTimeEl.innerText = getTime(currenttime);
  }
});

// Xây dựng player chỉnh phát nhạc
var audio = new Audio("./music/cef1b28658d28e7407de5557e681acbf.mp3");
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

  // Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  handleUpdateValue(value);
});

// // Xây dựng chức năng karaoke
// var karaoke = document.querySelector(".karaoke");
// var karaokeInner = document.querySelector(".karaoke-inner");
// var karaokePlayBtn = document.querySelector(".karaoke-play");

// var karaokeCloseBtn = karaoke.querySelector(".close");

// var player = document.querySelector(".player");
// var karaokeContent = document.querySelector(".karaoke-content");
// karaokePlayBtn.addEventListener("click", function () {
//   karaokeInner.classList.add("show");
//   player.classList.add("bottom");
// });

// karaokeCloseBtn.addEventListener("click", function () {
//   karaokeInner.classList.remove("show");
//   player.classList.remove("bottom");
// });

// var karaokeInterval;

// // Lắng nghr sự kiện play
// audio.addEventListener("play", function () {
//   karaokeInterval = setInterval(handleKaraoke, 100);
// });

// // Lắng nghe sự kiện pause
// audio.addEventListener("pause", function () {
//   clearInterval(karaokeInterval);
// });

// console.log(lyric.data.sentences);
// lyric = lyric.data.sentences;

// var getSentence = function (index) {
//   return lyric[index].words
//     .map(function (word) {
//       return word.data;
//     })
//     .join(" ");
// };

// var handleKaraoke = function () {
//   var currentTime = audio.currentTime * 1000;
//   var index = lyric.findIndex(function (lyricItem) {
//     return (
//       currentTime >= lyricItem.words[0].startTime &&
//       currentTime <= lyricItem.words[lyricItem.words.length - 1].endTime
//     );
//   });

//   if (index !== -1) {
//     if (index === 0) {
//       var outputHtml = ` <p data-index="${index}">${sentenceFirst(0)}</p>
//                        <p data-index="${index + 1}">${sentenceSecond(1)}</p>`;
//       karaokeContent.innerHTML = outputHtml;
//     } else {
//       if (index % 2 !== 0) {
//         chanSentence(
//           karaokeContent.children[0],
//           getSentence(index + 1),
//           index + 1
//         );
//       } else {
//         chanSentence(
//           karaokeContent.children[1],
//           getSentence(index + 1),
//           index + 1
//         );
//       }
//     }

//     // Xử lý tô màu
//     var currentLineEl = karaokeContent.querySelector(`[data-index="${index}"]`);
//     console.log(currentLineEl);
//   }
// };

// var chanSentence = function (element, sentence, index) {
//   element.style.transition = "all 0.3s ease-in-out";

//   element.style.opacity = 0;
//   setTimeout(function () {
//     element.innerHTML = sentence;
//     element.style.opacity = 1;
//     element.dataset.index = index;
//   }, 300);
// };
