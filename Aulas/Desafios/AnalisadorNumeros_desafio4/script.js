let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //Array que irá armazenar elementos adicionados

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
 function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true 
    }else {
        return false
    }
 }

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //Cria um elemento
        item.text = `Valor ${num.value} adicionado` //Adiciona o elemento a variavel item
        lista.appendChild(item) //Adicionado item como appendChild;
        res.innerHTML = '' //Quando adicionar novo elemento limpa o resultado
        

    }else {
        window.alert('Valor inválido ou já está na lista!')
    }
    num.value = '' //Apaga valor digitado;
    num.focus()//Leva o cursor para local de entrada;
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
       let tot = valores.length
       let maior = valores[0]
       let menor = valores[0]
       let soma = 0
       let media = 0
        //Verifica elemento por elemento e define o maior e menor;
       for(let pos in valores) {
        soma += valores[pos]
       
        if (valores[pos] > maior)
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
       }
       media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados, é : ${media}.</p>`
    }
}





