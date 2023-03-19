const setup = () => {
    let invoer = prompt('geef een gemeente in')
    let gemeente = []

    while(invoer.toLowerCase().trim() !== 'stop'){
        gemeente.push(invoer)
        invoer = prompt('geef een gemeente in')
    }
    if (invoer === 'stop'){
        gemeente.sort();
        for (let i = 0; i < gemeente.length; i++) {
            let optie = document.createElement('option')
            optie.text = gemeente[i]
            document.getElementById('list').add(optie)
        }
    }
}
window.addEventListener("load", setup);