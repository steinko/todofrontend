package com.steinko.reactsprinboottutorial.RestfulWebService;

import static org.springframework.test.context.support.TestPropertySourceUtils.addInlinedPropertiesToEnvironment;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;


import org.springframework.boot.web.server.LocalServerPort;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.springframework.http.HttpStatus.OK;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.context.WebApplicationContext;
import com.steinko.reactsprinboottutorial.DateFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.restassured.module.mockmvc.response.MockMvcResponse;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



import com.steinko.reactsprinboottutorial.RestfulWebService.TodoTestData;

import org.springframework.transaction.annotation.Transactional;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)


public class TodoControllerIT {
	 private static final Logger logger = LoggerFactory.getLogger(TodoControllerIT.class);
	 private TodoTestData testData;
	 private TodoControllerAPITest api = new TodoControllerAPITest();
     
	 @LocalServerPort
	 private  int localServerPort;
	 
	 @Autowired
	 private WebApplicationContext webApplicationContext;
	 
	 
	 @Test
	 public void shoulReturnTodos() throws JsonProcessingException {
	    	  	
		    logger.info("Before Get Todos");
		    testData = new TodoTestData();
			List<Todo> todos = testData.getTodos();
			ObjectMapper objectMapper = new ObjectMapper();
			String json = objectMapper.writeValueAsString(todos);
	   	    String createUrl =  "http://localhost:" + localServerPort + "/user/stein/todo";	
	   	    List<Long> ids = new ArrayList<>();
	   	    
	   	     for (Todo todo : todos) {
	   	    	 Long id = api.createTodo(todo,createUrl,webApplicationContext);
	   	    	 ids.add(id);
	         }
	   	     
	   	    String getUrl =  "http://localhost:" + localServerPort + "/user/stein/todos";	
	   	    api.getTodos(todos, getUrl, webApplicationContext);
	         
	         for(Long id: ids) {
	        	 String deletUrl = "http://localhost:" + localServerPort +"/user/stein/todo/" + id.toString();
	        	 api.delete(deletUrl,webApplicationContext);	 
	         }  
	     }

	 
	  

     @Test
     public void shouldCreateTodo()  {
    	 
    	 Date date = DateFactory.generetDate("01-01-2020 12:00:00");	
		 Todo todo = new Todo("Stein","Fix kjakk",date,false);
    	 String creatUrl =  "http://localhost:" + localServerPort + "/user/stein/todo";;	
    	 Long id = api.createTodo(todo, creatUrl,webApplicationContext);
    	 String deletUrl = "http://localhost:" + localServerPort +"/user/stein/todo/" + id.toString();
    	 api.delete(deletUrl,webApplicationContext);
     
     }
     
  
     



	


}
