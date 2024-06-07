const playMobal = document.querySelector('.play__modal')
const play = document.querySelector('.play__iframe')
const playBlackdrop = document.querySelector('.play__blackdrop')
const playButton = document.querySelector('.play__button')

playBlackdrop.addEventListener('click', () => {
    if ((playMobal.style.display = 'block')) {
        playMobal.style.display = 'none'
    }
})

playButton.addEventListener('click', () => {
    if ((playMobal.style.display = 'block')) {
        playMobal.style.display = 'none'
    }
})

play.addEventListener('click', () => {
    if ((playMobal.style.display = 'none')) {
        playMobal.style.display = 'block'
    }
})
