import '../pages/index.css';
import { Card } from '../js/Card.js';
import { config } from '../utils/configValidation.js';
import { FormValidator } from '../js/FormValidator.js';
import { initialCards } from '../utils/InitialCards.js';
import { Section } from '../js/Section.js';
import { PopupWithImage } from '../js/PopupWithImage.js';
import { PopupWithForm } from '../js/PopupWithForm.js';
import { UserInfo } from '../js/UserInfo.js';
import * as constants from '../utils/constants.js';

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
  const { userName, userAbout } = data;
  userInfo.setUserInfo(userName, userAbout);
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
