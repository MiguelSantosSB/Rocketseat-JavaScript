/*
# Transformar notas escolares

Crie um algoritmo que tranforeme as notas do sistema numérico para
sistema de notas em caracteres tipo A B C 

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/ 

function TransformaNotas(numerico){
    if(numerico > 90 && numerico <= 100){
        nota = 'A'
    }
    else if(numerico >= 80 && numerico <= 89){
        nota = 'B'
    }
    else if(numerico >= 70 && numerico <= 79){
        nota = 'C'
    }
    else if(numerico >= 60 && numerico <= 69){
        nota = 'D'
    }
    else if(numerico < 60 && numerico >= 0){
        nota = 'F'
    }
    else if(numerico > 100 ){
        nota = 'Nota utrapassa o limite, por favor verifique sua nota'
    }
    else if(numerico < 0){
        nota = 'Nota e muito abaixo, por favor verifique sua nota'
    }
    return nota
}
console.log(TransformaNotas(-4))
