const location = document.getElementById('location')
const dialog = document.getElementById('dialog')
const choose_city = document.getElementById('choose_city')
const city = document.getElementById('city')

const savedCity = localStorage.getItem('city')

if (savedCity) {
    city.textContent = savedCity
    choose_city.value = savedCity
}

location.addEventListener('click', () => {
    dialog.showModal()
    choose_city.focus()
    choose_city.size = choose_city.options.length
})

choose_city.addEventListener('change', (e) => {
    const selectedCity = choose_city.value
    city.textContent = selectedCity
    localStorage.setItem('city', e.target.value)
    e.target.blur()
    dialog.close()
})

const button = document.getElementById('button')
const participate = document.getElementById('participate')
const promocode = document.getElementById('promocode')
const input = document.getElementById('input')
const validation = document.getElementById('validation')

promocode.disabled = true

button.addEventListener('click', () => {
    participate.showModal()
})

input.addEventListener('input', (e) => {
    const phone = e.target
    let number = phone.value.replace(/\D/g, '')

    if (number.length > 0) {
        number = '+7' + number.substring(1)
        const mask = number.replace(/^(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5')
        phone.value = mask

        console.log(mask)
    }

    correctPhone()
})

function correctPhone() {
    const numbers = input.value.replace(/\D/g, '')

    if (numbers.length === 11) {
        validation.textContent = ''
        promocode.disabled = false
    } else {
        validation.textContent = 'Номер введён неправильно'
        validation.style.color = '#FF4D6C'
        validation.style.fontFamily = 'Inter'
        validation.style.fontSize = '13px'
        promocode.disabled = true
    }
}

input.addEventListener('blur', () => {
    correctPhone()
})

promocode.addEventListener('click', () => {
    if (input.value.replace(/\D/g, '').length === 11) {
        participate.close()
    }
})


const phone = document.getElementById('phone')
const validation2 = document.getElementById('validation2')

phone.addEventListener('input', (e) => {
    const event = e.target
    let number = event.value.replace(/\D/g, '')

    if (number.length > 0) {
        number = '+7' + number.substring(1)
        const mask = number.replace(/^(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5')
        event.value = mask

        console.log(mask)
    }
})

phone.addEventListener('blur', () => {
    const numbers = phone.value.replace(/\D/g, '')

    if (numbers.length === 11) {
        validation2.textContent = ''
    } else {
        validation2.textContent = 'Номер введён неправильно'
        validation2.style.color = '#FF4D6C'
        validation2.style.fontFamily = 'Inter'
        validation2.style.fontSize = '13px'
    }
})

const to_top = document.getElementById('to_top')

window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        to_top.classList.add('show')
    } else {
        to_top.classList.remove('show')
    }
})

to_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})