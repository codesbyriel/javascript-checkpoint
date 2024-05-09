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


    let numbers = [3, 4, 6 , 10, 18, 20, 30, 40];


    let minimumNumber = 10;

    function findHighestDigit() {
        var highestNumber = numbers.filter((number) => number > minimumNumber);
        console.log('This are the Highest numbers' + highestNumber);

        var lowestNumber = numbers.filter((number) => number < minimumNumber);
        console.log('These are the lowest number' + lowestNumber);
    }


    function totalOfArrays(){
        let total = 0;
        for (let index = 0; index < numbers.length; index++) {
                total += numbers[index];          
        }
        console.log(total);
    }
    
    totalOfArrays()
    findHighestDigit()






