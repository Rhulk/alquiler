
const horasInicio = document.getElementById('listaHorasInicio');
const horasHasta = document.getElementById('listaHorasHasta');
const fecha = document.getElementById("dp1").value;
const fechaFin = document.getElementById("dp2").value;


const input = document.querySelector('input');

input.addEventListener('change', updateValue);

function updateValue(e) {
  console.log('Change Fecha');
}

function cambiaDefectoInicio(id){
    
    if ( id =='input-inicio'){
        loadHorasInicio();
        console.log('inicio');
        document.getElementById("selectHoraInicio").className= "cell py-1 hora-select-false";
    }
    else{
        loadHorasHasta();
        document.getElementById("selectHoraHasta").className= "cell py-1 hora-select-false";
    }
 
}

$(document).ready(function(){

    $('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    startDate: '0d'
    });
    
    $('.cell').click(function(){
    $('.cell').removeClass('select');
    $(this).addClass('select');
    });
    
    });


    function loadHorasInicio(){

        const htmlHoras = `
        <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="900" onclick="getHora(this.id)"  class="cell py-1">9:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="930" onclick="getHora(this.id)" class="cell py-1">9:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="945" onclick="getHora(this.id)" class="cell py-1">9:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1000" onclick="getHora(this.id)" class="cell py-1">10:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1030" onclick="getHora(this.id)" class="cell py-1">10:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1045" onclick="getHora(this.id)" class="cell py-1">10:45AM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1100" onclick="getHora(this.id)" class="cell py-1">11:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1130" onclick="getHora(this.id)" class="cell py-1">11:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1145" onclick="getHora(this.id)" class="cell py-1">11:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1200" onclick="getHora(this.id)" class="cell py-1">12:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1230" onclick="getHora(this.id)" class="cell py-1">12:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1245" onclick="getHora(this.id)" class="cell py-1">12:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="100" onclick="getHora(this.id)" class="cell py-1">1:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="130" onclick="getHora(this.id)" class="cell py-1">1:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="145" onclick="getHora(this.id)" class="cell py-1">1:45PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="200" onclick="getHora(this.id)" class="cell py-1">2:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="230" onclick="getHora(this.id)" class="cell py-1">2:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="245" onclick="getHora(this.id)" class="cell py-1">2:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="300" onclick="getHora(this.id)" class="cell py-1">3:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="330" onclick="getHora(this.id)" class="cell py-1">3:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="415" onclick="getHora(this.id)" class="cell py-1">4:15PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="500" onclick="getHora(this.id)" class="cell py-1">5:00PM</div>
        </div>
    </div>`;
    horasInicio.innerHTML = htmlHoras;
    document.getElementById("listaHorasInicio").className ="card-body p-3 p-sm-5";
    }

    function loadHorasHasta(){

        const htmlHoras = `
        <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="900" onclick="getHoraHasta(this.id)"  class="cell py-1">9:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="930" onclick="getHoraHasta(this.id)" class="cell py-1">9:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="945" onclick="getHoraHasta(this.id)" class="cell py-1">9:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1000" onclick="getHoraHasta(this.id)" class="cell py-1">10:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1030" onclick="getHoraHasta(this.id)" class="cell py-1">10:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1045" onclick="getHoraHasta(this.id)" class="cell py-1">10:45AM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1100" onclick="getHoraHasta(this.id)" class="cell py-1">11:00AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1130" onclick="getHoraHasta(this.id)" class="cell py-1">11:30AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1145" onclick="getHoraHasta(this.id)" class="cell py-1">11:45AM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1200" onclick="getHoraHasta(this.id)" class="cell py-1">12:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1230" onclick="getHoraHasta(this.id)" class="cell py-1">12:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="1245" onclick="getHoraHasta(this.id)" class="cell py-1">12:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="100" onclick="getHoraHasta(this.id)" class="cell py-1">1:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="130" onclick="getHoraHasta(this.id)" class="cell py-1">1:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="145" onclick="getHoraHasta(this.id)" class="cell py-1">1:45PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="200" onclick="getHoraHasta(this.id)" class="cell py-1">2:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="230" onclick="getHoraHasta(this.id)" class="cell py-1">2:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="245" onclick="getHoraHasta(this.id)" class="cell py-1">2:45PM</div>
        </div>
    </div>
    <div class="row text-center mx-0">
        <div class="col-md-2 col-4 my-1 px-2">
            <div  id="300" onclick="getHoraHasta(this.id)" class="cell py-1">3:00PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="330" onclick="getHoraHasta(this.id)" class="cell py-1">3:30PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="415" onclick="getHoraHasta(this.id)" class="cell py-1">4:15PM</div>
        </div>
        <div class="col-md-2 col-4 my-1 px-2">
            <div id="500" onclick="getHoraHasta(this.id)" class="cell py-1">5:00PM</div>
        </div>
    </div>`;
    horasHasta.innerHTML = htmlHoras;
    document.getElementById("listaHorasHasta").className ="card-body p-3 p-sm-5";
    }

    function clearHorasInicio(){

        const htmlHoras = ``;
        horasInicio.innerHTML = htmlHoras;
        
        //document.getElementById("selectHoraInicio").className ="kike";
        //document.getElementById("listaHoras").classList.add('class');
    }
    function clearHorasHasta(){

        const htmlHoras = ``;
        horasHasta.innerHTML = htmlHoras;
        
        //document.getElementById("selectHoraHasta").className ="";
        //document.getElementById("listaHoras").classList.add('class');
    }


    loadHorasInicio(); // para que se cargen las horas al cargar la pagina
    function getHora(id){
        //console.log(document.getElementById("dp1").value);
        document.getElementById("selectHoraInicio").className= "cell-select py-1 hora-select-true";
        document.getElementById("selectHoraInicio").textContent = document.getElementById(id).textContent;
        clearHorasInicio();
        //document.getElementById("idBike").focus();
    }
    function getHoraHasta(id){
        //console.log(document.getElementById("dp1").value);
        document.getElementById("selectHoraHasta").className= "cell-select py-1 hora-select-true";
        document.getElementById("selectHoraHasta").textContent = document.getElementById(id).textContent;
        clearHorasHasta();
        document.getElementById("idBike").focus();
    }
    