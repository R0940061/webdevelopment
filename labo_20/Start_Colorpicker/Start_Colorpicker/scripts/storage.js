
const slider1 = document.getElementById("sldRed");
const slider2 = document.getElementById("sldBlue");
const slider3 = document.getElementById("sldGreen");

const storeSliderValues = () => {

    localStorage.setItem("slider1", slider1.value);
    localStorage.setItem("slider2", slider2.value);
    localStorage.setItem("slider3", slider3.value);
};

const restoreSliderValues = () => {
    slider1.value = localStorage.getItem("slider1");
    slider2.value = localStorage.getItem("slider2");
    slider3.value = localStorage.getItem("slider3");
};


const storeSwatches = () => {
    let swatches = [];
    let swatchElements = document.querySelectorAll(".swatch");

    swatchElements.forEach((swatch) => {
        let data = {
            slider1 : document.getElementById("sldRed").value,
            slider2 : document.getElementById("sldBlue").value,
            slider3 : document.getElementById("sldGreen").value,
        }
        swatches.push( data );
    });
    localStorage.setItem("swatches", JSON.stringify(swatches));
};

const restoreSwatches = () => {

    const swatches = JSON.parse(localStorage.getItem("swatches"))
    for (let i = 0; i < swatches.length; i++) {
        addSwatchComponent(swatches[i].slider1, swatches[i].slider2, swatches[i].slider3);

    }

};

