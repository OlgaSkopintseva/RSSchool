import { cardsArray } from "./constant.js";

const favoritesCards = document.querySelector(".favorites__cards");

cardsArray.forEach((card) => {
  const cardElement = document
    .querySelector(".favorites__cards_template")
    .content.querySelector(".favorites__card")
    .cloneNode(true);

  favoritesCards.append(cardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.winter[0].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.winter[1].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.winter[2].about;
  cardElement.querySelector(".favorites__card-book").src = card.winter[3].src;
  cardElement.querySelector(".favorites__card-book").alt = card.winter[3].alt;

  const secondCardElement = cardElement.cloneNode(true);

  favoritesCards.append(secondCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.winter[4].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.winter[5].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.winter[6].about;
  cardElement.querySelector(".favorites__card-book").src = card.winter[7].src;
  cardElement.querySelector(".favorites__card-book").alt = card.winter[7].alt;

  const thirdCardElement = cardElement.cloneNode(true);

  favoritesCards.append(thirdCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.winter[8].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.winter[9].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.winter[10].about;
  cardElement.querySelector(".favorites__card-book").src = card.winter[11].src;
  cardElement.querySelector(".favorites__card-book").alt = card.winter[11].alt;

  const fourthCardElement = cardElement.cloneNode(true);

  favoritesCards.append(fourthCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.winter[12].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.winter[13].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.winter[14].about;
  cardElement.querySelector(".favorites__card-book").src = card.winter[15].src;
  cardElement.querySelector(".favorites__card-book").alt = card.winter[15].alt;

  const fifthCardElement = cardElement.cloneNode(true);

  favoritesCards.append(fifthCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.spring[0].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.spring[1].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.spring[2].about;
  cardElement.querySelector(".favorites__card-book").src = card.spring[3].src;
  cardElement.querySelector(".favorites__card-book").alt = card.spring[3].alt;

  const sixthCardElement = cardElement.cloneNode(true);

  favoritesCards.append(sixthCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.spring[0].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.spring[1].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.spring[2].about;
  cardElement.querySelector(".favorites__card-book").src = card.spring[3].src;
  cardElement.querySelector(".favorites__card-book").alt = card.spring[3].alt;

  const seventhCardElement = cardElement.cloneNode(true);

  favoritesCards.append(seventhCardElement);

  cardElement.querySelector(".favorites__card-title").textContent =
    card.spring[8].title;
  //   cardElement.querySelector(".favorites__card-author").textContent =
  //     card.spring[9].author;
  cardElement.querySelector(".favorites__card-about").textContent =
    card.spring[10].about;
  cardElement.querySelector(".favorites__card-book").src = card.spring[11].src;
  cardElement.querySelector(".favorites__card-book").alt = card.spring[11].alt;
});
