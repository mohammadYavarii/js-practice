let interval = null;
const holdBtn = document.querySelector("#holdBtn");

const handeler = (tgl) => {
    if (tgl) {
        interval = setInterval(() => {
            const colors = ["red", "green", "blue", "yellow"];
            const random = () => Math.floor(Math.random() * colors.length);
            holdBtn.style.background = `linear-gradient(to right, ${
                colors[random()]
            }, ${colors[random()]})`;
        }, 500);
    } else {
        holdBtn.style.background = "#ccc";
        clearInterval(interval);
    }
};

holdBtn.addEventListener("mousedown", () => handeler(true));
holdBtn.addEventListener("mouseup", () => handeler(false));
