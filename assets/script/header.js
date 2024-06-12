const header = document.getElementById('header')
const home = document.getElementById('home')
document.addEventListener('scroll', () => {
    const posicaoY = window.pageYOffset
    if (posicaoY >= 100) {
        header.style.backgroundColor = '#000000'
        header.style.position = 'fixed'
        home.style.marginTop = '10%'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section')
    const navLinks = document.querySelectorAll('.nav__link')

    window.addEventListener('scroll', function () {
        let current = 'headerr'

        sections.forEach((section) => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id')
            }
        })

        navLinks.forEach((link) => {
            link.classList.remove('active')
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active')
            }
        })
    })
})
