let subject = 'creat video'

function createThink(subject){
    subject = 'study'
    return subject
}

// o subject da função não irá alterar a variavel fora da função
console.log(subject)

console.log(createThink(subject))
// mas se for retirado os parâmetros da função 
// ai sim será alterada em todo código

// function createThink(){
//      código...
// }