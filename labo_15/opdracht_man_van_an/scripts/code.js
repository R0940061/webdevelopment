let an1 = 0;
let an2 = 0;

const countOccurrences = (text) => {
    let index = text.indexOf("an");
    while (index !== -1) {
        an1++;
        index = text.indexOf("an", index + 1);
    }

    index = text.lastIndexOf("an");
    while (index !== -1) {
        an2++;
        index = text.lastIndexOf("an", index - 1);
    }
};

const setup = () => {
    const textInput = document.querySelector('input[type="text"]');
    const resultParagraph = document.getElementById("result");
    an1 = 0;
    an2 = 0;
    countOccurrences(textInput.value);
    resultParagraph.textContent = `deze zin bevat ${an1} keer an en voor lastindexof is het ${an2}`;
};

const button = document.getElementById("calculate-button");
button.addEventListener("click", setup);
