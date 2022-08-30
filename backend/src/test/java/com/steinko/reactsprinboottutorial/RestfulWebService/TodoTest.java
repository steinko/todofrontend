package com.steinko.reactsprinboottutorial.RestfulWebService;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Date;
import com.steinko.reactsprinboottutorial.DateFactory;

public class TodoTest {
	
	@Test
	void shouldExcists() { 
		Todo todo = new Todo("", null, null, false);
		assertNotNull(todo);
	}
	
	@Test 
	void shouldGetAUserName() { 
		String name  = "Stein Korsveien";
		Todo todo = new Todo(name,null,null,false);
		assertEquals(todo.getName(),name);
	}
	
	@Test 
	void shouldGetADecripton() { 
		
		String description = "Learn Java";
		Todo todo = new Todo("",description,null,false);
		assertEquals(todo.getDescription(),description);
	}
	
	
	@Test 
	void shouldGetTheTargetDate() { 
		
		Date targetDate  = DateFactory.generetDate("01-10-2001");
		Todo todo = new Todo("","",targetDate,false);
		assertEquals(todo.getTargetDate(),targetDate);
		
	}
	
	@Test 
	void shouldGetisDone() { 
		
		Boolean isDone = true;
		Todo todo = new Todo("","",null,isDone);
		assertEquals(todo.getIsDone(),isDone);
		
	}


}
