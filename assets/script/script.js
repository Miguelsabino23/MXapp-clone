const swiper = new Swiper('.swiper', {
    loop: true,

    breakpoints: {
        

        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        376: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },

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
    loop: true,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 2,
        },
        376: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
    },

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
})
