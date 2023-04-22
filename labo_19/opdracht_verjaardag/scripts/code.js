const setup = () => {
    let d = new Date();
    let d2 = new Date(2023,10,10);

    let dif = Math.abs(d-d2);
    let day = Math.ceil(dif / (1000 * 60 * 60 * 24));
    console.log(day + " days");
}
window.addEventListener("load", setup);



