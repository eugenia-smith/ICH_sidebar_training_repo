const root = document.querySelector(".root");

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

const frame = document.createElement("div");
const cards = document.createElement("div");
const triggers = document.createElement("div");

//кнопки прокрутки

const leftButton = document.createElement("button");
leftButton.textContent = "<";
const rightButton = document.createElement("button");
rightButton.textContent = ">";

triggers.append(leftButton, rightButton);
frame.append(cards, triggers);
root.append(frame);

triggers.classList.add("triggers");
cards.classList.add("cards");
frame.classList.add("frame");

images.forEach((elem) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url("${elem}")`;
  cards.append(card);
});

let sliderIndex = 0;

function moveToCard(cardIndex) {
  // снимает активный статус с текущей кнопки
  // ставит активный статус на текущую кнопку
  // отрисовывает переход на карточку
  if (cardIndex >= 0 && cardIndex < images.length) {
    paginationButtons[sliderIndex].classList.remove("active");
    sliderIndex = cardIndex;
    paginationButtons[sliderIndex].classList.add("active");
    cards.style.left = `${-1 * cardIndex * 500}px`;
  }
}

function goRight() {
  moveToCard(sliderIndex + 1);
}

function goLeft() {
  moveToCard(sliderIndex - 1);
}

leftButton.addEventListener("click", goLeft);
rightButton.addEventListener("click", goRight);

// пагинация

const pagination = document.createElement("div");
pagination.classList.add("pagination");
frame.append(pagination);

const paginationButtons = [];

images.forEach((elem, ind) => {
  const paginationButton = document.createElement("button");
  paginationButtons.push(paginationButton);
  pagination.append(paginationButton);

  if (ind === sliderIndex) {
    paginationButton.classList.add("active");
  }

  paginationButton.addEventListener("click", () => {
    moveToCard(ind);
  });
});
