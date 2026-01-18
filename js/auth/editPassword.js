const inputPassword = document.getElementById("PasswordInput");
const validateInputPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-editPassword");

inputPassword.addEventListener("keyup", validateForm);
validateInputPassword.addEventListener("keyup", validateForm);

//Fonction permettant de valider tout le formulaire

function validateForm() {
    const passwordOk = validatePassword(inputPassword);
    const validatePasswordOk = reValidatePassword(inputPassword, validateInputPassword);

    if(passwordOk && validatePasswordOk && reValidatePassword){
       btnValidation.disabled = false;
    }
    else{
       btnValidation.disabled = true;
    }
}

//Fonction permettant de valider le mot de passe
function validatePassword(input) {
    //Définir mon regex pour valider un mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }    
}

//Fonction permettant de revalider le mot de passe
function reValidatePassword(inputPwd, inputConfirmPwd) {
    const passwordUser = inputPwd.value;
    const validatePasswordUser = inputConfirmPwd.value;

    if(passwordUser == validatePasswordUser){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}