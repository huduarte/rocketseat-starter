const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

//4.1
const {nome, endereco:{cidade, estado}} = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

const usuario = {
    nome: 'Hudson',
    idade: 18
}

function mostraInfo({nome,idade}){
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario))