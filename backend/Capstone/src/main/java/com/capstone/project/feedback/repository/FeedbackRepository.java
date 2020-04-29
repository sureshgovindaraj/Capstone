package com.capstone.project.feedback.repository;
  
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.capstone.project.feedback.model.Feedback;

@Repository
public interface FeedbackRepository extends
  ReactiveCrudRepository<Feedback, Integer> {
	
}
 