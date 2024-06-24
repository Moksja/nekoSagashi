let catTracker = [];

function createCatsGrid() {
    const catsGrid = document.getElementsByClassName("catsGridContainer")[0];
    let availableCats = [...catsList]; 

    for (let i = 0; i < 32; i++) {
        // Création cellule + img
        let cell = document.createElement("div");
        let img = document.createElement('img');

        catsGrid.appendChild(cell);
        cell.id = "cell" + i;
        cell.className = "cell";
        cell.appendChild(img);

        // Randomisation du chat à affecter
        let randomIndex = Math.floor(Math.random() * availableCats.length);
        let selectedCat = availableCats[randomIndex];
        
        // Ajout du chat sélectionné dans le tracker et suppression de la liste des chats disponibles
        catTracker.push(selectedCat);
        availableCats.splice(randomIndex, 1);

        // Affectation de l'image
        img.src = selectedCat.image;
        img.className = "gridCat";
        img.id = selectedCat.id;

        // Affectation de la fonction de clic à chaque chat
        img.addEventListener('click', verifyCat);
    }
}

function gridEraser() {
    let catsGrid = document.getElementsByClassName("catsGridContainer")[0];
    catTracker = [];

    while (catsGrid.firstChild) {
        catsGrid.removeChild(catsGrid.firstChild);
    }
}