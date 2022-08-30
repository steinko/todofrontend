package com.steinko.reactsprinboottutorial.RestfulWebService;

import java.util.Date;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.steinko.reactsprinboottutorial.CustomDateDeserialize;
import com.steinko.reactsprinboottutorial.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

public class TodoDto {
	private Long id;
	private String name;
	private String description;
	@JsonSerialize(using = CustomDateSerializer.class)
	@JsonDeserialize(using = CustomDateDeserialize.class)
	private Date targetDate;
	private Boolean isDone;

	
	public TodoDto(Long id, String username, String description, Date targetDate, Boolean isDone) {
		super();
		this.id = id;
		this.name = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	
	public TodoDto() {
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String username) {
		this.name = username;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Date getTargetDate() {
		return targetDate;
	}


	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	
	public Boolean getIsDone() {
		return isDone;
	}


	public void setIsDone(Boolean isDone) {
		this.isDone = isDone;
	}
	
	public String toString() {
		return "id:" + this.id.toString() + "name:" + this.name + 
			   "targetDate" + this.targetDate.toString() + "isDone" + this.isDone.toString();
	}
}
