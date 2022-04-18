export class Card {
  constructor(cardInfo, cardTemplate, handleImageClick) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._id = cardInfo._id;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardItem;
  }


  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._likeButton = this._card.querySelector('.card__choise-button');
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.card__delete-button').addEventListener('click', event => {
      this._card.remove();
      this._element = null;
    });

    this._likeButton.addEventListener('click', event => {
      event.target.classList.toggle('card__choise-button_active')
    });
    this._cardImage.addEventListener('click', () => this._handleImageClick());
  }
}