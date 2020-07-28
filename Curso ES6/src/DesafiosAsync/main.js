import axios from 'axios';

1.1
const delay = () => new Promise(resolve => {
    setTimeout(()=>{
            resolve()
    }, 1000)
});

const umPorSegundo = async () =>{
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();

1.2

async function getUserFromGithub(username){
    try{
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response)
    } catch{
        console.warn("USUARIO NÃO ENCONTRADO")
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


1.3

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
    } catch(err){
    console.warn('Repositório não existe');
        }
    }
}



Github.getRepositories('huduarte/starter');
Github.getRepositories('rocketseat/dslkvmskv');


1.4

const buscaUsuario = async (user) => {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    }catch(err) {
    console.log('Usuário não existe');
    };
   }
buscaUsuario('huduarte');