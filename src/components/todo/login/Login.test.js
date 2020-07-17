import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import  Login  from './Login'
import React from 'react'


describe(' Unit tests of  Login component', () => {
  
  

  it('should exsist a  login components', async  () => {
	   let {getByLabelText}  =  render(<Login/>)
     await  expect(getByLabelText).not.toBeNull()
  })

  it('should exist a user name', async () => {
     let {getByLabelText} =  render(<Login/>)
    expect(await getByLabelText('User Name:').value).toBe('in28minutes')
  })

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
   let { queryByLabelText,getByRole, queryByText} = render(<Login/>)
   let entry = 'cool password'
   let passWordField = queryByLabelText('Password:')
   fireEvent.change(passWordField, { target: { value:  entry } })
   fireEvent.click(getByRole('button'))
   expect(queryByText('Invalid Credentials')).not.toBeNull()
  })

  



})