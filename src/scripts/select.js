export function initSelect() {
    const selects = document.querySelectorAll('[data-select]')
    if (!selects.length) return

    selects.forEach(select => {
        const trigger = select.querySelector('.select__trigger')
        const valueEl = select.querySelector('.select__value')
        const options = select.querySelectorAll('.select__option')

        trigger.addEventListener('click', (e) => {
            e.stopPropagation()

            document.querySelectorAll('.select--open').forEach(openSelect => {
                if (openSelect !== select) {
                    openSelect.classList.remove('select--open')
                }
            })

            select.classList.toggle('select--open')
        })

        options.forEach(option => {
            option.addEventListener('click', () => {
                const text = option.textContent
                const value = option.dataset.value

                valueEl.textContent = text

                options.forEach(o =>
                    o.classList.remove('select__option--selected')
                )

                option.classList.add('select__option--selected')
                select.classList.remove('select--open')

                select.dataset.value = value

                select.dispatchEvent(
                    new CustomEvent('select:change', {
                        detail: { value }
                    })
                )
            })
        })
    })

    document.addEventListener('click', () => {
        document
            .querySelectorAll('.select--open')
            .forEach(select =>
                select.classList.remove('select--open')
            )
    })
}
