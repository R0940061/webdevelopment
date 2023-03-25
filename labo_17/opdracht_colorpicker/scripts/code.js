const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	let saveButton = document.getElementById("saveButton");
	saveButton.addEventListener("click", saveSwatch);
};

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;

	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

const saveSwatch = () => {
	let swatch = document.createElement("div");
	swatch.classList.add("savedSwatch");

	let swatchColor = document.getElementById("swatch").style.backgroundColor;
	swatch.style.backgroundColor = swatchColor;

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "X";
	deleteButton.classList.add("deleteButton");
	deleteButton.addEventListener("click", deleteSwatch);

	swatch.appendChild(deleteButton);

	let savedSwatches = document.getElementById("savedSwatches");
	savedSwatches.appendChild(swatch);

	swatch.addEventListener("click", () => {
		let colorValues = swatch.style.backgroundColor.substring(4, swatch.style.backgroundColor.length-1).split(", ");
		document.getElementById("sldRed").value = colorValues[0];
		document.getElementById("sldGreen").value = colorValues[1];
		document.getElementById("sldBlue").value = colorValues[2];
		update();
	});
};

const deleteSwatch = (event) => {
	let swatch = event.target.parentNode;
	swatch.parentNode.removeChild(swatch);
};
window.addEventListener("load", initialize);