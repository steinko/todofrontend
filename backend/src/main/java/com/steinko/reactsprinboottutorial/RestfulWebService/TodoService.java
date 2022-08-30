package com.steinko.reactsprinboottutorial.RestfulWebService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import javax.validation.Validation;
import javax.validation.Validator;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@Service
@Transactional
public class TodoService  {
	
	private static final Logger logger = LoggerFactory.getLogger(TodoService.class);
	
    @Autowired
	private TodoRepository repository;
    
    
	
	
	public List<Todo> getTodos(String name) { 
	     logger.info(name);
		 List<Todo> result = repository.findByName(name);
		 for(Todo todo: result) {
		      logger.info(todo.getName());
		      logger.info(todo.getDescription());
		 }
		 return result;
	}
	

	public void deleteTodo(String name, Long id) {
		
		repository.deleteById(id);
	}


	public Long createTodo(Todo todo) {
		
		validateEntity(todo);
		repository.save(todo);
		return todo.getId();
		
	}
	
	
	private void validateEntity(Todo todo) {
		
		List<String> errorMessage = new ArrayList<>();
		Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
		Set<ConstraintViolation<Todo>> constraintViolations = validator.validate(todo);

		for (ConstraintViolation<Todo> constraintViolation : constraintViolations) {
			errorMessage.add(constraintViolation.getMessage());
		}

		if (errorMessage.size() > 0) {
			throw new ConstraintViolationException(constraintViolations);
		}

	}
	

}
