package com.capstone.project.feedback.controller;

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

import com.capstone.project.feedback.model.Feedback;
import com.capstone.project.feedback.service.FeedbackService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

	@Autowired
	@Qualifier("feedbackServiceImpl")
	FeedbackService feedbackService;

	@GetMapping(value = "/ping")
	public void ping() {
		System.out.println(System.currentTimeMillis());
	}
	
	@GetMapping("/getAll")
    public Flux<Feedback> all() {
        return feedbackService.getFeedbacks();
    }

    @PostMapping("/add")
    public Mono<Feedback> create(@RequestBody Feedback feedback) {
        return feedbackService.addFeedback(feedback);
    }

    @GetMapping("/get/{feedbackId}")
    public Mono<ResponseEntity<Feedback>> get(@PathVariable int feedbackId) {
        return feedbackService.getFeedback(feedbackId);
    }

    @DeleteMapping("/delete/{feedbackId}")
    public Mono<ResponseEntity<Void>> delete(@PathVariable int feedbackId) {
        return feedbackService.deleteFeedback(feedbackId);
    }
}
