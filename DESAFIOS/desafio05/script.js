
var exe = window.document.getElementById('exec')
exe.addEventListener('click',executar)

function executar() {
    var mt = window.document.getElementById('metros')
    var mt1 = Number(mt.value) 
    var res = window.document.querySelector('div#res')
    var km = mt1 / 1000
    var hm = mt1 / 100
    var dm = mt1 / 10
    var dcm = mt1 * 10
    var cm = mt1 * 100
    var mm = mt1 * 1000 
    


    res.innerHTML = `A distância de ${mt1} metros, corresponde a:`
    res.innerHTML += `<br>${km} Quilometros(KM)`
    res.innerHTML += `<br>${hm} Hectometros(HM)`
    res.innerHTML += `<br>${dm} Decâmetros(DAM)`
    res.innerHTML += `<br>${dcm} Decímetros(DM)`
    res.innerHTML += `<br>${cm} Centímetros(CM)`
    res.innerHTML += `<br>${mm} Milímetros(MM)`
}