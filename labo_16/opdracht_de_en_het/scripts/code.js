const setup = () => {
    let quote = 'Gisteren zat de jongen op de stoep en at de helft van de appel';
    let resultingString = quote.split(" ");

    for (let i = 0; i < resultingString.length; i++) {
        if (resultingString[i] === "de"){
            resultingString[i] = "het"
        }
    }
    console.log(resultingString);
}

window.addEventListener("load", setup);