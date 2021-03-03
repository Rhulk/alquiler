package com.bike.Alquiler.controller.Rest;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
 * Necesidad en BBDD para cada registro a modo de historico
 * 
 * id_reserva, id_bike, id_persona, fecha_reserva
 * 
 */


@RestController
public class BikeController {
	
	List<Date> fechas = new LinkedList<Date>();
	List<Integer> bicis = new LinkedList<Integer>();
	
	@GetMapping("/disponibles")
	public List<Integer> bikeDisponibles(@RequestParam(value = "fechaInicio") Date fechainicio, @RequestParam(value = "fechafin") Date fechafin) {
		
		/*
		 * Simular JPA
		 */
		
		
		return bicis;
	}

}
