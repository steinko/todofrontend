package com.steinko.springbootreact;



import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.boot.test.context.SpringBootTest;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes=WebServer.class, webEnvironment=WebEnvironment.RANDOM_PORT)
@ActiveProfiles("dev")
class BackendConfigurationTest { 
	
	@Autowired
	BackEndConfiguration backendConfiguration;
	
   @Test
   void shouldDeliverDevUrl() {
	   BackEnd backEnd = backendConfiguration.backEnd();
		assertEquals(backEnd.getUrl(), "http://localhost:8080");
	}
   
	
	@Test
	void shouldExist() { 
	assertNotNull(backendConfiguration);
		
	}
		
}
