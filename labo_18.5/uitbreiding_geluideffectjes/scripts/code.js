const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "crimson", "blue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Create audio elements for flip and match sounds
const flipSound = new Audio("sounds/flip.mp3");
const matchSound = new Audio("sounds/match.mp3");

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    // Add event listener for tile click
    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (
            awaitingEndOfMove
            || revealed === "true"
            || element == activeTile
        ) {
            return;
        }

        // Play flip sound
        flipSound.play();

        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;
            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color) {
            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true");

            // Play match sound
            matchSound.play();

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
// Generate tiles and append to container
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const tile = buildTile(color);

    colorsPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}