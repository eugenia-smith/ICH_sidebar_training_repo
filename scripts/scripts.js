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

leftButton.addEventListener("click", goLeft);

rightButton.addEventListener("click", goRight);

function goRight() {
  sliderIndex++;
  cards.style.left = `${sliderIndex * -1 * 500}px`;
}

function goLeft() {
  sliderIndex--;
  cards.style.left = `${sliderIndex * -1 * 500}px`;
}

const pagination = document.createElement("div");
pagination.classList.add("pagination");
frame.append(pagination);

images.forEach((elem, ind) => {
  const paginationButton = document.createElement("button");
  pagination.append(paginationButton);

  if (ind === 0) {
    paginationButton.classList.add("active");
  }

  paginationButton.addEventListener("click", () => {
    sliderIndex = ind;
    cards.style.left = `${-1 * ind * 500}px`;

    const allPaginationButtons = pagination.children;
    for (let btn of allPaginationButtons) {
      btn.classList.remove("active");
    }

    paginationButton.classList.add("active");
  });
});

//рефакторинг -- оптимизация циклов; декомпозиция больших функций; goright goLeft;
//весь код обернуть в функцию и вызывать его с передачей элементов, а в идеале -- через класс
