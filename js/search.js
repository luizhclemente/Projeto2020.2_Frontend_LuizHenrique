var campoFiltro = document.querySelector("#search");

campoFiltro.addEventListener("input", function(){
    var users = document.querySelectorAll(".info-user");

    var pius = document.querySelectorAll(".pius")

    if(this.value.length > 0) {
        console.log(users[2].querySelector("strong").textContent);
        for (var i = 0; i < users.length; i++) {
            var piu = pius[i];
            var user = users[i];
            var tdUserNome = user.querySelector("strong");
            var userNome = tdUserNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(userNome)) {
                piu.classList.add("invisivel");
            } else {
                piu.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pius.length; i++) {
            var piu = pius[i];
            piu.classList.remove("invisivel");
        }
    }
});