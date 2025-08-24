// Accsessing Elements
const main = document.querySelector(".main");
const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    // Preventing the default behavior of form reloading
    e.preventDefault();

    // Creating Elements
    const card = document.createElement("div");
    const profile = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");

    // Adding classes
    card.classList.add("card");
    profile.classList.add("profile");

    // Setting content of elements
    img.setAttribute("src", allInputs[0].value); // src
    h3.textContent = allInputs[1].value; // name
    h5.textContent = allInputs[2].value; // occupation
    p.textContent = allInputs[3].value; // info

    // Append elements
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);

    // Empty form data
    allInputs.forEach(item => {
        if (item.type !== "submit") {
            if (true) {
                card.style.display = "none";
            }
            return item.value = "";

        }
    });
});