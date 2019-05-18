'use strict';

(function () {

  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.data.isEscEvent(evt, closePopup);
    window.data.setup.style.top = '';
    window.data.setup.style.left = '';
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
    window.data.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.data.isEnterEvent(evt, closePopup);
  });
}());
