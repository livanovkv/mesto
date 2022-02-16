/** Определяем активный popup и заносим данные в объекты*/
function activePopupContent(popup) {
  const formList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button-save',
    inactiveButtonClass: '.popup__form-button-save_disabled',
    inputErrorClass: '.popup__form-input_error',
    errorClass: '.popup__input-error_visible'
  };

  const inputList = popup.querySelectorAll('input');
  inputList.forEach((inputItem) => {
    if (inputItem.value.length === 0) {
      deactivateButtonSave(formList, inputItem)
    };
  });
};


/** События с валидацией полей ввода*/

function getValidationMessage(inputItem) {
  return inputItem.validationMessage
};

function activateInputError(formList, inputItem) {
  inputItem.classList.add(formList['inputErrorClass'])
}

function deactivateInputError(formList, inputItem) {
  inputItem.classList.remove(formList['inputErrorClass'])
}

function activateErrorText(formList, inputItem) {
  const form = inputItem.closest(formList['formSelector']);
  const inputErrorText = form.querySelector(`.${inputItem.id}-error`);
  inputErrorText.classList.add(formList['errorClass']);
  inputErrorText.textContent = getValidationMessage(inputItem);
}

function deactivateErrorText(formList, inputItem) {
  const form = inputItem.closest(formList['formSelector']);
  const inputErrorText = form.querySelector(`.${inputItem.id}-error`);
  inputErrorText.classList.remove(formList['errorClass']);
}

/** События с валидацией кнопки*/
function checkInput(formList, inputItem) {
  const form = inputItem.closest(formList['formSelector']);
  const inputsFormActive = Array.from(form.querySelectorAll(formList['inputSelector']));
  return inputsFormActive.some((inputItem) => { return !inputItem.validity.valid });
}

function activateButtonSave(formList, inputItem) {
  const form = inputItem.closest(formList['formSelector']);
  const saveButton = form.querySelector(formList['submitButtonSelector']);
  saveButton.removeAttribute('disabled');
  saveButton.classList.remove(formList['inactiveButtonClass']);
}

function deactivateButtonSave(formList, inputItem) {
  const form = inputItem.closest(formList['formSelector']);
  const saveButton = form.querySelector(formList['submitButtonSelector']);
  saveButton.setAttribute('disabled', true);
  saveButton.classList.add(formList['inactiveButtonClass']);
}

/** Валидация и вывод */
function checkButtonValidity(formList, inputItem) {
  const validityForm = checkInput(formList, inputItem);
  if (!validityForm) {
    activateButtonSave(formList, inputItem);
  } else {
    deactivateButtonSave(formList, inputItem);
  }
}

function checkInputValidity(formList, inputItem) {
  if (!inputItem.validity.valid) {
    activateInputError(formList, inputItem);
    activateErrorText(formList, inputItem);
  } else {
    deactivateInputError(formList, inputItem);
    deactivateErrorText(formList, inputItem);
  }
  checkButtonValidity(formList, inputItem);
}

function enableValidation(formList) {
  const arrayForms = Array.from(document.querySelectorAll(formList['formSelector']));
  arrayForms.forEach(form => {
    const arrayInputsForm = Array.from(form.querySelectorAll(formList['inputSelector']));
    arrayInputsForm.forEach(inputItem => {
      inputItem.addEventListener('input', () => checkInputValidity(formList, inputItem));
    })
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__form-button-save',
  inactiveButtonClass: 'popup__form-button-save_disabled',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__input-error_visible'
}); 