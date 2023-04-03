
const global = {
    IMAGE_COUNT: 6,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0,
    playField: document.getElementById("playField"),
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min ) + min);
}

function moveImage() {

    let currentImage = document.getElementById("gameImage");


    if (currentImage) {
        currentImage.remove();
    }


    let x = getRandomInt(0, global.playField.clientWidth - global.IMAGE_SIZE);
    let y = getRandomInt(0, global.playField.clientHeight - global.IMAGE_SIZE);


    let newImage = document.createElement("img");
    let imageNumber = getRandomInt(0, global.IMAGE_COUNT - 1);
    newImage.setAttribute("src", global.IMAGE_PATH_PREFIX + imageNumber + global.IMAGE_PATH_SUFFIX);
    newImage.setAttribute("id", "gameImage");
    newImage.setAttribute("width", global.IMAGE_SIZE);
    newImage.setAttribute("height", global.IMAGE_SIZE);
    newImage.style.position = "absolute";
    newImage.style.left = x + "px";
    newImage.style.top = y + "px";


    newImage.addEventListener("click", function() {
        if (imageNumber === 0) {
            endGame();
        } else {
            global.score++;
            updateScore();
            moveImage();
        }
    });

    global.playField.appendChild(newImage);
}

function updateScore() {
    document.getElementById("score").innerHTML = "Score: " + global.score;
}

function endGame() {
    clearInterval(global.timeoutId);
    document.getElementById("gameImage").remove();
    alert("Game over! Your final score is: " + global.score);
}

function startGame() {

    global.score = 0;
    updateScore();


    moveImage();


    global.timeoutId = setInterval(function() {
        moveImage();
    }, global.MOVE_DELAY);
}


document.getElementById("startButton").addEventListener("click", function() {
    startGame();
});




