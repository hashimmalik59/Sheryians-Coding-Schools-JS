// Accessing Elements
const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.querySelector("form");
const hideName = document.querySelector(".hide-name");

// Logic of name length and instruction
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value.length < 3) {
        name.style.outline = "1px solid red";
        hideName.style.color = "red"
        hideName.classList.remove("hide-name");
    }
    else {
        name.style.outline = "1px solid green";
        hideName.classList.add("hide-name");
    }
})