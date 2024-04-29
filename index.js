const listImage = document.querySelector('.product__category-slide-list')
const imgs = document.querySelectorAll('.product__category-slide-img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')

    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if (current == 0) {
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else {
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

// login / register
const btnModal = document.querySelector('.header__mainUI-login')
const modal = document.querySelector('.modal')
const btnExit = document.querySelector('.modal__inner-close-btn')
const authFormLogin = document.getElementById('auth-form-login')
const authFormRegister = document.getElementById('auth-form-register')
const btnLogin = document.getElementById('btn-login')
const btnRegister = document.getElementById('btn-register')
const footerLogin = document.getElementById('footer-login')
const footerRegister = document.getElementById('footer-register')
const askAccLogin = document.getElementById('askacc-login')
const askAccRegister = document.getElementById('askacc-register')


btnModal.addEventListener('click', () => {
    modal.classList.add('modal--active')
    authFormLogin.classList.add('auth-form--active')
})

btnExit.addEventListener('click', () => {
    modal.classList.remove('modal--active')
    authFormLogin.classList.remove('auth-form--active')
    authFormRegister.classList.remove('auth-form--active')
})

btnLogin.addEventListener('click', () => {
    authFormLogin.classList.add('auth-form--active')
    authFormRegister.classList.remove('auth-form--active')
})

btnRegister.addEventListener('click', () => {
    authFormRegister.classList.add('auth-form--active')
    authFormLogin.classList.remove('auth-form--active')
})

footerLogin.addEventListener('click', () => {
    modal.classList.add('modal--active')
    authFormLogin.classList.add('auth-form--active')
})

footerRegister.addEventListener('click', () => {
    modal.classList.add('modal--active')
    authFormRegister.classList.add('auth-form--active')
})

askAccLogin.addEventListener('click', () => {
    modal.classList.add('modal--active')
    authFormLogin.classList.add('auth-form--active')
})

askAccRegister.addEventListener('click', () => {
    modal.classList.add('modal--active')
    authFormRegister.classList.add('auth-form--active')
})