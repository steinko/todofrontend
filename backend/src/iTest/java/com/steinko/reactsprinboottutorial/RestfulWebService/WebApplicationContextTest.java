package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.assertFalse;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Map;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WebApplicationContextTest {
	
	 @Autowired
	  private WebApplicationContext webApplicationContext;
	
	@Test
	void shouldLoadToDoService() {
	   Map<String,TodoService> todoServiceBeans	= webApplicationContext.getBeansOfType(TodoService.class);
	   assertFalse(todoServiceBeans.isEmpty( ));
		
	}
	
	@Test
	void shouldLoadToDoControlle() {
	   Map<String,TodoController> todoControllerBeans	= webApplicationContext.getBeansOfType(TodoController.class);
	   assertFalse(todoControllerBeans.isEmpty( ));
		
	}

}
