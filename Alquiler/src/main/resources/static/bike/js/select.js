console.log('select.js');

const test = document.form.bike.length
const indice = document.form.bike.selectedIndex

const datosTecnicos = document.getElementById("infoTecnica");

let ficha =[
    {
        cuerpo:"Ficha Tecnica: Specialized diseñó el Turbo Levo<br>"+
        "Specialized diseñó el Turbo Levo principalmente como una verdadera moto de pista. <br>"+
        "En términos de geometría, cinemática y lenguaje de diseño, Specialized utiliza la <br>"+
        "última bicicleta de pista, la Stumpjumper. Además, la moto ha sido equipada con <br>"+
        "tecnología líder en el mercado que le da el poder de recorrer más senderos.<br>"+
        "¿Nuevo motor? Comprobado. ¿Nueva batería? Comprobado. ¿Un marco ultraligero <br>"+
        "y poderoso? Revisa dos veces.<br>"
        
    },
    {
        cuerpo: " Ficha Tecnica: Bike 2"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 3"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 4"
    },
    {
        cuerpo: " Ficha Tecnica: Bike 5"
    }
];




console.log(indice)



function loadBike(){
    document.getElementById("imgBike").src="imagen/bike/imagen"+document.form.idBike.selectedIndex+".jpg";
    info(document.form.idBike.selectedIndex);
}

function info(id){


    const inf = ficha[id-1].cuerpo;
    datosTecnicos.innerHTML = inf;

}
