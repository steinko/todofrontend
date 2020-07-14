import Todo from '../Todo'

it ('should exist', () => {
	const todo = new Todo('1','stein','Fix mutter', '2020-01-01:01.01',false)
	expect(todo.getId()).toBe('1')
	expect(todo.getUserName()).toBe('stein')
	//expect(todo.getDecription()).toBe('Fix mutter')
	expect(todo.getTargetDate()).toBe('2020-01-01:01.01')
	expect(todo.getDone()).toBeFalsy()
})