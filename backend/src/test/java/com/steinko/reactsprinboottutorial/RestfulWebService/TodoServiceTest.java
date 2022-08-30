package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import com.steinko.reactsprinboottutorial.DateFactory;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willReturn;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class TodoServiceTest {
	
	@InjectMocks
	private TodoService service;
	
	@Mock
	private TodoRepository repository;
	
	
	
	@Test
	void ShouldExist() {
		assertNotNull (service);
	}
	

	@Test
	void shouldretunTodos() {
		
		Date date =DateFactory.generetDate("01-10-2001");
		List<Todo> todos = new ArrayList<Todo>();
		todos.add(new Todo("Stein", "Fix Mutter",date,false));
		todos.add(new Todo("Stein", "Fix Kjakk",date,false));
		given(repository.findByName("stein"))
		  .willReturn(todos);
	 	
		Iterable<Todo>result = service.getTodos("stein"); 
		Iterable<Todo> expected = todos;
		assertIterableEquals​(expected,result);     
	}
	
	@Test
	void shouldDeleteTodo() {
		service.deleteTodo("stein", 1L);     
	}
	
	@Test
	void shoulCreateTodo() {
		Date date = DateFactory.generetDate("01-01-2020 12:00:00");	
		Todo todo = new Todo("Stein","Fix Kjakk", date,false);
		service.createTodo(todo);
		
	}
	
}
