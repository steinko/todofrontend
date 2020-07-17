import Header from './Header'
import { render} from '@testing-library/react'
import React from 'react'

it('should exsist a  header components', async  () => {
	   let {getByText}  =  render(<Header/>)
     await  expect(getByText).not.toBeNull()
  })