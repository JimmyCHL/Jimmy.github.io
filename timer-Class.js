var timeFunc = null;
class Timer {
    constructor(value) {
        this.totalSeconds = this.countTotalSeconds(value);
        this.originalValue = this.countTotalSeconds(value);
        this.timeLine = document.getElementById('second-circle-circle').attributes[9].value;
        this.timeLineBackup = document.getElementById('second-circle-circle').attributes[9].value;
    }
    countTotalSeconds(value) {
        let minutes = Number(value.slice(0, 2));
        let seconds = Number(value.slice(-2));
        let totalSeconds = minutes * 60 + seconds;
        return totalSeconds

    }
    start() {
        let timeNumber = document.getElementById("timer-number");
        let startTime = this.originalValue;

        timeFunc = setInterval(() => {
            this.totalSeconds--;
            let minutes = String(Math.floor(this.totalSeconds / 60));
            let seconds = String(Math.floor(this.totalSeconds % 60));
            if (Number(minutes) < 10) {
                minutes = "0" + minutes;
            }
            if (Number(seconds) < 10) {
                seconds = "0" + seconds;
            }
            timeNumber.innerText = (minutes + ":" + seconds);

            let percent;
            if (this.timeLine < startTime) {
                percent = this.timeLine % startTime / startTime;
                this.timeLineBackup -= percent;
            } else {
                percent = this.timeLine / startTime // if divider is 0, you would get infinity or -infinity
                this.timeLineBackup -= percent;
            }
            console.log(this.timeLineBackup);
            console.log(100 / 0)
            document.getElementById('second-circle-circle').attributes[9].value = this.timeLineBackup;

            //reset
            if (this.totalSeconds <= -1) {
                this.pause();
                this.reset();
            }

            //cookies
            setCookie("time", timeNumber.innerText);
            setCookie("timeLineOffset", this.timeLineBackup);
        }, 1000)

    }
    pause() {
        clearInterval(timeFunc);
    }
    resume() {
        this.start();
    }
    reset() {
        //reset timer number
        let timeNumber = document.getElementById("timer-number");
        let minutes = String(Math.floor(this.originalValue / 60));
        if (Number(minutes) < 10) {
            minutes = "0" + minutes;
        }
        timeNumber.innerText = (minutes + ":00");
        //reset start button
        let startButton = document.getElementById("trigger-button");
        startButton.innerText = "START";
        //reset timeLine
        let timeLine = document.getElementById('second-circle-circle').attributes[9];
        timeLine.value = 305;
        this.timeLineBackup = timeLine.value;
    }
}