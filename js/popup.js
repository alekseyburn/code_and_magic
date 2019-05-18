'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.data.ESC_KEYCODE && evt.target !== userNameInput) {
      closePopup();
      window.data.setup.style.top = '';
      window.data.setup.style.left = '';
    }
  };

  var openPopup = function () {
    window.data.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.data.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.data.setup.style.top = '';
    window.data.setup.style.left = '';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.data.ENTER_KEYCODE) {
      closePopup();
    }
  });
}());
