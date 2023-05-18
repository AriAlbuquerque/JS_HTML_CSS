let num = [5, 8, 4] //Declaração de array[vetor] (tipo de variável let, nome da variável num)
console.log(num)
num[3] = 6 //Adiciona conteúdo a posição 3 do array;
console.log(num)
num.push(7) //Add de forma automática na posição seguinte do array;
console.log(num)
console.log(num[2])//Mostra a posicao selecionada no array []
console.log(num.length) //Mostra o tamanho do array;
console.log(num.sort()) //Altera os elementos em ordem crescente;
console.log(`O vetor tem ${num.length} posições`)//Interpolação `` e place holder ${} mosta quantidade de posições do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) //Interpolação `` e place holder ${}
console.log(num.sort()) //Mostra o array em ordem crescente;


//Mostra todos os elementos do array em cada posição;
for (let pos = 0; pos <num.length; pos++){
  let pos = num.indexOf(8)
  console.log(`O número ${8} está na posição ${num.indexOf(8)}`) //Mostra em qual posição está o numero solicitado;

}
//Percurso de exibição dos elementos do vetor; uso de interpolação `` e place holder ${};
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores) //Mostra vetor na posição original entre[];

for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)//Interpolação `` e uso de place holder ${};
   
}
//Versão atual ECMA Script; 

for (let pos in num){  //declaração com apenas a variável com conector in no array num;
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)//Mostra o array em posição vertical no console;
}