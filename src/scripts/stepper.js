export function initStepper() {
    const steppers = document.querySelectorAll('[data-stepper]')

    steppers.forEach((stepper) => {
        const steps = stepper.querySelectorAll('.stepper__step')
        const items = stepper.querySelectorAll('.stepper__item')
        const doneBlock = stepper.querySelector('.stepper__done')

        let currentStep = 1

        const goToStep = (stepNumber) => {
            currentStep = stepNumber

            steps.forEach((step) => {
                step.classList.toggle(
                    'stepper__step--active',
                    Number(step.dataset.step) === stepNumber
                )
            })

            items.forEach((item) => {
                item.classList.toggle(
                    'stepper__item--active',
                    Number(item.dataset.step) === stepNumber
                )
            })
        }

        const showDone = () => {
            if (doneBlock) {
                doneBlock.hidden = false
            }
        }

        const step1 = stepper.querySelector('.stepper__step[data-step="1"]')
        const step1Inputs = step1?.querySelectorAll('input[type="radio"]')

        step1Inputs?.forEach((input) => {
            input.addEventListener('change', () => {
                goToStep(2)
            })
        })

        const step2 = stepper.querySelector('.stepper__step[data-step="2"]')
        const step2Range = step2?.querySelector('.range__input')

        let step2Completed = false

        step2Range?.addEventListener('input', () => {
            if (!step2Completed) {
                step2Completed = true
                goToStep(3)
            }
        })

        const step3 = stepper.querySelector('.stepper__step[data-step="3"]')

        const step3Range = step3?.querySelector('.range__input')
        const step3Radios = step3?.querySelectorAll(
            '.stepper__step-cards input[type="radio"]'
        )
        const select = step3?.querySelector('[data-select]')

        let isRangeDone = false
        let isSelectDone = false
        let isRadioDone = false

        const checkStep3Completion = () => {
            if (isRangeDone && isSelectDone && isRadioDone) {
                showDone()
            }
        }

        step3Range?.addEventListener('input', () => {
            isRangeDone = true
            checkStep3Completion()
        })

        step3Radios?.forEach((radio) => {
            radio.addEventListener('change', () => {
                isRadioDone = true
                checkStep3Completion()
            })
        })

        if (select) {
            const options = select.querySelectorAll('.select__option')

            options.forEach((option) => {
                option.addEventListener('click', () => {
                    isSelectDone = true
                    checkStep3Completion()
                })
            })
        }
    })
}
