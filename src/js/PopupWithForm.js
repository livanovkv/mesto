import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSabmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._buttonSubmit = this._form.querySelector('.popup__form-button-save');
    this._inputs = [...this._form.querySelectorAll('.popup__form-input')];
  };

  close() {
    super.close();
    this._form.reset();
  };

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  };

  changeSubmitHandler(newSubmitHandler) {
    this._handleSubmit = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      this.renderLoading(true);
      event.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  };
};