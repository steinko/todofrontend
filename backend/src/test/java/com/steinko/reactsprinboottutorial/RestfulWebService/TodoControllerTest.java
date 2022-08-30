package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import io.restassured.module.mockmvc.response.MockMvcResponse;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static io.restassured.http.ContentType.JSON;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.CREATED;

import org.mockito.Mockito;
import static org.mockito.Mockito.when;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.any;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.steinko.reactsprinboottutorial.DateFactory;

import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

@ExtendWith(MockitoExtension.class)
public class TodoControllerTest {
	  private static final Logger logger = LoggerFactory.getLogger(TodoControllerTest.class);
	 
	  	   
	  @Test
	  void shouldExist() {
		  TodoService service = Mockito.mock(TodoService.class);
		  assertNotNull(new TodoController(service));
	  }
	  
	  
	  @Test
	    public void shouldReciveTodos()  throws JsonProcessingException {
		  String url = "/user/stein/todos";
		  	
		  TodoTestData testData = new TodoTestData();
		  List<Todo> todos = testData.getTodos();
		  ObjectMapper objectMapper = new ObjectMapper();
		  String json = objectMapper.writeValueAsString(todos);
		  
		  TodoService service = Mockito.mock(TodoService.class);
		  when(service.getTodos(anyString())).thenReturn(todos);
		  TodoController controller = new TodoController(service);
			   
		   given().
		     standaloneSetup(controller)
          .when()
            .get(url)
          .then()
            .log().ifValidationFails()
            .statusCode(OK.value())
            .contentType(JSON)
            .body(is(equalTo(json)));
        } 
	  
	  @Test
	 
	    public void shouldDeleteTodo()  {
		  
		    TodoService service = Mockito.mock(TodoService.class);
		    TodoController controller =  new TodoController(service);
		    
		    String url = "/user/stein/todo/1";
		  
		    given().
		        standaloneSetup(controller)
            .when()
                .delete(url)
            .then()
                .log().ifValidationFails()
                .statusCode(OK.value());
		    
      } 
	  
	  @Test 
	  void shouldCreateTodo()  {
		  
		  Date date = DateFactory.generetDate("01-01-2020 12:00:00");	
		  Todo todo = new Todo("stein","Fix kjakk",date,false);
		  TodoService service = Mockito.mock(TodoService.class);
		  Long id = 1L;
		  when(service.createTodo(any(Todo.class))).thenReturn(id);
		  TodoController controller = new TodoController(service);
		  
		  MockMvcResponse reponse =
			given().
		    standaloneSetup(controller).
		    contentType(JSON).
		    body(todo).
	      when().
	         post("/user/stein/todo").
	      then().
	         log().ifValidationFails().
	         statusCode(OK.value()).
	         contentType(JSON).
	         extract().
		        response();
		  
		  Long responsId = reponse.body().as(Long.class);
		  assertEquals(id, responsId);
	   }
}
