package com.capstone.project.event.repository;
  
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.capstone.project.event.model.Event;

import reactor.core.publisher.Mono;

@Repository
public interface EventRepository extends
  ReactiveCrudRepository<Event, Integer> {
	
	@Query("select e.* from event e where e.event_id = :event_id")
	Mono<Event> findByEventId(String eventId);
	
	@Query("delete from event where event_id = :event_id")
	Mono<Void> deleteByEventId(String eventId);
}
 