var inputElement = document.querySelector('input');
var btnElement = document.querySelector('#botao');
var btnDelete = document.querySelector('a')

btnElement.onclick = function(){
    //Pegando o texto
    var text = inputElement.value;
    //Criando o formato de texto
    var todoCreate = document.createElement('li');
    var textElement = document.createTextNode(text)
    todoCreate.appendChild(textElement)
    //Colocando o texto em tela
    var containerElement = document.querySelector('ul')
    containerElement.appendChild(todoCreate);
    inputElement.value=""

}