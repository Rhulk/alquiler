package com.bike.Alquiler.controller.Rest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bike.Alquiler.model.Reserva;

/*
 * Necesidad en BBDD para cada registro a modo de historico
 * 
 * id_reserva, id_bike, id_persona, fecha_desde, fecha_hasta
 * 
 *  1.- Recupero listado de id_bike
 *  2.- Bucle por rango de fecha chequeando cada id_bike
 * 
 */


@RestController
public class BikeController {
	
	List<Reserva> reservas = new LinkedList<Reserva>();
	List<Integer> bicis = new LinkedList<Integer>();
	Reserva reserva = new Reserva();
	
	int [] bikeDisponibles;
	
	public BikeController() {
		bikeDisponibles = new int[10];
		bikeDisponibles[0] = 0;
		bikeDisponibles[1] = 1;
		bikeDisponibles[2] = 2;
		bikeDisponibles[3] = 3;
		reservas = getLista();
		 
	}
	
	
	@GetMapping("/disponibles")
	public List<Integer> bikeDisponibles(@RequestParam(value = "fechaInicio") Date fechainicio, @RequestParam(value = "fechafin") Date fechafin) {
		
		/*
		 * Simular JPA
		 */
/*		while(true){
			// recuperar id_bike que no este en el rango de fechas del while
			
		// recuperar por sql los que no estan en el rango de fechas.

		
			fechainicio = new Date(fechainicio.getTime() + TimeUnit.DAYS.toMillis( 1 ));
			if(fechainicio == fechafin)
				break;
		}
	*/
		
		
		return bicis;
	}
	
	public int[] bikes( ) {
		Date someDate = new Date();
		Date newDate = new Date(someDate.getTime() + TimeUnit.DAYS.toMillis( 1 ));
		System.out.println("Manana sera: "+newDate);
		bikeDisponibles.clone();
		
		
		return bikeDisponibles;
	}
	
	private List<Reserva> getLista(){
		System.out.println(" GetLista ");
		SimpleDateFormat formatear = new SimpleDateFormat("dd-mm-yyyy");
		List<Reserva> reservas = new LinkedList<Reserva>();
		
		try {
			
			Reserva res1 = new Reserva();
			res1.setId_reserva(1);
			res1.setId_bike(1);
			res1.setFecha_desde(formatear.parse("04-03-2021"));
			res1.setFecha_hasta(formatear.parse("05-03-2021"));

			Reserva res2 = new Reserva();
			res2.setId_reserva(2);
			res2.setId_bike(2);
			res2.setFecha_desde(formatear.parse("05-03-2021"));
			res2.setFecha_hasta(formatear.parse("07-03-2021"));
			
			Reserva res3 = new Reserva();
			res3.setId_reserva(3);
			res3.setId_bike(3);
			res3.setFecha_desde(formatear.parse("04-03-2021"));
			res3.setFecha_hasta(formatear.parse("08-03-2021"));
			
			reservas.add(res1);
			reservas.add(res2);
			reservas.add(res3);


			return reservas;
			
		}catch(ParseException e){
			System.out.println("Peto: "+e);
			return null;
		}catch(NullPointerException nu) {
			System.out.println(" Localizacion "+nu.getLocalizedMessage());
			System.out.println(" Mensaje : "+nu.getMessage());
			System.out.println(" Causa : "+nu.getCause());
			System.out.println(" Error : "+nu);
			return null;
		}
		
	}

}
