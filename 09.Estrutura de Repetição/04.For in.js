// For...in

let pessoa = {
    name: 'maicon',
    age: 30,
    weight: 88.9
}

for(let dados in pessoa){
    console.log(dados)
    console.log(pessoa[dados])
}