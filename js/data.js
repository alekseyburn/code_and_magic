'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var userNameInput = document.querySelector('.setup-user-name');

  // var WIZARD_NAMES = [
  //   'Иван',
  //   'Хуан Себастьян',
  //   'Мария', 'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
  // ];
  //
  // var WIZARD_SURNAMES = [
  //   'да Марья',
  //   'Верон',
  //   'Мирабелла',
  //   'Вальц',
  //   'Онопко',
  //   'Топольницкая',
  //   'Нионго',
  //   'Ирвинг'
  // ];

  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var WIZARD_EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setup = document.querySelector('.setup');

  var getRandomValue = function (arr) {
    var randomValue = Math.floor(Math.random() * arr.length);
    return arr[randomValue];
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var onLoad = function (wizards) {
    window.createWizards.putWizards(wizards);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoad, errorHandler);

  var upLoad = function () {
    setup.classList.add('hidden');
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), upLoad, errorHandler);
    evt.preventDefault();
  });

  window.data = {
    // WIZARD_NAMES: WIZARD_NAMES,
    // WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYE_COLORS: WIZARD_EYE_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
    setup: setup,
    getRandomValue: getRandomValue,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  };

}());
