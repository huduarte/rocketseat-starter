import axios from 'axios'

class Api{
    static async getUserNameInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err){
            console.warn('Erro na api')
        }
    }
}


Api.getUserNameInfo('huduarte')
Api.getUserNameInfo('huduarte3333333')