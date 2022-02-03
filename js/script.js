


/** Задаем константы */

/** Profile */
const popupName = document.querySelector('.profile__title');
const popupAbout = document.querySelector('.profile__subtitle');
const profileAddButton = document.querySelector('.profile__add-button');
const profileOpenPopupButton = document.querySelector('.profile__edit-button');

/** Popup */
const popup = document.querySelector('.popup');
const popupCloseButtonAll = document.querySelectorAll('.popup__button-close');

/** Form edit profile */
const editProfileFormOpen = document.querySelector('.popup_profile');
const popupFormInputName = document.querySelector('.popup__form-input_name');
const popupFormInputAbout = document.querySelector('.popup__form-input_about');

/** Form add image card */
const popupAddCardFormOpen = document.querySelector('.popup_add-card');
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
function popupFormProfile() {
  /** подставляем значения в поля при открытии */
  popupFormInputName.value = popupName.textContent;
  popupFormInputAbout.value = popupAbout.textContent;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  openPopup(editProfileFormOpen);
}

function getProfileFormValue(event) {
  event.preventDefault();
  popupName.textContent = popupFormInputName.value;
  popupAbout.textContent = popupFormInputAbout.value;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  closePopup(editProfileFormOpen);
};



/** Pop-up форма добавления картинок */
function popupFormImageAdd() {
  openPopup(popupAddCardFormOpen);
  resetForm();
}

function getAddImageValue(event) {
  event.preventDefault();
  renderCards({ name: popupFormInputTitle.value, link: popupFormInputLink.value });
  closePopup(popupAddCardFormOpen);
  resetForm();
}

/** Сбрасываем форму */
function resetForm() {
  profileAddButton.addEventListener('click', popupAddCardFormOpen);
  popupAddCardFormOpen.addEventListener('submit', popupAddCardFormOpen);
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

/** Pop-up перебор всех нопок "Закрыть" в массиве и определения активного */
popupCloseButtonAll.forEach(PopupButtonClose => PopupButtonClose.addEventListener('click', function () {
  const popupActive = document.querySelector('.popup_opened');
  closePopup(popupActive);
}))

/** Генератор карточек картинок */
function render() {
  initialCards.forEach(renderCards);
}


function renderCards(item) {
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = item.name;
  const cardImage = newCard.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener('click', () => openImagePopup(cardImage));
  newCard.querySelector('.card__delete-button').addEventListener('click', event => event.currentTarget.closest('.card').remove());
  newCard.querySelector('.card__choise-button').addEventListener('click', event => event.target.classList.toggle('card__choise-button_active'));
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
profileOpenPopupButton.addEventListener('click', popupFormProfile);
profileAddButton.addEventListener('click', popupFormImageAdd);

/** кнопка "сохранить" */
editProfileFormOpen.addEventListener('submit', getProfileFormValue);
popupAddCardFormOpen.addEventListener('submit', getAddImageValue);

render();