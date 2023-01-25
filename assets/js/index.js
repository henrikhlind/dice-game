const header = document.querySelector("h1");

function roll() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector(".img1")
    .setAttribute("src", "./assets/img/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "./assets/img/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    header.innerHTML = "🥇Player 1 Wins";
  } else if (randomNumber1 == randomNumber2) {
    header.innerHTML = "Draw🏳️";
  } else if (randomNumber1 < randomNumber2) {
    header.innerHTML = "Player 2 Wins🥇";
  }
}

window.addEventListener("click", function (e) {
  roll();
});

window.addEventListener("touchend", function (e) {
  roll();
});
