const setup = () => {
    let button =document.getElementById("button");
    button.addEventListener("click", clickButt);
};

const clickButton = () => {
    let roker = document.getElementById("roker")
    let result = " "


    if(roker.checked){
        console.log("is een roker")
    } else {
        console.log("is geen roker")
    }

    let taal = document.getElementById('buur').value


}

window.addEventListener("load", setup);