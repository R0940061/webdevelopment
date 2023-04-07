const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "crimson", "blue", "gold", "greenyellow", "teal"];
const tileCount = colors.length * 3;
const AANTAL_GELIJKE_KAARTEN = 3;

let revealedCount = 0;
let activeTiles = [];
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (
            awaitingEndOfMove ||
            revealed === "true" ||
        activeTiles.length === AANTAL_GELIJKE_KAARTEN
    ) {
            return;
        }



        element.style.backgroundColor = color;
        element.setAttribute("data-revealed", "true");
        activeTiles.push(element);

        if (activeTiles.length === AANTAL_GELIJKE_KAARTEN) {
            const colorsMatch = activeTiles.every(
                tile => tile.getAttribute("data-color") === color
            );

            awaitingEndOfMove = true;

            setTimeout(() => {
                activeTiles.forEach(tile => {
                    tile.style.backgroundColor = null;
                    tile.setAttribute("data-revealed", "false");
                });

                if (colorsMatch) {
                    revealedCount += AANTAL_GELIJKE_KAARTEN;

                    if (revealedCount === tileCount) {
                        alert("You win! Refresh to start again.");
                    }
                }

                activeTiles = [];
                awaitingEndOfMove = false;
            }, 1000);
        }
    });

    return element;
}

for (let i = 0; i < tileCount; i++) {
    const color = colors[Math.floor(i / 3)];
    const tile = buildTile(color);
    tilesContainer.appendChild(tile);
}