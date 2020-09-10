const myTextArea = document.querySelector(".write-piu");
const remainingChars = document.querySelector("#remaining-char");
const maxChars = 140;

myTextArea.addEventListener("input", function() {
    const remaining = maxChars - myTextArea.value.length;

    remainingChars.textContent = remaining + "/140"
    
    if (remaining < 0) {
        console.log("Negativo");
        remainingChars.id = "invalid-input";
        remainingChars.textContent = remaining + "/140"
    } else{
        remainingChars.id = "remaining-char";
        remainingChars.textContent = remaining + "/140"
    }

    if (remaining == 140) {
        remainingChars.textContent = ""
    }
})
