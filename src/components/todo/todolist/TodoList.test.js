import TodoList from './TodoList'
import React from 'react'
import { render} from '@testing-library/react'

jest.mock('../../../service/todoservice/TodosService.js', () => {

    return {getTodos: jest.fn().mockImplementation(() => JSON.parse( JSON.stringify(
              [{ "id":0,"username":"Stein","description":"Fix mutter","targetDate":"01-01-2020 12:00:00","isDone":false },
               { "id":1,"username":"Stein","description":"Fix kajakk","targetDate":"01-01-2020 12:00:00","isDone":false }]          
    )))}
});


describe(' test TodoList', () => {
  it('should exist a  ToDoList component', () => {
    const { getByText} = render(<TodoList />)
    expect(getByText('List Todos')).toBeTruthy()
  })

  it('should dispaly description todo detials' , () => {
      const { getByText} = render(<TodoList />)
      expect(getByText('Description')).toBeTruthy()
      expect(getByText('Target Date')).toBeTruthy()
      expect(getByText('IsCompleted?')).toBeTruthy()
  })

  xit('should display data todo detials' , () => {
    const {findByText} = render(<TodoList />)

     expect(findByText('Fix mutter')).toBeTruthy()
     expect(findByText('Fix kjakk')).toBeTruthy()
  })
})