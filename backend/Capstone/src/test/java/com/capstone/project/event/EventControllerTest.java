package com.capstone.project.event;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;

import com.capstone.project.event.controller.EventController;
import com.capstone.project.event.model.Event;
import com.capstone.project.event.service.EventService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
 
@ExtendWith(SpringExtension.class)
@WebFluxTest(controllers = EventController.class)
public class EventControllerTest 
{
 
	@MockBean
    @Qualifier("eventServiceImpl")
    EventService service;
	
    @Autowired
    private WebTestClient webClient;
 
    @SuppressWarnings("deprecation")
	@Test
    void testCreateEvent() {
        Event event = new Event();
 
        Mockito.when(service.addEvent(event)).thenReturn(Mono.just(event));
 
        webClient.post()
            .uri("/api/event/add")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(event))
            .exchange()
            .expectStatus().isOk();
    }
     
    @Test
    void testGetEventById() 
    {
    	Event event = new Event();
         
        Mockito
            .when(service.getEvent("1"))
            .thenReturn(Mono.just(new ResponseEntity<Event>(event, HttpStatus.OK)));
 
        webClient.get().uri("/api/event/get/{eventId}", "1")
            .header(HttpHeaders.ACCEPT, "application/json")
            .exchange()
            .expectStatus().isOk();
    }
    
    @Test
    void testGetAllEvents() 
    {
    	Event event = new Event();
         
        List<Event> list = new ArrayList<Event>();
        list.add(event);
         
        Flux<Event> eventFlux = Flux.fromIterable(list);
         
        Mockito
            .when(service.getEvents())
            .thenReturn(eventFlux);
 
        webClient.get().uri("/api/event/getAll")
            .header(HttpHeaders.ACCEPT, "application/json")
            .exchange()
            .expectStatus().isOk();
    }
    
    @Test
    void testDeleteEvent() 
    {
        Mockito
            .when(service.deleteEvent("1"))
            .thenReturn(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)));
 
        webClient.delete().uri("/api/event/delete/{eventId}", "1")
            .exchange()
            .expectStatus().isOk();
    }
 
}