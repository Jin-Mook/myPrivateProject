const form = document.querySelector("#container")
const input = document.querySelector("#log-in")
const logInInput = form.querySelector("input");
const welcome = document.querySelector("#welcome")

const welcomeText = document.createElement("h1");

function showText() {
    input.classList.add("hidden");
    welcome.append(welcomeText);
    welcome.classList.remove("hidden");
}

function logIn(event) {
    event.preventDefault();
    const name = logInInput.value;
    localStorage.setItem("userName", name)
    welcomeText.innerText = `welcome ${name}`;

    showText()
}

form.addEventListener('submit', logIn)

if (localStorage.getItem("userName")) {
    welcomeText.innerText = `welcome ${localStorage.getItem("userName")}`

    showText()
}