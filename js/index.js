const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const repitaSenha = document.getElementById('repita_senha');
const spanNome = document.getElementById('required-nome');
const spanIdade = document.getElementById('required-idade');
const spanEmail = document.getElementById('required-email');
const spanSenha = document.getElementById('required-senha');
const spanRepitaSenha = document.getElementById('required-repita-senha');
const containerErro = document.getElementById ('erro-form-container');
const iconeErro = document.querySelectorAll('i')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//menu burguer
function clickMenu() {
    var menu = document.querySelector ('#burguer2')
        if ( menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
} 


//validação formulário
document.getElementById('form').addEventListener('submit', conferir)
function conferir(e) {
    e.preventDefault()

    validarNome();
    validarData(); 
    validarEmail();
    validarRepitaSenha();
    validarSenha();

}

function validarNome() {
    if (nome.value.length < 3 || nome.value.length > 10) {
        nome.style.border = 'solid red 1px'
        iconeErro[0].style.display = 'block'
        containerErro.style.display = 'block'
        spanNome.style.display = 'block'
    } else if (nome.value.length >= 3 && nome.value.length <= 10){
        nome.style.border = ''
        iconeErro[0].style.display = 'none'
        containerErro.style.display = 'none'
        spanNome.style.display = 'none'
    }
}

function validarData() {
    if (idade.value.length < 4 || idade.value.length > 4) {
        idade.style.border = 'solid red 1px'
        iconeErro[1].style.display = 'block'
        spanIdade.style.display = 'block'
        containerErro.style.display = 'block'
    } else {
        idade.style.border = ''
        iconeErro[1].style.display = 'none'
        containerErro.style.display = 'none'
        spanIdade.style.display = 'none'
    }
}

function validarEmail() {
    if (!emailRegex.test(email.value) ) {
        email.style.border = 'solid red 1px'
        iconeErro[2].style.display = 'block'
        containerErro.style.display = 'block'
        spanEmail.style.display = 'block';
        return;
    } else {
        email.style.border = ''
        iconeErro[2].style.display = 'none'
        containerErro.style.display = 'none'
        spanEmail.style.display = 'none';
    }
}

function validarSenha() {
    if (senha.value.length < 8) {
        senha.style.border = 'solid red 1px'
        iconeErro[3].style.display = 'block'
        containerErro.style.display = 'block'
        spanSenha.style.display = 'block';
        return;
    } else {
        senha.style.border = ''
        iconeErro[3].style.display = 'none'
        containerErro.style.display = 'none'
        spanSenha.style.display = 'none';
    }
}

function validarRepitaSenha() {
    if (senha.value !== repitaSenha.value) {
        repitaSenha.style.border = 'solid red 1px'
        iconeErro[4].style.display = 'block'
        containerErro.style.display = 'block'
        spanRepitaSenha.style.display = 'block';
        return;
    } else {
        repitaSenha.style.border = ''
        iconeErro[4].style.display = 'none'
        containerErro.style.display = 'none'
        spanRepitaSenha.style.display = 'none';
    }
}





    




