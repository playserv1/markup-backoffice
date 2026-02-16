export function initRange() {
    const ranges = document.querySelectorAll('[data-range]')

    ranges.forEach(range => {
        const input = range.querySelector('.range__input')
        const value = range.querySelector('.range__value')

        const update = () => {
            const min = +input.min
            const max = +input.max
            const val = +input.value

            value.textContent = val.toLocaleString()

            const percent = ((val - min) / (max - min)) * 100

            input.style.background = `
        linear-gradient(
          to right,
          #ff00cc 0%,
          #ff6a00 ${percent}%,
          rgb(17 17 17) ${percent}%,
          rgb(17 17 17) 100%
        )
      `
        }

        update()
        input.addEventListener('input', update)
    })
}
