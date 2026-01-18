const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if (mailInput.value == "test@email.fr" && passwordInput.value == "123") {     
        //Il faudra récupérer le vrai token renvoyé par l'API
        const token = "fsvughfjgotjeslhejsgbjeilirbjkksjjknfjkz";
        setToken(token);

        //On stocke le token en cookie
        
        setCookie("role", "client", 7); //7 jour de validité  
        window.location.replace("/");
    }
    else {
        alert("Email ou mot de passe incorrect");

        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}