function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (horas >= 0 && horas < 12){
        img.scr = 'manha.png'
        document.body.style.background = '#ffe68c'
    }else if (horas >= 12 && horas <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#eb984c'
    }else{
        img.scr = 'noite.png'
        document.body.style.background = '#012c70'
    }
}