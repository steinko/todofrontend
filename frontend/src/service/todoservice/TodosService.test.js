import TodosService from './TodosService'

beforeEach (() => { 
	fetch.resetMocks()
})




xit('should exsists todos', async () => { 
	fetch.mockResponseOnce(JSON.stringify([{"id":0,"username":"Stein","description":"Fix mutter","targetDate":"01-01-2020 12:00:00","isDone":false},
				                 {"id":1,"username":"Stein","description":"Fix kajakk","targetDate":"01-01-2020 12:00:00","isDone":false}]
	                            ))
	
	let todos  =  await TodosService.getTodos("Stein");
	expect(todos).not.toBeNull()
	expect(todos[0].description).toBe("Fix mutter")
	expect(todos[1].description).toBe("Fix kajakk")
} )

xit('should delete a todo', async () => { 
	
    fetch.mockResponseOnce(JSON.stringify(
			 [{"id":0,"username":"Stein","description":"Fix mutter","targetDate":"01-01-2020 12:00:00","isDone":false }] 
	      ))
	
	let todos  =  await TodosService.deleteTodo("Stein","1");
	expect(todos[0].description).toBe("Fix mutter")
	expect(todos[1]).toBeUndefined()

})





