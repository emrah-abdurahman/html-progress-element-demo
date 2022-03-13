let progressBar = null;
let progressPercentage = null;
let progressCircles = null;
let progressParent = document.querySelector(".progress-parent");
let circleProgressParent = null;
let currentProgressCircle = 0;
let intervalID;
const dataBtn = document.querySelector(".data-btn");
const progressComplete = `<svg class="progress-complete">
<use xlink:href="images/symbol-defs.svg#icon-check"></use>
</svg>`;
const progressText = `<label for="progress-bar" class="progress-bar"
>LOADING DATA - ETA 2033:</label
>
<br />
<progress id="progress-bar" min="0" max="100" value="0"></progress>
<p class="progress-percentage">0%</p>
<span class="circle-progress-parent">
<div class="progress-circle"></div>
<div class="progress-circle"></div>
<div class="progress-circle"></div>
</span>`;

dataBtn.addEventListener("click", getData);

function getData() {
  progressParent.innerHTML = progressText;
  progressBar = document.querySelector("#progress-bar");
  progressPercentage = document.querySelector(".progress-percentage");
  circleProgressParent = document.querySelector(".circle-progress-parent");
  progressCircles = document.querySelectorAll(".progress-circle");
  intervalID = setInterval(updateProgress, 1000);
}

function updateProgress() {
  const randomNumber = Math.floor(Math.random() * 10);

  if (currentProgressCircle === 3) {
    currentProgressCircle = 0;
    progressCircles.forEach((circle) => {
      circle.style.visibility = "hidden";
    });
  } else {
    progressCircles[currentProgressCircle].style.visibility = "visible";
    currentProgressCircle++;
  }

  if (progressBar.value + randomNumber > 100) {
    progressBar.value = 100;
    progressPercentage.textContent = `${progressBar.value}%`;
    document.querySelector(".progress-bar").innerText =
      "ARRIVED QUICKER THAN EXPECTED!";
    circleProgressParent.innerHTML = progressComplete;
    clearInterval(intervalID);
  } else {
    progressBar.value += randomNumber;
    progressPercentage.textContent = `${progressBar.value}%`;
  }
}

function clearIntervalID(intervalID) {
  clearInterval(intervalID);
}
