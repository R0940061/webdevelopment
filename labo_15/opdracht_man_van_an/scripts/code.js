const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", berekenen)
    button.addEventListener("click", berekenen2)
}
const berekenen = () => {
    let count = 0;
    let index = 0;
    while ((index = setup.indexOf("an", index)) !== -1){
        count += 2
    }
    console.log("deze zin bevat an "+ index + "keer");
    document.getElementById("input").innerHTML = document.getElementById("text").value;
    document.getElementById("output").innerHTML = index;
}

const berekenen2 = () => {
    let count = 0
    while (index !== -1){
        count++;
    index = text.lastIndexOf("an", index -1);
    }

    cosole.log(count);
}
window.addEventListener('load',setup);