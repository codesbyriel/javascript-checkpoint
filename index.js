const btnSubmit = document.querySelector(".submitBtn");
const input = document.querySelector(".input-field");

const characterCount = document.querySelector(".character-count");
const reversedText = document.querySelector(".display-name")

const ourSentence = document.querySelector(".sentence")


btnSubmit.addEventListener("click", function () {
    const inputField = input.value;
    realWords(inputField);
    textify()
});

function realWords(words) {
    let reversedString = '';
    
    for (let index = words.length - 1; index >= 0; index--) {
        reversedString += words[index];
    }
    reversedText.innerHTML = `<h2>${reversedString}</h2>`
    characterCount.innerHTML = `<h2>${words.length}</h2>`
}

function textify(){
    ourSentence.classList.add("uppercase")
}



