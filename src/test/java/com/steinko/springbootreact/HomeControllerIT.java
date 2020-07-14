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
public class HomeControllerIT {

	@Autowired
	private TestRestTemplate restTemplate;
	
	
    private String url = "/";
	
	
	@Test
    public void shouldContainHtml() {
        final HttpHeaders httpHeaders = restTemplate.headForHeaders(url);
        assertTrue(httpHeaders.getContentType()
            .includes(MediaType.TEXT_HTML));
    }
	
}
