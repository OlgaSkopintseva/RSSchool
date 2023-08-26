import { imagesArray } from "./constant.js";

const cards = document.querySelector(".about__cards");
const buttons = document.querySelectorAll(".about__gallery-button");
const arrows = document.querySelectorAll(".about__gallery-arrow");
const leftArrow = document.querySelector(".about__gallery-arrow_left");
const rightArrow = document.querySelector(".about__gallery-arrow_right");
let buttonIndex = 0;

const scrollTo = (number) => {
  cards.scrollTo({
    left: number,
    top: 0,
    behavior: "smooth",
  });
};

const changeButtonColor = (buttonIndex) => {
  buttons.forEach((button, index) => {
    button.classList.remove("about__gallery-button_color-brown");
    if (index === buttonIndex) {
      console.log(button);
      button.classList.add("about__gallery-button_color-brown");
    }
  });
};

const disableArrow = (index, array) => {
  if (index === 0) {
    leftArrow.classList.add("about__gallery-arrow_disable");
    rightArrow.classList.remove("about__gallery-arrow_disable");
    leftArrow.setAttribute("disabled", true);
    rightArrow.removeAttribute("disabled");
  }
  if (index > 0 && index < array.length - 1) {
    leftArrow.classList.remove("about__gallery-arrow_disable");
    rightArrow.classList.remove("about__gallery-arrow_disable");
    leftArrow.removeAttribute("disabled");
    rightArrow.removeAttribute("disabled");
  }
  if (index === array.length - 1) {
    leftArrow.classList.remove("about__gallery-arrow_disable");
    rightArrow.classList.add("about__gallery-arrow_disable");
    rightArrow.setAttribute("disabled", true);
    leftArrow.removeAttribute("disabled");
  }
};

imagesArray.forEach((image) => {
  const cardElem = document
    .querySelector(".about__cards_template")
    .content.querySelector(".about__card")
    .cloneNode(true);

  cards.append(cardElem);
  cardElem.querySelector(".about__card-image").src = image.src;
});

buttons.forEach((button, index, array) => {
  if (index === 0) {
    leftArrow.classList.add("about__gallery-arrow_disable");
  }

  button.addEventListener("click", (event) => {
    buttonIndex = index;
    disableArrow(index, array);
    scrollTo(index * 475);
    changeButtonColor(index);
  });
});

leftArrow.addEventListener("click", (ev) => {
  disableArrow(buttonIndex - 1, buttons);
  scrollTo((buttonIndex - 1) * 475);
  changeButtonColor(buttonIndex - 1);
  buttonIndex--;
});

rightArrow.addEventListener("click", (ev) => {
  disableArrow(buttonIndex + 1, buttons);
  scrollTo((buttonIndex + 1) * 475);
  changeButtonColor(buttonIndex + 1);
  buttonIndex++;
});