//REST - Pegar restos das propriedades

console.warn('Resto de objeto');
//Pegar resto de um objeto
const usuario = {
    nome: 'Hudson',
    idade: 18,
    empresa: 'Facebook'
};

const {nome, ...resto} = usuario

console.log(resto)

console.warn('Resto de vetor');
//Pegar resto de um vetor
const arr = [1,2,3,4,5]

const [a,b, ...c] = arr;

console.log(c)

console.warn('Resto de parametro');
//Pegar resto de um parametro
function soma(a,b, ...params){
    return params.reduce((total,next) => total + next);
}

console.log(soma(1,2,4,5,6,7))


//SPREAD - Copiar propriedades
console.warn('Unir arr');
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

console.warn('Mudar propriedades de objeto');

const usuario1 = {
    nome: 'Hudson',
    idade: 18,
    empresa: 'Facebook'
}

const usuario2= {...usuario1, nome:'Maria'}

console.log(usuario2)