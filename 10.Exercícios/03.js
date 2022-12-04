/*
## Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e 
    faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/ 

function TransformaUnidade(dado){
    F = []
    for(i = 0; i <= dado; i++){
        dado = Number(dado)
        f = dado[i] * 9/5 + 32
        F += f
        console.log(F)
        return F
    }
}

Celsuius = ['10', '32', '100', '41']
Fahrenheit = ['10', '32', '100', '41']

TransformaUnidade(Celsuius)