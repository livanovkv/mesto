import '../pages/index.css';
import { Card } from './Card.js';
import { config } from './configValidation.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './InitialCards.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import * as constants from './constants.js';

const formAddCardValidator = new FormValidator(config, constants.formAddCard);
const formEditProfileValidator = new FormValidator(config, constants.formEditProfile);

const section = new Section(renderCards, '.gallery__grid');
const popupWithImage = new PopupWithImage('.popup_image');
const popupAddImage = new PopupWithForm('.popup_add-card', handleCardFormSubmit);
const popupEditProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit);

const userInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileAboutSelector: '.profile__subtitle'
});

function openPopupFormProfile() {
  const { name, about } = userInfo.getUserInfo();
  constants.popupFormInputName.value = name;
  constants.popupFormInputAbout.value = about;
  formEditProfileValidator.clearErrorsForm();
  popupEditProfile.open();
};

function openAddPopup() {
  constants.formAddCard.reset()
  formAddCardValidator.clearErrorsForm();
  popupAddImage.open();
};


function handleCardFormSubmit(data) {
  section.setItem(createCard({
    name: data.cardTitle,
    link: data.cardLink
  }));
  formAddCardValidator.deactivateButtonSave();
  popupAddImage.close();
};

function handleProfileFormSubmit(data) {
  const { title, subtitle } = data;
  userInfo.setUserInfo(title, subtitle);
  popupEditProfile.close();
};

function renderCards(cardInfo) {
  section.setItem(createCard(cardInfo));
}

function createCard(cardInfo) {
  const card = new Card(cardInfo, constants.cardTemplate, () => {
    popupWithImage.open(cardInfo.name, cardInfo.link);
  });
  const cardItem = card.generateCard();
  return cardItem;
}

/** события на кнопку  */
constants.profileOpenPopupButton.addEventListener('click', openPopupFormProfile);
constants.profileAddButton.addEventListener('click', openAddPopup);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

section.rendererItems(initialCards);
popupWithImage.setEventListeners();
popupAddImage.setEventListeners();
popupEditProfile.setEventListeners();
