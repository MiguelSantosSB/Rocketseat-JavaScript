// Throw

// vamos tentar executar um bloco de código, e se der algum erro, será 
// disparado e capturado na nossa aplicação. Suponhamos que haja uma 
// função que dispare um erro caso não seja passado um parâmetro dessa 
// função.

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}


// Try ... Catch
try{
    sayMyName()
}
catch(e){
    console.log(e)
}

console.log('Depois do erro')

/*
    Se o bloco do try e o catch forem retirados e deixar só a função 
    ela dará erro e parará o codigo, se for mantido mostrará que deu
    erro porém o que vem após o bloco será rodado tbm
*/ 