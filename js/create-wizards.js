'use strict';

(function () {

  // var createWizards = function (name, surname, coatColor, eyesColor) {
  //   var wizards = [];
  //
  //   for (var i = 0; i < 4; i++) {
  //     var wizard = {
  //       name: window.data.getRandomValue(name) + ' ' + window.data.getRandomValue(surname),
  //       coatColor: window.data.getRandomValue(coatColor),
  //       eyesColor: window.data.getRandomValue(eyesColor)
  //     };
  //     wizards.push(wizard);
  //   }
  //   return wizards;
  // };

  // var wizardsList = createWizards(window.data.WIZARD_NAMES, window.data.WIZARD_SURNAMES, window.data.WIZARD_COAT_COLORS, window.data.WIZARD_EYE_COLORS);

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  var getRandomWizards = function (arr) {
    var wizardsList = [];
    for (var i = 0; i < 4; i++) {
      wizardsList.push(window.data.getRandomValue(arr));
    }

    return wizardsList;
  };

  var putWizards = function (data) {
    var wizardsList = getRandomWizards(data);
    var similarListElement = window.data.setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsList.length; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    similarListElement.appendChild(fragment);

    window.data.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.createWizards = {
    putWizards: putWizards
  };
}());
