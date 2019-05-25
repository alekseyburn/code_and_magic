'use strict';

(function () {

  var setupWizard = window.data.setup.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = window.data.setup.querySelector('.setup-fireball-wrap');
  var inputWizardCoat = window.data.setup.querySelector('input[name="coat-color"]');
  var inputWizardEyes = window.data.setup.querySelector('input[name="eyes-color"]');
  var inputWizardFireball = window.data.setup.querySelector('input[name="fireball-color"]');
  var coatColor;
  var eyesColor;
  var wizardInner = window.data.setup.querySelector('.setup-player');

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    return left - right;
  };

  var updateWizards = function (data) {
    window.createWizards.putWizards(data.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
    }));
  };

  // eslint-disable-next-line no-unused-vars
  // var colorize = function (element, inputElement, arr, elemName) {
  //   element.addEventListener('click', function () {
  //     var color = window.data.getRandomValue(arr);
  //     if (element.tagName.toLowerCase() === 'div') {
  //       element.style.backgroundColor = color;
  //     } else {
  //       element.style.fill = color;
  //     }
  //     inputElement.value = color;
  //     elemName = color;
  //     updateWizards();
  //   });
  // };
  //
  // colorize(setupWizardCoat, inputWizardCoat, window.data.WIZARD_COAT_COLORS, coatColor);
  // colorize(setupWizardEyes, inputWizardEyes, window.data.WIZARD_EYE_COLORS, eyesColor);
  // colorize(setupWizardFireball, inputWizardFireball, window.data.WIZARD_FIREBALL_COLORS, fireballColor);

  var changeCoatColor = function (data) {
    var color = window.data.getRandomValue(window.data.WIZARD_COAT_COLORS);
    setupWizardCoat.style.fill = color;
    inputWizardCoat.value = color;
    coatColor = color;
    window.debounce(updateWizards(data));
  };

  var changeEyesColor = function (data) {
    var color = window.data.getRandomValue(window.data.WIZARD_EYE_COLORS);
    setupWizardEyes.style.fill = color;
    inputWizardEyes.value = color;
    eyesColor = color;
    window.debounce(updateWizards(data));
  };

  var changeFireballColor = function () {
    var color = window.data.getRandomValue(window.data.WIZARD_FIREBALL_COLORS);
    setupWizardFireball.style.fill = color;
    inputWizardFireball.value = color;
  };

  var wizardClickHandler = function (evt) {
    if (evt.target.classList.contains('wizard-coat')) {
      changeCoatColor(window.dataLoad.wizardList);
    } else if (evt.target.classList.contains('wizard-eyes')) {
      changeEyesColor(window.dataLoad.wizardList);
    } else if (evt.target.classList.contains('setup-fireball')) {
      changeFireballColor(window.dataLoad.wizardList);
    }
  };

  // var fireballClickHandler = function (fire) {
  //   fire.addEventListener('click', changeFireballColor);
  // };

  // wizardClickHandler(setupWizard);
  // fireballClickHandler(setupWizardFireball);

  wizardInner.addEventListener('click', wizardClickHandler);

  window.wizardCustom = {
    updateWizards: updateWizards
  };

}());

// СТАРАЯ ЛОГИКА (оставил для дальнейшего изучения)

