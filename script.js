var chooseButton = document.querySelector('#choose');
var chosenNumberInput = document.querySelector('#chosen-number');
var messagingParagraph = document.querySelector('#messaging');
var newGameButton = document.querySelector('#new-game-button');


function generateRandomNumber() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 20;
  randomNumber = Math.ceil(randomNumber);
  console.log('number', randomNumber);
  return randomNumber;
}

var randomNumber = generateRandomNumber();
var chosenNumbers = [];



chooseButton.addEventListener('click', function() {
  var num = Number(chosenNumberInput.value);

  chosenNumberInput.value = '';

  if (isNaN(num)) {
    messagingParagraph.textContent = 'You need to enter a number, stupid.';
    return;
  }
  else if (num > 20 || num < 1) {
    messagingParagraph.textContent = 'You need to pick a number between 1 and 20.';
    return;
  }

  chosenNumbers.push(num);

  if (num < randomNumber) {
    messagingParagraph.textContent = 'You need to go higher.';
  }
  else if (num > randomNumber) {
    messagingParagraph.textContent = 'You need to go lower.';
  }
  else {
    messagingParagraph.textContent = 'You guessed it!';
    newGameButton.classList.toggle('hidden');
  }

});


newGameButton.addEventListener('click', function() {

  randomNumber = generateRandomNumber();
  chosenNumbers = [];
  messagingParagraph.textContent = 'Choose a number between 1 and 20.';

newGameButton.classList.toggle('hidden');

});
