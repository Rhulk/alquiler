var idioma =document.getElementById("mostrarIdioma");

loadIdioma();
function loadIdioma(){
    if(sessionStorage.getItem(idioma) == null){
        document.getElementById("mostrarIdioma").textContent = 'Castellano';
    }else{
        document.getElementById("mostrarIdioma").textContent=sessionStorage.getItem(idioma);
        setByIdioma(sessionStorage.getItem(idioma));
    }
}


function getIdioma(id){
    console.log(id+' getIdioma');
    document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent; // Mostramos el idioma seleccionado
    sessionStorage.setItem(idioma, document.getElementById("mostrarIdioma").textContent = document.getElementById(id).textContent );
    setByIdioma(sessionStorage.getItem(idioma));
}
function setByIdioma(idioma_){


    switch (idioma_) {
        case 'Castellano':
            document.getElementById("id_alquiler").textContent ="Alquiler Bike";
            document.getElementById("id_tarifas").textContent ="Tarifas";
            document.getElementById("id_rutas").textContent = "Rutas";
            document.getElementById("id_contacto").textContent = "Contacto";
            document.getElementById("navbarDropdown").textContent = "Idioma";
            document.getElementById("id_montar").textContent ="¿Cuando quiere montar?";
            document.getElementsByClassName("id_fecha_inicio")[0].placeholder = "Elegir Fecha inicio";
            document.getElementsByClassName("id_fecha_hasta")[0].placeholder = "Elegir Fecha hasta";
            document.getElementById("id_bike_disponible").textContent = "Bicis disponibles";
            document.getElementById("id_lugarRecogida").textContent = "Lugar recogida";
            document.getElementById("id_talla").textContent = "Talla";
            document.getElementById("id_bike").textContent = "Bici elegida";
            document.getElementById("id_tipo_pedal").textContent = "Tipo Pedal";
            document.getElementById("id_casco_0").textContent = "Casco";
            document.getElementById("id_casco_1").textContent = "Si, necesito uno.";
            document.getElementById("id_casco_2").textContent = "No, ya lo tengo.";
            document.getElementById("id_datos_personales").textContent = "Complete sus datos personales";
          break;
        case 'Ingles':
            document.getElementById("id_alquiler").textContent ="Bike Rental";
            document.getElementById("id_tarifas").textContent ="Rates";
            document.getElementById("id_rutas").textContent = "Routes";
            document.getElementById("id_contacto").textContent = "Contact";
            document.getElementById("navbarDropdown").textContent = "Language";
            document.getElementById("id_montar").textContent = "When do you want to ride?";
            document.getElementsByClassName("id_fecha_inicio")[0].placeholder = "Choose start date";
            document.getElementsByClassName("id_fecha_hasta")[0].placeholder = "Choose Date Until";
            document.getElementById("id_bike_disponible").textContent = "Available bikes";
            document.getElementById("id_lugarRecogida").textContent = "Pick up place";
            document.getElementById("id_talla").textContent = "Size";
            document.getElementById("id_bike").textContent = "Chosen bike";
            document.getElementById("id_tipo_pedal").textContent = "Pedal Type";
            document.getElementById("id_casco_0").textContent = "Helmet";
            document.getElementById("id_casco_1").textContent = "Yes, I need one.";
            document.getElementById("id_casco_2").textContent = "No, i already have it.";
            document.getElementById("id_datos_personales").textContent = "Fill in your personal details";
          break;
        
        case 'Frances':
            document.getElementById("id_alquiler").textContent ="Location de vélos";
            document.getElementById("id_tarifas").textContent ="Tarifs";
            document.getElementById("id_rutas").textContent = "Itinéraires";
            document.getElementById("id_contacto").textContent = "Contact";
            document.getElementById("navbarDropdown").textContent = "Langue";
            document.getElementById("id_montar").textContent = "Quand voulez-vous rouler?";
            document.getElementsByClassName("id_fecha_inicio")[0].placeholder = "Choisissez la date de début";
            document.getElementsByClassName("id_fecha_hasta")[0].placeholder = "Choisissez la date jusqu'au";
            document.getElementById("id_bike_disponible").textContent = "Vélos disponibles";
            document.getElementById("id_lugarRecogida").textContent = "Lieu de ramassage";
            document.getElementById("id_talla").textContent = "Taille";
            document.getElementById("id_bike").textContent = "Vélo choisi";
            document.getElementById("id_tipo_pedal").textContent = "Type de pédale";
            document.getElementById("id_casco_0").textContent = "Casque";
            document.getElementById("id_casco_1").textContent = "Oui, j'en ai besoin.";
            document.getElementById("id_casco_2").textContent = "Non, je l'ai déjà.";
            document.getElementById("id_datos_personales").textContent = "Remplissez vos données personnelles";
            break;
        case 'Aleman':
            document.getElementById("id_alquiler").textContent ="Fahrradverleih";
            document.getElementById("id_tarifas").textContent ="Preise";
            document.getElementById("id_rutas").textContent = "Routen";
            document.getElementById("id_contacto").textContent = "Kontakt";
            document.getElementById("navbarDropdown").textContent = "Sprache";
            document.getElementById("id_montar").textContent = "Wann willst du fahren";
            document.getElementsByClassName("id_fecha_inicio")[0].placeholder = "Startdatum auswählen";
            document.getElementsByClassName("id_fecha_hasta")[0].placeholder = "Wählen Sie Datum bis";
            document.getElementById("id_bike_disponible").textContent = "Verfügbare Fahrräder";
            document.getElementById("id_lugarRecogida").textContent = "Abholort";
            document.getElementById("id_talla").textContent = "Größe";
            document.getElementById("id_bike").textContent = "Gewähltes Fahrrad";
            document.getElementById("id_tipo_pedal").textContent = "Pedaltyp";
            document.getElementById("id_casco_0").textContent = "Helm";
            document.getElementById("id_casco_1").textContent = "Ja, ich brauche einen.";
            document.getElementById("id_casco_2").textContent = "Nein, ich habe es schon.";
            document.getElementById("id_datos_personales").textContent = "Geben Sie Ihre persönlichen Daten ein";

            break;
        case 'Portugues':
            document.getElementById("id_alquiler").textContent ="Aluguer de bicicletas";
            document.getElementById("id_tarifas").textContent ="Tarifas";
            document.getElementById("id_rutas").textContent = "Rotas";
            document.getElementById("id_contacto").textContent = "Contacto";
            document.getElementById("navbarDropdown").textContent = "Língua";
            document.getElementById("id_montar").textContent = "Quando você quer pedalar?";
            document.getElementsByClassName("id_fecha_inicio")[0].placeholder = "Escolha a data de início";
            document.getElementsByClassName("id_fecha_hasta")[0].placeholder = "Escolha a data até";
            document.getElementById("id_bike_disponible").textContent = "Bicicletas disponíveis";
            document.getElementById("id_lugarRecogida").textContent = "Local de retirada";
            document.getElementById("id_talla").textContent = "Tamanho";
            document.getElementById("id_bike").textContent = "Bicicleta escolhida";
            document.getElementById("id_tipo_pedal").textContent = "Tipo Pedal";
            document.getElementById("id_casco_0").textContent = "Capacete";
            document.getElementById("id_casco_1").textContent = "Sim, preciso de um.";
            document.getElementById("id_casco_2").textContent = "No, ya lo tengo.";
            document.getElementById("id_datos_personales").textContent = "Preencha seus dados pessoais";

            break;
        default:
          console.log(idioma+' No recuperado idioma');
          break;
      }
}