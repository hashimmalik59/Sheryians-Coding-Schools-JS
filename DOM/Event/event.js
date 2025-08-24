// Events and Event Handling

// Event => yeh aik action hai jo k kuch karna ho tab hota hai like:
// mouse ka click hona
// mouse ka move hona
// keyboard ki keypress hona
// form submit hona

// Event Handling => jab koi action perform hone k baad jo reaction hota hai woh Event Handler/Event Listener aur (function hota hai is mein hum task define karte hain) like:
// mouse k click par color change hojaye
// mouse move par font size increase hojayen
// keyboard ki keypress par background color change hojaye
// form submit hone par logIn/signUp hojaye

const myButton = document.getElementById("abc");

// element.addEventListener("event", callBack)

function increaseFontSize() {
    myButton.style.fontSize = "50px";
}
myButton.addEventListener("click", increaseFontSize);


// removeEventListener => yeh existing event handler ko remove karta hai
myButton.removeEventListener("click", increaseFontSize);

// common events

// click => jab element par click ho
myButton.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "black";
})

// input => input box mein kuch bhi type, space, clear karne se input(event) trigger hota hai
const input = document.querySelector("input");

input.addEventListener("input", function (e) {
    // console.log(e); // event ka full data return karta hai
    if (e.data !== null) {
        console.log(e.data);
        // console.log(e);
    }
    // console.log(e.target); // yeh hamesha woh element return karta hai jis k upar event hua ho
    // console.log(e.target.value); // yeh input ka value lene k kaam aata hai
});

// e => Jab bhi koi event hota hai(click, input, submit, etc.), browser tumhare function ko ek object deta hai jisme us event ka poora data hota hai.
// Tum ise e ya event naam de sakte ho — naam ka farq nahi padta.

// target => target event object ka ek property hai.
// Ye hamesha wo element return karta hai jiske upar event hua.
// Soch lo: “User ne click / type / hover kis pe kiya?” — uska jawab target deta hai.

// value => yeh input ka value lene mein kaam aata hai

//....................

// change => Tumne type karke cursor input box se bahar nikal liya (ya Enter dabaya) — tab hi change event chalega.

const selectInput = document.querySelector("select");
const h4 = document.querySelector("h4");


selectInput.addEventListener("change", function (e) {
    const deviceValue = e.target.value;
    console.log(deviceValue);
    h4.textContent = `${e.target.value}: Device Selected`;
})
