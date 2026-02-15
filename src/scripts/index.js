import '../styles/index.scss'
import { initMobileMenu } from './mobileMenu'
import { initCarousel } from './swiper'
import { initTabs } from './tabs'
import { initRange } from './range'

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initCarousel()
    initTabs()
    initRange()
})
