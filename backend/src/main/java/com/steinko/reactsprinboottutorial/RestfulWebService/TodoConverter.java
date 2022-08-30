package com.steinko.reactsprinboottutorial.RestfulWebService;

import java.util.List;
import java.util.ArrayList;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class TodoConverter  {
	
	private ModelMapper  modelmapper = new ModelMapper();

	public  Todo convertToEntity(TodoDto dto) {
		
		Todo todo = modelmapper.map(dto, Todo.class);
		return todo;
		
	}

	public List<TodoDto> convertToDtos(List<Todo> todos) {
		
	    List<TodoDto> result = new ArrayList<TodoDto>();
	    
		for (Todo todo: todos) {
			
		     TodoDto dto = modelmapper.map(todo, TodoDto.class);
		     result.add(dto);
		     
		} 
		
		return result;
	}
	
	
	public TodoDto convertToDto(Todo todo) {
		return modelmapper.map(todo, TodoDto.class);
	}

}
