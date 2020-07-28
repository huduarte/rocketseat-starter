//AJAX == Requisição assíncrona: requisitar informações do servidor sem precisar atualizar a página
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/huduarte');
xhr.send(null)


xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
