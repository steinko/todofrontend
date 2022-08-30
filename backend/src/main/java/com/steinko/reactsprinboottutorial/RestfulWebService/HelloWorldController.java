package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "*" )
@RestController
public class HelloWorldController{
	private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);
	HelloWorldController() {}
	
	@RequestMapping(method= RequestMethod.GET,path="/hello-world")
	public String helloWorld() {
		logger.info("Hello World");
		return "Hello World";
	}
	
	
	@RequestMapping(method= RequestMethod.GET,path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		logger.info("Hello World Bean");
		return  new HelloWorldBean("Hello World Bean");
	}
	
	@RequestMapping(method= RequestMethod.GET,path="/hello-world/path-variabel/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable(name = "name") String sname) {
		logger.info("Hello World Path Variable");
		logger.info(sname);
		return  new HelloWorldBean(String.format("Hello World , %s", sname));
	}
	

}
