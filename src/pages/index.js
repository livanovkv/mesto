import "../pages/index.css";
import { Card } from "../components/Card";
import { config } from "../utils/configValidation";
import { FormValidator } from "../components/FormValidator";
import { Section } from "../components/Section";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import * as constants from "../utils/constants";
import { PopupWithConfirm } from "../components/PopupWithConfirm";
import { api } from "../components/Api";

const formAddCardValidator = new FormValidator(
  config,
  constants.popupAddCardForm
);
const formEditProfileValidator = new FormValidator(
  config,
  constants.editProfileForm
);
const formEditAvatarValidator = new FormValidator(
  config,
  constants.editAvatarForm
);

const section = new Section(addCard, ".gallery__grid");
const popupWithImage = new PopupWithImage(".popup_image");
const popupAddImage = new PopupWithForm(
  ".popup_add-card",
  handleCardFormSubmit,
  "Добавляем карточку..."
);
const popupEditProfile = new PopupWithForm(
  ".popup_profile",
  handleProfileFormSubmit,
  "Сохраняем..."
);
const popupEditAvatar = new PopupWithForm(
  ".popup_avatar-edit",
  handleEditAvatarFormSubmit,
  "Меняем аватар..."
);
const popupDeleteCard = new PopupWithConfirm(
  ".popup_delete-confirm",
  "Удаляем карточку..."
);

const userInfo = new UserInfo({
  profileNameSelector: ".profile__title",
  profileAboutSelector: ".profile__subtitle",
  profileAvatarSelector: ".profile__avatar-image"
});

let userId;

function openPopupFormProfile() {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditProfileValidator.clearErrorsForm();
  popupEditProfile.open();
}

function openAddPopup() {
  formAddCardValidator.clearErrorsForm();
  popupAddImage.open();
}

function openEditAvatarPopup() {
  formEditAvatarValidator.clearErrorsForm();
  popupEditAvatar.open();
}

function handleEditAvatarFormSubmit({ avatarUrl }) {
  return api.editAvatar(avatarUrl).then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
  });
}

function handleCardFormSubmit(data) {
  const createdSubmit = true;
  return api.addCard(data.cardTitle, data.cardLink).then((res) => {
    addCard(res, createdSubmit);
    deleteLastCard();
  });
}

function handleProfileFormSubmit({ name, about }) {
  return api.editUserInfo(name, about).then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
  });
}

function deleteLastCard() {
  document.querySelector(".card").lastElementChild.remove();
}

function addCard(cardInfo, createdSubmit) {
  section.setItem(createCard(cardInfo), createdSubmit);
}

function createCard(cardInfo) {
  const card = new Card(
    cardInfo,
    constants.cardTemplate,
    () => {
      popupWithImage.open(cardInfo.name, cardInfo.link);
    },
    (id) => {
      popupDeleteCard.open();
      popupDeleteCard.changeSubmitHandler(() => {
        api
          .deleteCard(id)
          .then(() => {
            card.deleteCard();
            popupDeleteCard.close();
            api
              .getCards()
              .then((cardList) => {
                addCard(cardList[cardList.length - 1], false);
              })
              .catch((err) => {
                err.then((res) => {
                  alert(res.message);
                });
              });
          })
          .catch((err) => {
            err.then((res) => {
              alert(res.message);
            });
          })
          .finally(() => {
            popupDeleteCard.renderLoading(true);
          });
      });
    },
    userId,
    (id) => {
      if (card.checkLiked()) {
        api
          .deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            err.then((res) => {
              alert(res.message);
            });
          });
      } else {
        api
          .addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((err) => {
            err.then((res) => {
              alert(res.message);
            });
          });
      }
    }
  );
  const cardItem = card.generateCard();
  return cardItem;
}

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
    userId = userData._id;
    section.rendererItems(cards);
  })
  .catch((err) => {
    err.then((res) => {
      alert(res.message);
    });
  });


/** события на кнопку  */
constants.profileOpenPopupButton.addEventListener(
  "click",
  openPopupFormProfile
);
constants.profileAddButton.addEventListener("click", openAddPopup);
constants.avatarOpenPopupButtonEdit.addEventListener(
  "click",
  openEditAvatarPopup
);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();
formEditAvatarValidator.enableValidation();

popupWithImage.setEventListeners();
popupAddImage.setEventListeners();
popupEditProfile.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditAvatar.setEventListeners();