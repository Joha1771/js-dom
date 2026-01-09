import './style.css'

// //1

// // const id = setInterval(() => {
// //     console.log("salom");

// // },1000);

// 2

const sfBtn = document.querySelector(".sf-btn");
const sfStopBtn = document.querySelector(".sf-stop-btn");

let count = 0;
let sfId = null;

function changeColor() {
  if (count === 0) {
    document.body.style.backgroundColor = "red";
    count = 1;
  } else if (count === 1) {
    document.body.style.backgroundColor = "yellow";
    count = 2;
  } else if (count === 2) {
    document.body.style.backgroundColor = "green";
    count = 3;
  } else {
    document.body.style.backgroundColor = "yellow";
    count = 0;
  }
}

sfBtn.addEventListener("click", () => {
  sfBtn.disabled = true;
  sfId = setInterval(changeColor, 4000);
});

sfStopBtn.addEventListener("click", () => {
  clearInterval(sfId);
  sfBtn.disabled = false;
  document.body.style.backgroundColor = "white";
});

//3

const sk = document.querySelector(".secundomer > p");
const skBtn = document.querySelector(".sk-btn");
const skStopBtn = document.querySelector(".sk-stop-btn");

skBtn.textContent = "Start";
let id = null;

skBtn.addEventListener("click", () => {
  skBtn.disabled = true;
  id = setInterval(() => {
    sk.textContent++;
  }, 1000);
});

skStopBtn.addEventListener("click", () => {
  clearInterval(id);
  skBtn.disabled = false;
});

// 4

const currentTimer = document.querySelector(".timer > p");
const currentHour = document.querySelector(".hour");
const currentMinute = document.querySelector(".minutes");
const currentSecond = document.querySelector(".second");
const phBtn = document.querySelector(".ph-btn");
const phStBtn = document.querySelector(".ph-stop-btn");

phBtn.addEventListener("click", function () {
  phBtn.disabled = true;

  id = setInterval(() => {
    currentSecond.textContent++;
    if (Number(currentSecond.textContent) === 60) {
      currentSecond.textContent = 0;
      currentMinute.textContent++;
    }
    if (Number(currentMinute.textContent) === 60) {
      currentMinute.textContent = 0;
      currentHour.textContent++;
    }
  }, 1000);
});

phStBtn.addEventListener("click", () => {
  clearInterval(id);
  phBtn.disabled = false;
});

// 5

const windowOn = document.querySelector(".windowColor");
const windowOff = document.querySelector(".window-off-Color");

const allWindows = document.querySelectorAll(".window");

let timerId;

windowOn.addEventListener("click", function () {
  windowOn.disabled = true;

  allWindows.forEach((win) => {
    win.style.backgroundColor = "#C9A227";
  });

  timerId = setInterval(() => {
    console.log("Интервал работает");
  }, 1000);
});

windowOff.addEventListener("click", () => {
  console.log("Выключаем свет...");
  clearInterval(timerId);
  windowOn.disabled = false;
  allWindows.forEach((win) => {
    win.style.backgroundColor = "transparent";
  });
  allWindows.forEach((win) => {
    win.style.backgroundColor = "darkgreen";
  });
});

// 6

const carBtn = document.querySelector(".car-btn");
const redCar = document.querySelector(".redd");
const orangeCar = document.querySelector(".orangee");

let carId = null;
let redPos = 0;
let orangePos = 0;


carBtn.addEventListener("click", () => {
    carBtn.disabled = true;

    redPos = 0;
    orangePos = 0;
     
    redCar.style.transform = "translateX(0px)";
    orangeCar.style.transform = "translateX(0px)";

    carId = setInterval(() => {
        const redStep = Math.floor(Math.random()*10 + 1);
        const orangeStep = Math.floor(Math.random()*10 + 1);

        redPos += redStep;
        orangePos += orangeStep;

        redCar.style.transform = `translateX(${redPos}px)`;
        orangeCar.style.transform = `translateX(${orangePos}px)`;

        if(redPos > 900 || orangePos > 900){
            clearInterval(carId);
            carBtn.disabled = false;

            if(redPos > orangePos){
                alert("Qizil yutib qoydiyu ")
            }else{
                alert("orange krasavchik")
            }
        }
    }, 50);
});