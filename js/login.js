let loginBtn = document.getElementById('btn-login');
let idInput = document.getElementById('text-input');
let passwordInput = document.getElementById('password-text-input');

let idText = "";
let passwordText = "";

console.log(idInput);

idInput.addEventListener("input", function(){


    idText = idInput.value;


    if (idText.length > 0 || passwordText.length > 0){
        loginBtn.style.backgroundColor='#3897f0';
    }else{
        loginBtn.style.backgroundColor='#abd1f5';
    }
});

passwordInput.addEventListener("input", function(){

    passwordText = passwordInput.value;


    if (idText.length > 0 || passwordText.length > 0){
        loginBtn.style.backgroundColor='#3897f0';
    }else{
        loginBtn.style.backgroundColor='#abd1f5';
    }
})

