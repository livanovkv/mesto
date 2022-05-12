export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  };

  rendererItems(initialArray) {
    initialArray.forEach((item) => {
      this._renderer(item);
    });
  };

  setItem(card, createdSubmit) {
    createdSubmit
      ? this._container.prepend(card)
      : this._container.append(card)
  };
};