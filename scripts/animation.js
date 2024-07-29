//Création grille de chats à observer au chargement de la page
document.addEventListener('DOMContentLoaded', (event) =>{
    //effacement grille précédente
    gridEraser();
    //création nouvelle grille
    createCatsGrid();
});

//effet bouton au click + lancement jeu
const playButton = document.getElementsByClassName('play-button')[0];

playButton.addEventListener('click', function() {
    this.classList.add('clicked');
    const curtainsContainer = document.getElementsByClassName('instructions')[0];

    // Retrait de la classe 'clicked' pour l'effet d'animation
    setTimeout(() => {
        this.classList.remove('clicked');

            //animation en fonction de la difficulté
        if (difficulty < 3) {
            setTimeout(() => {
                curtainsContainer.style.display = 'none';
            }, 300);

            // Lancement de l'animation des rideaux

            defineCatsToFind();
            addCatsToFindImg();
            openCurtains();
            timer();

        } else if (difficulty === 3) {
            //ici le principe est d'enlever le texte pour y mettre les chats.
            let container = document.getElementsByClassName('instructions')[0];
            let catsToFind = document.createElement('div');

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.appendChild(catsToFind);
            catsToFind.className = 'cats-to-find';
            defineCatsToFind();
            addCatsToFindImg();

            setTimeout(() => {
                container.style.visibility = 'hidden';
                openCurtains();
                timer();
            }, 5000)
        }
    }, 300);

    

});

//ouverture des rideaux 
function openCurtains() {
    const leftCurtain= document.getElementsByClassName('left-curtain')[0];
    const rightCurtain= document.getElementsByClassName('right-curtain')[0];
    const catsGrid = document.getElementsByClassName("cats-grid-container")[0];

    //son audio
    const curtainsSound = document.getElementById('curtainsSound');
    setTimeout(() => {
        curtainsSound.play();
    
        setTimeout(() => {
            //Le z-index permet d'éviter que les rideaux cachés n'empêchent le clic sur les chats
            catsGrid.style.zIndex = '4';

            //placer le gameSounds() ici permet de ne pas avoir le son quand on clique sur le bouton "play"
            gameSounds();
        }, "1500");
    }, 1300);
    

    //lancement animation ouverture rideaux
    leftCurtain.classList.add('opened');
    rightCurtain.classList.add('opened');
}

