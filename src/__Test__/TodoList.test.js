import TodoList from '../TodoList'
import React from 'react'
import { render} from '@testing-library/react'


describe(' test TodoList', () => {
  it('renders  ToDoList component', () => {
    const { getByText} = render(<TodoList />)
    expect(getByText('To do list')).toBeTruthy()
  })

})