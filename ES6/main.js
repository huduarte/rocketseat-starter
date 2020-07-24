//Método static não enxerga o resto da classe, utilizado como classes auxiliares
class Matematica{
    constructor(){
        this.todos = [];
    }

    static soma(a,b){
        return a+b
    }
}
console.log(Matematica.soma(10,20))



// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data)
//         console.log(this.data)
//     }
// }

// class TodoList extends List {
//     constructor(){
//         super()


//         this.usuario = 'Hud';
//     }

//     mostraUsuario(){
//         console.log(this.usuario)
//     }

// }


// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novotodo')
// }


// MinhaLista.mostraUsuario()

