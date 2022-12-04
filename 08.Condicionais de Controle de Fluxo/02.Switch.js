// let expression = 'a'

// switch(expression){
//     case 'a':
//         // codigo
//         console.log('a')
//         break
//     case 'b':
//         // codigo para expression 'b'
//         console.log('b')
//         break
//     default:
//         console.log('default')
//         break
// }  

function calculadora(number1, number2, operation){

    switch(operation){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '/':
            result = number1 / number2
            break
        case '*':
            result = number1 * number2
            break
        default:
            console.log('default')
            break
    }
    return result
}

console.log(calculadora(6100, 2218.95, '-'))
