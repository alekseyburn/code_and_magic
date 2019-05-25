'use strict';

(function () {

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  var putWizards = function (data) {
    var similarListElement = window.data.setup.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > 4 ? 4 : data.length;

    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(fragment);
  };

  window.createWizards = {
    putWizards: putWizards
  };

  window.data.setup.querySelector('.setup-similar').classList.remove('hidden');
}());
