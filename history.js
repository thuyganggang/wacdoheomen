const FormGroup = document.querySelector('.history-form')

console.log(FormGroup)

var formArray = [
    '.history-form-input--1',
    '.history-form-input--2',
    '.history-form-input--3'
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