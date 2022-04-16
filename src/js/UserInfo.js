export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileSubtitle = document.querySelector(profileAboutSelector);

  };

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileSubtitle.textContent
    };
  };

  setUserInfo(name, about) {
    this._profileName.textContent = name;
    this._profileSubtitle.textContent = about;
  };
};