package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.http.ResponseEntity;
import static org.springframework.http.HttpStatus.OK;
import com.fasterxml.jackson.core.JsonProcessingException;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
public class HelloWorldControllerIT {

    @Autowired
	private TestRestTemplate restTemplate;
	
	
	@Test
    public void shouldConnect() {
         ResponseEntity<String> response = restTemplate.
         getForEntity("/hello-world", String.class);
         assertEquals(response.getStatusCode(),OK);
    }
	
	

}
