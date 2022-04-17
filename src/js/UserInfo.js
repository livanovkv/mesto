export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._nameElement = document.querySelector(profileNameSelector);
    this._aboutElement = document.querySelector(profileAboutSelector);
  };

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent
    };
  };

  setUserInfo(title, about) {
    this._nameElement.textContent = title;
    this._aboutElement.textContent = about;
  };
};