//hover sounds
function popSound() {
    let randomPop = popList[Math.floor(Math.random() * popList.length)];
    let pop = new Audio(randomPop);

    let cats = document.querySelectorAll('.gridCat')
    cats.forEach((cat) => {
        cat.addEventListener('mouseover', () => {
            pop.volume = 1;
            pop.play();
        })
    })
}

function errorSound() {
    //son
}

function correctSound() {
    //son
}