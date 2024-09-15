const plnas = document.querySelectorAll("button");
let userScore = 0;
let computerScore = 0;

function show(value, win) {
    console.log(value);
    const h1 = document.createElement("h1");
    h1.innerText = `${value} / user : ${userScore} , computer : ${computerScore}`;
    document.body.appendChild(h1);
    if (win) {
        h1.style.color = "green";
    } else {
        h1.style.color = "red";
    }
    setTimeout(() => {
        h1.innerText = "";
    }, 1000);
}

function computerPlan() {
    const plans = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * plans.length);
    return plans[index];
}

function gameHandeler(eve) {
    const user = eve.target.innerText;
    const computer = computerPlan();

    if (user == computer) {
        show("you tie with computer ...", true);
    } else if (
        (user == "rock" && computer == "scissor") ||
        (user == "scissor" && computer == "papper") ||
        (user == "paper" && computer == "rock")
    ) {
        show("you beat computer :)", true);
        userScore++;
    } else {
        show("computer beats you :(", false);
        computerScore++;
    }
}

window.addEventListener("load", () => {
    plnas.forEach((i) => i.addEventListener("click", gameHandeler));
});
