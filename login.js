//pegar elementos do html 
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnEye = document.getElementById('btn-eye');
const formLogin = document.getElementById('form-login');

//função 1: mostrar ou ocultar senha
btnEye.addEventListener('click', function () {
    //se o tipo de input for 'password', muda para 'text' para mostrar a senha
    if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            //mudar o icone do olho para indicar que a senha está visível
            btnEye.classList.remove('fa-eye');
            btnEye.classList.add('fa-eye-slash');
        } else {
            //se o tipo do input for 'text', muda para 'password' para ocultar a senha
            passwordInput.type = 'password';
            //mudar o icone do olho para indicar que a senha está oculta
            btnEye.classList.remove('fa-eye-slash');
            btnEye.classList.add('fa-eye');
        }
    });