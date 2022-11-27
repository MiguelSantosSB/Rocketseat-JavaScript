/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Contrutora(name){
    this.name = name
    this.andar = function(){
        return this.name + "andando"
    }
}

const mayk = new Contrutora("Mayk")
const joao = new Contrutora("joao")
console.log(mayk.andar())
console.log(joao)




