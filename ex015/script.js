function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                //criança 
                img.setAttribute('src' , 'meninO.jpg')
            } else if (idade <= 49) {
                //adulto
                img.setAttribute('src', 'homemO.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosO.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'meninaO.jpeg')
            }
            else if(idade <= 49) {
                //mulher
                img.setAttribute('src', 'MulherO.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'idosaO.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos.`
        res.appendChild(img)
        
    }
}