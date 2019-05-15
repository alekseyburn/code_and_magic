'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open-icon');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputWizardCoat = setup.querySelector('input[name="coat-color"]');
var inputWizardEyes = setup.querySelector('input[name="eyes-color"]');
var inputWizardFireball = setup.querySelector('input[name="fireball-color"]');

var WIZARD_FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Минимум 2 символа');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Максимум 25 символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var changeCoatColor = function (evt) {
  if (evt.target.classList.contains('wizard-coat')) {
    setupWizardCoat.style.fill = getRandomValue(WIZARD_COAT_COLORS);
    inputWizardCoat.value = setupWizardCoat.style.fill;
  }
};

var changeEyesColor = function (evt) {
  if (evt.target.classList.contains('wizard-eyes')) {
    setupWizardEyes.style.fill = getRandomValue(WIZARD_EYE_COLORS);
    inputWizardEyes.value = setupWizardEyes.style.fill;
  }
};

var changeFireballColor = function () {
  var random = getRandomValue(WIZARD_FIREBALL_COLORS);
  setupWizardFireball.style.background = random;
  inputWizardFireball.value = random;
};

var wizardClickHandler = function (wizard) {
  wizard.addEventListener('click', changeCoatColor);
  wizard.addEventListener('click', changeEyesColor);
};

var fireballClickHandler = function (fire) {
  fire.addEventListener('click', changeFireballColor);
};

wizardClickHandler(setupWizard);
fireballClickHandler(setupWizardFireball);

var getRandomValue = function (arr) {
  var randomValue = Math.floor(Math.random() * arr.length);
  return arr[randomValue];
};

var createWizards = function (name, surname, coatColor, eyesColor) {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: getRandomValue(name) + ' ' + getRandomValue(surname),
      coatColor: getRandomValue(coatColor),
      eyesColor: getRandomValue(eyesColor)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var wizardsList = createWizards(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYE_COLORS);

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var putWizards = function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList[i]));
  }

  similarListElement.appendChild(fragment);
};

putWizards();

setup.querySelector('.setup-similar').classList.remove('hidden');
