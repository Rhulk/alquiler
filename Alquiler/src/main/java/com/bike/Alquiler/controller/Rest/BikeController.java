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
		
		 
	}
	
	
	@GetMapping("/disponibles")
	public List<Integer> bikeDisponibles(@RequestParam(value = "fechaInicio") Date fechainicio, @RequestParam(value = "fechafin") Date fechafin) {
		
		/*
		 * Simular JPA 	dd	dd
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
	

		
	

}
