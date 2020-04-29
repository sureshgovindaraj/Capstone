package com.capstone.project.event.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.capstone.project.event.model.Event;
import com.capstone.project.event.repository.EventRepository;
import com.capstone.project.event.service.EventService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class EventServiceImpl implements EventService {
	
	@Autowired
	EventRepository eventRepository;

	@Override
	public Flux<Event> getEvents() {
		return eventRepository.findAll();
	}

	@Override
	public Mono<Event> addEvent(Event event) {
		return eventRepository.save(event);
	}

	@Override
	public Mono<ResponseEntity<Event>> getEvent(String eventId) {
		return eventRepository.findByEventId(eventId)
                .map(savedEvent -> ResponseEntity.ok(savedEvent))
                .defaultIfEmpty(ResponseEntity.notFound().build());
	}

	@Override
	public Mono<ResponseEntity<Void>> deleteEvent(String eventId) {
		return eventRepository.findByEventId(eventId)
        		.flatMap(existingEvent ->
        		eventRepository.delete(existingEvent)
                    .then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
        )
        .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

}
