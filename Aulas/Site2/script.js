function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
           
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-menino.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('scr', 'homem-jovem.png')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('scr', 'homem-adulto.png')
            }else{
                //Idoso
                img.setAttribute('scr', 'homem-idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('scr', 'crianca-menina.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('scr', 'mulher-jovem.png')

            }else if (idade < 50){
                //Adulto
                img.setAttribute('scr', 'mulher-adulta.png')
            }else{
                //Idoso
                img.setAttribute('scr', 'mulher-idosa.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
 }
    