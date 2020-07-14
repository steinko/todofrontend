package org.steinko.springbootreact;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.MediaType;
import org.springframework.http.HttpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

import org.springframework.beans.factory.annotation.Value;
import org.junit.jupiter.api.Test;
import org.json.JSONException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import com.steinko.springbootreact.WebServer;
import org.springframework.boot.web.server.LocalServerPort;


@ExtendWith(SpringExtension.class)
@SpringBootTest(classes=WebServer.class, webEnvironment=WebEnvironment.RANDOM_PORT)
public class BackEndControllerIT {

	@Autowired
	private TestRestTemplate restTemplate;
	
	
    private String url = "/serverUrl";
	
	
	@Test
    public void shouldContainHtml() {
		RestTemplate restTemplate = new RestTemplate();
		
		ResponseEntity<String> response
		  = restTemplate.getForEntity(url, String.class);
		assertEquals(response.getStatusCode(), HttpStatus.OK);
	
      ObjectMapper mapper = new ObjectMapper();
      JsonNode root = mapper.readTree(response.getBody());
      JsonNode url = root.path("url");
      assertEquals(url.asText(), "http://localhost:8080");
      
    }
	
}
