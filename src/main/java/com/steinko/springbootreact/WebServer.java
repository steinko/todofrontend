package com.steinko.springbootreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gcp.core.GcpEnvironment;
import org.springframework.cloud.gcp.core.GcpEnvironmentProvider;


@SpringBootApplication
public class WebServer {
	

    public static void main(String[] args) {
    			      SpringApplication.run(WebServer.class, args);
    }
}
