// move CSS transition (move div)
const pomButton = document.getElementById("pomodoro-button");
const shortButton = document.getElementById("short-break-button");
const longButton = document.getElementById("long-break-button");
const buttonMover = document.getElementById("move-div");

pomButton.addEventListener('click', () => {
    buttonMover.style.left = "1.5%";
    pomButton.style.color = "black";
    shortButton.style.color = "#ffffff80";
    longButton.style.color = "#ffffff80";
});

shortButton.addEventListener('click', () => {
    buttonMover.style.left = "35%";
    shortButton.style.color = "black";
    pomButton.style.color = "#ffffff80";
    longButton.style.color = "#ffffff80";
    if (document.cookie.includes("cookieloaded=true")) {
        document.cookie = "time=" + timeNumber.innerText;
    }

})

longButton.addEventListener('click', () => {
    buttonMover.style.left = "68%";
    longButton.style.color = "black";
    shortButton.style.color = "#ffffff80";
    pomButton.style.color = "#ffffff80";
    if (document.cookie.includes("cookieloaded=true")) {
        document.cookie = "time=" + timeNumber.innerText;
    }

})


// get input
const pomodoroTime = document.querySelector("#pomodoro-input input");
const shortBreak = document.querySelector("#shortbreak-input input");
const longBreak = document.querySelector("#longbreak-input input");

//temporaray stored inputData
let tempPomoData;
let tempShortData;
let tempLongData;
let fontData;
let colorData;

//click setting buttons
const settingBackground = document.getElementById("outer-container");
const settingButton = document.getElementById("settings");
const settingBox = document.getElementById("settings-box");
settingButton.addEventListener('click', () => {
    settingBackground.classList.add('active');
    settingBox.classList.add('active');
    tempPomoData = pomodoroTime.value;
    tempShortData = shortBreak.value;
    tempLongData = longBreak.value;
    fontData = Number(getCookie("font"));
    colorData = Number(getCookie("color"));
})

//setting close-button
const closeButton = document.getElementById("close-icon");
closeButton.addEventListener('click', () => {
    closeButton.classList.add("active");
    setTimeout(() => {
        closeButton.classList.remove("active");
    }, 100);
    setTimeout(() => {
        settingBackground.classList.remove('active');
        settingBox.classList.remove('active');
    }, 150);
    setTimeout(() => {
            pomodoroTime.value = tempPomoData;
            shortBreak.value = tempShortData;
            longBreak.value = tempLongData;
        }, 200)
        //fontData
    switch (fontData) {
        case 0:
            fontSetting1.click();
            break;
        case 1:
            fontSetting2.click();
            break;
        case 2:
            fontSetting3.click();
            break;
    }
    //colorData
    switch (colorData) {
        case 0:
            colorSetting1.click();
            break;
        case 1:
            colorSetting2.click();
            break;
        case 2:
            colorSetting3.click();
            break;
    }
});

//setting Apply-button
const applyButton = document.getElementById("Apply");
applyButton.addEventListener('click', () => {
    applyButton.classList.add('active');
    setTimeout(() => {
        applyButton.classList.remove("active");
    }, 100);
    setTimeout(() => {
        settingBackground.classList.remove('active');
        settingBox.classList.remove('active');
    }, 150);
});




// setting up and down arrow

// pomodoro part
const pomoUpArrow = document.getElementById("pomodoro-up-arrow");
pomoUpArrow.onclick = () => {
    if (Number(pomodoroTime.value) < 59) {
        pomodoroTime.value = Number(pomodoroTime.value) + 1
    } else {
        pomodoroTime.value = 0;
    }
}
const pomoDownArrow = document.getElementById("pomodoro-down-arrow");
pomoDownArrow.onclick = () => {
        if (Number(pomodoroTime.value) > 0) {
            pomodoroTime.value = Number(pomodoroTime.value) - 1
        } else {
            pomodoroTime.value = 59;
        }
    }
    // shortBreak part
const shortUpArrow = document.getElementById("shortbreak-up-arrow");
shortUpArrow.onclick = () => {
    if (Number(shortBreak.value) < 59) {
        shortBreak.value = Number(shortBreak.value) + 1
    } else {
        shortBreak.value = 0;
    }
}
const shortDownArrow = document.getElementById("shortbreak-down-arrow");
shortDownArrow.onclick = () => {
    if (Number(shortBreak.value) > 0) {
        shortBreak.value = Number(shortBreak.value) - 1
    } else {
        shortBreak.value = 59;
    }
}
const longUpArrow = document.getElementById("longbreak-up-arrow");
longUpArrow.onclick = () => {
    if (Number(longBreak.value) < 59) {
        longBreak.value = Number(longBreak.value) + 1
    } else {
        longBreak.value = 0;
    }
}
const longDownArrow = document.getElementById("longbreak-down-arrow");
longDownArrow.onclick = () => {
        if (Number(longBreak.value) > 0) {
            longBreak.value = Number(longBreak.value) - 1
        } else {
            longBreak.value = 59;
        }
    }
    // when using keyboard
const allInputs = document.querySelectorAll(".inputs input");
allInputs.forEach((input) => {
    input.addEventListener("keyup", (ev) => {
        if (ev.key === "Backspace") {
            if (input.value != "") {
                input.value = input.value[0];
            }
        } else if (!"0123456789".includes(ev.key)) {
            input.value = "";
        }

        if (input.value === "00") {
            input.value = 0;
        }

        if (Number(input.value) > 60) {
            input.value = 0;
        }
    })
})



// setting font adjusting button
const titleFontSize = document.getElementById("title");
const selectorsFontSize = document.getElementsByClassName("buttons");
const timerNumberFontSize = document.getElementById("timer-number");


const fontSetting1 = document.getElementById("font-setting1");
const fontSetting2 = document.getElementById("font-setting2");
const fontSetting3 = document.getElementById("font-setting3");

fontSetting1.onclick = () => {
    fontSetting1.style = "background:black;color:white;";
    fontSetting2.style = "background:-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));color:black;";
    fontSetting3.style = "background:-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));color:black;";
    titleFontSize.style = "font-size:2em";
    selectorsFontSize[0].style.fontSize = "13px";
    selectorsFontSize[1].style.fontSize = "13px";
    selectorsFontSize[2].style.fontSize = "13px";
    timerNumberFontSize.style = "left:16%;font-size:516%;";
    //setCookie
    setCookie("font", 0);

}
fontSetting2.onclick = () => {
    fontSetting1.style = "background:#EFEFEF;color:black;";
    fontSetting2.style = "background:black;color:white;";
    fontSetting3.style = "background:-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));color:black;";
    titleFontSize.style = "font-size:2.5em";
    selectorsFontSize[0].style.fontSize = "14px";
    selectorsFontSize[1].style.fontSize = "14px";
    selectorsFontSize[2].style.fontSize = "14px";
    timerNumberFontSize.style = "left:14%;font-size:550%;";
    //setCookie
    setCookie("font", 1);
}

fontSetting3.onclick = () => {
    fontSetting1.style = "background:#EFEFEF;color:black;";
    fontSetting2.style = "background:-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));color:black;";
    fontSetting3.style = "background:black;color:white;";
    titleFontSize.style = "font-size:3em";
    selectorsFontSize[0].style.fontSize = "15px";
    selectorsFontSize[1].style.fontSize = "15px";
    selectorsFontSize[2].style.fontSize = "15px";
    timerNumberFontSize.style = "left:12%;font-size:570%;";
    //setCookie
    setCookie("font", 2);

}

// setting color adjusting button
const moveDivColor = document.getElementById("move-div");
const timeLineColor = document.getElementById('second-circle-circle').attributes[5];
const applyColor = document.getElementById('Apply');

const colorSetting1 = document.getElementById("color-setting1");
const colorSetting2 = document.getElementById("color-setting2");
const colorSetting3 = document.getElementById("color-setting3");

const colorSetting1Check = document.querySelector("#color-setting1 img");
const colorSetting2Check = document.querySelector("#color-setting2 img");
const colorSetting3Check = document.querySelector("#color-setting3 img");

colorSetting1.onclick = () => {
    moveDivColor.style.background = "#F87070";
    timeLineColor.value = "#F87070";
    applyColor.style.background = "#F87070";
    colorSetting1Check.style.visibility = "visible";
    colorSetting2Check.style.visibility = "hidden";
    colorSetting3Check.style.visibility = "hidden";
    //set Cookie
    setCookie("color", 0);
}
colorSetting2.onclick = () => {
    moveDivColor.style.background = "rgb(43, 230, 220)";
    timeLineColor.value = "rgb(43, 230, 220)";
    applyColor.style.background = "rgb(43, 230, 220)";
    colorSetting1Check.style.visibility = "hidden";
    colorSetting2Check.style.visibility = "visible";
    colorSetting3Check.style.visibility = "hidden";
    //set Cookie
    setCookie("color", 1);
}
colorSetting3.onclick = () => {
    moveDivColor.style.background = "rgb(224, 107, 224)";
    timeLineColor.value = "rgb(224, 107, 224)";
    applyColor.style.background = "rgb(224, 107, 224)";
    colorSetting1Check.style.visibility = "hidden";
    colorSetting2Check.style.visibility = "hidden";
    colorSetting3Check.style.visibility = "visible";
    //set Cookie
    setCookie("color", 2);
}