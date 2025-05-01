const cup = document.getElementById('hoverTea')
const sound1 = new Audio('./audio/garam.mp3')

const glass = document.getElementById('hoverGaana')
const sound2 = new Audio('./audio/gaane ka juice.mp3')

cup.addEventListener('mouseenter', () => {
    sound1.currentTime = 0
    sound1.play()
})

glass.addEventListener('mouseenter', () => {
    sound2.currentTime = 0
    sound2.play()
})