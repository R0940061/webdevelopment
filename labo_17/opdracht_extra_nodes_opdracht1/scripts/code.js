const setup = () => {
    let p = document.querySelectorAll('p');
    p.forEach((p) => { p.textContent = "good job!";});
}
window.addEventListener("load", setup);