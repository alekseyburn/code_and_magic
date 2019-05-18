'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария', 'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

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

  window.data = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYE_COLORS: WIZARD_EYE_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
    setup: setup,
    getRandomValue: getRandomValue
  };

}());
