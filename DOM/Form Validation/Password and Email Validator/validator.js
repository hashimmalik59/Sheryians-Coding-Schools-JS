const form = document.querySelector("form");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const errorPasswordMessage = document.querySelector(".error-password");
const errorEmailMessage = document.querySelector(".error-email");
const successMessage = document.querySelector(".success-message");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const checkPassword = passwordRegex.test(password.value);
    const checkEmail = emailRegex.test(email.value);

    if (!checkPassword) {
        errorPasswordMessage.classList.remove("error-password");
    } else {
        errorPasswordMessage.classList.add("error-password");
    }
    if (!checkEmail) {
        errorEmailMessage.classList.remove("error-email");
    } else {
        errorEmailMessage.classList.add("error-email");
    }
    if (checkPassword && checkEmail) {
        successMessage.style.display = "initial";
    }
})

// Common confusion

// 3. value vs textContent

// value => input se data(text) lene k liye use hota hai
// textContent => baqi jitne bhi elements hain un se text lene mein use hota hai like: h1, p, span etc