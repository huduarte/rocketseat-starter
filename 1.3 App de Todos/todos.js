var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')

//Guardando todo no localstorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos(){
    listElement.innerHTML = ' ';
    for (todo of todos){
        //Criar texto
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo)

        //Botao excluir
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        //Apagar todo
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' +pos+ ')')

        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var todoText = inputElement.value;
    //Adicionar um novo item em um array
    todos.push(todoText);
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

btnElement.onclick = addTodo;

function deleteTodo(pos){
    //Apagar um item de um array
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}


function saveToStorage(){
    //JSON transforma um array em uma lista de string
    localStorage.setItem('list_todos', JSON.stringify(todos))
}