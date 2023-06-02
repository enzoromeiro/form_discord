function clickMenu() {
    var menu = document.querySelector ('#burguer2')
        if ( menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
} 


    function conferir() {
        let senha = document.getElementById ('senha')
        let repitaSenha = document.getElementById ('repita_senha')

        if (senha.value !== repitaSenha.value) {
            repitaSenha.style.backgroundColor = '#f7191973'
        } else {
            repitaSenha.style.backgroundColor = '#1f1e2c'
        }
    }



