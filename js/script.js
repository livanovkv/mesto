
//кнопка добавления в избранное  
const galleryItemButtonHeart = document.querySelectorAll('.gallery__choise-button');
galleryItemButtonHeart.forEach(function(image) {
  image.addEventListener('click', function(event) {
    event.target.classList.toggle('gallery__choise-button_active');
  });
});

//Pop-up форма редактирования профиля 

//задаем константы

const profileOpenPopupButton = document.querySelector('.profile__edit-button');
const popupForm = document.querySelector('.popup-form');
const popupCloseButton = document.querySelector('.popup-form__button-close');
const editProfileForm = document.querySelector('.popup-form__profile');

//поля input------------------------------------------------------------------ 

const popupName = document.querySelector('.profile__title');
const popupAbout = document.querySelector('.profile__subtitle');
const popupFormInputName = editProfileForm.profile_name;
const popupFormInputAbout = editProfileForm.profile_about;
const popupFormInputNamePlaceholder = popupFormInputName.placeholder;
const popupFormInputAboutPlaceholder = popupFormInputAbout.placeholder;
//Кнопка "Сохранить"
const popapFormSave = document.querySelector('.popup-form__button-save');

//навешиваем модификатор-------------------------------------------------------
function openPopup(event) {
  event.preventDefault();
  popupForm.classList.add('popup-form_opened');
  //подставляем значения в поля при открытии
  popupFormInputName.value = popupName.textContent;
  popupFormInputAbout.value = popupAbout.textContent;
  //добаляем события фокус, если удалили значения и оставили поле пустым, также зачищаем placeholder при фокусе поля
  popupFormInputName.addEventListener("focus", function(c) {
    popupFormInputName.placeholder = "";
  });

  popupFormInputName.addEventListener("blur", function(c) {
    popupFormInputName.placeholder = popupFormInputNamePlaceholder;
  });
  
  popupFormInputAbout.addEventListener("focus", function(c) {
    popupFormInputAbout.placeholder = "";
  });

  popupFormInputAbout.addEventListener("blur", function(c) {
    popupFormInputAbout.placeholder = popupFormInputAboutPlaceholder;
  });

  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  
}

//убираем модификатор----------------------------------------------------------

function closePopup() {
  popupForm.classList.remove('popup-form_opened');
}

//события на кнопку------------------------------------------------------------
profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function getProfileFormValue (event) {
  event.preventDefault();
  popupName.textContent = popupFormInputName.value;
  popupAbout.textContent = popupFormInputAbout.value;
  //console.log(popupFormInputName.value);
  //console.log(popupFormInputAbout.value);
  closePopup();
};


//кнопка "сохранить"-----------------------------------------


editProfileForm.addEventListener('submit', getProfileFormValue);