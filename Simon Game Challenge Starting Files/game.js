const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const nextSequence = function () {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let sound = new Audio(`./sounds/${randomChosenColor}`.mp3);
    sound.play();
    // const sound = new Audio(`./sounds/${randomChosenColor}.mp3`);
    // sound.play();

};
nextSequence();
