import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageZoomTitle = this._popup.querySelector('.popup__image-title');
    this._popupZoomImageSrc = this._popup.querySelector('.popup__image-item');
  };

  open(nameImage, linkImage) {
    this._popupZoomImageSrc.src = linkImage;
    this._popupZoomImageSrc.alt = nameImage;
    this._popupImageZoomTitle.textContent = nameImage;
    super.open();
  };
};