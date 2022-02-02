const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML= message;
}


//show succes outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


//check email is valid
function checkEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(email.value.trim())){
        showSuccess(email);

    }else{
        showError(email, 'Email is not valid');
    }

}


//check required fields
function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} cannot be empty`);
        } else{
            showSuccess(input);
        }
    });
}



//check input lenth
function checkLength(input, min, max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);

    }else if(input.value.length>max){
        showError(input, `${getFieldName(input)} must be at most ${max} characters`);

    }else{
        showSuccess(input);
    }
}


//check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match');
    }

}



//Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

});