const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const repitaSenha = document.getElementById('repita_senha');
const spanNome = document.getElementById('required-nome');
const spanIdade = document.getElementById('required-idade');
const spanEmail = document.getElementById('required-email');
const spanRepitaSenha = document.getElementById('required-repita-senha');
const containerErro = document.getElementById ('erro-form-container');
let IdadeMin = idade.value - 2023
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function clickMenu() {
    var menu = document.querySelector ('#burguer2')
        if ( menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
} 

function validarNome() {
    if (nome.value.length < 3 || nome.value.length > 10) {
        nome.style.border = 'solid red 1px'
        containerErro.style.display = 'block'
        spanNome.style.display = 'block'
    } else if (nome.value.length >= 3 && nome.value.length <= 10){
        nome.style.border = ''
        containerErro.style.display = 'none'
        spanNome.style.display = 'none'
    }
}

function validarData() {
    if (idade.value.length < 4 || idade.value.length > 4) {
        idade.style.border = 'solid red 1px'
        spanIdade.style.display = 'block'
        containerErro.style.display = 'block'
    } else {
        idade.style.border = ''
        containerErro.style.display = 'none'
        spanIdade.style.display = 'none'
    }
}

function validarEmail() {
    if (!emailRegex.test(email.value) ) {
        email.style.border = 'solid red 1px'
        containerErro.style.display = 'block'
        spanEmail.style.display = 'block';
        return;
    } else {
        email.style.border = ''
        containerErro.style.display = 'none'
        spanEmail.style.display = 'none';
    }
}

function validarRepitaSenha() {
    if (senha.value !== repitaSenha.value) {
        repitaSenha.style.border = 'solid red 1px'
        containerErro.style.display = 'block'
        spanRepitaSenha.style.display = 'block';
        return;
    } else {
        repitaSenha.style.border = ''
        containerErro.style.display = 'none'
        spanRepitaSenha.style.display = 'none';
    }
}


document.getElementById('botao').addEventListener('click', conferir)
function conferir(e) {
    e.preventDefault()

    // Verificar se está tudo preenchido
    if (nome.value === '' || idade.value === '' || email.value === '' || senha.value === '' || repitaSenha.value === '') {
        alert('Preencha todas as informações');
        return;
    }

    // Encaminhar para a página 002 caso esteja tudo certo
    location.href = 'pag002.html';
}


    
    



