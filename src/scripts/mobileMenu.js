export function initMobileMenu() {
    const burger = document.querySelector('.header__burger');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.mobile-menu .nav__link');

    if (!burger || !header) return;

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        header.classList.toggle('header--mob-menu-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('burger--active');
            header.classList.remove('header--mob-menu-active');
        });
    });

}
