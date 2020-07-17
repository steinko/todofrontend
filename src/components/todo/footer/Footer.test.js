import  Footer './Footer'
import { render} from '@testing-library/react'
import React from 'react'

it('should exsist a footer components', async  () => {
	   let {getByText}  =  render(<Footer/>)
     await  expect(getByText).not.toBeNull()
  })