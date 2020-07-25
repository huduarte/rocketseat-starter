const usuario = {
    nome: 'Hudson',
    idade: 18,
    endereco: {
        cidade: 'Salvador',
        uf: 'BA'
    }
}
//Obter conteudo de um objeto
// const { nome, idade, endereco: {cidade} } = usuario;

// console.log(nome,idade,cidade)

function mostraNome({nome, idade}){
    console.log(nome, idade)
}

mostraNome(usuario)