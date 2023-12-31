package com.protrack.projectmanagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Team {
	
	@Id
	@GeneratedValue
	private long teamId;
	
	private String teamName;
	private long userId;
	

}
