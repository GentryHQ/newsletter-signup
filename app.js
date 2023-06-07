
// Containers
let signupContainer = document.getElementById('signup');
let successContainer = document.getElementById('success');

//Form
let form = document.querySelector('form.sub');
let formInput = document.getElementById('email');

let submitBtn = document.getElementById('subBtn');
let err = document.getElementById('error');

//Dismiss Button
let dismissBtn = document.querySelector('button.dismiss')
let usermail = document.getElementById('usermail');

// RegEx to check email input
function regexCheck(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   return regex.test(email);
}

form.addEventListener('submit', validateForm);



//Validate form
function validateForm(e) {
    let formInputVal = form.querySelector('input[type="email"]').value;

    if (formInputVal == "" || !regexCheck(formInputVal)) {
        e.preventDefault();
        err.innerText = "Valid Email Required";
        formInput.classList.add('emailErr');
    } else {
        e.preventDefault();
        // form.submit();
        formInput.classList.remove('emailErr');
        signupContainer.style.display = 'none';
        successContainer.classList.add('active');
    }

    usermail.innerText = formInputVal;
};

// reloads the page when 
dismissBtn.addEventListener("click", () => {
    location.reload();
});