


/** Задаем константы */

/** Profile */
const popupName = document.querySelector('.profile__title');
const popupAbout = document.querySelector('.profile__subtitle');
const profileAddButton = document.querySelector('.profile__add-button');
const profileOpenPopupButton = document.querySelector('.profile__edit-button');

/** Popup */
const popupCloseButtonsAll = document.querySelectorAll('.popup__button-close');

/** Form edit profile */
const editProfileForm = document.querySelector('.popup_profile');
const popupFormInputName = document.querySelector('.popup__form-input_name');
const popupFormInputAbout = document.querySelector('.popup__form-input_about');

/** Form add image card */
const popupAddCardForm = document.querySelector('.popup_add-card');
const popupFormInputTitle = document.querySelector('.popup__form-input_title');
const popupFormInputLink = document.querySelector('.popup__form-input_link');

/** Card */
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.gallery__grid');

/** Popup image zoom */
const popupImageZoom = document.querySelector('.popup_image');
const popupImageZoomTitle = popupImageZoom.querySelector('.popup__image-title');
const popupZoomImageSrc = popupImageZoom.querySelector('.popup__image-item');

/** Массив с фото */

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/** Задаем функции */

/** Pop-up */
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/** Pop-up форма редактирования профиля */
function openPopupFormProfile() {
  /** подставляем значения в поля при открытии */
  popupFormInputName.value = popupName.textContent;
  popupFormInputAbout.value = popupAbout.textContent;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  openPopup(editProfileForm);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  popupName.textContent = popupFormInputName.value;
  popupAbout.textContent = popupFormInputAbout.value;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  closePopup(editProfileForm);
};



/** Pop-up форма добавления картинок */
function openPopupFormImageAdd() {
  openPopup(popupAddCardForm);
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  renderCards({ name: popupFormInputTitle.value, link: popupFormInputLink.value });
  closePopup(popupAddCardForm);
  resetForm();
}

/** Сбрасываем форму */
function resetForm() {
  popupFormInputTitle.value = '';
  popupFormInputLink.value = '';
}

/** Pop-up увеличение фото */
function openImagePopup(cardImage) {
  popupZoomImageSrc.src = cardImage.src;
  popupZoomImageSrc.alt = cardImage.alt;
  popupImageZoomTitle.textContent = cardImage.alt;
  openPopup(popupImageZoom);
}

/** Pop-up перебор всех нопок "Закрыть" в массиве и определения активного 
popupCloseButtonsAll.forEach(PopupButtonClose => PopupButtonClose.addEventListener('click', function () {
  const popupActive = document.querySelector('.popup_opened');
  closePopup(popupActive);
}))*/

popupCloseButtonsAll.forEach(button => {
  const popup = button.closest('.popup')
  button.addEventListener('click', function () {
    closePopup(popup);
  })
})



/** Генератор карточек картинок */
function render() {
  initialCards.forEach(renderCards);
}

function createCard(item) {
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  cardItem.querySelector('.card__title').textContent = item.name;
  const cardImage = cardItem.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener('click', () => openImagePopup(cardImage));
  cardItem.querySelector('.card__delete-button').addEventListener('click', event => cardItem.remove());
  cardItem.querySelector('.card__choise-button').addEventListener('click', event => event.target.classList.toggle('card__choise-button_active'));
  return cardItem;
}

function renderCards(item) {
  const newCard = createCard(item);
  cardList.prepend(newCard);
}

/**кнопка добавления в избранное  
const galleryItemButtonHeart = document.querySelectorAll('.card__choise-button');
galleryItemButtonHeart.forEach(function (image) {
  image.addEventListener('click', function (event) {
    event.target.classList.toggle('card__choise-button_active');
  });
});*/

/** события на кнопку  */
profileOpenPopupButton.addEventListener('click', openPopupFormProfile);
profileAddButton.addEventListener('click', openPopupFormImageAdd);

/** кнопка "сохранить" */
editProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleCardFormSubmit);

render();