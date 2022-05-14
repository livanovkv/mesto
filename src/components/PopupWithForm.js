import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit, titleButton) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = [...this._form.querySelectorAll(".popup__form-input")];
    this._titleButton = titleButton;
    this._textDefault = this._buttonSubmit.textContent;
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      this.renderLoading(true);
      event.preventDefault();
      this._handleSubmit(this._getInputValues())
        .then(() => this.close())
        .catch((err) => {
          err.then((res) => {
            alert(res.message);
          });
        })
        .finally(() => this.renderLoading(false));
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = this._titleButton;
      this._buttonSubmit.setAttribute("disabled", "true");
    } else {
      this._buttonSubmit.textContent = this._textDefault;
    }
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
}
