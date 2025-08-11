function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function winner() {
  var player1Num = rollDice();
  var player2Num = rollDice();

  document.querySelector(".img1").src = `../DOM_Challenge/images/dice${player1Num}.png`;
  document.querySelector(".img2").src = `../DOM_Challenge/images/dice${player2Num}.png`;

  if (player1Num > player2Num) {
    document.querySelector("h1").innerHTML = "Winner is Player1!";
  } else if (player2Num > player1Num) {
    document.querySelector("h1").innerHTML = "Winner is Player2!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
