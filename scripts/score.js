let score = 0;

//màj valeur score 
function scoreUpdate() {
    let scoreValue = document.getElementsByClassName('score-value')[0];
    scoreValue.textContent = score;
}

//vérifie que le chat cliqué correspond aux chats à retrouver + màj score
function verifyCat(event) {
    //récupérer l'id du chat cliqué
    let clickedId = event.target.id;

    //vérifier si l'id du chat cliqué correspond ou non à un des chats à retrouver
    if ((catsToFind.some(cat => cat.id === clickedId))) {
        correctSound()
        score++;
        foundCats++;
        console.log(foundCats);
        event.target.src = "";
        scoreUpdate();
    } else {
        errorSound();
        score--;
        scoreUpdate();
    }
}
