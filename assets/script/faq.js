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

const items = document.querySelectorAll('.faq__acordion__item');
items.forEach((item) => {
    const button = item.querySelector('.faq__acordion__button');
    const icon = item.querySelector('.faq__icon');

    item.addEventListener('click', () => {
        const isRotated = button.classList.contains('rotate');
        document.querySelectorAll('.faq__acordion__button').forEach((btn) => {
            btn.classList.remove('rotate');
        });

        document.querySelectorAll('.faq__icon').forEach((icn) => {
            icn.classList.remove('rotate');
        });
        button.classList.toggle('rotate', !isRotated);
        icon.classList.toggle('rotate', !isRotated);
    });
});

