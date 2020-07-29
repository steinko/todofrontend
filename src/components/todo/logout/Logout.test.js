import {render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Logout from './Logout'


it('should exsist a  logout component', () => {
	   let {getByText}  =  render(<Logout/>)
     expect(getByText).not.toBeNull()
  })
