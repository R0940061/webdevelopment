const setup = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result.trim();
}
const toonMetSpaties = () => {
    let input = document.getElementById("inputTekst");
    let inputTekst = inputElement.value;
    let tekstSpaties = maakSpaties(inputTekst);
    console.log(tekstSpaties)
}
window.addEventListener("load", setup);