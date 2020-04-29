package com.capstone.project.event.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("event")
public class Event {
	
	@Id
	@JsonIgnore
    private int id;
	
	@Column
    private String eventId;

	@Column
    private String month;

	@Column
    private String baseLocation;

	@Column
    private String councilName;

	@Column
    private String beneficiaryName;

	@Column
    private String name;

	@Column
    private String date;

	@Column
    private String businessUnit;

	@Column
    private String status;

	@Column
    private String venueAddress;

	@Column
    private int totalVolunteers;

	@Column
    private int totalVolunteerHours;

	@Column
    private int totalTravelHours;

	@Column
    private String description;

	@Column
    private String category;

	@Column
    private int livesImpacted;

	@Column
    private int rating;

	@Column
    private String pocId;

	@Column
    private String pocName;

	@Column
    private String pocContact;

	@Column
    private String project;
	    
}
