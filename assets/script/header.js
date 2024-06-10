const header = document.getElementById('header')
const home = document.getElementById('home')
document.addEventListener('scroll', () => {
    const posicaoY = window.pageYOffset
    header.style.backgroundColor = posicaoY == 0 ? 'transparent' : '#000000'
    if (posicaoY >= 100) {
        header.style.backgroundColor = '#000000'
        header.style.position = 'fixed'
        home.style.marginTop = '10%'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})
