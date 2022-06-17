const birdArray = [
  "./img/goldenparrot.webp",
  "./img/parrot2.svg",
  "./img/parrot3.svg",
  "./img/parrot4.svg",
  "./img/parrot5.svg",
  "./img/parrot6.svg",
  "./img/quack.svg",
];
const idArray = [0, 1, 2, 3, 4, 5, 6];
const cardArray = [];
let cards = 0;

function random() {
  return Math.random() - 0.5;
}

function numberCards() {
  let n = 0;
  let m = 0;
  let o = 0;

  //Card Number Request
  const table = document.querySelector(".table");
  table.innerHTML = "";
  cards = prompt("Qual o número de cartas que você quer jogar?");

  while (cards % 2 !== 0 || 4 > cards || cards > 14) {
    alert("Número de cartas inválido! Por favor insira um número par entre 4 e 14.");
    cards = prompt("Qual o número de cartas que você quer jogar?");
  }

  //Card Array Generation
  const loop = cards / 2;
  while (n < loop) {
    cardArray.push(`${idArray[n]}`);
    cardArray.push(`${idArray[n]}`);
    n++;
  }
  cardArray.sort(random);
  console.log(cardArray);

  while (o < cards) {
    table.innerHTML += `
        <div class="card"
        <div class="front-face face" onclick="turn(this)">
        <img src="./img/parrot.png" />
        </div>
        <div class="back-face face">
        <img src="${birdArray[cardArray[o]]}" />
        </div>
        </div>`;
    o++;
  }

  /*
  //Front Generation
  while (o < cards) {
    table.innerHTML += `
        <div class="card" onclick="turn(this)">
        <img src="./img/parrot.png" />
        </div>`;
    m++;
  }

  //Back Generation
  while (o < cards) {
    table.innerHTML += `
    <div class="card" class="turned_card">
    <img src="${birdArray[cardArray[o]]}" />
    </div>`;
    o++;
  }
  */
}

function turn(element) {}
