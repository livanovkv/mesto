export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileAboutSelector);

  };

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent
    };
  };

  setUserInfo(title, subtitle) {
    this._profileName.textContent = title;
    this._profileAbout.textContent = subtitle;
  };
};