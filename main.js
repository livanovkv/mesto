(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=function(){function e(t,n,r,o,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._userId=i,this._ownerId=t.owner._id,this._cardTemplate=n,this._handleImageClick=r,this._handleDeleteClick=o,this._handleLikeClick=a}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._deleteButton=this._card.querySelector(".card__delete-button"),this._cardImage=this._card.querySelector(".card__image"),this._likeButton=this._card.querySelector(".card__choise-button"),this._likeCountCard=this._card.querySelector(".card__number-likes"),this._setEventListeners(),this._card.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._card}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){t._handleDeleteClick(t._id)})),this._likeButton.addEventListener("click",(function(){return t._handleLikeClick(t._id)})),this._cardImage.addEventListener("click",(function(){return t._handleImageClick()}))}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_addLike",value:function(){this._likeButton.classList.add("card__choise-button_active")}},{key:"_removeLike",value:function(){this._likeButton.classList.remove("card__choise-button_active")}},{key:"checkLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"setLikes",value:function(t){this._likes=t,this._likeCountCard.textContent=this._likes.length,this.checkLiked()?this._addLike():this._removeLike()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),n={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-button-save",inactiveButtonClass:"popup__form-button-save_disabled",inputErrorClass:"popup__form-input_error",errorClass:"popup__input-error_visible"};function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formActivePopup=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._submitButton=this._formActivePopup.querySelector(this._submitButtonSelector),this._arrayInputsFormActive=Array.from(this._formActivePopup.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"clearErrorsForm",value:function(){var t=this;this._arrayInputsFormActive.forEach((function(e){e.classList.remove(t._inputErrorClass),t._deactivateInputError(e),t._checkButtonValidity()}))}},{key:"deactivateButtonSave",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_activationButtonSave",value:function(){this._submitButton.removeAttribute("disabled"),this._submitButton.classList.remove(this._inactiveButtonClass)}},{key:"_checkInput",value:function(){return this._arrayInputsFormActive.some((function(t){return!t.validity.valid}))}},{key:"_checkButtonValidity",value:function(){this._checkInput()?this.deactivateButtonSave():this._activationButtonSave()}},{key:"_activateInputError",value:function(t){var e=this._formActivePopup.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.add(this._errorClass),e.textContent=t.validationMessage}},{key:"_deactivateInputError",value:function(t){this._formActivePopup.querySelector(".".concat(t.id,"-error")).classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?(t.classList.remove(this._inputErrorClass),this._deactivateInputError(t)):(t.classList.add(this._inputErrorClass),this._activateInputError(t)),this._checkButtonValidity()}},{key:"_setEventListeners",value:function(t){var e=this;this._formActivePopup.addEventListener("submit",(function(t){t.preventDefault()})),t.addEventListener("input",(function(){e._checkInputValidity(t)}))}},{key:"enableValidation",value:function(){var t=this;this._arrayInputsFormActive.forEach((function(e){t._setEventListeners(e)}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"rendererItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"setItem",value:function(t,e){e?this._container.prepend(t):this._container.append(t)}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._buttonSubmit=this._popup.querySelector(".popup__form-button-save")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__button-close"))&&t.close()}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=p(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._popupImageZoomTitle=e._popup.querySelector(".popup__image-title"),e._popupZoomImageSrc=e._popup.querySelector(".popup__image-item"),e}return e=a,(n=[{key:"open",value:function(t,e){this._opupZoomImageSrc.src="",this._opupZoomImageSrc.alt="",this._popupImageZoomTitle.textContent="",this._popupZoomImageSrc.src=e,this._popupZoomImageSrc.alt=t,this._popupImageZoomTitle.textContent=t,f(y(a.prototype),"open",this).call(this)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function S(t,e){return S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},S(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&S(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(t,e,n){var r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleSubmit=e,r._form=r._popup.querySelector(".popup__form"),r._inputs=function(t){if(Array.isArray(t))return b(t)}(o=r._form.querySelectorAll(".popup__form-input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r._titleButton=n,r._textDefault=r._buttonSubmit.textContent,r}return e=a,(n=[{key:"close",value:function(){k(E(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;k(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t.renderLoading(!0),e.preventDefault(),t._handleSubmit(t._getInputValues()).then((function(){return t.close()})).catch((function(t){t.then((function(t){alert(t.message)}))})).finally((function(){return t.renderLoading(!1)}))}))}},{key:"renderLoading",value:function(t){t?(this._buttonSubmit.textContent=this._titleButton,this._buttonSubmit.setAttribute("disabled","true")):this._buttonSubmit.textContent=this._textDefault}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e){var n=e.profileNameSelector,r=e.profileAboutSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileAbout=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileAbout.textContent}}},{key:"setUserInfo",value:function(t,e,n){this._profileName.textContent=t,this._profileAbout.textContent=e,this._avatar.src=n}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),j=document.querySelector(".profile__edit-button"),I=document.querySelector(".popup__form_profile-form"),P=document.querySelector(".profile__circle"),A=document.querySelector(".popup__form_avatar-edit-form"),B=document.querySelector(".profile__add-button"),R=document.querySelector(".popup__form_add-card-form");function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=U(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function U(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}function D(t,e){return D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},D(t,e)}function V(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return V(this,t)});function a(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,t))._handleSubmit=n,r._titleButton=e,r._textDefault=r._buttonSubmit.textContent,r}return e=a,(n=[{key:"open",value:function(){x(N(a.prototype),"open",this).call(this),this._buttonSubmit.disabled&&this._buttonSubmit.removeAttribute("disabled")}},{key:"changeSubmitHandler",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;x(N(a.prototype),"setEventListeners",this).call(this),this._buttonSubmit.addEventListener("click",(function(){t.renderLoading(!0),t._handleSubmit()}))}},{key:"renderLoading",value:function(t){t?(this._buttonSubmit.textContent=this._titleButton,this._buttonSubmit.setAttribute("disabled","true")):this._buttonSubmit.textContent=this._textDefault}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var H=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject(t.json())}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editUserInfo",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"addCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&Z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"dde845eb-5fd1-447a-bf24-a8e053a8e958","Content-Type":"application/json"}});function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M,G=new o(n,R),$=new o(n,I),z=new o(n,A),K=new a(nt,".gallery__grid"),Q=new _(".popup_image"),W=new C(".popup_add-card",(function(t){return H.addCard(t.cardTitle,t.cardLink).then((function(t){nt(t,!0),document.querySelector(".card").lastElementChild.remove()}))}),"Добавляем карточку..."),X=new C(".popup_profile",(function(t){var e=t.name,n=t.about;return H.editUserInfo(e,n).then((function(t){et.setUserInfo(t.name,t.about,t.avatar)}))}),"Сохраняем..."),Y=new C(".popup_avatar-edit",(function(t){var e=t.avatarUrl;return H.editAvatar(e).then((function(t){et.setUserInfo(t.name,t.about,t.avatar)}))}),"Меняем аватар..."),tt=new F(".popup_delete-confirm","Удаляем карточку..."),et=new L({profileNameSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar-image"});function nt(t,n){K.setItem(function(t){var n=new e(t,"#card-template",(function(){Q.open(t.name,t.link)}),(function(t){tt.open(),tt.changeSubmitHandler((function(){H.deleteCard(t).then((function(){n.deleteCard(),tt.close(),H.getCards().then((function(t){nt(t[t.length-1],!1)})).catch((function(t){t.then((function(t){alert(t.message)}))}))})).catch((function(t){t.then((function(t){alert(t.message)}))})).finally((function(){tt.renderLoading(!1)}))}))}),M,(function(t){n.checkLiked()?H.deleteLike(t).then((function(t){n.setLikes(t.likes)})).catch((function(t){t.then((function(t){alert(t.message)}))})):H.addLike(t).then((function(t){n.setLikes(t.likes)})).catch((function(t){t.then((function(t){alert(t.message)}))}))}));return n.generateCard()}(t),n)}Promise.all([H.getUserInfo(),H.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo(o.name,o.about,o.avatar),M=o._id,K.rendererItems(i)})).catch((function(t){t.then((function(t){alert(t.message)}))})),j.addEventListener("click",(function(){X.setInputValues(et.getUserInfo()),$.clearErrorsForm(),X.open()})),B.addEventListener("click",(function(){G.clearErrorsForm(),W.open()})),P.addEventListener("click",(function(){z.clearErrorsForm(),Y.open()})),G.enableValidation(),$.enableValidation(),z.enableValidation(),Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),tt.setEventListeners(),Y.setEventListeners()})();