let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    const errors = valideer();
    if (errors.length === 0) {
        const voornaam = document.getElementById("txtVoornaam").value;
        const familienaam = document.getElementById("txtFamilienaam").value;
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const index = document.getElementById("lstPersonen").selectedIndex;
        if (index === -1) {
            // een nieuw aangemaakte persoon voegen we toe
            const nieuwePersoon = {
                voornaam,
                familienaam,
                geboorteDatum,
                email,
            };
            personen.push(nieuwePersoon);
        } else {
            // een bestaande persoon in de lijst passen we aan
            personen[index].voornaam = voornaam;
            personen[index].familienaam = familienaam;
            personen[index].geboorteDatum = geboorteDatum;
            personen[index].email = email;
        }
        toonPersonenLijst();
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("lstPersonen").selectedIndex = -1;
};

const toonGegevensPersoon = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
};

const toonPersonenLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";
    for (let i = 0; i < personen.length; i++) {
        const optie = document.createElement("option");
        optie.textContent = personen[i].familienaam + ", " + personen[i].voornaam;
        optie.value = i;
        lstPersonen.appendChild(optie);
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", () => {
        const index = lstPersonen.selectedIndex;
        if (index >= 0) {
            toonGegevensPersoon(personen[index]);
        }
    });
};
window.addEventListener("load", setup);
