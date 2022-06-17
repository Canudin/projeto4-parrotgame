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
  const table = document.querySelector(".table");
  table.innerHTML = "";
  cards = prompt("Qual o número de cartas que você quer jogar?");

  while (cards % 2 !== 0 || 4 > cards || cards > 14) {
    alert("Número de cartas inválido! Por favor insira um número par entre 4 e 14.");
    cards = prompt("Qual o número de cartas que você quer jogar?");
  }

  while (m < cards) {
    table.innerHTML += `
        <div class="card" onclick="turn(this)">
        <img src="./img/parrot.png" />
        </div>`;
    m++;
  }

  const loop = cards / 2;
  birdArray.sort(random);
  while (n < loop) {
    cardArray.push(`${birdArray[n]}`);
    cardArray.push(`${birdArray[n]}`);
    n++;
    console.log(cardArray);
  }
  cardArray.sort(random);
}

function turn(element) {
  let m = 0;
  while (m < cards) {
    element.innerHTML = `
    <div class="turned_card">
    <img src="${cardArray[m]}" />
    </div>`;
    m++;
  }
}
