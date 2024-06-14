function verifyCat(event) {
    let clickedId = event.target.id;
    console.log("event.id"+event.target.id)

    if ((catsToFind.some(cat => cat.id === clickedId))) {
        correctSound()
        score++
        event.target.src = ""
        scoreUpdate()
        console.log(score)
    } else {
        errorSound()
        score--
        scoreUpdate()
        console.log(score)
    }
}