// Timers and Intervals

// Timers

// setTimeout => async code hai callBack queue mein jata hai delay k baad execute hota hai like:
// setTimeout(callBack, delayTimerInMiliseconds);

const a = setTimeout(function () {
    console.log("Hello World!");
}, 2000) // 2 seconds k delay k baad "Hello World!" print hoga


// setInterval => async code hai callBack queue mein jata hai yeh aik specific duration k baad chalta rahega baar baar like:

const b = setInterval(function () {
    console.log("Hello World!");
}, 2000) // har 2 seconds k baad "Hello World!" print hota rahega


// clearTimeout => yeh setTimeout ko clear karta hai like

clearTimeout(a); // clearTimeout ka function aur us k argument mein woh wala setTimeout jo k clear karna hai

// Note: clearInterval bhi same hai

clearInterval(b); // clearInterval ka function aur us k argument mein woh wala setTimeout jo k clear karna hai

// Real life example of intervals

let count = 10;
const stopInterval = setInterval(() => {
    if (!count) {
        clearInterval(stopInterval);
    }
    else {
        count--;
    }
}, 1000);

// Progress Bar Project

const progressBar = document.querySelector(".progressBar");
const h3 = document.querySelector("h3");
const h5 = document.querySelector("h5");

let number = 0;
const finish = setInterval(function () {
    if (number <= 99) {
        number++;
        progressBar.style.width = `${number}%`;
        h5.textContent = `${number}%`;
    }
    else {
        clearInterval(finish)
        h3.textContent = "Downloaded";
    }
}, 30)

const hidingDiv = document.querySelector(".hideDiv");

const x = setInterval(function () {
    hidingDiv.style.display = "none";

}, 3000);

// Common Confusion

// setTimeout vs setInterval

// setTimeout => aik baar chalta hai aik khaas delay k baad
// setInterval => baar baar chalta hai aik khaas timer k baad like har 2 seconds k baad yeh kar