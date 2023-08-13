const headerMenu = document.querySelector('.header__menu');
const popup = document.querySelector ('.popup');
const popupCloseButton = document.querySelector('.popup__close');

headerMenu.addEventListener('click', () => {
    popup.classList.add('popup_enable')
});

document.addEventListener('click', (event) => {
    if (!popup.contains(event.target) && !headerMenu.contains(event.target)) {
        popup.classList.remove('popup_enable');
    }
});

popupCloseButton.addEventListener('click', () => {
    popup.classList.remove('popup_enable');
  });



