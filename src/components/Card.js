export class Card {
  constructor(cardInfo, cardTemplate, handleImageClick, handleDeleteClick, userId, handleLikeClick) {
    this._name = cardInfo.name;
    this._link = cardInfo.link;
    this._likes = cardInfo.likes;
    this._id = cardInfo._id;
    this._userId = userId;
    this._ownerId = cardInfo.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
    this._deleteButton = this._card.querySelector('.card__delete-button');
    this._cardImage = this._card.querySelector('.card__image');
    this._likeButton = this._card.querySelector('.card__choise-button');
    this._likeCountCard = this._card.querySelector('.card__number-likes');
    this._setEventListeners();
    this._card.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.setLikes(this._likes);
    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    };
    return this._card;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    });
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._cardImage.addEventListener('click', () => this._handleImageClick());
  };

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _addLike() {
    this._likeButton.classList.add('card__choise-button_active');
  };

  _removeLike() {
    this._likeButton.classList.remove('card__choise-button_active');
  };

  checkLiked() {
    return this._likes.find(user => user._id === this._userId);
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeCountCard.textContent = this._likes.length;
    if (this.checkLiked()) {
      this._addLike()
    } else {
      this._removeLike();
    }
  }
};