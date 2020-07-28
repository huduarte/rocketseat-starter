const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idade = usuarios.map(() =>{
    return totalIdades = [usuarios[0].idade,usuarios[1].idade,usuarios[2].idade]
    
})
console.log(totalIdades)

const rocketseat = usuarios.filter((usuarios) =>{
    if(usuarios.empresa == 'Rocketseat'){
        r18 = [usuarios.nome, usuarios.idade,usuarios.empresa]
        return r18
    }
})
console.log(rocketseat)

const google = usuarios.find((usuarios) => {
    if(usuarios.empresa === 'google'){
        return true;
    }
})
console.log(google)


const age = usuarios.map((usuarios)=>{
    if(usuarios.idade * 2 <= 50){
        r18 = [usuarios.nome, usuarios.idade,usuarios.empresa]
        return r18
    }
})

console.log(age)

