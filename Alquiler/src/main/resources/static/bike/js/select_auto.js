var fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadBikeDisponiblesEntreFechas() {

  var theBody = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  var newRow = "<tr><td><select>";
  var theOptions = "";
  fruits.forEach(function(fruit) {
    theOptions += `<option value="${fruit}">${fruit}</option>`;
  });
  newRow += theOptions;
  newRow += "</select></td></tr>";

  theBody.insertAdjacentHTML('beforeend', newRow);


}
