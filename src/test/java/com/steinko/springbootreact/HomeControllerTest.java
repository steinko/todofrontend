package com.steinko.springbootreact;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(HomeController.class)
public class HomeControllerTest {
	
	@Autowired
	private HomeController controller;
	
	@Autowired
	private MockMvc mockMvc;
	
	

    @Test
    public void contextLoads() throws Exception {
		assertNotNull(controller);
		
    }
    
    @Test
    public void shouldReturnLoginPage() throws Exception {
    	RequestBuilder request =  MockMvcRequestBuilders.get("/")
           .accept(MediaType.TEXT_HTML);
    	
    	MvcResult result = mockMvc.perform(request)
    			.andExpect(status().isOk()).andReturn();

    }
    

}

