function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // fullyear e o ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 /* se o cara nao digitou o ano */|| Number(fano.value) > ano/* ou se o ano que ele digitou for maior que o ano atual*/) {
        window.alert('[ERROR]')
    } else {
        document.getElementsByName('radsex') //[0] [1] < sao as bolotinhas
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada : ${idade} ` // nao precisa de () no inner.
        var genero = ''
        if ()

    }
}





