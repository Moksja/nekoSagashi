//liste de chats à trouver pour éviter les doublons
let catsToFind = []
let availableCatstoFind = []

//gérer la difficulté et le nombre de chats à trouver en f°
let pageTitle = document.title;

let difficulty =  (pageTitle === "NS - Easy") ? 1 : 
                    (pageTitle === "NS - Normal") ? 2 : 
                    (pageTitle === "NS - Hard") ? 3 : 
                    0;


let foundCats = 0;
let totalCatsToFind =   (difficulty === 1) ? 3 : 
                        (difficulty === 2) ? 5 : 
                        (difficulty === 3) ? 3 : 
                        0;

//Identifier les chats à trouver ; 
function defineCatsToFind() {
    preErase()
    availableCatstoFind = []
    availableCatstoFind = [...catTracker];

    console.log(totalCatsToFind)

    //ajouter les images de chat dans les informations
    while (catsToFind.length < totalCatsToFind) {
        let randomIndex = Math.floor(Math.random() * availableCatstoFind.length);
        let selectedCat = availableCatstoFind[randomIndex];

        if (!catsToFind.some(cat => cat.id === selectedCat.id)) {
            catsToFind.push(selectedCat);
        }
    }
}




//Ajouter les images dans le div correspondant
function addCatsToFindImg() {
    let container = document.getElementsByClassName('cats-to-find')[0];

    catsToFind.forEach((cat, index) => {
        let img = document.createElement("img")
        container.appendChild(img)
        img.src = catsToFind[index].image
    });
}

//Effacer les tableaux gérant les chats à trouver
function preErase() {
    catsToFind = [];
    let container = document.getElementsByClassName('cats-to-find')[0];

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// //Afficher le conteneur d'informations 
function showInfos() {
    let container = document.getElementsByClassName("informations-container")[0];

    container.style.display = "flex"
}

