'use strict';

(function () {

  var createWizards = function (name, surname, coatColor, eyesColor) {
    var wizards = [];

    for (var i = 0; i < 4; i++) {
      var wizard = {
        name: window.data.getRandomValue(name) + ' ' + window.data.getRandomValue(surname),
        coatColor: window.data.getRandomValue(coatColor),
        eyesColor: window.data.getRandomValue(eyesColor)
      };
      wizards.push(wizard);
    }
    return wizards;
  };

  var wizardsList = createWizards(window.data.WIZARD_NAMES, window.data.WIZARD_SURNAMES, window.data.WIZARD_COAT_COLORS, window.data.WIZARD_EYE_COLORS);

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

  window.data.setup.querySelector('.setup-similar').classList.remove('hidden');

}());
