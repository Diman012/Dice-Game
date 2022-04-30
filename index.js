function randomValue1(player1) { // A function to create random numbers and display them in img form (for player 1)

  if (player1 === 1) {
    // based on what the number said, the img will display it, all using this code
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");

  } else if (player1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");

  } else if (player1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");

  } else if (player1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");

  } else if (player1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");

  } else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");

  }

}

function randomValue2(player2) { // A function to create a random number and display them in img form (player 2)
  // based on what the number said, the img will display it, all using this code

  if (player2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");

  } else if (player2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");

  } else if (player2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");

  } else if (player2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");

  } else if (player2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");

  } else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");

  }

}

var randomValue1Var = Math.floor(Math.random()*6 + 1); // this will create a random number for player 1
var randomValue2Var = Math.floor(Math.random()*6 + 1); // this will create a random number for player 2

var functionOne = randomValue1(randomValue1Var); // this decleares function one
var functionTwo = randomValue2(randomValue2Var); // this declares function two

// this function will check which player wins and depending whether it is true or false, it will display a message
function whoWin(value1, value2) {
  if (value1 > value2) {
    document.querySelector("h1").innerHTML = "🏳️‍🌈 Player 1 WINS!"
  } else if (value1 < value2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS! 🏳️‍🌈"
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
  }
}

// this declares the above function (whoWin)
var functionThree = whoWin(randomValue1Var, randomValue2Var);
