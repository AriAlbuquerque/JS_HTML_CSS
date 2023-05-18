//RECURSIVIDADE
//Fatorial Recursivo:
function fatorial(n) {
    if (n == 1) {
        return 1
    }else {
        return n * fatorial(n - 1) //Chama a função dentro da função 
    }

}