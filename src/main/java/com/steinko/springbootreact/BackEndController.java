package com.steinko.springbootreact;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Controller
public class BackEndController {
	
	private static final Logger logger = LoggerFactory.getLogger(BackEndController.class);
	
	@RequestMapping("/serverUrl")
	  public BackEnd serverUrl() { 
		return new BackEnd("http://loacalhost:8080","dev");
	}
}
