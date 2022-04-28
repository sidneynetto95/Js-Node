function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <12) {
        // bom dia!
        img.src = 'imagens/manhãcirc.png'
        document.body.style.background = '#e2cd9f'
    }   else if (hora >= 12 && hora < 18) {
        //boa tarde!
        document.body.style.background = '#b9846f'
        img.src = 'imagens/tardecirc.png'
    }   else {
        //boa noite!
        img.src = 'imagens/noitecirc.png'
        document.body.style.background = '#515154'
    }
}