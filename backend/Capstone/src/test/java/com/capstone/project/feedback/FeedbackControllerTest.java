package com.capstone.project.feedback;
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

import com.capstone.project.feedback.controller.FeedbackController;
import com.capstone.project.feedback.model.Feedback;
import com.capstone.project.feedback.service.FeedbackService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
 
@ExtendWith(SpringExtension.class)
@WebFluxTest(controllers = FeedbackController.class)
public class FeedbackControllerTest 
{
	@MockBean
    @Qualifier("feedbackServiceImpl")
    FeedbackService service;
 
    @Autowired
    private WebTestClient webClient;
 
    @SuppressWarnings("deprecation")
	@Test
    void testCreateFeedback() {
        Feedback feedback = new Feedback();
 
        Mockito.when(service.addFeedback(feedback)).thenReturn(Mono.just(feedback));
 
        webClient.post()
            .uri("/api/feedback/add")
            .contentType(MediaType.APPLICATION_JSON)
            .body(BodyInserters.fromObject(feedback))
            .exchange()
            .expectStatus().isOk();
    }
     
    @Test
    void testGetFeedbackById() 
    {
    	Feedback feedback = new Feedback();
         
        Mockito
            .when(service.getFeedback(1))
            .thenReturn(Mono.just(new ResponseEntity<Feedback>(feedback, HttpStatus.OK)));
 
        webClient.get().uri("/api/feedback/get/{feedbackId}", 1)
            .header(HttpHeaders.ACCEPT, "application/json")
            .exchange()
            .expectStatus().isOk();
    }
    
    @Test
    void testGetAllFeedbacks() 
    {
    	Feedback feedback = new Feedback();
         
        List<Feedback> list = new ArrayList<Feedback>();
        list.add(feedback);
         
        Flux<Feedback> feedbackFlux = Flux.fromIterable(list);
         
        Mockito
            .when(service.getFeedbacks())
            .thenReturn(feedbackFlux);
 
        webClient.get().uri("/api/feedback/getAll")
            .header(HttpHeaders.ACCEPT, "application/json")
            .exchange()
            .expectStatus().isOk();
    }
    
    @Test
    void testDeleteEmployee() 
    {
        Mockito
            .when(service.deleteFeedback(1))
            .thenReturn(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)));
 
        webClient.delete().uri("/api/feedback/delete/{feedbackId}", 1)
            .exchange()
            .expectStatus().isOk();
    }
 
}