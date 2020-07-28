class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    isAdmin(){
        return this.admin === true
    }
}


class admin extends user{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new user('email@teste.com', 'senha123');
const Adm1 = new admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true