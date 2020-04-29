package com.capstone.project.feedback.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.capstone.project.feedback.model.Feedback;
import com.capstone.project.feedback.repository.FeedbackRepository;
import com.capstone.project.feedback.service.FeedbackService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Override
	public Flux<Feedback> getFeedbacks() {
		return feedbackRepository.findAll();
	}

	@Override
	public Mono<Feedback> addFeedback(Feedback feedback) {
		return feedbackRepository.save(feedback);
	}

	@Override
	public Mono<ResponseEntity<Feedback>> getFeedback(int feedbackId) {
		return feedbackRepository.findById(feedbackId)
                .map(savedFeedback -> ResponseEntity.ok(savedFeedback))
                .defaultIfEmpty(ResponseEntity.notFound().build());
	}

	@Override
	public Mono<ResponseEntity<Void>> deleteFeedback(int feedbackId) {
		return feedbackRepository.findById(feedbackId)
        		.flatMap(existingFeedback ->
        		feedbackRepository.delete(existingFeedback)
                    .then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
        )
        .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

}
