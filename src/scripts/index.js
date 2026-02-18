import '../styles/index.scss'
import { initMobileMenu } from './mobileMenu'
import { initCarousel } from './swiper'
import { initTabs } from './tabs'
import { initRange } from './range'
import { initStepper } from './stepper'
import { initSelect } from './select'
import { initVideoModal } from './modal'

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu()
    initCarousel()
    initTabs()
    initRange()
    initStepper()
    initSelect()
    initVideoModal()
})
