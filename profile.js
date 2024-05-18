const FormGroup = document.querySelector('.profile__indi-form')

console.log(FormGroup)

var formArray = [
    '.profile__indi-input--1',
    '.profile__indi-input--2',
    '.profile__indi-input--3',
    '.profile__indi-input--4',
    '.profile__indi-input--5',
    '.profile__indi-input--6',
    '.profile__indi-input--7',
    '.profile__indi-input--8',
    '.profile__indi-input--9'
]


formArray.forEach(function (element) {
    const inputElement = FormGroup.querySelector(element)
    console.log(inputElement)
    inputElement.onblur = function () {
        if(!inputElement.value)
            inputElement.classList.remove('value--active')             
        else 
            inputElement.classList.add('value--active')
    }
})