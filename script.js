// connects the "Guess" the button to the "random" function
document.getElementById('button').addEventListener('click', randomizer)

document.getElementById('play-again').addEventListener('click', playagain)

let randomNumber = 0
let userGuess = 0

  // generates a random number between 1 to 6
  randomNumber = Math.floor(Math.random() * 6) + 1

function randomizer () {
  // gets the number typed in by the user and convert into an integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  // compares userGuess and randomNumber
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = 'Congrats, you guessed correctly!'
  } else if (userGuess >= randomNumber) {
    document.getElementById('answer').innerHTML = 'Try a lower number'
  } else {
    document.getElementById('answer').innerHTML = 'Try a higher number'
  }
}


function playagain () {
  randomNumber =  Math.floor(Math.random() * 6) + 1
  document.getElementById('answer').innerHTML = ''
  document.getElementById('input').value = ''
}
