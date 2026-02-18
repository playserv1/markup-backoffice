export function initVideoModal() {
    const modal = document.getElementById('videoModal')
    if (!modal) return

    const backdrop = modal.querySelector('.modal__backdrop')
    const closeBtn = modal.querySelector('.modal__close')
    const iframe = modal.querySelector('.modal__iframe')
    const triggers = document.querySelectorAll('[data-video-modal]')

    const initialSrc = iframe.getAttribute('src')

    function openModal() {
        iframe.src = initialSrc + '?autoplay=1'
        modal.classList.add('modal--is-open')
        document.body.style.overflow = 'hidden'
    }

    function closeModal() {
        modal.classList.remove('modal--is-open')
        iframe.src = initialSrc
        document.body.style.overflow = ''
    }

    triggers.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    backdrop.addEventListener('click', closeModal)
    closeBtn.addEventListener('click', closeModal)

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('modal--is-open')) {
            closeModal()
        }
    })
}
