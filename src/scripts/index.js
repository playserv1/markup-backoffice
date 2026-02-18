import '../styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
    import('./mobileMenu').then(({ initMobileMenu }) => initMobileMenu())
    import('./tabs').then(({ initTabs }) => initTabs())
    import('./range').then(({ initRange }) => initRange())
    import('./stepper').then(({ initStepper }) => initStepper())
    import('./select').then(({ initSelect }) => initSelect())
    import('./modal').then(({ initVideoModal }) => initVideoModal())

    if (document.querySelector('.carousel')) {
        import('./swiper').then(({ initCarousel }) => initCarousel())
    }
})
