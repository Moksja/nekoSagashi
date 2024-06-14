let catsToFind = []

function defineCatsToFindEasy() {
    let availableCatstoFind = [...catTracker];

    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * availableCatstoFind.length);
        let selectedCat = availableCatstoFind[randomIndex];

        catsToFind.push(selectedCat)
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