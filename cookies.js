//create setCookie function
function setCookie(name = "cookieLoaded", value = "true") {
    document.cookie = name + "=" + value + "; max-age=" + 30 * 24 * 60 * 60; // setting cookie expiration date for one month
}

//btn-accept-cookie
const acceptButton = document.getElementById("btn-accept-cookies");
const cookiesBackground = document.getElementsByClassName('wrapper')[0];
acceptButton.onclick = () => {
    setCookie();
    if (document.cookie) {
        cookiesBackground.classList.remove("active-cookies1");
    } else {
        alert("cookies can not be set, please unblock this site from the cookies!");
    }
}

//check cookies to make sure cookies loaded
let checkCookies = document.cookie.indexOf("cookieLoaded=true");
if (checkCookies != -1) {
    cookiesBackground.classList.remove("active-cookies1");
} else {
    cookiesBackground.classList.add("active-cookies1");
}

// set getCookie function with passing an parameter to get value
function getCookie(name) {
    let cookieChildName = name + "=";
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        let child = cookieArray[i];
        while (child.charAt(0) == ' ') {
            child = child.substring(1, child.length);
        }
        if (child.indexOf(cookieChildName) === 0) {
            return child.substring(cookieChildName.length, child.length);
        }
    }
    return null;
}


// load cookies


//by default fontSetting1 and colorSetting1 and pomButton should be clicked and loaded
//const fontSetting1 = document.getElementById("font-setting1");
//const colorSetting1 = document.getElementById("color-setting1");
if (getCookie('timerType') === null) {
    pomButton.click();
}
if (getCookie("font") === null) {
    fontSetting1.click();
}
if (getCookie("color") === null) {
    colorSetting1.click();
}

//Before load we need to get timeNumber and timelineOffset data first
let originalTimeData = null;
let originalOffsetData = null;
console.log(originalOffsetData === null)
if (getCookie("time") != null) {
    originalTimeData = getCookie("time");
    console.log(originalTimeData)
}
if (getCookie("timeLineOffset") != null) {
    originalOffsetData = getCookie("timeLineOffset");
    console.log(originalOffsetData)
}

//first load

//pomButton,shortButton and longButton were declared before
/* I need to setCookie for time and timeLineOffset every time the Button clicked, if 
i don't set it, next time, when the page load again, the originalTimeData and originalOffsetData would not stay the same*/
if (getCookie("timerType") != null) {
    let timerType = Number(getCookie("timerType"));
    console.log(timerType)
    switch (timerType) {
        case 0:
            pomButton.click();
            setCookie('time', originalTimeData);
            setCookie("timeLineOffset", originalOffsetData);
            break;
        case 1:
            shortButton.click();
            setCookie('time', originalTimeData);
            setCookie("timeLineOffset", originalOffsetData);
            break;
        case 2:
            longButton.click();
            setCookie('time', originalTimeData);
            setCookie("timeLineOffset", originalOffsetData);
            break;
    }
}

//second load - timerNumber and Offset
if (originalTimeData != null) {
    timeNumber.innerText = originalTimeData;
}
if (originalOffsetData != null) {
    let timeLineOffset = document.getElementById('second-circle-circle').attributes[9];
    timeLineOffset.value = originalOffsetData;
}

// load dataInput in the setting
if (getCookie('pomodoroInputData') !== null) {
    pomodoroTime.value = getCookie("pomodoroInputData");

}
if (getCookie('shortBreakInputData') !== null) {
    shortBreak.value = getCookie("shortBreakInputData");
}
if (getCookie('longBreakInputData') !== null) {
    longBreak.value = getCookie("longBreakInputData");
}


//load font and color
console.log(getCookie('font'))
switch (Number(getCookie("font"))) {
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
switch (Number(getCookie("color"))) {
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