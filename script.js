function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // fullyear e o ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 /* se o cara nao digitou o ano */|| Number(fano.value) > ano/* ou se o ano que ele digitou for maior que o ano atual*/) {
        window.alert('[ERROR]')
    } else {
        var fsex = document.getElementsByName('radsex') //[0] [1] < sao as bolotinhas
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada : ${idade} ` // nao precisa de () no inner.
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto') // como se fosse fazer no html, criar uma div com id;
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute ('src', 'imagens/criançam.jpg')
        } else if (idade < 21 ) {
            //jovem
            img.setAttribute ('src', 'imagens/jovemm.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute ('src', 'imagens/adultof.jpg')
        } else {
            //idoso
            img.setAttribute ('src', 'imagens/idosom.jpg')
        } 
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'imagens/criançaf.jpg')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute ('src', 'imagens/jovemf.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'imagens/adultaf.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'imagens/idosaf.jpg')
            } 
        }
        res.style.textAlign ='center'
        res.innerHTML = ` Detectamos um(a) ${genero} com ${idade} anos `
        res.appendChild(img)
        

    }
}





