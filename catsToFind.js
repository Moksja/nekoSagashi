let catsToFind = []

function defineCatsToFind() {
    while (catsToFind.length<3) {
        randomNumber = Math.floor(Math.random()*catTracker.length)
        if (catsToFind.includes(catsList[randomNumber].value)) {
            randomNumber = Math.floor(Math.random()*catTracker.length)
        } else {
            catsToFind.push(catsList[randomNumber])
        }
    } 
    console.log(catsToFind)
}

//ici ça bug ça met qu'un chat + pb de taille à l'affichage
function addCatsToFindImg() {
    let container = document.getElementById("catsToFind")

    catsToFind.forEach((cat, index) => {
        let img = document.createElement("img")
        container.appendChild(img)
        img.src = catsToFind[index].image
    });
}