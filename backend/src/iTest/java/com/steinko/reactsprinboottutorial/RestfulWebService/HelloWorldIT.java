package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//import org.springframework.test.web.servlet.MVCResult;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(HelloWorldController.class)
public class HelloWorldIT {
	
	@Autowired
    private MockMvc mvc;
	
	
	  
	
	   @Test
	    public void shouldReciveHelloWorld() throws Exception {
		 this.mvc.perform(get("/hello-world"))
		 .andExpect(status().isOk())
		 .andExpect(content().contentType("text/plain; charset=UTF-8"))
         .andExpect(content().string(containsString("Hello World")));
	    }
	   
	   @Test
	    public void shouldReciveHelloWorldBean() throws Exception {
		  
		  this.mvc.perform(get("/hello-world-bean"))
		 .andExpect(content().contentType("application/json"))
		 .andExpect(status().isOk());
		  

	   }
	   
	   @Test
	    public void shouldReciveHelloWorldStein() throws Exception {
		 this.mvc.perform(get("/hello-world/path-variabel/{name}", "Stein"))
		 .andExpect(status().isOk())
		 .andExpect(content().contentType("application/json"));
        //.andExpect(content().string(containsString("Hello World, Stein" )));
	    }

}
