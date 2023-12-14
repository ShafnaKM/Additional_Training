package com.protrack.projectmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Task {

	@Id
	@GeneratedValue()
	private long taskId;
	
	private String taskName;
	private String desciption;
	private String status;
	private long project_id;
	private long user_id;
	
}
