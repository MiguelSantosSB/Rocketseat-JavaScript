/*
    Transformar um número quebrado com 2 casas decimais e trocar ponto 
    por vírgula

*/ 

let number = 123.897544

console.log(number.toFixed(2))
// limita o número de casas decimais

console.log(String(number).replace(".", ","))
// replace substitui algo por outra coisa escolhida 

console.log(number.toFixed(2).replace('.', ','))