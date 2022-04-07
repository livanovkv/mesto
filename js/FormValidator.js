
export class FormValidator {
  constructor(formList, formActivePopup) {
    this._formActivePopup = formActivePopup;
    this._formSelector = formList.formSelector;
    this._inputSelector = formList.inputSelector;
    this._submitButtonSelector = formList.submitButtonSelector;
    this._inactiveButtonClass = formList.inactiveButtonClass;
    this._inputErrorClass = formList.inputErrorClass;
    this._errorClass = formList.errorClass;
    this._submitButton = this._formActivePopup.querySelector(this._submitButtonSelector);
    this._arrayInputsFormActive = Array.from(this._formActivePopup.querySelectorAll(this._inputSelector));
  }
  
  clearErrorsForm() {
    this._arrayInputsFormActive.forEach(inputItem => {
      inputItem.classList.remove(this._inputErrorClass);
      this._deactivateInputError(inputItem);
      this._checkButtonValidity();
    })
  }

  _deactivateButtonSave() {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  _activationButtonSave() {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  _checkInput() {
    return this._arrayInputsFormActive.some(inputItem => {
      return !inputItem.validity.valid;
    })
  }

  _checkButtonValidity() {
    const validityFormActive = this._checkInput();
    if (!validityFormActive) {
      this._activationButtonSave();
    } else {
      this._deactivateButtonSave();
    }
  }

  _activateInputError(inputItem) {
    const inputErrorText = this._formActivePopup.querySelector(`.${inputItem.id}-error`);
    inputErrorText.textContent = '';
    inputErrorText.classList.add(this._errorClass);
    inputErrorText.textContent = inputItem.validationMessage;
  }

  _deactivateInputError(inputItem) {
    const inputErrorText = this._formActivePopup.querySelector(`.${inputItem.id}-error`);
    inputErrorText.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputItem) {
    if (!inputItem.validity.valid) {
      inputItem.classList.add(this._inputErrorClass);
      this._activateInputError(inputItem);
    } else {
      inputItem.classList.remove(this._inputErrorClass);
      this._deactivateInputError(inputItem);
    }
    this._checkButtonValidity();
  }

  _setEventListeners(inputItem) {
    inputItem.addEventListener('input', () => {
      this._checkInputValidity(inputItem);
    })
  }

  enableValidation() {
    this._arrayInputsFormActive.forEach(inputItem => {
      this._setEventListeners(inputItem);
    })
  }
}