// DOM

// DOM Manipulation
// DOM => Tree => elementNode, commentNode, textNode, attributeNode(Everything in JS is a node)

// HTML se element select karna
// getElementById => id wale element ko select karte hain
// getElementsByClassName => class wale elements ko select karte hain(HTML Collection)
// getElementsByTagName => is se hum koi bhi specific tag ko select kar sakte hain
// querySelector => is se hum tag, class, id sab ko select karsate hain but id aur class k case mein . & # se pehle lagana parega
// querySelectorAll => like bohat se elements same class pe ho to select kar saktein hai

// Text badalna
// innerHTML => yeh text k saath HTML bhi badalta hai
// innerText => yeh bhi text change karta hai(yeh invisible text ko show nahi karta)
// textContent => yeh sirf text return karta hai(yeh invisible text ko show karta)

// HTML badalna
// CSS badalna
// Adding CSS: JS se css lagane ka treeqa style keyword apne element se pehle lagao aur use karo lekin camelCase mein

// classList.add(): is se HTML element pe class add hojati hai JS se
// classList.remove(): is se HTML element pe class remove hojati hai JS se
// classList.toggle(): yeh ulta karta hai add hoto remove karta hai remove hoto add karta hai
const p = document.querySelector("p");
console.log(p);
p.style.backgroundColor = "red";

// Attribute badalna
// setAttribute => is se hum attribute ko set kar sakte hain JS mein
// getAttribute => is se hum attribute ko get/hasil kar sakte hain JS mein
// removeAttribute => is se hum attribute ko remove kar sakte hain
// const img = document.querySelector("img");
// img.setAttribute("class", "img-tag");
// console.log(img);
// console.log(img.getAttribute("alt"));
// img.removeAttribute("class");
// console.log(img);

// Create element => is se hum JS mein kisi bhi element ko create kar sakte hain like:
const para = document.createElement("p");
console.log(para);
para.textContent = "My paragraph";
// document.body.append(para);
document.body.prepend(para);

// append() => element ko add karta hai, document end mein
// prepend() => element ko add karta hai, document start mein
// remove() => document se element remove karne k liye use hota hai
// appendChild() => document yeh bhi element ko end mein add karta hai but string ko support nahi karta aur yeh purana method hai

const h1 = document.querySelector("h1");
console.log(h1);
h1.remove();

const createH1 = document.createElement("h1");
console.log(createH1);

createH1.textContent = "Mera JS se create kiya hua H1";

const div = document.querySelector("div");

div.append(createH1);
// div.appendChild("createH1");

// 1. What is DOM? How does it represent HTML structure?
// DOM => is a tree like structure.
// And everything is a node.

// 2. Whats the difference between an elemet node and a text node
// Element node => <h1></h1> h1 tag is element node(text node there is a child like <b></b>, <span></span> etc)
// Text node => <h1>This text is text node</h1> the text in h1 tag is text node(text node there is no child)

// 4. Inspect the following HTML in the browser and identify each node

// 5. What is the difference between getElementById and querySelector

// getElementById => yeh sirf woh elements select karta hai jin ko sirf id assing ki ho(exclusive "#")
// querySelector => is se hum .class, #id, tag in teenon ko select kar sakte hain(inclusive "." before class & "#" before id)

// 6. What does getElementByClassName return? Is it an array?
// its not totaly like array but kind of array, it returns HTMLCollection

// 7. Use querySelectorAll to select all buttons with class "buy-now"
// const buyNowButton = document.querySelectorAll(".buy-now");
// console.log(buyNowButton);

// Task

// 1. Select the heading of a page by ID and change its text to "Welcome to Sheryians!".

// const changeH1 = document.getElementById("message");
// console.log(changeH1);

// changeH1.textContent = "Welcome to Shaeryians!";

// 2. Select all li elements and print their text using a loop

const LIs = document.querySelectorAll("li");
// console.log(LIs);

// LIs.forEach(item => {
//     console.log(item.textContent)
//     item.style.background = "yellow";
//     item.style.color = "red"
// }
// )

// for (let i = 0; i < LIs.length; i++) {
//     console.log(`Fruit: ${LIs[i].textContent}`);
// }

// 3. What is the difference between innerText, textContent, and innerHTML?

// innerText => yeh sirf woh text show karta hai jo k visible ho
// textContent => yeh bhi text show karta hai, but jo invisible bhi ho usko bhi show karta hai
// innerHTL => text aur HTML dono ko manipulate karta hai

// 4. When should you use textContent instead of innerText?

// kyun ki innerText invisible text ko show nahi karta aur textContent karta hai

// 5. Select a paragraph and replace its content with:
// `<b>Updated</b> by JavaScript`

const paraText = document.querySelector(".changeContent");

// console.log(paraText);

paraText.innerHTML = "<b>Updated</b> by JavaScript";

// console.log(paraText);

// 6. How do you get the src of an image using JavaScript?

const myImage = document.querySelector(".image");


myImage.setAttribute("src", "sadasd")
// console.log(myImage);

// 7. What does setAttrbute do?

// setAttribute JS se HTML element ka attribute se karta hai

// myImage.setAttribute("src", "sdasd")

// const myDiv = document.querySelector("div");

// console.log(myDiv);

// myDiv.setAttribute("title", "This is my div");

// const firstH1 = document.querySelector("#abc");

// firstH1.removeAttribute("disabled");

// 8. What does createElement() do? What's returned?

// const a = document.createElement("a");
// console.log(a) // <a></a> khali a return karega

// 9. What's the difference between appendChild() and prepend()

// appendChild(): end mein child ko add karta hai, string nahi support karta, aur purana method hai

// prepend(): start mein element ko add karta hai

// 10. Can you remove an element using removeChild()?

const myUL = document.querySelector(".myUL");

// console.log(myUL);

const myLastLI = document.querySelector(".lastLI");

// console.log(myLastLI);

myUL.removeChild(myLastLI);

// parentElement.removeChild(childElement);

// 11. Create a new list item <li>New Task</li> and add it to the end of <ul>

const newLI = document.createElement("li");

// console.log(newLI);

newLI.textContent = "New Task";

myUL.appendChild(newLI);

// 12. Create a new image element with a placeholder source and add it at the top of a div

const newImg = document.createElement("img");

// console.log(newImg);

newImg.setAttribute("src", "https://www.youtube.com");
newImg.setAttribute("alt", "Is mein meri image hai");

newImg.textContent = "My Profile image";

document.body.prepend(newImg);

// 13. Select the first item in a list and delete it from the DOM.

const firstLI = document.querySelector("li");

myUL.removeChild(firstLI);

// 14. How to change the background color of an element

newImg.style.backgroundColor = "blue";

// 15. What is the difference between classList.add() and classList.toggle()

// classList.add() => yeh element pe class ko add karta hai
// classList.toggle() => yeh element pe class add hoto remove karta hai aur remove hoto add karta hai

// 16. Add a highlight class to every even item in a list.

const evenLI = document.querySelectorAll("ul li:nth-child(2n)");

// console.log(evenLI);

evenLI.forEach(item => item.classList.add("highlight"));

// 17. Toggle a class active on a button when clicked (Hint: Use classList.toggle()).

const activeButton = document.querySelector(".active");
console.log(activeButton);

activeButton.addEventListener("click", function () {
    activeButton.classList.toggle("active");
    activeButton.style.color = "red"
});

// 18. Set the font size of all <p> elements to 18px using style.

const allPs = document.querySelectorAll(".paraTag");

// console.log(allPs);

allPs.forEach((item) => {
    item.style.fontSize = "30px"
})

// Common confusions

// 1. Difference between innerHTML, innerText, and textContent

// innerHTML => Yeh text k saath HTML ko bhi manipulate karta hai
// innerText => Yeh sirf text ko manipulate karta hai aur is mein visibility: hidden; wala text show nahi hota hai
// textContent => Yeh sirf text ko manipulate karta hai aur is mein visibility: hidden; wala text show hota hai

// 2. ClassList vs Style Property

// classList => is mein hum classes ko add, remove, and toggle karte hain
// style property => is mein hum directyl styling karte hain "style" keyword k through

// Note: Best practice classList ko use karna hai