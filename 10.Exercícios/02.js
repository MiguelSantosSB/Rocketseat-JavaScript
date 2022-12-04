/*
## Sistema de gastos familiar

    Criar um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []

    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo

*/
function SomaReceita(dados){
    let somareceita = 0

    for(let valor of dados){
        somareceita += valor
        
        // console.log(somareceita)
    }
    return somareceita
}

function SomaDespesas(dados){
    let somadespesas = 0

    for(let valor of dados){
        somadespesas += valor
        
        // console.log(somadespesas)
    }
    return somadespesas
}

function Saldo(){
    let saldo = 0
    saldo = SomaReceita(familia.receitas) - SomaDespesas(familia.despesas)
    // console.log(saldo)

    if(saldo > 0){
        console.log('O saldo da familia está possitivo!')
        console.log('R$'+ saldo)
    }
    else if(saldo < 0){
        console.log('O saldo da familia está NEGATIVO')
        console.log(saldo)
    }

}

let familia = {
    receitas: [3000,2000,700,400],
    despesas: [289.45, 129.50, 600, 1200]
}

Saldo()