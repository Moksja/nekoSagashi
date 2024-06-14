// Il manque toute la partie affichage score etc à la fin du chrono

let container = document.getElementById("timer")
let img = document.createElement("img")

function timer() {
    container.appendChild(img)
    img.src = chronoImages[0]
    startTimer()
}

function startTimer() {
    let index = 0; 
    interval = setInterval(function() {
        img.src = chronoImages[index];
        index++;
        if (index >= chronoImages.length) {
            clearInterval(interval); 
        }
    }, 1500); 
}