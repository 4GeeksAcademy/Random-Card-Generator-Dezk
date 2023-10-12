/* eslint-disable */
import "bootstrap";
import "./style.css";

const cardNumber = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cardSymbol = ["♥", "♦️", "♣", "♠"];

function randomNumber(parameterNumber) {
  let azar = Math.floor(Math.random() * parameterNumber.length);
  let elementNumber = document.getElementById("numero");
  elementNumber.innerHTML = parameterNumber[azar];
  return cardNumber[azar];
}

function randomSymbol(parameterSymbol) {
  let azar = Math.floor(Math.random() * parameterSymbol.length);
  let elementSymbol = document.getElementsByClassName("simbolo");

  for (let i = 0; i < elementSymbol.length; i++) {
    elementSymbol[i].innerHTML = parameterSymbol[azar];
    if (parameterSymbol[azar] === "♥" || parameterSymbol[azar] === "♦️") {
      elementSymbol[i].classList.add("red");
    }
  }

  return cardSymbol[azar];
}

window.onload = function() {
  randomNumber(cardNumber);
  randomSymbol(cardSymbol);
};
