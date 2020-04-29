package com.capstone.project.event.service;

import org.springframework.http.ResponseEntity;

import com.capstone.project.event.model.Event;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface EventService {
	
	Flux<Event> getEvents();
	
	Mono<Event> addEvent(Event event);
	
	Mono<ResponseEntity<Event>> getEvent(String eventId);
	
	Mono<ResponseEntity<Void>> deleteEvent(String eventId);
}
