let secondArrow = document.querySelector(".s"),
  minuteArrow = document.querySelector(".m"),
  hourArrow = document.querySelector(".h"),
  hoursBox = document.querySelector(".hours"),
  minutesBox = document.querySelector(".minutes");

// new Date() - встроенный глобальный объект в javascript который дает информацию о дате и времени

function start() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  secondArrow.style = `transform: rotate(${seconds * 6}deg)`;
  minuteArrow.style = `transform: rotate(${minutes * 6}deg)`;
  hourArrow.style = `transform: rotate(${hours * 30}deg)`;

  hoursBox.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesBox.innerHTML = minutes < 10 ? "0" + minutes : minutes;

  setTimeout(() => start(), 1000);
}

start();

// рекурсия - это когда функция вызывает саму себя внутри себя
// setTimeout() - это встроенная функция которая позволяет добавить задержку

// let i = 1;
// function loop() {
//     if(i < 100) {
//         console.log(i);
//         i++
//         setTimeout(() => loop(), 1000)
//     }
// }

// loop()

let links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

links.forEach((el, i) => {
  el.addEventListener("click", () => {
    removeActive();
    el.classList.add("active");
    tabs[i].classList.add("active");
  });
});

function removeActive() {
  links.forEach((el, i) => {
    el.classList.remove("active");
    tabs[i].classList.remove("active");
  });
}

// Stopwat start


let count_start = document.querySelector(".stopwatch__btn");
let count_seconds = document.querySelector(".stopwatch__seconds");
let count_minutes = document.querySelector(".stopwatch__minutes");
let count_hours = document.querySelector(".stopwatch__hours");
let intervalId; // to store the interval ID
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateStopwatch() {
  count_seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
  count_minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  count_hours.textContent = hours < 10 ? "0" + hours : hours;

  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  intervalId = setTimeout(updateStopwatch, 1000);
}

function resetStopwatch() {
  clearTimeout(intervalId); // Stop the stopwatch
  count_start.textContent = "START";
  seconds = 0;
  minutes = 0;
  hours = 0;
  count_seconds.textContent = "00";
  count_minutes.textContent = "00";
  count_hours.textContent = "00";
}

count_start.addEventListener("click", () => {
  if (count_start.textContent === "STOP") {
    clearTimeout(intervalId); // Stop the stopwatch
    count_start.textContent = "RESET";
  } else if (count_start.textContent === "RESET") {
    resetStopwatch(); // Reset the stopwatch
  } else {
    count_start.textContent = "STOP";
    updateStopwatch(); // Start the stopwatch
  }
});
