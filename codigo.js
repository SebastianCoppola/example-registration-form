const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

const modalRegForm = document.querySelector(".modalRegForm");
const modalWelcome = document.querySelector(".modalWelcome");

const welcomeName = document.querySelector(".welcomeName");
const welcomeEmail = document.querySelector(".welcomeEmail");
const welcomePass = document.querySelector(".welcomePass");
const startAgain = document.querySelector(".startAgain");

/* --- V A L I D A C I Ó N --- */

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(nombre.value.length < 6){
        warnings += 'The name must be at leat 6 characters long. <br>';
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += 'Wrong email. <br>';
        entrar = true;
    }
    if(password.value.length < 8){
        warnings += 'The password must be at leat 8 characters long. <br>'
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);
        
        modalRegForm.style.animation = "desaparecer 1s forwards";
        setTimeout(()=>modalRegForm.style.display = "none", 1000);

        welcomeName.innerHTML = `Welcome ${nombre.value}`;
        welcomeEmail.innerHTML = `Your email is: ${email.value}`;
        welcomePass.innerHTML = `Your password is: ${password.value}`;

        modalWelcome.style.animation = "aparecer 1s forwards";
        setTimeout(()=>modalWelcome.style.display = "block", 1000);

        //let mensaje = `Hello ${nombre.value}!<br>An email has been sent to ${email.value} to complete your registration!`;
        //parrafo.innerHTML = mensaje;
    }
})

volver = function (){
    location.reload();
    localStorage.clear();
}

startAgain.addEventListener("click",volver);


