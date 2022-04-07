import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './InitialCards.js';

/** Задаем константы */
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'popup__form-button-save_disabled',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__input-error_visible'
}

/** Profile */
const popupName = document.querySelector('.profile__title');
const popupAbout = document.querySelector('.profile__subtitle');
const profileAddButton = document.querySelector('.profile__add-button');
const profileOpenPopupButton = document.querySelector('.profile__edit-button');

/** Form edit profile */
const editProfileForm = document.querySelector('.popup_profile');
const popupFormInputName = document.querySelector('.popup__form-input_name');
const popupFormInputAbout = document.querySelector('.popup__form-input_about');
const formEditProfile = editProfileForm.querySelector('.popup__form');

/** Form add image card */
const popupAddCardForm = document.querySelector('.popup_add-card');
const popupFormInputTitle = document.querySelector('.popup__form-input_title');
const popupFormInputLink = document.querySelector('.popup__form-input_link');
const formAddCard = popupAddCardForm.querySelector('.popup__form');

/** Card */
const cardTemplate = '#card-template';
const cardList = document.querySelector('.gallery__grid');

/** Popup image zoom */
const popupImageZoom = document.querySelector('.popup_image');
const popupImageZoomTitle = popupImageZoom.querySelector('.popup__image-title');
const popupZoomImageSrc = popupImageZoom.querySelector('.popup__image-item');

const popups = document.querySelectorAll('.popup');
const formAddCardValidator = new FormValidator(config, formAddCard);
const formEditProfileValidator = new FormValidator(config, formEditProfile);


/** Pop-up */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEventEscape();
}

export function openImagePopup(linkImage, nameImage) {
  popupZoomImageSrc.src = linkImage;
  popupZoomImageSrc.alt = nameImage;
  popupZoomImageSrc.textContent = nameImage;
  openPopup(popupImageZoom);
}

function openPopupFormProfile() {
  popupFormInputName.value = popupName.textContent;
  popupFormInputAbout.value = popupAbout.textContent;
  formEditProfileValidator.clearErrorsForm();
  openPopup(editProfileForm);
}

function openAddPopup() {
  formAddCard.reset();
  formAddCardValidator.clearErrorsForm();
  openPopup(popupAddCardForm);
}

function handleCardFormSubmit(event) {
  event.preventDefault();
  renderCards({ name: popupFormInputTitle.value, link: popupFormInputLink.value });
  closePopup(popupAddCardForm);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  popupName.textContent = popupFormInputName.value;
  popupAbout.textContent = popupFormInputAbout.value;
  closePopup(editProfileForm);
};


function renderCards(cardInfo) {
  cardList.prepend(createCard(cardInfo));
}

function createCard(cardInfo) {
  const card = new Card(cardInfo, cardTemplate);
  const сardItem = card.generateCard();
  return сardItem;
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  removeEventEscape();
}

/** События на Escape */
function handleEscKey(event) {
  if (event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

function closePopupEventEscape() {
  document.addEventListener('keydown', handleEscKey);
}

function removeEventEscape() {
  document.removeEventListener('keydown', handleEscKey);
}

popups.forEach(popup => {
  popup.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup_opened') | event.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  })
})



/** события на кнопку  */
profileOpenPopupButton.addEventListener('click', openPopupFormProfile);
profileAddButton.addEventListener('click', openAddPopup);

/** кнопка "сохранить" */
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handleCardFormSubmit);

initialCards.forEach(cardInfo => renderCards(cardInfo));

formAddCardValidator.enableValidation();

formEditProfileValidator.enableValidation();
