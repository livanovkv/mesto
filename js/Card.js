import { openImagePopup } from './index.js';

export class Card {
  constructor(cardInfo, cardTemplate) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const itemCard = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return itemCard;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._card;
  }

  _setEventListeners() {
    this._card.querySelector('.card__delete-button').addEventListener('click', event => {
      event.currentTarget.closest('.card').remove()
    });
    
    this._card.querySelector('.card__choise-button').addEventListener('click', event => {
      event.target.classList.toggle('card__choise-button_active')
    });
    this._cardImage.addEventListener('click', () => {
      openImagePopup(this._link, this._name);
    })
  }
}