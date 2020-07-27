const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x)
console.log(y)

function soma(a,b, ...c){
    return a+ b + c.reduce((total, next) => total + next)
}

console.log(soma(6,6,6))


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };


const usuario1 = {...usuario, nome: 'Gabriel'}
console.log(usuario1)
const usuario2 = {...usuario, endereço:{...usuario.endereco, cidade: 'Lontras'}}
console.log(usuario2)