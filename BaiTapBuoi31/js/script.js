var btn = document.getElementById("download-button");
const countdownDuration = 5000; // 5 giây
let startTime;
let isCounting = false;
function startCountdown() {
  if (isCounting) {
    return;
  }

  const startTimestamp = performance.now();
  isCounting = true;

  function updateCounter(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTimestamp;
    const remainingTime = Math.max(countdownDuration - elapsedTime, 0);

    document.getElementById("countdown-display").textContent = (
      remainingTime / 1000
    ).toFixed(0);

    if (remainingTime > 0) {
      startTime = requestAnimationFrame(updateCounter);
    } else {
      btn.removeAttribute("disabled");
      btn.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/";
        isCounting = false;
      });
    }
  }

  updateCounter(performance.now());
}

// Bắt đầu đếm ngược tự động khi trang web được tải
window.addEventListener("load", () => {
  startCountdown();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden" && isCounting) {
    cancelAnimationFrame(startTime);
    isCounting = false;
  }
});
