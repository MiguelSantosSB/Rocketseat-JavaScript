/*
    Operador Condicional (Ternário)

    Dependendo da condição, nós recebemos valores diferentes 
*/ 

//  Condição então valor1 se não valor2
//  condition ? value1 : value2

// ex:

let presunto = false
let queijo = true

//  quero os 2 para que seja bom 
const merenda = presunto && queijo ? 'muito bom' : 'não tem os dois, então e ruim'

// console.log(merenda)

//  se tiver 1 eu já fico feliz 
const outramerenda = presunto || queijo ? 'muito bom' : 'não tem nada tbm ne oh fdp'

// console.log(outramerenda)

// ex2:

let age = 17

const podedirigir = age >= 18 ? 'Você pode dirigir' : "Tá louco mlk, tu n pode n pivete"

// console.log(podedirigir)
