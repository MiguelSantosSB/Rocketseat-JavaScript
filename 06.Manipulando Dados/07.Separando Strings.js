/*
    Separe um texto que contem espaços, em um novo array onde cada 
    texto é uma posição do array.Depois disso, transforme o array em 
    um texto e onde eram espaço, coloque _
*/ 

let frase = 'uma frase qualquer'

let myarray = frase.split(' ')

console.log(myarray)

let juntaArray = myarray.join('_')

console.log(juntaArray)