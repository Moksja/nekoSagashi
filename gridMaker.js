let catTracker = []
let randomNumber

function createCatsGrid() {
    const catsGrid = document.getElementsByClassName("catsGridContainer")[0]

    for (let i = 0; i < 32 ; i++) {
        //création cellule + img
        let cell = document.createElement("div")
        let img = document.createElement('img')
        
        catsGrid.appendChild(cell)
        cell.id = "cell"+i
        cell.className = "cell"
        cell.appendChild(img)

        //randomisation du chat à affecter
        randomNumber = Math.floor(Math.random()*catsList.length)

        while (catTracker.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random()*catsList.length)
        } 
        catTracker.push(catsList[randomNumber])
        
        //affecter l'image
        img.src = catsList[randomNumber].image
    } 

    console.log(catTracker)
}

function gridEraser() {
    let catsGrid = document.getElementsByClassName("catsGridContainer")[0]
    catTracker = []
    catsToFind = []

    while (catsGrid.firstChild) {
        catsGrid.removeChild(catsGrid.firstChild)
    }
}