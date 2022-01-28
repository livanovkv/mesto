
/** Pop-up форма редактирования профиля */

/** задаем константы */

const profileOpenPopupButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup-form');
const popupCloseButton = document.querySelector('.popup-form__button-close');
const editProfileForm = document.querySelector('.popup-form__profile');

const popupName = document.querySelector('.profile__title');
const popupAbout = document.querySelector('.profile__subtitle');
const popupFormInputName = document.querySelector('.popup-form__input_name');
const popupFormInputAbout = document.querySelector('.popup-form__input_about');



function openPopup(event) {
  popupForm.classList.add('popup-form_opened');
  /** подставляем значения в поля при открытии */
  popupFormInputName.value = popupName.textContent;
  popupFormInputAbout.value = popupAbout.textContent;

  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
}

/** убираем модификатор  */

function closePopup() {
  popupForm.classList.remove('popup-form_opened');
}



function getProfileFormValue(event) {
  event.preventDefault();
  popupName.textContent = popupFormInputName.value;
  popupAbout.textContent = popupFormInputAbout.value;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  closePopup();
};


/** события на кнопку  */
profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

/** кнопка "сохранить" */
editProfileForm.addEventListener('submit', getProfileFormValue);



//кнопка добавления в избранное  
//const galleryItemButtonHeart = document.querySelectorAll('.card__choise-button');
//galleryItemButtonHeart.forEach(function (image) {
//  image.addEventListener('click', function (event) {
//    event.target.classList.toggle('card__choise-button_active');
//  });
//});
