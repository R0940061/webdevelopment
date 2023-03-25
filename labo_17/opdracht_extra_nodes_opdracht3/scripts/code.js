function addParagraph() {
    const myDiv = document.querySelector("#myDIV"); // find the <div> element
    const newParagraph = document.createElement("p"); // create a new <p> element
    const paragraphText = document.createTextNode("This is some text for the new paragraph."); // create a text node for the <p> element
    newParagraph.appendChild(paragraphText); // append the text node to the <p> element
    myDiv.appendChild(newParagraph); // append the <p> element to the <div> element
}