const btns = document.querySelectorAll(".acts");
const showComputerScode = document.querySelector("#computerScode");
const showUserScode = document.querySelector("#userScode");
const screen = document.querySelector("#screen");

const plans = ["rock", "paper", "scissor"];
let userScode = 0;
let computerScode = 0;
let timeout = null;
let interval = null;

const random = (min = 0, max = plans.length - 1) =>
    Math.floor(min + Math.random() * (max - min + 1));

// handel result
function result(value, comp, user) {
    if (value != "eqal") {
        value.includes("win") ? userScode++ : computerScode++;
    }
    screen.innerText = `${value} \n user : ${user} \n computer : ${comp}`;
    showComputerScode.innerText = computerScode;
    showUserScode.innerText = userScode;
    setTimeout(() => {
        timer();
    }, 1000);
}

// handel buttons and game logic
function chosePlan(plan) {
    clearTimeout(timeout);
    clearInterval(interval);
    const user = plan || plans[random()];
    const computer = plans[random()];
    if (user == computer) {
        result("eqal", computer, user);
    } else if (
        (user == "rock" && computer == "scissor") ||
        (user == "paper" && computer == "rock") ||
        (user == "scissor" && computer == "paper")
    ) {
        result("you win :)", computer, user);
    } else {
        result("you lose :(", computer, user);
    }
}

// set timer for choose an act
function timer() {
    clearTimeout(timeout);
    clearInterval(interval);
    let i = 5;
    timeout = setTimeout(() => {
        chosePlan();
    }, 5000);
    interval = setInterval(() => {
        i--;
        screen.innerText = i;
    }, 1000);
}

window.addEventListener("load", () => {
    btns.forEach((i) =>
        i.addEventListener("click", (event) =>
            chosePlan(event.target.innerText)
        )
    );
    timer();
});
