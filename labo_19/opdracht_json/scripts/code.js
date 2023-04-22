const setup = () => {

    let student1 = {
        voornaam: "mohamed",
        familienaam: "Uwaize",
        geboortedatum: new Date(2023,10,10),
        adres: {
            straat: "kapel ter bedehof 41",
            postcode: "8500",
            gemeente: "kortrijk"
        }
    };
    let tekst = JSON.stringify(student1);

   let student2 = JSON.parse('{"voornaam":"mohamed","familienaam":"Uwaize","geboortedatum":"2003-11-10T00:00:00.000Z","adres":{"straat":"kapel ter bedehof 41","postcode":"8500","gemeente":"kortrijk"}}');

    console.log(tekst);
    console.log(student2)


}
window.addEventListener("load", setup);