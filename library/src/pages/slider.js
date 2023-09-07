import { booksArray } from "./constant.js";

const favoritesCards = document.querySelector(".favorites__cards");
const seasonButtons = document.querySelectorAll(".favorites__season");

seasonButtons.forEach((seasonButton) => {
  seasonButton.addEventListener("click", (event) => {
    const currentTarget = event.currentTarget.className;
    favoritesCards.style.opacity = "0";
    favoritesCards.style.visibility = "hidden";
    setTimeout(() => {
      if (currentTarget === "favorites__season favorites__season_winter") {
        createCards("winter");
      } else if (
        currentTarget === "favorites__season favorites__season_spring"
      ) {
        createCards("spring");
      } else if (
        currentTarget === "favorites__season favorites__season_summer"
      ) {
        createCards("summer");
      } else if (
        currentTarget === "favorites__season favorites__season_autumn"
      ) {
        createCards("autumn");
      }
    }, 300);
  });
});

export function openPopupBuyCard(favoritesCards) {
  if (localStorage.getItem("loginForm")) {
    const favoritesButtonsBuy = favoritesCards.querySelectorAll(
      ".favorites__card-button"
    );

    favoritesButtonsBuy.forEach((button) => {
      button.addEventListener("click", () => {
        const popupBuyCard = document.querySelector(".popup__buy-card");
        const popupLogin = document.querySelector(".popup_login");
        popupBuyCard.classList.add("popup_enable");
        popupLogin.classList.remove("popup_enable");
      });
    });
  } else {
    const favoritesButtonsBuy = favoritesCards.querySelectorAll(
      ".favorites__card-button"
    );

    favoritesButtonsBuy.forEach((button) => {
      button.addEventListener("click", () => {
        const popupLogin = document.querySelector(".popup_login");
        const popupBuyCard = document.querySelector(".popup__buy-card");
        popupLogin.classList.add("popup_enable");
        popupBuyCard.classList.remove("popup_enable");
      });
    });
  }
}

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

      openPopupBuyCard(favoritesCards);
    }
  });

  bookCards.forEach((bookCard) => {
    bookCard.remove();
  });

  favoritesCards.style.opacity = "1";
  favoritesCards.style.visibility = "visible";
};

createCards("winter");

const radioButtons = document.querySelectorAll(".favorites__season-radio");
const seasonTitles = document.querySelectorAll(".favorites__season-title");
let lastCheckedTitle = null;

radioButtons.forEach((radio, index) => {
  if (radio.checked) {
    seasonTitles[index].classList.add("favorites__season-title_weight-700");
    lastCheckedTitle = seasonTitles[index];
  }

  radio.addEventListener("change", () => {
    if (radio.checked) {
      if (lastCheckedTitle)
        lastCheckedTitle.classList.remove("favorites__season-title_weight-700");
      seasonTitles[index].classList.add("favorites__season-title_weight-700");
      lastCheckedTitle = seasonTitles[index];
    }
  });
});
