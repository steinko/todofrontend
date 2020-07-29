export default class TodosService {

	 static async getTodos(userName){ 
	    let response = await fetch('http://localhost:8080/users/stein/todos')
        let json = await response.json()
        return json;
	}

	static async deleteTodo(username,id){
		let response = await fetch('http://localhost:8080/users/stein/todo/1')
		let json = await response.json()
        return json;
	}

 }
