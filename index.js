

const guessField = document.querySelector(".guessField");
const lowOrHigh = document.querySelector(".lowOrhigh");
const result = document.querySelector(".result");
const previous_guess = document.querySelector(".previous-guesses");
const guessSubmit = document.querySelector(".guessSubmit");

let count = 1;

let random_number = Math.floor(Math.random() * 100) + 1;
console.log(random_number);
let resetButton;

function guess(){
   const userguessed = Number(guessField.value);
   if(count === 1){
        previous_guess.textContent = "Previous guesses: ";
   }
   previous_guess.textContent += `${userguessed} `;

   if(userguessed === random_number){
        result.textContent = "Congratulations you guessed right.";
        result.style.backgroundColor = "green";
        result.style.color = "white";
        lowOrHigh.textContent = "";
        setgameOver();
   }else if(count === 10){
        setgameOver();
   }
   else{
        result.textContent = "Wrong guess. Please guess again.";
        result.style.backgroundColor = "red";
        result.style.color = "white";

        if(userguessed > random_number){
            lowOrHigh.textContent = "Your guess was too high";
        }else if (userguessed < random_number){
            lowOrHigh.textContent = "Your guess was too low";
        }
   }
    count++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", guess);

function setgameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    count = 1;
    const resetParas = document.querySelectorAll(".resultReset p");
    // console.log(resetParas);
    for (const resetPara of resetParas){
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    result.style.backgroundColor = "white";

    random_number = Math.floor(Math.random() * 100) + 1;
    console.log(random_number);
}

