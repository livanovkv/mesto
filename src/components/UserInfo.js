export class UserInfo {
  constructor({ profileNameSelector, profileAboutSelector, profileAvatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileAboutSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  };

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAbout.textContent
    };
  };

  setUserInfo(title, about, avatar) {
    this._profileName.textContent = title;
    this._profileAbout.textContent = about;
    this._avatar.src = avatar;
  };
};