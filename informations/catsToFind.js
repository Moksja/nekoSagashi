let catsToFind = []
let availableCatstoFind = []

function defineCatsToFindEasy() {
    preErase()
    availableCatstoFind = []
    availableCatstoFind = [...catTracker];

    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * availableCatstoFind.length);
        let selectedCat = availableCatstoFind[randomIndex];

        if (!catsToFind.some(cat => cat.id === selectedCat.id)) {
            catsToFind.push(selectedCat);
        }
    }

    console.log(catsToFind)
}


function addCatsToFindImg() {
    let container = document.getElementById("catsToFind")

    catsToFind.forEach((cat, index) => {
        let img = document.createElement("img")
        container.appendChild(img)
        img.src = catsToFind[index].image
    });
}

function preErase() {
    catsToFind = []
    let container = document.getElementById('catsToFind')

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}