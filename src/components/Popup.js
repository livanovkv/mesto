export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    formAddCardValidator.deactivateButtonSave();
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };
  /** События на Escape */
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    };
  };

  setEventListeners() {
    this._popup.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__button-close')) {
        this.close();
      };
    });
  };
};