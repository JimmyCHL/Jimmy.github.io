const timeNumber = document.getElementById("timer-number");
var time = new Timer(timeNumber.innerText);

/*Timer*/

//click start button setting
const startButton = document.getElementById("trigger-button");
startButton.onclick = () => {
    time = new Timer(timeNumber.innerText);
    if (startButton.innerText === "START") {
        startButton.innerText = "PAUSE";
        let listForClass = document.getElementById("trigger-button").classList
        startButton.classList.remove(listForClass[0]);
        startButton.classList.add('class1');
        time.start();
    } else if (startButton.innerText === "PAUSE") {
        startButton.innerText = "RESUME"
        let listForClass = document.getElementById("trigger-button").classList
        startButton.classList.remove(listForClass[0]);
        startButton.classList.add('class2');
        time.pause();
    } else if (startButton.innerText === "RESUME") {
        startButton.innerText = "PAUSE";
        let listForClass = document.getElementById("trigger-button").classList
        startButton.classList.remove(listForClass[0]);
        startButton.classList.add('class3');
        time.resume();
    }
}

//get time reference
//const pomodoroTime = document.querySelector("#pomodoro-input input");
//const shortBreak = document.querySelector("#shortbreak-input input");
//const longBreak = document.querySelector("#longbreak-input input");

//click three mode buttons to get their matched value in the timer
pomButton.addEventListener('click', () => {
    time.pause();
    let timeLine = document.getElementById('second-circle-circle').attributes[9];
    timeLine.value = 305;
    if (pomodoroTime.value < 10) {
        timeNumber.innerText = '0' + pomodoroTime.value + ":" + "00";
    } else {
        timeNumber.innerText = pomodoroTime.value + ":" + "00";
    }

    startButton.innerText = "START";
    let listForClass = document.getElementById("trigger-button").classList
    startButton.classList.remove(listForClass[0]);
    startButton.classList.add('class1');

    //cookies
    setCookie("time", timeNumber.innerText);
    setCookie("timerType", 0);
    setCookie("timeLineOffset", timeLine.value);
});
shortButton.addEventListener('click', () => {

    time.pause();
    let timeLine = document.getElementById('second-circle-circle').attributes[9];
    timeLine.value = 305;
    if (shortBreak.value < 10) {
        timeNumber.innerText = '0' + shortBreak.value + ":" + "00";
    } else {
        timeNumber.innerText = shortBreak.value + ":" + "00";
    }

    startButton.innerText = "START";
    let listForClass = document.getElementById("trigger-button").classList
    startButton.classList.remove(listForClass[0]);
    startButton.classList.add('class1');

    //cookies
    setCookie("time", timeNumber.innerText);
    setCookie("timerType", 1);
    setCookie("timeLineOffset", timeLine.value);
});
longButton.addEventListener('click', () => {
    time.pause();
    let timeLine = document.getElementById('second-circle-circle').attributes[9];
    timeLine.value = 305;
    if (longBreak.value < 10) {
        timeNumber.innerText = '0' + longBreak.value + ":" + "00";
    } else {
        timeNumber.innerText = longBreak.value + ":" + "00";
    }

    startButton.innerText = "START";
    let listForClass = document.getElementById("trigger-button").classList
    startButton.classList.remove(listForClass[0]);
    startButton.classList.add('class1');

    //cookies
    setCookie("time", timeNumber.innerText);
    setCookie("timerType", 2);
    setCookie("timeLineOffset", timeLine.value);
})






//cookie with setting buttons - for input data;
//const applyButton = document.getElementById("Apply");
// const pomodoroTime = document.querySelector("#pomodoro-input input");
// const shortBreak = document.querySelector("#shortbreak-input input");
// const longBreak = document.querySelector("#longbreak-input input");
applyButton.addEventListener('click', () => {
    //cookies for data input
    setCookie("pomodoroInputData", pomodoroTime.value);
    setCookie("shortBreakInputData", shortBreak.value);
    setCookie("longBreakInputData", longBreak.value);

    //reload timerNumber
    let timerType = Number(getCookie("timerType"));
    switch (timerType) {
        case 0:
            pomButton.click();
            break;
        case 1:
            shortButton.click();
            break;
        case 2:
            longButton.click();
            break;
    }
    //cookies for font
    setCookie("font", getCookie("font"));
    setCookie("color", getCookie("color"));


})