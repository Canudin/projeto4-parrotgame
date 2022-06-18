const birdArray = [
  "./img/goldenparrot.webp",
  "./img/parrot2.svg",
  "./img/parrot3.svg",
  "./img/parrot6.svg",
  "./img/quack.svg",
  "./img/cloudcorn.png",
  "./img/unicorn.png",
];
const idArray = [0, 1, 2, 3, 4, 5, 6];
let cardArray = [];
let cards = 0;
const table = document.querySelector(".table");
let clicks = document.querySelectorAll(".clicked");
let card1;
let card2;
let moves = 0;
let score = 0;
let time = 0;

function random() {
  return Math.random() - 0.5;
}

function numberCards() {
  let n = 0;
  let m = 0;
  cardArray = [];

  //Card Number Request
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

  while (m < cards) {
    table.innerHTML += `
        <div class="card" onclick="turned(this)">
            <div class="front-face face pair${cardArray[m]}">
                <img src="./img/parrot.png" />
            </div>
            <div class="back-face face">
                <img src="${birdArray[cardArray[m]]}" />
            </div>
        </div>`;
    m++;
  }
}

function turned(element) {
  const back = element.querySelector(".back-face");
  const front = element.querySelector(".front-face");
  element.classList.add("clicked");
  front.classList.add("turnedfront");
  back.classList.add("turnedback");
  clicks = document.querySelectorAll(".clicked");
  if (clicks.length == 2) {
    card1 = clicks[0].querySelector(".front-face");
    card2 = clicks[1].querySelector(".front-face");
    card1class = card1.classList[2];
    card2class = card2.classList[2];
    if (card1class === card2class) {
      card1.removeAttribute("onclick");
      card2.removeAttribute("onclick");
      score++;
      document.querySelector(".score").innerHTML = `Score: ${score}/${cards / 2}`;
      clicks[0].classList.remove("clicked");
      clicks[1].classList.remove("clicked");
    }
    if (card1class !== card2class) {
      setTimeout(unturn, 1000);
    }
    moves++;
    document.querySelector(".moves").innerHTML = `Moves: ${moves}`;
  }
}

function unturn() {
  const element = document.querySelectorAll(".clicked");
  for (let n = 0; n < element.length; n++) {
    const back = element[n].querySelector(".back-face");
    const front = element[n].querySelector(".front-face");
    element[n].classList.remove("clicked");
    front.classList.remove("turnedfront");
    back.classList.remove("turnedback");
  }
}
