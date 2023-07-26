function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('manha-foto')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas da manhã.`
        img.src = 'manha.png'
        document.body.style.background = 'rgb(67, 181, 251)'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Bom tarde! Agora são ${hora} horas da tarde.`
        img.src = 'tarde.png'
        document.body.style.background = '#ff2f00'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas da noite.`
        img.src = 'noite.png'
        document.body.style.background = '#030366'
    }
}