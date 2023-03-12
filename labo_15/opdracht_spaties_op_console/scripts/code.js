function tekstNaarConsole(){

        let tekst = document.getElementById("tekstInvoer").value;
       let gescheidenTekst = tekst.split("").join(" ");
        console.log(gescheidenTekst);

}
window.addEventListener("load", tekstNaarConsole);