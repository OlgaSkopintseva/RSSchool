import { booksArray } from "./constant.js";

const favoritesCards = document.querySelector(".favorites__cards");
const seasonButtons = document.querySelectorAll(".favorites__season");

seasonButtons.forEach((season) => {
  season.addEventListener("click", (event) => {
    if (event.target.id === "favorites__choise_winter") {
      createCards("winter");
    } else if (event.target.id === "favorites__choise_spring") {
      createCards("spring");
    } else if (event.target.id === "favorites__choise_summer") {
      createCards("summer");
    } else if (event.target.id === "favorites__choise_autumn") {
      createCards("autumn");
    }
  });
});

const createCards = (season) => {
  const bookCards = document.querySelectorAll(".favorites__card");

  booksArray.forEach((book) => {
    if (book.season === season) {
      const cardElement = document
        .querySelector(".favorites__cards_template")
        .content.querySelector(".favorites__card")
        .cloneNode(true);

      cardElement.querySelector(".favorites__card-title").textContent =
        book.title;
      cardElement.querySelector(".favorites__card-author").textContent =
        book.author;
      cardElement.querySelector(".favorites__card-about").textContent =
        book.about;
      cardElement.querySelector(".favorites__card-book").src = book.src;
      cardElement.querySelector(".favorites__card-book").alt = book.alt;

      favoritesCards.append(cardElement);
    }
  });

  bookCards.forEach((bookCard) => {
    bookCard.remove();
  });
};

createCards("winter");
