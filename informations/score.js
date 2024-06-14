let score = 0;

function scoreUpdate() {
    let absoluteScore = Math.abs(score);
    let digits = absoluteScore.toString().split('');
    const firstDigitImg = document.querySelector('#firstDigit img');
    const secondDigitImg = document.querySelector('#secondDigit img');
    const minusContainer = document.getElementById('minus');

    if (score < 0) {
        minusContainer.style.display = 'block'
    } else {
        minusContainer.innerHTML = 'none';
    }

    if (absoluteScore < 10) {
        firstDigitImg.src = numbersList[0].image;
        secondDigitImg.src = numbersList[absoluteScore].image;
    } else {
        firstDigitImg.src = numbersList[digits[0]].image;
        secondDigitImg.src = numbersList[digits[1]].image;
    }
}

function verifyCat(event) {
    let clickedId = event.target.id;
    console.log("event.id " + event.target.id);

    if (catsToFind.some(cat => cat.id === clickedId)) {
        score++;
        event.target.src = "";
    } else {
        score--;
    }
    scoreUpdate();
    console.log(score);
}
