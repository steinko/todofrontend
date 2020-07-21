import Header from './Header'
import { render, fireEvent} from '@testing-library/react'
import React from 'react'

xit('should exsist a  header components', () => {
	   let {getByText}  =  render(<Header/>)
     expect(getByText).not.toBeNull()
  })

  xit('should sucessfuly logged out  ', () => {
   sessionStorage.setItem('authenticatedUser', "user")
   let { queryByTestId} = render(<Header/>)
   fireEvent.click( queryByTestId('LogOut'))
   expect(sessionStorage.getItem('authenticatedUser')).toBeNull()

  })