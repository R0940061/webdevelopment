const setup = () => {

        let input = document.getElementById("input-text");
        let inputText = input.value;
        let output = inputText.split("").join(" ");
        console.log(output);

}
window.addEventListener("load", setup);