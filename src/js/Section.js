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

  setItem(item, createdSubmit) {
    createdSubmit
      ? this._container.prepend(item)
      : this._container.append(item)
  };
};