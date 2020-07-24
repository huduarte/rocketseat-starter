var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button')

// var btnClick = function(){
//     btnElement.onclick = function(){
        function checaIdade() {
            return new Promise(function(resolve, reject) {
              setTimeout(function() {
                if(inputElement.value >= 18){
                    return resolve();
                } else{
                    return reject()
                }
              }, 2000);
            });
          }
          
          checaIdade()
            .then(function() {
              console.log("Maior que 18");
            })
            .catch(function() {
              console.log("Menor que 18");
            });
//     }
// }




