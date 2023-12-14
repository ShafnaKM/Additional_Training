package com.protrack.projectmanagement.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GeneratorType;

import lombok.Data;

@Data
@Entity
public class Project {
	
	@Id
	@GeneratedValue	
	private long projectId;
	
	private String projectTitle;
	private LocalDate startDate;
	private LocalDate endDate;
	private String description;
	private long teamId;


}
