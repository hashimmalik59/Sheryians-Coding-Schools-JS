// mouseover => jab mouse event ko touch kare to yeh mouseover

const box = document.querySelector(".box");

// box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "green";
// })
// box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "red";
// });

window.addEventListener("mousemove", function (e) {
    box.style.position = "absolute";
    box.style.top = `${e.clientY}px`;
    box.style.left = `${e.clientX}px`;
})

// keyup => jab humne key ko press karke shor/release kardiya
// keydown => jab humne key ko pakre/hold kiya

// Event Object: e, target, type, preventDefault

// e => event object ki details
// target => yani jis par event trigger hua ho like, click, mouseover, submit etc
// type => yani konsa event trigger hua like, div pe click kiya to "click" event trigger hua
// preventDefault() => form ka reload/refresh yani deafult behavior se bachne k liye hum is method ko use karte hain

//..................

// Event Bubbling => by default behaior, bottom to top like, child -> parent -> granparent
// Jispe event aayega agar us par listener nahi hua to hamara event us k parent par listener dhundhega aur aisa karte karte upar ki taraf move karega like: Child -> Parent -> Grand-parent -> Great-grandparent

// Event Bubbling examples;

const ul = document.querySelector("ul");
ul.addEventListener("click", function (e) {
    e.target.classList.toggle("strike");
});

// const a = document.querySelector(".a");
// const b = document.querySelector(".b");
// const c = document.querySelector(".c");
// const button = document.querySelector("button");

// Event Bubbling examples;

// a.addEventListener("click", () => {
//     console.log("Great-grandparent Clicked!");
// })
// b.addEventListener("click", () => {
//     console.log("GrandParent Clicked!");
// })
// c.addEventListener("click", () => {
//     console.log("Parent Clicked!");
// })
// button.addEventListener("click", () => {
//     console.log("Child Bubble!");
// })

// Note: jis element pe event lage ga to saath mein us k parent pe bhi propagate hoga event

// Event Capturing => Event propagation ka first phase hota hai
// Jab event raise hota hai (jaise click), toh sabse pehle top-most element (document/window) se
// neeche target element tak travel karta hai (top → bottom), but yeh phase(capturing) by default off hota hai.
// Agar hum addEventListener ka 3rd parameter true rakhein, toh handler capturing phase mein trigger hota hai.
// Phir bubbling phase start hota hai (bottom → top).