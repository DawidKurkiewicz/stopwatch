const btnTime = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const panel = document.querySelector("time div");

let time = 0;
let active = false

const timer = () => {
    if (!active) {
        active = !active
        btnTime.textContent = "Pauza";
    setInterval(start, 10);
    } else {
        active = !active
        btnTime.textContent = "Start";
    }
}

btnTime.addEventListener("click", timer);
btnReset.addEventListener("click", reset)