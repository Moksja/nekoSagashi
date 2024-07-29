let container = document.getElementsByClassName("timer")[0];
let img = document.createElement("img");
let secondsCount;

//insertion de l'image dans le div "timer"
function timer() {
    container.appendChild(img);
    img.src = chronoImages[0];
    startTimer();
}

//lancement du timer : modifier le temps delay pour laisser plus ou moins de temps entre 2 avancées de timer (img update)
function startTimer() {
    secondsCount = 0; 
    interval = setInterval(function() {
        img.src = chronoImages[secondsCount];
        secondsCount++;
        if (foundCats === totalCatsToFind || secondsCount >= chronoImages.length) {
            clearInterval(interval); 
            stopTimerGetBonus();
            emptyPage() 
        }
    }, 1500); 
}

//conversion du temps restant au chrono en points de score
function stopTimerGetBonus() {
    clearInterval(interval);
    remainingSeconds = 12 - secondsCount;
    score += remainingSeconds;
}
