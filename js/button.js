// var likesNumb = document.getElementById("likeTxt");

// var likeBtn = document.querySelector("#likebtn");

// var checkLike = false;

var deleteBtn = document.querySelector("#delete-btn");

const feedDiv = document.querySelector(".organiza-pius");

feedDiv.addEventListener("click", function(event){
    if(event.target.className == "delete-btn"){
        // event bubbling
        const piu = event.target.parentElement.parentElement.parentElement.parentElement;
        feedDiv.removeChild(piu);
    }

    if(event.target.className == "likebtn-img") {
        var likeBtn = event.target.parentElement;
        var likesNumb = event.target.nextElementSibling;
        console.log(likesNumb);

        likesNumb = event.target.nextElementSibling;
        console.log(likeBtn.className);
        if(likeBtn.className == "activated") {
            likeBtn.classList.remove("activated");
            likesNumb.textContent = parseInt(likesNumb.textContent) - 1;
            if (likesNumb.textContent == 0) {
                likesNumb.innerHTML = "";
            }
        } else {
            likeBtn.classList.add("activated"); 
            if(likesNumb.textContent.length == 0){
                likesNumb.textContent = 1;
            } else {
                likesNumb.textContent = parseInt(likesNumb.textContent) + 1;
            }
        }
        }  
})

var closePopup = document.querySelector(".close")

closePopup.addEventListener("click", function() {
    document.querySelector("popup").style.display = "flex";
})


