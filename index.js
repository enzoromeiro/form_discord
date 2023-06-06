function clickMenu() {
    var menu = document.querySelector ('#burguer2')
        if ( menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
} 

document.getElementById('botao').addEventListener('click', conferir)
function conferir(e) {
    e.preventDefault()

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let repitaSenha = document.getElementById('repita_senha').value;

    // Verificar se está tudo preenchido
    if (nome === '' || idade === '' || email === '' || senha === '' || repitaSenha === '') {
    alert('Preencha todas as informações');
    return;
    }

    // Verificar se as senhas coincidem
    if (senha !== repitaSenha) {
    alert('Verifique se digitou a senha corretamente.');
    return;
    }

    // Encaminhar para a página 002 caso esteja tudo certo
    location.href = 'pag002.html';
}


    
    



