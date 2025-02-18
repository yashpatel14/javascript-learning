let display = document.getElementById("display");
let clickSound = new Audio("click.flac");

function playClickSound() {
    clickSound.currentTime = 0; // Rewind to the start (in case of fast clicks)
    clickSound.play(); // Play the sound
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function displayValue(value) {
    playClickSound();
    document.body.style.backgroundColor = getRandomColor();
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    playClickSound();
    display.innerText = "0";
}

function deleteLast() {
    playClickSound();
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
    playClickSound();
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}



