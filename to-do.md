

Tareas pendientes:

1.- Crear petición Rest tipo get desde xxx.js que nos va traer la lista de bicis <br>
var fechaDesde='10/03/2021'<br>
var fechaHasta='15/03/2021'<br>
$(document).ready(function() {<br>
    $.ajax({<br>
        url: "http://localhost:8080/disponibles?fechaDesde="+fechaDesde+"&fechaHasta="+fechaHasta;<br>
    }).then(function(data) {<br>
       $('.greeting-id').append(data.id);<br>
       $('.greeting-content').append(data.content);<br>
       loadBikeDisponiblesEntreFechas(); // se genera el selectOptión dinamicamente en el punto 2.<br>
    });<br>
});<br>
<br>

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
