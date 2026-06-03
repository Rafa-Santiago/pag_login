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

//função 2: validar o formulário de login
formLogin.addEventListener('submit', function (event) {
    //event.preventDefault() para evitar que o formulário seja enviado e a página seja recarregada
    event.preventDefault();

    //pegar valores que  o usuario digitou e remover espaços em branco com .trim()
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    //verificar se o email e a senha estão preenchidos
    if (emailValue === '' || passwordValue === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        //se os campos estiverem preenchidos, exibir uma mensagem de sucesso 
        window.location.href = 'home.html';
    }
})