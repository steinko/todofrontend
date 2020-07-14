package com.steinko.springbootreact;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Component
@Profile("dev")
public class DevBackEndConfiguration implements BackEndConfiguration { 
	private static final Logger LOGGER = LoggerFactory.getLogger(BackEndConfiguration.class);
	private String url;
	
	@Bean
	public BackEnd backEnd()  {
		url = "http://localhost:8080";
		LOGGER.info(url);
		return new BackEnd(url,"dev");
	}
}