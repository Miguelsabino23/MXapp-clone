const acordion = document.querySelectorAll('.faq__acordion__title')
const acordionColapse = document.querySelectorAll('.faq__acordion__collapse')

for (let index = 0; index < acordion.length; index++) {
    acordion[index].addEventListener('click', () => {
        const height = acordionColapse[index].style.height
        acordionColapse.forEach((collapse) => (collapse.style.height = '0px'))

        if (height === '0px' || height === '') {
            acordionColapse[index].style.height = '100%'
        }
    })
}
