var newNameId = 2;
var addAnotherButton = document.getElementById('add-another-button');

var names = document.getElementById("names-div");

if (addAnotherButton) {
  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body.firstChild;
  };

  addAnotherButton.onclick = function () {
    var s = stringToHTML(`
      <div class='govuk-form-group'>
        <label class="govuk-label" for='name-${newNameId}'>
            Name
          </label>
        <input class="govuk-input" id='name-${newNameId}' name='names[${newNameId}]' type='text'>
      </div>
      `);

    names.appendChild(s);
    document.getElementById("name-" + newNameId).focus();
    newNameId++;
  };
}
