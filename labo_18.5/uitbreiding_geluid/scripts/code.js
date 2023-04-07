const tilesContainer = document.querySelector(".tiles");
const audioFiles = ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3", "audio/4.mp3", "audio/5.mp3", "audio/6.mp3"];
const audioPicklist = [...audioFiles, ...audioFiles];
const tileCount = audioPicklist.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(audioFile) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-audio", audioFile);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (awaitingEndOfMove || revealed === "true" || element === activeTile) {
            return;
        }

        const audio = new Audio(audioFile);
        audio.play();

        element.style.backgroundColor = "white";

        if (!activeTile) {
            activeTile = element;
            return;
        }

        const audioToMatch = activeTile.getAttribute("data-audio");

        if (audioToMatch === audioFile) {
            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true");

            activeTile = null;
            awaitingEndOfMove = false;
            revealedCount += 2;

            if (revealedCount === tileCount) {
                alert("You win! Refresh to start again.");
            }

            return;
        }

        awaitingEndOfMove = true;

        setTimeout(() => {
            activeTile.style.backgroundColor = null;
            element.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);
    });

    return element;
}

for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * audioPicklist.length);
    const audioFile = audioPicklist[randomIndex];
    const tile = buildTile(audioFile);

    audioPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}
