function emptyPage() {
    const container = document.getElementById("main")

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    showScore()
    restartButton()
}

function showScore() {
    const container = document.getElementById("main")
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")

    container.appendChild(div)
    div.id = "finalScoreDiv"
    div.appendChild(h1)
    div.appendChild(p1)
    div.appendChild(p2)

    h1.textContent = "C'est fini !!!"
    p1.textContent = "Tu as fait "+score+" points en "+secondsCount+" secondes !"
    p2.textContent = "Je parie que tes copains feront pas mieux !"
}

function restartButton() {
    const container = document.getElementById("main")
    const btn = document.createElement("button")

    container.appendChild(btn)
    btn.id = "restartButton"
    btn.textContent = "Je veux faire mieux !"
    btn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}