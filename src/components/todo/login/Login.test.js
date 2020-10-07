import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import  Login  from './Login'
import React from 'react'


describe(' Unit tests of  Login component', () => {
  
  

  it('should exsist a  login components',  () => {
	   let {getByLabelText}  =  render(<Login/>)
      expect(getByLabelText).not.toBeNull()
  })

  // it('should exist a user name', () => {
  //   let {getByLabelText} =  render(<Login/>)
  //  expect(geByLabelText('User Name:').value).toBe('in28minutes')
  // })

  it('should exist a password', async () => {
     let {getByLabelText} =  render(<Login/>)
    expect(await getByLabelText('Password:').name).toBe('password')
  })


  it('should exist a button', async () => {
    let {getByRole} =  render(<Login/>)
   await expect(getByRole('button')).toHaveTextContent('Login')
  })

  it ('shold display entered username', () => { 
   let { queryByLabelText} = render(<Login/>)
   let entry = 'cool username'
   let userNameField = queryByLabelText('User Name:')
   fireEvent.change(userNameField, { target: { value:  entry } })
   expect(userNameField.value).toBe(entry)
   
})


it ('shold display entered password', () => { 
   let { queryByLabelText} = render(<Login/>)
   let entry = 'cool passworf'
   let passWordField = queryByLabelText('Password:')
   fireEvent.change(passWordField, { target: { value:  entry } })
   expect(passWordField.value).toBe(entry)
   
})

it('should failure login ', () => {
   let { queryByLabelText,getByTestId, queryByText} = render(<Login/>)
   let entry = 'cool password'
   let passWordField = queryByLabelText('Password:')
   fireEvent.change(passWordField, { target: { value:  entry } })
   fireEvent.click(getByTestId("Login"))
   expect(queryByText('Invalid Credentials')).not.toBeNull()
   expect(sessionStorage.getItem('authenticatedUser')).toBeNull()
  })

  it('should sucessfuly logged in  ', () => {
   let { queryByLabelText,getByTestId,getByRole} = render(<Login/>)
   let password = 'dummy'
   let passWordField = queryByLabelText('Password:')
   fireEvent.change(passWordField, { target: { value:  password } })
   fireEvent.click(getByTestId("Login"))
   expect(sessionStorage.getItem('authenticatedUser')).toBe('in28minutes')

  })

  



})