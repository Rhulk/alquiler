

Tareas pendientes:

1.- Crear petición Rest tipo get desde xxx.js que nos va traer la lista de bicis <br>
var fechaDesde='10/03/2021'
var fechaHasta='15/03/2021'
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/disponibles?fechaDesde="+fechaDesde+"&fechaHasta="+fechaHasta;
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       loadBikeDisponiblesEntreFechas(); // se genera el selectOptión dinamicamente en el punto 2.
    });
});


2.- Generar desde xxx.js el select option con la respuesta rest

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
