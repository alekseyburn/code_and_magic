'use strict';

(function () {

  var setupWizard = window.data.setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = window.data.setup.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = window.data.setup.querySelector('input[name="coat-color"]');
  var inputWizardEyes = window.data.setup.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = window.data.setup.querySelector('input[name="fireball-color"]');

  var colorize = function (element, inputElement, arr) {
    element.addEventListener('click', function () {
      var color = window.data.getRandomValue(arr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputElement.value = color;
    });
  };

  colorize(setupWizardCoat, inputWizardCoat, window.data.WIZARD_COAT_COLORS);
  colorize(setupWizardEyes, inputWizardEyes, window.data.WIZARD_EYE_COLORS);
  colorize(setupWizardFireball, inputWizardFireball, window.data.WIZARD_FIREBALL_COLORS);
}());

// СТАРАЯ ЛОГИКА (оставил для дальнейшего изучения)
// var changeCoatColor = function (evt) {
//   if (evt.target.classList.contains('wizard-coat')) {
//     setupWizardCoat.style.fill = window.data.getRandomValue(window.data.WIZARD_COAT_COLORS);
//     inputWizardCoat.value = setupWizardCoat.style.fill;
//   }
// };
//
// var changeEyesColor = function (evt) {
//   if (evt.target.classList.contains('wizard-eyes')) {
//     setupWizardEyes.style.fill = window.data.getRandomValue(window.data.WIZARD_EYE_COLORS);
//     inputWizardEyes.value = setupWizardEyes.style.fill;
//   }
// };
//
// var changeFireballColor = function () {
//   var random = window.data.getRandomValue(window.data.WIZARD_FIREBALL_COLORS);
//   setupWizardFireball.style.background = random;
//   inputWizardFireball.value = random;
// };
//
// var wizardClickHandler = function (wizard) {
//   wizard.addEventListener('click', changeCoatColor);
//   wizard.addEventListener('click', changeEyesColor);
// };
//
// var fireballClickHandler = function (fire) {
//   fire.addEventListener('click', changeFireballColor);
// };
//
// wizardClickHandler(setupWizard);
// fireballClickHandler(setupWizardFireball);
