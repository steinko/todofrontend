package com.steinko.reactsprinboottutorial.RestfulWebService;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Column;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;


@Entity

@Table(name = "todo")
public class Todo implements Serializable  {
	private static final long serialVersionUID = -2343243243242432341L;
	
	/**
	 * Id for a todo.
	 */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@Column(name = "name")
	private String name;	
	private String description;
	private Date targetDate;
	private Boolean isDone;
	
	protected Todo() {
		
	}
	
	/**
	    * Get the id of the todo.
	    * @return id for the todo
	    */
	public Long getId() {
	   		return id;
	    }
	
	
	public Todo(String name, String description, Date targetDate, boolean isDone) {
		this.name = name;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}



	public void setName( String name) {
		 this.name = name;
	}
	
	public String getName() {
		return this.name;
	}

	
	public String getDescription() {
		return this.description;
	}

	
	public Date getTargetDate() {
		return this.targetDate;
	}


	public Boolean getIsDone() {
		return this.isDone;
	}



	public void setId(Long id) {
		this.id = id;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}


	public void setIsDone(Boolean isDone) {
		this.isDone = isDone;
	}

}
