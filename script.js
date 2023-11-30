// Scissors Paper Stone

// user input either Scissors, Paper or Stone
// check if the input is either of the 3, if not return an error to try again
// computer will randomly generate either a scissors, paper or stone
// if user win, return user win
// if user lose, return user lose
// if its a draw, return its a draw

// General convention for object
var SCISSORS = 'scissors';
var PAPER = 'paper';
var STONE = 'stone';
var REVERSED_SCISSORS = 'reversed scissors';
var REVERSED_PAPER = 'reversed paper';
var REVERSED_STONE = 'reversed stone';

// State to contain win-loss records
var gameCount = 0;
var winCount = 0;
var lostCount = 0;
var drawCount = 0;

// setting gamemode, default to waiting for player
var gameMode = 'introduction';
var userName = '';

// HELPER FUNCTIONS 1
// function to generate a random integer from 0 to limit set by user
var randomNoGenerator = function (ceiling) {
  let randomDecimal = Math.random() * ceiling;
  let randomInteger = Math.floor(randomDecimal);
  return randomInteger;
}

// HELPER FUNCTIONS 2
// function to determine the computer's option
var gameBotChoice = function () {

  // generate a random index from 0 - 2
  var choiceIndex = randomNoGenerator(3)

  // assigning a value to each index, if unexpected value detected, return error
  if (choiceIndex == 0) {
    var results = SCISSORS
  } else if (choiceIndex == 1) {
    var results = PAPER
  } else if (choiceIndex == 2) {
    var results = STONE
  } else {
    var results = 'error'
  }
  
  // return bot's choice
  console.log(`game bot has thrown ${results}`)
  return results
}

// HELPER FUNCTION 3
// function to output results message
var resultMsg = function (playerChoice, botChoice, msg) {
  var winRate = (winCount / gameCount * 100).toFixed(2)

  var outputMsg = `Current GameMode: ${gameMode}!
    \n${userName} threw: "${playerChoice}"
    \nBot threw: "${botChoice}"
    \n${msg}
    \n\n${userName} Statistics:
    \nGames played: ${gameCount}
    \nNo. of wins: ${winCount}
    \nNo. of loses: ${lostCount}
    \nNo. of draws: ${drawCount}
    \nWin rate: ${winRate}%
    \n*To change gamemode, type "standard" or "reverse"
  `

  return outputMsg;
}

var reversedGame = function (playerChoice) {
  var outputMsg = '';

  // to standardise player choice to lowercase
  var lowerCasePlayerChoice = playerChoice.toLowerCase()
  
  // input validation: check if player input is valid
  var isValid = (
    lowerCasePlayerChoice == SCISSORS
    || lowerCasePlayerChoice == PAPER
    || lowerCasePlayerChoice == STONE
    )
  console.log(`player has thrown ${lowerCasePlayerChoice}`)

  // generating a bot's choice
  var botChoice = gameBotChoice();

  // Win, Lose or Draw condition
  // condition for winning the game
  var winCondition = (
    (lowerCasePlayerChoice == PAPER && botChoice == SCISSORS)
    || (lowerCasePlayerChoice == STONE && botChoice == PAPER)
    || (lowerCasePlayerChoice == SCISSORS && botChoice == STONE)
  );
  // condition for losing the game
  var loseCondition = (
    (lowerCasePlayerChoice == SCISSORS && botChoice == PAPER)
    || (lowerCasePlayerChoice == PAPER && botChoice == STONE)
    || (lowerCasePlayerChoice == STONE && botChoice == SCISSORS)
  );
  // condition for draw
  var drawCondition = (lowerCasePlayerChoice == botChoice);

  // return the result of the game
  if (lowerCasePlayerChoice == 'gun') {
    // if user input is invalid, return error message
    outputMsg = `Hey ${userName}! Don't be the guy that choose "${playerChoice}"! \n- Deshawn \n\nPlease throw either scissors, paper or stone!`
    
  } else if (!isValid) {
    // if user input is invalid, return error message
    outputMsg = `Hey ${userName}, you have input an invalid choice: "${playerChoice}" \n\nPlease throw either scissors, paper or stone!`
    
  } else if (winCondition) {
    gameCount += 1;
    winCount += 1;
    // if user input is valid, and winning condition has been met, return winning message
    outputMsg = resultMsg(playerChoice, botChoice, `You Won!`)
    
  } else if (loseCondition) {
    gameCount += 1;
    lostCount += 1;
    // if user input is valid, and loseing condition has been met, return losing message
    outputMsg = resultMsg(playerChoice, botChoice, `You Lost!`)
    
  } else if (drawCondition) {
    gameCount += 1;
    drawCount += 1;
    // if user input is valid, and draw condition has been met, return draw message
    outputMsg = resultMsg(playerChoice, botChoice, `It's a draw! Try again`)

  } else {
    // else if other unexpected errors
    outputMsg = `System error: unexpected option selected!`
  }

  return outputMsg;
}

var standardGame = function (playerChoice) {
  var outputMsg = '';

  // to standardise player choice to lowercase
  var lowerCasePlayerChoice = playerChoice.toLowerCase()
  
  // input validation: check if player input is valid
  var isValid = (
    lowerCasePlayerChoice == SCISSORS
    || lowerCasePlayerChoice == PAPER
    || lowerCasePlayerChoice == STONE
    )
  console.log(`player has thrown ${lowerCasePlayerChoice}`)

  // generating a bot's choice
  var botChoice = gameBotChoice();

  // Win, Lose or Draw condition
  // condition for winning the game
  var winCondition = (
    (lowerCasePlayerChoice == SCISSORS && botChoice == PAPER)
    || (lowerCasePlayerChoice == PAPER && botChoice == STONE)
    || (lowerCasePlayerChoice == STONE && botChoice == SCISSORS)
  );
  // condition for losing the game
  var loseCondition = (
    (lowerCasePlayerChoice == PAPER && botChoice == SCISSORS)
    || (lowerCasePlayerChoice == STONE && botChoice == PAPER)
    || (lowerCasePlayerChoice == SCISSORS && botChoice == STONE)
  );
  // condition for draw
  var drawCondition = (lowerCasePlayerChoice == botChoice);

  // return the result of the game
  if (lowerCasePlayerChoice == 'gun') {
    // if user input is invalid, return error message
    outputMsg = `Hey ${userName}! Don't be the guy that choose "${playerChoice}"! \n- Deshawn \n\nPlease throw either scissors, paper or stone!`
    
  } else if (!isValid) {
    // if user input is invalid, return error message
    outputMsg = `Hey ${userName}, you have input an invalid choice: "${playerChoice}" \n\nPlease throw either scissors, paper or stone!`
    
  } else if (winCondition) {
    gameCount += 1;
    winCount += 1;
    // if user input is valid, and winning condition has been met, return winning message
    outputMsg = resultMsg(playerChoice, botChoice, `You Won!`)
    
  } else if (loseCondition) {
    gameCount += 1;
    lostCount += 1;
    // if user input is valid, and loseing condition has been met, return losing message
    outputMsg = resultMsg(playerChoice, botChoice, `You Lost!`)
    
  } else if (drawCondition) {
    gameCount += 1;
    drawCount += 1;
    // if user input is valid, and draw condition has been met, return draw message
    outputMsg = resultMsg(playerChoice, botChoice, `It's a draw! Try again`)

  } else {
    // else if other unexpected errors
    outputMsg = `System error: unexpected option selected!`
  }

  return outputMsg;
}

// MAIN Functions
var main = function (input) {

  var myOutputValue = '';

  if (gameMode == 'introduction') {
    userName = input;
    myOutputValue = `Hello ${userName}, welcome to the Scissors, Paper, Stone Game\nEnter your selection to start the game!`
    gameMode = 'standard'
  } else if (input == 'reverse') {
    gameMode = 'reverse'
    myOutputValue = `You have changed to gameMode to "reverse"`
  } else if (input == 'standard') {
    gameMode = 'standard'
    myOutputValue = `You have changed to gameMode to "standard"`
  } else if (gameMode == 'standard') {
    myOutputValue = standardGame(input)
  } else if (gameMode == 'reverse' ) {
    myOutputValue = reversedGame(input)
  }

  return myOutputValue;
};
