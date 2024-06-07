const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
})

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
    slidesPerGroup: 2,
})
