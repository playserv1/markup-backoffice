import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function initCarousel() {
    const carousels = document.querySelectorAll('.carousel')

    if (!carousels.length) return

    carousels.forEach((carousel) => {
        const slider = carousel.querySelector('.carousel__slider')
        const nextBtn = carousel.querySelector('.carousel__button--next')
        const prevBtn = carousel.querySelector('.carousel__button--prev')
        const pagination = carousel.querySelector('.carousel__pagination')

        if (!slider) return

        new Swiper(slider, {
            modules: [Navigation, Pagination],

            slidesPerView: 1,
            spaceBetween: 16,

            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            pagination: {
                el: pagination,
                clickable: true,
            },
        })
    })
}
