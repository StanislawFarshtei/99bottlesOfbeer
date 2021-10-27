const randomNumber1 = Math.floor((Math.random() * 6) + 1);
const randomNumber2 = Math.floor((Math.random() * 6) + 1);

const randomDiceImage = `dice${randomNumber1}.png`;
const randomImageSource = `./images/${randomDiceImage}`;

const image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",  randomImageSource);

const randomImageSource2 = `./images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
