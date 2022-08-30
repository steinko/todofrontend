package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.http.HttpStatus.OK;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;

import io.restassured.module.mockmvc.response.MockMvcResponse;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TodoControllerAPITest {
	
	public void delete(String deletUrl,WebApplicationContext webApplicationContext) {
		given().
           contentType("application/json").
           webAppContextSetup(webApplicationContext)
        .when()
          .delete(deletUrl)
       .then()
         .log().ifValidationFails()
         .statusCode(OK.value());
	}
	
	public Long createTodo(Todo todo, String creatUrl,WebApplicationContext webApplicationContext ) {
		MockMvcResponse reponse =
    	 given().
          contentType("application/json").
          webAppContextSetup(webApplicationContext).
          body(todo)
        .when()
           .post(creatUrl)
        .then()
          .log().ifValidationFails()
          .contentType("application/json")
          .statusCode(OK.value())
          .extract().
	        response();
    	 Long responsId = reponse.body().as(Long.class);
    	 return  responsId;
	}
	
	public void getTodos(List<Todo> todos, String getUrl, WebApplicationContext webApplicationContext) {
		List<Todo> result = new ArrayList<>();     
		result = given().
		   webAppContextSetup(webApplicationContext)
		.when()
		  .get(getUrl)
		.then()
		   .log().ifValidationFails()
		   .statusCode(OK.value())
		   .contentType("application/json")
		   . extract().
		    body().
		    jsonPath().
		    getList(".", Todo.class);
		
		 assertEquals(result.get(0).getDescription(),todos.get(0).getDescription());
		 assertEquals(result.get(1).getDescription(),todos.get(1).getDescription());
	}

}
