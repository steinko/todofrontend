package com.steinko.reactsprinboottutorial.RestfulWebService;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;

import com.steinko.reactsprinboottutorial.DateFactory;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;


public class TodoConverterTest {
	
	@Test
	void shouldExist() {
		TodoConverter converter = new TodoConverter();
		assertNotNull(converter);
	}
	
	@Test
	void shouldConvertToEntity() {
		Date date = DateFactory.generetDate("01-01-2020 12:00:00");
		TodoDto dto = new TodoDto(1L,"Stein", "Learn Kubernetes", date,false);
		TodoConverter converter = new  TodoConverter();
		Todo todo = converter.convertToEntity(dto);
		Todo expected = new Todo("Stein", "Learn Kubernetes", date,false);
		assertEquals(todo.getName(),expected.getName());
		assertEquals(todo.getDescription(),expected.getDescription());
		assertEquals(todo.getTargetDate(),expected.getTargetDate());
		assertEquals(todo.getIsDone(),expected.getIsDone());
	}
	
	@Disabled
	@Test 
	void shouldDeliverDtos() {
		
       List<Todo>  todos = new ArrayList<Todo>();
       Date date = DateFactory.generetDate("01-01-2020 12:00:00");
       todos.add(new Todo("Stein", "Learn Javascript", date, true));
       todos.add(new Todo("Stein", "Learn Groovy", date, false));
       TodoConverter converter = new  TodoConverter();
	   Iterable<TodoDto> dtos = converter.convertToDtos(todos);
	   List<TodoDto> result = new ArrayList<TodoDto>();
	   result.add(new TodoDto(1L,"Stein", "Learn Javascript", date, true));
	   result.add(new TodoDto(2L,"Stein", "Learn Groovy", date, false));
	   Iterable<TodoDto> expected = result;
	   assertIterableEquals​(expected,dtos);
			   
		
	}
	
	
	@Test
	void shouldDeliverDdo() {
		   Date date = DateFactory.generetDate("01-01-2020 12:00:00");
	       Todo todo = new Todo("Stein", "Learn Javascript", date, true);
	       TodoConverter converter = new  TodoConverter();
		   TodoDto dto = converter.convertToDto(todo);
		   TodoDto expected = new TodoDto(1L,"Stein", "Learn Javascript", date, true);
		   assertEquals(dto.getName(),expected.getName());
			assertEquals(dto.getDescription(),expected.getDescription());
			assertEquals(dto.getTargetDate(),expected.getTargetDate());
			assertEquals(dto.getIsDone(),expected.getIsDone());
	}
		
}

