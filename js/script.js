"use strict";
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let progresses = document.querySelectorAll(".step-container");
let steps = document.querySelectorAll(".step");

nextBtn.addEventListener("click", function () {
  prevBtn.removeAttribute("disabled");
  for (let i = 0; i < progresses.length; i++) {
    if (i === progresses.length - 1) {
      this.setAttribute("disabled", "disabled");
    }
    if (progresses[i].querySelector(".before").style.width === "70px") continue;
    progresses[i].querySelector(".before").style.width = "70px";
    steps[i + 1].style.borderColor = "rgb(40, 38, 151)";
    break;
  }
});

prevBtn.addEventListener("click", function () {
  nextBtn.removeAttribute("disabled");
  for (let i = progresses.length - 1; i >= 0; i--) {
    if (i === 0) {
      this.setAttribute("disabled", "disabled");
    }
    if (progresses[i].querySelector(".before").style.width === "70px") {
      progresses[i].querySelector(".before").style.width = 0;
      steps[i + 1].style.borderColor = "#ddd";
      break;
    }
    continue;
  }
});
