import TodoList from './TodoList'
import React from 'react'
import { render} from '@testing-library/react'


describe(' test TodoList', () => {
  it('should exist a  ToDoList component', () => {
    const { getByText} = render(<TodoList />)
    expect(getByText('To do list')).toBeTruthy()
  })

  it('should dispaly description todo detials' , () => {
    const { getByText} = render(<TodoList />)
     expect(getByText('id')).toBeTruthy()
     expect(getByText('description')).toBeTruthy()
     expect(getByText('done')).toBeTruthy()
   })

   it('should display data todo detials' , () => {

    const {getByText} = render(<TodoList />)
     expect(getByText('1')).toBeTruthy()
     expect(getByText('Learn React')).toBeTruthy()
     expect(getByText('2')).toBeTruthy()
     expect(getByText('Learn to dance')).toBeTruthy()
   })
})