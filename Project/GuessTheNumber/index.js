let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        //console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
        userInput.value=''
    }else if(guess<1){
        alert('Please enter number more than1')
         userInput.value=''
    }
    else if(guess>100){
        alert('Please enter number less than 100')
         userInput.value=''
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over.Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()

    }
    else if(guess<randomNumber){
        displayMessage(`You guessed it Too Low`)

    }
    else if(guess>randomNumber){
        displayMessage(`you guessed it too HIGH`)

    }
}
function displayGuess(guess){
    userInput.value='';
    console.log(guess)
    guessSlot.innerHTML+=` ${guess}`
    numGuess+=1
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newGame'>NEW GAME</h2>`
    startOver.appendChild(p)
    playGame=false
    startGame()

}

function startGame(){
    let newGameButton=document.getElementById('newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        playGame=true
    })

}