var imagesArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
"images/dice4.png", "images/dice5.png", "images/dice6.png"]

playerOneResult = Math.floor(Math.random() * 6) // 0 - 5 (Array's change)
playerTwoResult = Math.floor(Math.random() * 6) // 0 - 5


for (var i = 0; i <= (imagesArray.length - 1); i++) {
    // Loop for each posibility and change src to the according image
    if ((playerOneResult) === i) {
      document.querySelectorAll(".dice img")[0].src = imagesArray[i]
    }
    if ((playerTwoResult) === i) {
      document.querySelectorAll(".dice img")[1].src = imagesArray[i]
    }
  }

// Who wins?
if (playerOneResult > playerTwoResult) {
  document.querySelector("div.container h1").textContent = "Player 1 Wins!"
} // Player One wins

else if (playerOneResult < playerTwoResult) {
  document.querySelector("div.container h1").textContent = "Player 2 Wins!"
} // Player Two wins

else if (playerOneResult === playerTwoResult) {
  document.querySelector("div.container h1").textContent = "Draw!"
} // Draw
