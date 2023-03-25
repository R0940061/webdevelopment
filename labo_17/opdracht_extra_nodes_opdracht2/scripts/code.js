const setup = () => {
    addgallery();
    addli()

}

const addgallery = () => {
    let gallery = document.getElementsByClassName("gallery");
    let img = document.createElement("img");
    img.setAttribute("src", "images/Domainme.png")
    gallery.appendChild(img);
}

const addli = () => {
    let li =document.querySelectorAll("li");
    let header = document.querySelector("head");
    li.forEach((element) => element.classList.add("listitem"))

    let color = document.createElement("color")
    color.textContent = ".listitem {color: red}"
    header.appendChild(color);
}

window.addEventListener("load", setup);