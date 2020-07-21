import  Footer from './Footer'
import { render} from '@testing-library/react'
import React from 'react'

it('should exsist a footer components',  () => {
	   let {getByText}  =  render(<Footer/>)
       expect(getByText).not.toBeNull()
  })