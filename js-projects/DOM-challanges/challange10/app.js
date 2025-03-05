const gameContainer = document.getElementById("gameContainer");
const movesElement = document.getElementById("moves");
const timeElement = document.getElementById("time");

let cards = [];
let flippedCards = [];
let matchedCards = 0;
let moves = 0;
let time = 0;
let timer;


const cardValues = ["🐶", "🐶", "🐱", "🐱", "🦊", "🦊", "🐼", "🐼", "🦁", "🦁", "🐰", "🐰", "🐸", "🐸", "🐢", "🐢"];


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


function createCards() {
    gameContainer.innerHTML = ""; 
    matchedCards = 0;
    flippedCards = [];
    cards = shuffle([...cardValues]); 

    cards.forEach((value) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = value;

        card.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${value}</div>
        `;

        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
    });
}


function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}


function checkMatch() {
    moves++;
    movesElement.textContent = moves;

    let [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards += 2;
        flippedCards = [];


        if (matchedCards === cards.length) {
            clearInterval(timer);
            setTimeout(() => alert(`🎉 You won in ${moves} moves!`), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }
}


function startTimer() {
    time = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}


function restartGame() {
    moves = 0;
    movesElement.textContent = "0";
    timeElement.textContent = "0:00";
    createCards();
    startTimer();
}


restartGame();
