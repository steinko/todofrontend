package com.steinko.reactsprinboottutorial.RestfulWebService;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.steinko.reactsprinboottutorial.DateFactory;
import com.fasterxml.jackson.core.JsonProcessingException;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class TodoTestData {
	private List<Todo> todos;
	private String todosjson;
	private static final Logger logger = LoggerFactory.getLogger(TodoTestData.class);
	
	TodoTestData () {
	
	   Date date = DateFactory.generetDate("01-01-2020");
	   todos = new ArrayList<Todo>();
	   todos.add(new Todo( "Stein", "Fix mutter", date, false));
	   todos.add(new Todo( "Stein", "Fix kajakk", date, false));
			  
	  }

	public List<Todo> getTodos() {
		return todos;
	}

	public String getTodosJson() {
		return todosjson;
	}

}
