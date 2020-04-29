package com.capstone.project.event.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.project.event.model.Event;
import com.capstone.project.event.service.EventService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/event")
public class EventController {

	@Autowired
	@Qualifier("eventServiceImpl")
	EventService eventService;

	@GetMapping(value = "/ping")
	public void ping() {
		System.out.println(System.currentTimeMillis());
	}
	
	@GetMapping("/getAll")
    public Flux<Event> all() {
        return eventService.getEvents();
    }

    @PostMapping("/add")
    public Mono<Event> create(@RequestBody Event event) {
        return eventService.addEvent(event);
    }

    @GetMapping("/get/{eventId}")
    public Mono<ResponseEntity<Event>> get(@PathVariable String eventId) {
        return eventService.getEvent(eventId);
    }

    @DeleteMapping("/delete/{eventId}")
    public Mono<ResponseEntity<Void>> delete(@PathVariable String eventId) {
        return eventService.deleteEvent(eventId);
    }
}
