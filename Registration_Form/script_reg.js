let username = document.querySelector('#username');
let phoneno = document.querySelector('#phoneno');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#password2');
let address = document.querySelector('#address');
let form = document.querySelector('#form');

function showError(input, message) {
    const fromControl = input.parentElement;
    fromControl.className = 'form-control error';
    const small = fromControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const fromControl = input.parentElement;
    fromControl.className = 'form-control success';
}

function checkMail(input) {
    const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regEx.test(input.value)) {
        showSuccess(input);
    }
    else{
        showError(input, "Email is not valid");
    }
}

function checkInputLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} You must be atleast ${min} Characters`)
    }
    else if(input.value.length){
        showError(input, `${getFieldName(input)} You must be less then ${min} Characters`)
    }
    else{
        showSuccess(input);
    }
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Please enter same password");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputLength(username, 3, 25);
    checkInputLength(password, 6, 30);
    checkMail(email);
    checkPasswordMatch(password, password2);
});