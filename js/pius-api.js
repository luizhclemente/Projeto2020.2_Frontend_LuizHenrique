var xhr = new XMLHttpRequest();

xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");

xhr.addEventListener("load", function() {
    
    var resposta = xhr.responseText;

    var usuarios = JSON.parse(resposta);

    usuarios.forEach(function(user){
        montaTL(user);
    })
});

xhr.send();