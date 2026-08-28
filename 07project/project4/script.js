let randomNo = parseInt(Math.random()*100 + 1);

const guess = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const msgDisplay = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuessArr = [];
let numGuess = 1;

let playGame = true ;

if(playGame){
    submitBtn.addEventListener("click",function(e){
        e.preventDefault();
        const guessNo = parseInt(guess.value);
        // console.log(guessNo);
        validGuess(guessNo);
    })
}


function validGuess(guessNo){
    // here we are going to validate the guess
    if(isNaN(guessNo)){
        displayMsg(`Please enter a valid number`);
        guess.value = '';
    }else if(guessNo < 1){
        displayMsg(`Please enter a number greater than 1`)
    }else if(guessNo > 100){
        displayMsg(`Please enter a number less than 100`)
    }else{
        prevGuessArr.push(guessNo);
        numGuess++;
        if(numGuess === 11){
            displayGuess(guessNo);
            displayMsg(`Game Over, Random no. was ${randomNo}`);
            stopGame();
        }else{
            displayGuess(guessNo);
            checkGuess(guessNo);
        }
    }
}

function checkGuess(guessNo){
    // here we are going to check the guess with that random no.
    if(guessNo < randomNo){
        displayMsg(`Number is too low`);
    }else if(guessNo > randomNo){
        displayMsg('Number is too high')
    }else{
        displayMsg('Congratulations, you guessed it right.');
        stopGame();
    }
}

function displayGuess(guessNo){
    // here we are going to display the guess in the prev guess array and also going to reset the guess and also going to update the remaning guesses count

    guess.value = '';
    prevGuess.innerHTML += `${guessNo} , `;
    // numGuess++;
    console.log(numGuess);
    remGuess.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message){
    // here we are going to display the message incase of various secenarios , such as when the no. is valid or not
    msgDisplay.innerHTML = `<h2>${message}</h2>`
}

function stopGame(){
    // this function run when we have guessed the no. right or when we have or we have exauste the no. of lifeline given to us
    guess.value = '';
    guess.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h2 id = newGame>Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame(){
    // this function run when we have to restart the game 
    const startGameBtn = document.querySelector(".button");
    startGameBtn.addEventListener("click" , function(){
        guess.value = "";
        randomNo = parseInt(Math.random()*100 + 1);
        prevGuess.innerHTML = "";
        numGuess = 1;
        remGuess.innerHTML = `${11 - numGuess}`;
        guess.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}

