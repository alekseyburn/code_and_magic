'use strict';

(function () {
  window.dataLoad = {};

  var onLoad = function (wizards) {
    window.dataLoad.wizardList = wizards;
    window.wizardCustom.updateWizards(wizards);
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
    window.data.setup.classList.add('hidden');
  };

  var form = window.data.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), upLoad, errorHandler);
    evt.preventDefault();
  });
}());
