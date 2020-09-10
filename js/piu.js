var piuBtn = document.querySelector(".piu-button");

var feed = document.querySelector(".feed");

var texto = document.querySelector(".write-piu");

var write = document.querySelector(".write");

var organizaPius = document.querySelector(".organiza-pius");

piuBtn.addEventListener("click", function(event) {

    var userLuiz = {
        nome: "Luiz Henrique",
        username: "@luizhclemente",
        mensagem: texto.value,
        imagem: "images/luiz.jpg"
    };

    
    var postarBtn = document.querySelector(".piu-button");
    // habilitar
    document.querySelector(".close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
    })
    if (texto.value.length == 0) {
        return;
    }

    if (texto.value.length > 140) {
        document.querySelector(".popup").style.display = "flex";
        return;
    }


    montaTL(userLuiz);
});

function montaTL(user) {
    var piuDiv = document.createElement("div");
    piuDiv.classList.add("pius");

    // feed.appendChild(piuDiv);

    organizaPius.prepend(piuDiv);
    
    var fotoPerf = document.createElement("img");
    fotoPerf.classList.add("avatar-piu")
    fotoPerf.src = user.imagem

    piuDiv.appendChild(fotoPerf);
    var conteudoPiu = document.createElement("div");
    conteudoPiu.classList.add("conteudo-piu");
    piuDiv.appendChild(conteudoPiu);

    var infoUser = document.createElement("div");
    infoUser.classList.add("info-user");
    conteudoPiu.appendChild(infoUser);

    var nomeUser = document.createElement("strong");
    nomeUser.textContent = user.nome;
    infoUser.appendChild(nomeUser);

    var userUser = document.createElement("span");
    userUser.textContent = user.username;
    infoUser.appendChild(userUser);

    var divtextoPiu = document.createElement("div");
    divtextoPiu.classList.add("texto-piu");
    conteudoPiu.appendChild(divtextoPiu);

    var textoPiu = document.createElement("texto-piu");
    textoPiu.classList.add("texto-piu");
    textoPiu.textContent = user.mensagem;
    divtextoPiu.appendChild(textoPiu);

    var iconesPiu = document.createElement("div");
    iconesPiu.classList.add("icones-piu");
    conteudoPiu.appendChild(iconesPiu);

    var iconesArray = ["images/message-square.svg", "images/star.svg", "images/logo.svg", "images/trash.svg"];

    for (var i = 0; i<4; i++) {
        if (i == 1) {
            var divLikeBtn = document.createElement("div");
            divLikeBtn.id = "like";
            iconesPiu.appendChild(divLikeBtn);

            var iconeBtn = document.createElement("button");
            divLikeBtn.appendChild(iconeBtn);
            iconeBtn.id = "likebtn";

            var iconesImg = document.createElement("img");
            iconesImg.src = iconesArray[i];
            iconesImg.classList.add("likebtn-img");
            iconeBtn.appendChild(iconesImg);

            var likeCounter = document.createElement("span");
            likeCounter.id = "likeTxt";
            iconeBtn.appendChild(likeCounter);
        } 
        else if(i == 3) {
            var trashBtn = document.createElement("button");
            trashBtn.classList.add("delete-btn");
            trashBtn.id = "delete-btn";
            iconesPiu.appendChild(trashBtn);

            var trashImg = document.createElement("img");
            trashImg.src = iconesArray[i];
            trashImg.classList.add("delete-btn");
            trashBtn.appendChild(trashImg);
        } 
        else {
            var iconeBtn = document.createElement("button");
            iconesPiu.appendChild(iconeBtn);
            var iconesImg = document.createElement("img");
            iconesImg.src = iconesArray[i];
            iconesImg.classList.add("icones-piu")
            iconeBtn.appendChild(iconesImg);
        }

    }
}