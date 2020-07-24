var inputElement = document.querySelector('input');
var listElement = document.querySelector('ul');


function renderRepositories(repositories) {
  listElement.innerHTML = ' ';
  // Tentei colocar o nome do dono do github
  const liOwner = document.createElement('p')
  const ownerTextElement = document.createTextNode(inputElement.value)
  liOwner.appendChild(ownerTextElement)
  listElement.appendChild(liOwner)


  for (repo of repositories) {
    const liElement = document.createElement('li');
    const textElement = document.createTextNode(repo.name);

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
  
  inputElement.value= ''
}

function listRepositories() {

    axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
      .then(function (response) {
        renderRepositories(response.data);
      })
      .catch(function(error){
        console.log('Não achou')

      })
  }