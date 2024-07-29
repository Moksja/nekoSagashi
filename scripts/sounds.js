//fonction qui inclut tous les sons 
function gameSounds() {
    popSound();
    errorSound();
    correctSound();
}

// hover sounds 
function popSound() {
    let randomPop = popList[Math.floor(Math.random() * popList.length)]
    let pop = new Audio(randomPop)

    let cats = document.querySelectorAll('.gridCat')
    cats.forEach((cat) => {
        cat.addEventListener('mouseover', () => {
            pop.volume = 0.3
            pop.play()
        })
    })
}

function errorSound() {
    let error = "sounds/error.wav"
    let brrr = new Audio(error)

    brrr.volume = 0.3
    brrr.play()

}

function correctSound() {
    let correct = "sounds/success.wav"
    let meow = new Audio(correct)

    meow.volume = 0.3
    meow.play()
}