let button = document.getElementById("launchGame")
button.addEventListener('click', init)


function init() {
    gridEraser()
    createCatsGrid()
    defineCatsToFind()
    addCatsToFindImg()
    timer()
}