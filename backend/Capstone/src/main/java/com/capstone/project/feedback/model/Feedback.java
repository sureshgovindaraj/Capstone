package com.capstone.project.feedback.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table("feedback")
public class Feedback {
	
	@Id
    private int id;
	
	@Column
    private String question;

	@Column
    private String type;

	@Column
    private String answers;
	    
}
