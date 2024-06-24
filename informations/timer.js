// Il manque toute la partie affichage score etc à la fin du chrono

let container = document.getElementById("timer")
let img = document.createElement("img")
let secondsCount 

function timer() {
    container.appendChild(img)
    img.src = chronoImages[0]
    startTimer()
}

function startTimer() {
    secondsCount = 0; 
    interval = setInterval(function() {
        img.src = chronoImages[secondsCount];
        secondsCount++;
        if (secondsCount >= chronoImages.length) {
            clearInterval(interval); 
            stopTimerGetBonus()
            emptyPage()
        }
    }, 1500); 
}

function stopTimerGetBonus() {
    clearInterval(interval);
    remainingSeconds = 12 - secondsCount;
    score += remainingSeconds
}
