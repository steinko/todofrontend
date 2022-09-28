import TodoList from './TodoList'
import React from 'react'
import { render} from '@testing-library/react'




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