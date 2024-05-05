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

