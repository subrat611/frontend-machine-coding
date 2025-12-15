const video = document.querySelector("#video");
const playPauseBtn = document.querySelector("#play_pause");
const progress = document.querySelector("#progress");
const currentDuration = document.querySelector("#current");
const finalDuration = document.querySelector("#duration");
const fullScreenBtn = document.querySelector("#fullscreen");

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "||";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶";
  }
});

function formatTime(sec) {
  if (isNaN(sec)) return "00:00";

  const mins = Math.floor(sec / 60);
  const secs = Math.floor(sec % 60);

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// load duration (critical) - METADATA LOADED
video.addEventListener("loadedmetadata", () => {
  finalDuration.textContent = formatTime(video.duration);
  progress.max = video.duration;
});

// TIME UPDATE (SYNC UI)
// video.addEventListener("timeupdate", () => {
//   progress.value = video.currentTime;
//   currentDuration.textContent = formatTime(video.currentTime);
// });

// SCRUBBING (TRAP AREA)
// progress.addEventListener("input", () => {
//   video.currentTime = progress.value;
// });
