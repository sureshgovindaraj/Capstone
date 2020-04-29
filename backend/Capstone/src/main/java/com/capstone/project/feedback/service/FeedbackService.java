package com.capstone.project.feedback.service;

import org.springframework.http.ResponseEntity;

import com.capstone.project.feedback.model.Feedback;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface FeedbackService {
	
	Flux<Feedback> getFeedbacks();
	
	Mono<Feedback> addFeedback(Feedback feedback);
	
	Mono<ResponseEntity<Feedback>> getFeedback(int feedbackId);
	
	Mono<ResponseEntity<Void>> deleteFeedback(int feedbackId);
}
