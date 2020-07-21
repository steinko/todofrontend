import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import LogOut from './LogOut'


it('should exsist a  logout component', () => {
	   let {getByText}  =  render(<LogOut/>)
     expect(getByText).not.toBeNull()
  })
