export function initTabs() {
    const tabContainers = document.querySelectorAll('[data-tabs]')

    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('[data-tab]')
        const contents = document.querySelectorAll('[data-tab-content]')

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab

                buttons.forEach(b => b.classList.remove('tabs__btn--active'))
                btn.classList.add('tabs__btn--active')

                contents.forEach(c => {
                    c.classList.toggle(
                        'tabs__content--active',
                        c.dataset.tabContent === tab
                    )
                })
            })
        })
    })
}
