import React from 'react'
import { Given,When ,Then } from 'cucumber';
import { render, fireEvent} from '@testing-library/react'
import AppTest from './AppTest'
 


    	Given('I am currently logged out', () => {
			
		    let {queryByText} =  render(<AppTest />)
		    let loginLink = queryByText('Login')
		    expect(loginLink).not.toBeNull()
		    fireEvent.click(loginLink)
    	});


    	Given('I enter password dummy', () => {

           const { queryByLabelText } = render(<AppTest />);
		   fireEvent.change( queryByLabelText('Password:'), { target: { value: 'dummy' } })
    	});

    	When('I activate Login', () => {

          const { queryByTestId } = render(<AppTest />);
		  fireEvent.click(queryByTestId('Login'))
		  
    	});

    	Then('I am loggedin', () => {

             const { queryByText } = render(<AppTest />);
			 expect(queryByText('Welcome!')).not.toBeNull()
			 fireEvent.click(queryByText('Logout'))

    	});
  


    	Given('I enter user name stein', () => {

    	});

    

    	Then(/^a message (.*)$/, (arg0) => {

    	});
 