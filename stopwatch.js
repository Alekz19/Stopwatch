window.onload = function() {
    let btns = document.getElementsByClassName("buttons"),
        timeFunction;
    btns[0].onclick = startWatch;
    btns[1].onclick = stopWatch;
    btns[2].onclick = resetWatch;
};

const timer = document.getElementById("stopwatch");
let stoptime = true;

let mSec = 0,
    sec = 0,
    min = 0,
    hr = 0;

startWatch = function() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
};
stopWatch = function() {
    if (stoptime == false) {
        stoptime = true;
    }
};

function timerCycle() {
    if (stoptime == false) {
        mSec = parseInt(mSec);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        mSec += 1;
        if (mSec == 100) {
            sec += 1;
            mSec = 0;
        };

        if (sec == 60) {
            min += 1;
            sec = 0;
            mSec = 0;
        };

        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
            mSec = 0;
        }

        if (mSec < 10 || mSec == 0) {
            mSec = "0" + mSec;
        }

        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }

        if (min < 10 || min == 0) {
            min = "0" + min;
        }

        if (hr < 10 || hr == 0) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec + ":" + mSec;
        timeFunction = setTimeout(timerCycle, 10);
    }
}

resetWatch = function() {
    clearTimeout(timeFunction);
    stoptime = true;
    mSec = 0,
        sec = 0,
        min = 0,
        hr = 0;
    timer.innerHTML = `00:00:00:00`;
}