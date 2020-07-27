const arr = [1,2,3,4,5]

//3.1
const newArr = arr.map(item => item + 10)
console.log(newArr)

//3.2
const usuario = {nome: 'Hudson', idade: 18}
const mostraIdade = (usuario) => usuario.idade

console.log(mostraIdade(usuario))

//3.3
const nome = "Hudson"
const idade = 18
const mostraUsuario = () =>({nome, idade})

console.log(mostraUsuario(nome,idade))
// console.log(mostraUsuario(nome))

//3.4

const promise = () =>  new Promise((resolve, reject) => resolve)

console.log(promise)