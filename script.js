let franceButton = document.querySelector("#france__button");
let germanyButton = document.querySelector("#germany__button");
let englandButton = document.querySelector("#england__button");
const cardsWrapper = document.querySelector("#cards__wrapper");

import { CARDS } from "./cards.js";

franceButton.addEventListener("click", () => filterCardsByCountry("france"));
germanyButton.addEventListener("click", () => filterCardsByCountry("germany"));
englandButton.addEventListener("click", () => filterCardsByCountry("england"));

//ШАБЛОН ДЛЯ ОТРИСОВКИ КАРТОЧЕК
function cardsTemplate(card) {
  const { image, author, title, material, price } = card;

  cardsWrapper.innerHTML += `<article class="reproductions__card">
              <img
                class="reproductions__card-image"
                src= ${image}
                alt="амур"
              />
              <p class="reproductions__card-author">${author}</p>
              <p class="reproductions__card-name">${title}</p>
              <p class="reproductions__card-material">${material}</p>
              <p class="reproductions__card-price">${price} р</p>
              <button class="order-button card__button">Заказать</button>
            </article> 
      `;
}

//ФУНКЦИЯ ПЕРВОГО РЕНДЕРА
function firstRender() {
  const firstCards = CARDS.filter((element) => element.country === "france");
  firstCards.forEach((element) => {
    cardsTemplate(element);
  });
}

//ФУКНЦИЯ ДЛЯ ОТРИСОВКИ КАРТОЧЕК ПО НАЖАТИЮ НА СТРАНУ
function filterCardsByCountry(country) {
  //ФИЛЬТРУЕМ ПО СТРАНЕ
  const newCards = CARDS.filter((el) => el.country === country);
  cardsWrapper.innerHTML = "";
  // И ДАЛЕЕ УЖЕ ПО НОВОМУ МАССИВУ РЕНДЕРИМ ТО ЧТО НУЖНО
  newCards.forEach((element) => {
    cardsTemplate(element);
  });
}
//ЗАПУСКАЕМ ПЕРВЫЙ РЕНДЕР
firstRender();
