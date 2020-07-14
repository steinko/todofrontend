package com.steinko.springbootreact;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BackEndTest { 
	
	@Test
	void shouldExist(){ 
		assertNotNull(new BackEnd("cool","dev"));
	}
	
	@Test
	void shouldDeliverUrl(){ 
		BackEnd backend = new BackEnd("cool","dev");
		assertEquals(backend.getUrl(), "cool");
	}

	
}