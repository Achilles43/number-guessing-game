let input = document.getElementById("mainInput");
let firstH = document.getElementById("firsth");
let secondH = document.getElementById("secondh");
let btn = document.getElementById("main-btn");
let mainP = document.getElementById("main-p")
let refreshBtn = document.getElementById("refresh-btn")

let numOfGuesses = 0;

let randomNum = Math.floor((Math.random()) * 100) + 1;
console.log(randomNum)
btn.disabled = true;

input.addEventListener("change", stateHandle);
function stateHandle() {
    if (input.value === "" || input.value < 1 || input.value > 99) {
        btn.disabled = true;
        alert("Please Enter The Number Between 1-100")
    } else {
        btn.disabled = false;
    }
    firstH.textContent = "Please Enter The Number Between 1-100"
    secondH.textContent = ""
    
}

input.addEventListener('keydown', (event) => {
    const name = event.key;
    const code = event.code;
})
input.addEventListener("keyup", e => {
    if(e.keyCode === 13) {
        btn.click();
    }
})

btn.addEventListener("click", function() {
    numOfGuesses += 1;
    mainP.textContent = "Number Of Guesses: " + numOfGuesses;
    
    if (input.value < randomNum) {
        firstH.textContent = "You Guessed Too Low"
        secondH.textContent = ""
        mainP.textContent = "Number Of Guesses: " + numOfGuesses;
    }  else if(input.value > randomNum) {
        firstH.textContent = "You Guessed Too High"
        secondH.textContent = ""
        mainP.textContent = "Number Of Guesses: " + numOfGuesses;
    }  else if(input.value = randomNum) {
        firstH.textContent = "You Guessed It! The Number Was " + randomNum
        secondH.textContent = ""
        mainP.textContent = "You Guessed The Number in " + numOfGuesses + " Tries";
        input.style = "color:green";
        refreshBtn.style = "visibility:visible";
    } 
})

refreshBtn.addEventListener("click", function() {
    location.reload()
})

